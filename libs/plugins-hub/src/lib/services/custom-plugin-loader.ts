import type { Provider } from '../types/provider';
import type { Plugin, PluginKind, PluginManifestEntry } from '../types/plugin';
import {
  PLUGIN_KINDS,
  PluginKindIconMapping,
} from '../types/plugin';
import type { StoredPlugin } from '../types/stored-plugin';
import { buildPlugin } from '../store/plugin-store';
import { proxyUrl } from '../utils/proxy-url';

/** Fake provider for host plugins not listed by any remote/builtin catalogue. */
export const CUSTOM_PROVIDER: Provider = {
  prefix: 'Custom',
  name: 'Custom',
  icon: 'extension',
  description:
    'Manually configured plugins (not listed by a remote provider).',
};

/**
 * Collects all known plugin source URLs (raw + proxied) so stored entries
 * that match a catalogue plugin are not treated as custom.
 */
export function collectKnownPluginSrcs(plugins: Plugin[]): Set<string> {
  const known = new Set<string>();
  for (const p of plugins) {
    if (!p.src) continue;
    known.add(p.src);
    known.add(proxyUrl(p.src));
  }
  return known;
}

function isPluginKind(value: unknown): value is PluginKind {
  return (
    typeof value === 'string' &&
    (PLUGIN_KINDS as readonly string[]).includes(value)
  );
}

/**
 * Returns true when a stored plugin's src matches a known catalogue plugin.
 */
export function isKnownStoredSrc(
  stored: StoredPlugin,
  knownSrcs: Set<string>,
): boolean {
  if (!stored.src) return false;
  if (knownSrcs.has(stored.src)) return true;
  if (knownSrcs.has(proxyUrl(stored.src))) return true;
  return false;
}

/**
 * Builds Plugin records for stored plugins whose src is not covered by any
 * loaded builtin or remote provider catalogue.
 *
 * Description is the source URL only (product requirement).
 * Plugin id is the stored host name (for oscd-configure-plugin matching).
 */
export function buildCustomPluginsFromStored(
  stored: StoredPlugin[],
  knownSrcs: Set<string>,
  coreVersion: string,
): Plugin[] {
  const customs: Plugin[] = [];

  for (const s of stored) {
    if (isKnownStoredSrc(s, knownSrcs)) continue;
    if (typeof s.name !== 'string' || !s.name) continue;
    if (typeof s.src !== 'string' || !s.src) continue;
    if (!isPluginKind(s.kind)) continue;

    const kind = s.kind;
    const entry: PluginManifestEntry = {
      name: s.name,
      author: s.author ?? CUSTOM_PROVIDER.name,
      src: s.src,
      kind,
      icon:
        typeof s.icon === 'string' && s.icon
          ? s.icon
          : PluginKindIconMapping[kind],
      // Product: description is the source URL only
      description: s.src,
      position: s.position,
    };

    const plugin = buildPlugin(
      entry,
      CUSTOM_PROVIDER,
      coreVersion,
      stored,
      {
        activeByDefault: s.activeByDefault === true,
        requireDoc: s.requireDoc === true,
      },
    );

    customs.push({
      ...plugin,
      // Host registration key is the stored name (may already be namespaced)
      id: s.name,
      installationState: 'INSTALLED',
      activationState: s.active ? 'ACTIVE' : 'INACTIVE',
      compatible: true,
    });
  }

  return customs;
}
