import type { Provider } from '../types/provider';
import type { Plugin, PluginKind, PluginManifestEntry } from '../types/plugin';
import {
  PLUGIN_KINDS,
  PluginKindIconMapping,
} from '../types/plugin';
import type { StoredPlugin } from '../types/stored-plugin';
import { buildPlugin } from '../store/plugin-store';
import {
  hubPluginKey,
  pluginIdentityKey,
} from './plugin-loader';

/** Fake provider for host plugins not listed by any remote/builtin catalogue. */
export const CUSTOM_PROVIDER: Provider = {
  // no prefix — host registration uses plain stored plugin name
  name: 'Custom Plugins',
  icon: 'extension',
  description:
    'Manually configured plugins (not listed by a remote provider).',
};

/**
 * Collects known host identities (registration name + kind) so stored entries
 * that match a catalogue plugin are not treated as custom.
 *
 * @param plugins - Already-built catalogue plugins (remote + builtin).
 * @returns Set of {@link hubPluginKey} values.
 */
export function collectKnownPluginIdentities(plugins: Plugin[]): Set<string> {
  const known = new Set<string>();
  for (const p of plugins) {
    known.add(hubPluginKey(p));
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
 * Returns true when a stored plugin's name+kind matches a known catalogue plugin.
 *
 * @param stored - Host localStorage plugin entry.
 * @param knownIdentities - Set from {@link collectKnownPluginIdentities}.
 */
export function isKnownStoredPlugin(
  stored: StoredPlugin,
  knownIdentities: Set<string>,
): boolean {
  if (typeof stored.name !== 'string' || !stored.name) return false;
  if (!isPluginKind(stored.kind)) return false;
  return knownIdentities.has(pluginIdentityKey(stored.name, stored.kind));
}

/**
 * Builds Plugin records for stored plugins whose name+kind is not covered by any
 * loaded builtin or remote provider catalogue.
 *
 * Description is the source URL only (product requirement).
 * Hub unique key is name+kind; host configure uses plain stored name (no prefix).
 *
 * @param stored - Host localStorage plugins.
 * @param knownIdentities - Catalogue identities to exclude.
 * @param coreVersion - Running core version (passed through to {@link buildPlugin}).
 * @returns Custom plugins marked INSTALLED with stored activation state.
 */
export function buildCustomPluginsFromStored(
  stored: StoredPlugin[],
  knownIdentities: Set<string>,
  coreVersion: string,
): Plugin[] {
  const customs: Plugin[] = [];

  for (const s of stored) {
    if (isKnownStoredPlugin(s, knownIdentities)) continue;
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
      installationState: 'INSTALLED',
      activationState: s.active ? 'ACTIVE' : 'INACTIVE',
      compatible: true,
    });
  }

  return customs;
}
