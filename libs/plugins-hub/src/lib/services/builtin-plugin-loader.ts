import type { Provider } from '../types/provider';
import type {
  MenuPosition,
  Plugin,
  PluginKind,
  PluginManifestEntry,
} from '../types/plugin';
import {
  PLUGIN_KINDS,
  PluginKindIconMapping,
} from '../types/plugin';
import type { StoredPlugin } from '../types/stored-plugin';
import { buildPlugin } from '../store/plugin-store';

/** localStorage key for successful builtin probe results. */
export const BUILTIN_PROBE_CACHE_KEY = 'plugins-hub.builtin-probe';

export type BuiltinHostId = 'compas' | 'open-scd';

export interface BuiltinCachedProvider {
  host: BuiltinHostId;
  url: string;
}

/**
 * Cached result of a successful builtin-provider probe.
 * Written only when at least one provider loads; dual-dev stores all successes.
 */
export interface BuiltinProbeCache {
  ts: number;
  buildInProviders: BuiltinCachedProvider[];
}

/** Raw entry shape from Open-SCD / CoMPAS officialPlugins. */
export interface OfficialPluginRaw {
  name?: unknown;
  src?: unknown;
  kind?: unknown;
  icon?: unknown;
  requireDoc?: unknown;
  position?: unknown;
  activeByDefault?: unknown;
}

export interface BuiltinLoadResult {
  provider: Provider;
  plugins: Plugin[];
  host: BuiltinHostId;
  url: string;
}

interface BuiltinCandidate {
  host: BuiltinHostId;
  /**
   * Absolute URL to plugins.js on the **host page origin**
   * (not the plugin module origin — e.g. 8080 when hub is loaded from 4301).
   */
  url: string;
}

/**
 * Returns the app base path with a trailing slash and without a filename
 * (e.g. "/openscd/" from "/openscd" or "/openscd/").
 * Does not treat "index.html" specially — callers assume pathname is the base.
 */
export function getAppBasePath(pathname: string = location.pathname): string {
  if (!pathname || pathname === '/') {
    return '/';
  }
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return withSlash;
}

/**
 * Resolves a path or URL against the **host document origin** (`location.origin`).
 *
 * ES module `import('/path')` resolves against the *importing module* origin
 * (e.g. the hub on :4301). Built-in catalogues live on the host (e.g. :8080),
 * so we must always pin absolute import URLs to the page origin.
 *
 * Pathname of an absolute URL is kept (so a stale cache entry for :4301 still
 * remaps to the current host origin).
 */
export function resolveAgainstHostOrigin(
  pathOrUrl: string,
  origin: string = typeof location !== 'undefined'
    ? location.origin
    : 'http://localhost',
): string {
  try {
    const parsed = new URL(pathOrUrl, origin);
    return new URL(
      `${parsed.pathname}${parsed.search}${parsed.hash}`,
      origin,
    ).href;
  } catch {
    return pathOrUrl;
  }
}

/**
 * Builds probe candidates for host officialPlugins modules.
 * URLs are absolute and always target the host page origin.
 * Dedupes identical URLs.
 */
export function buildBuiltinCandidates(
  pathname: string = typeof location !== 'undefined' ? location.pathname : '/',
  origin: string = typeof location !== 'undefined'
    ? location.origin
    : 'http://localhost',
): BuiltinCandidate[] {
  const base = getAppBasePath(pathname);
  const paths: Array<{ host: BuiltinHostId; path: string }> = [
    { host: 'compas', path: '/public/js/plugins.js' },
    { host: 'open-scd', path: `${base}src/plugins.js` },
    { host: 'open-scd', path: '/openscd/src/plugins.js' },
  ];

  const seen = new Set<string>();
  const candidates: BuiltinCandidate[] = [];
  for (const { host, path } of paths) {
    const url = resolveAgainstHostOrigin(path, origin);
    if (seen.has(url)) continue;
    seen.add(url);
    candidates.push({ host, url });
  }
  return candidates;
}

export function readBuiltinProbeCache(): BuiltinProbeCache | null {
  try {
    const raw = localStorage.getItem(BUILTIN_PROBE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BuiltinProbeCache;
    if (
      !parsed ||
      typeof parsed.ts !== 'number' ||
      !Array.isArray(parsed.buildInProviders) ||
      parsed.buildInProviders.length === 0
    ) {
      return null;
    }
    const valid = parsed.buildInProviders.every(
      (p) =>
        p &&
        (p.host === 'compas' || p.host === 'open-scd') &&
        typeof p.url === 'string' &&
        p.url.length > 0,
    );
    if (!valid) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeBuiltinProbeCache(cache: BuiltinProbeCache): void {
  localStorage.setItem(BUILTIN_PROBE_CACHE_KEY, JSON.stringify(cache));
}

export function clearBuiltinProbeCache(): void {
  localStorage.removeItem(BUILTIN_PROBE_CACHE_KEY);
}

/**
 * Writes probe cache with all successful providers (initial discovery only).
 * Does nothing when results is empty — no cache write on total failure.
 */
export function writeBuiltinProbeCacheFromSuccesses(
  results: BuiltinCachedProvider[],
): void {
  if (results.length === 0) {
    return;
  }
  writeBuiltinProbeCache({
    ts: Date.now(),
    buildInProviders: results.map(({ host, url }) => ({ host, url })),
  });
}

function createBuiltinProvider(host: BuiltinHostId): Provider {
  if (host === 'compas') {
    return {
      prefix: 'CoMPAS',
      name: 'CoMPAS',
      icon: 'hub',
      description: 'Built-in plugins of the CoMPAS OpenSCD host.',
      source: 'builtin',
    };
  }
  return {
    prefix: 'OpenSCD',
    name: 'Open-SCD',
    icon: 'developer_board',
    description: 'Built-in plugins of the OpenSCD host.',
    source: 'builtin',
  };
}

function isPluginKind(value: unknown): value is PluginKind {
  return typeof value === 'string' && (PLUGIN_KINDS as readonly string[]).includes(value);
}

function isMenuPosition(value: unknown): value is MenuPosition {
  return value === 'top' || value === 'middle' || value === 'bottom';
}

/**
 * Maps a raw officialPlugins entry to a hub PluginManifestEntry.
 */
export function mapOfficialPluginToManifest(
  raw: OfficialPluginRaw,
  author: string,
): PluginManifestEntry | null {
  if (typeof raw.name !== 'string' || !raw.name) return null;
  if (typeof raw.src !== 'string' || !raw.src) return null;
  if (!isPluginKind(raw.kind)) return null;

  const kind = raw.kind;
  const icon =
    typeof raw.icon === 'string' && raw.icon
      ? raw.icon
      : PluginKindIconMapping[kind];

  return {
    name: raw.name,
    author,
    src: raw.src,
    kind,
    icon,
    description: `Built-in ${kind} plugin`,
    position: isMenuPosition(raw.position) ? raw.position : undefined,
  };
}

/**
 * Tries to dynamically import a host plugins.js module and read officialPlugins.
 * Injectable importFn for unit tests.
 */
export async function tryLoadOfficialPlugins(
  url: string,
  importFn: (specifier: string) => Promise<unknown> = (s) =>
    import(/* @vite-ignore */ s),
): Promise<OfficialPluginRaw[] | null> {
  try {
    const mod = (await importFn(url)) as { officialPlugins?: unknown };
    if (!mod || !Array.isArray(mod.officialPlugins)) {
      return null;
    }
    return mod.officialPlugins as OfficialPluginRaw[];
  } catch {
    return null;
  }
}

async function probeCandidates(
  candidates: BuiltinCandidate[],
  importFn?: (specifier: string) => Promise<unknown>,
): Promise<
  Array<{ host: BuiltinHostId; url: string; raw: OfficialPluginRaw[] }>
> {
  const settled = await Promise.all(
    candidates.map(async (c) => {
      const raw = await tryLoadOfficialPlugins(c.url, importFn);
      return { ...c, raw };
    }),
  );

  const successes: Array<{
    host: BuiltinHostId;
    url: string;
    raw: OfficialPluginRaw[];
  }> = [];

  // Deduplicate by host: first success wins.
  const byHost = new Map<BuiltinHostId, (typeof successes)[number]>();
  for (const item of settled) {
    if (!item.raw) continue;
    if (!byHost.has(item.host)) {
      byHost.set(item.host, {
        host: item.host,
        url: item.url,
        raw: item.raw,
      });
    }
  }
  return [...byHost.values()];
}

function toLoadResults(
  successes: Array<{
    host: BuiltinHostId;
    url: string;
    raw: OfficialPluginRaw[];
  }>,
  stored: StoredPlugin[],
  coreVersion: string,
): BuiltinLoadResult[] {
  // Stable display order: Open-SCD, then CoMPAS
  const hostOrder: BuiltinHostId[] = ['open-scd', 'compas'];
  const sorted = [...successes].sort(
    (a, b) => hostOrder.indexOf(a.host) - hostOrder.indexOf(b.host),
  );

  return sorted.map(({ host, url, raw }) => {
    const provider = createBuiltinProvider(host);
    const plugins: Plugin[] = [];
    for (const entry of raw) {
      const manifest = mapOfficialPluginToManifest(entry, provider.name);
      if (!manifest) continue;
      plugins.push(
        buildPlugin(manifest, provider, coreVersion, stored, {
          builtin: true,
          activeByDefault: entry.activeByDefault === true,
          requireDoc: entry.requireDoc === true,
        }),
      );
    }
    return { provider, plugins, host, url };
  });
}

/**
 * Probes host builtin plugin catalogues and returns one result per host.
 *
 * Cache behaviour:
 * - Empty cache: probe all candidates; write all successes (or write nothing if none).
 * - Cache hit: load only cached providers; clear cache if all fail.
 */
export async function loadBuiltinProviders(
  stored: StoredPlugin[],
  coreVersion: string,
  options?: {
    importFn?: (specifier: string) => Promise<unknown>;
    pathname?: string;
    /** Host page origin; defaults to location.origin (not the plugin module origin). */
    origin?: string;
  },
): Promise<BuiltinLoadResult[]> {
  const importFn = options?.importFn;
  const pathname =
    options?.pathname ??
    (typeof location !== 'undefined' ? location.pathname : '/');
  const origin =
    options?.origin ??
    (typeof location !== 'undefined' ? location.origin : 'http://localhost');
  const cache = readBuiltinProbeCache();

  if (!cache) {
    // Initial discovery: try every known candidate on the host origin.
    const successes = await probeCandidates(
      buildBuiltinCandidates(pathname, origin),
      importFn,
    );
    writeBuiltinProbeCacheFromSuccesses(
      successes.map(({ host, url }) => ({ host, url })),
    );
    return toLoadResults(successes, stored, coreVersion);
  }

  // Follow-up: only cached providers, remapped to the current host origin
  // (fixes stale entries that pointed at the plugin-dev origin).
  const successes = await probeCandidates(
    cache.buildInProviders.map(({ host, url }) => ({
      host,
      url: resolveAgainstHostOrigin(url, origin),
    })),
    importFn,
  );

  if (successes.length === 0) {
    clearBuiltinProbeCache();
  }

  return toLoadResults(successes, stored, coreVersion);
}
