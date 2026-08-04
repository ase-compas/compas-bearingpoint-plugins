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
import {
  detectHostEdition,
  getBuiltInPluginsFromHost,
  type HostEdition,
  type OpenScdHost,
} from '../dom/open-scd-helpers';
// Inline as data-URL so icons ship inside index.js (hub loaded from another origin).
import openscdIcon from '../assets/openscd.png?inline';
import compasIcon from '../assets/compas.png?inline';

/** @deprecated use HostEdition — kept as alias for call sites */
export type BuiltinHostId = HostEdition;

/** Raw entry shape from host getBuiltInPlugins() / officialPlugins. */
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
  host: HostEdition;
}

function createBuiltinProvider(host: HostEdition): Provider {
  if (host === 'compas') {
    return {
      name: 'CoMPAS Plugins',
      icon: compasIcon,
      description: 'Built-in plugins of the CoMPAS OpenSCD host.',
      source: 'builtin',
    };
  }
  return {
    name: 'Open-SCD Plugins',
    icon: openscdIcon,
    description: 'Built-in plugins of the OpenSCD host.',
    source: 'builtin',
  };
}

function isPluginKind(value: unknown): value is PluginKind {
  return (
    typeof value === 'string' &&
    (PLUGIN_KINDS as readonly string[]).includes(value)
  );
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
 * Loads the single built-in provider from the running OpenSCD/CoMPAS host.
 * Uses getBuiltInPlugins() — no plugins.js import or probe cache.
 */
export function loadBuiltinProviders(
  stored: StoredPlugin[],
  coreVersion: string,
  options?: {
    getHost?: () => OpenScdHost | null;
    detectEdition?: () => HostEdition | null;
  },
): BuiltinLoadResult[] {
  const getHost = options?.getHost;
  const edition =
    options?.detectEdition?.() ?? detectHostEdition();
  const rawList = getBuiltInPluginsFromHost(getHost);

  if (rawList.length === 0) {
    return [];
  }

  const host: HostEdition = edition ?? 'open-scd';
  const provider = createBuiltinProvider(host);
  const plugins: Plugin[] = [];

  for (const entry of rawList as OfficialPluginRaw[]) {
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

  if (plugins.length === 0) {
    return [];
  }

  return [{ provider, plugins, host }];
}
