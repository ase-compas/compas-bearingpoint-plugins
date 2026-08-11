import {
  type Plugin,
  type InstallationState,
  type ActivationState,
  PluginKindIconMapping,
  PluginKindTextMapping,
} from '../types/plugin';
import type { Provider } from '../types/provider';
import type { PluginManifestEntry } from '../types/plugin';
import { isVersionCompatible } from '../services/version-resolver';
import {
  matchesStoredPlugin,
  registrationName,
  sameHubPlugin,
} from '../services/plugin-loader';
import type { StoredPlugin } from '../types/stored-plugin';

/** Persistent store key for installed plugins */
const STORAGE_KEY = 'plugins';

/**
 * Deduplicates stored plugins by host identity key `name` + `kind`.
 *
 * Host localStorage may contain duplicates (e.g. open-scd#157 when `src` was
 * used as a secondary uniqueness path). The hub keys by name+kind, so duplicates
 * would crash Svelte's keyed `{#each}` and confuse install state.
 *
 * - Entries without a non-empty `name`, `kind`, or `src` are dropped.
 * - Later entries overwrite earlier ones for the same name+kind (last-wins fields).
 * - `active` is OR-merged so an enabled duplicate is not lost to a later inactive one.
 *
 * @param stored - Raw plugins array from host localStorage.
 * @returns Deduplicated plugins in first-seen identity order.
 */
export function dedupeStoredPluginsByNameAndKind(
  stored: StoredPlugin[],
): StoredPlugin[] {
  const byIdentity = new Map<string, StoredPlugin>();
  for (const p of stored) {
    if (typeof p?.name !== 'string' || !p.name) continue;
    if (typeof p?.kind !== 'string' || !p.kind) continue;
    if (typeof p?.src !== 'string' || !p.src) continue;
    const key = `${p.name}\0${p.kind}`;
    const prev = byIdentity.get(key);
    byIdentity.set(
      key,
      prev ? { ...prev, ...p, active: Boolean(prev.active || p.active) } : p,
    );
  }
  return [...byIdentity.values()];
}

/**
 * Loads and deduplicates plugins from host localStorage (`plugins` key).
 *
 * @returns Deduplicated stored plugins, or `[]` on missing/invalid data.
 */
export function loadStoredPlugins(): StoredPlugin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return dedupeStoredPluginsByNameAndKind(parsed as StoredPlugin[]);
  } catch {
    return [];
  }
}

/** Optional host/runtime fields not present on remote plugins.json manifests. */
export interface BuildPluginOptions {
  builtin?: boolean;
  activeByDefault?: boolean;
  requireDoc?: boolean;
}

/**
 * Finds a stored plugin matching host registration name + kind.
 *
 * @param entry - Catalogue manifest entry.
 * @param provider - Provider (supplies registration prefix when set).
 * @param stored - Host localStorage plugins.
 */
function findStoredMatch(
  entry: PluginManifestEntry,
  provider: Provider,
  stored: StoredPlugin[],
): StoredPlugin | undefined {
  const hostName = registrationName(provider, entry.name);
  return stored.find((p) => matchesStoredPlugin(p, hostName, entry.kind));
}

/**
 * Builds a Plugin record from a manifest entry, provider, and core version.
 * Unique key in the hub is registration {@link PluginManifestEntry.name} +
 * {@link PluginManifestEntry.kind} (via provider prefix when set). `src` is
 * the load URL only.
 *
 * @param entry - Manifest entry from a provider catalogue or host builtins.
 * @param provider - Owning provider.
 * @param coreVersion - Running OpenSCD core version string.
 * @param stored - Host localStorage plugins (install/active state).
 * @param options - Optional builtin / host flags.
 * @returns Enriched hub plugin with installation and activation state.
 */
export function buildPlugin(
  entry: PluginManifestEntry,
  provider: Provider,
  coreVersion: string,
  stored: StoredPlugin[],
  options?: BuildPluginOptions,
): Plugin {
  const isBuiltin = options?.builtin === true || provider.source === 'builtin';
  const matching = findStoredMatch(entry, provider, stored);
  const activeByDefault = options?.activeByDefault === true;
  const installationState: InstallationState = isBuiltin
    ? 'INSTALLED'
    : matching
      ? 'INSTALLED'
      : 'AVAILABLE';
  const activationState: ActivationState = matching
    ? matching.active
      ? 'ACTIVE'
      : 'INACTIVE'
    : isBuiltin && activeByDefault
      ? 'ACTIVE'
      : 'INACTIVE';
  const compatible = isBuiltin
    ? true
    : isVersionCompatible(
        coreVersion,
        entry.supportedCoreVersion?.from,
        entry.supportedCoreVersion?.to,
      );

  return {
    ...entry,
    builtin: isBuiltin,
    activeByDefault: options?.activeByDefault,
    requireDoc: options?.requireDoc,
    provider: provider,
    compatible,
    kindText: PluginKindTextMapping[entry.kind],
    kindIcon: PluginKindIconMapping[entry.kind],
    installationState,
    activationState,
  };
}

/** Identity fields needed to target a plugin in hub state mutations. */
export type PluginIdentityTarget = Pick<Plugin, 'name' | 'kind' | 'provider'>;

/**
 * Installs a plugin by name+kind identity (sets INSTALLED + INACTIVE).
 * Incompatible plugins and built-ins are left unchanged.
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to install.
 * @returns Updated plugin list.
 */
export function installPlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): Plugin[] {
  return plugins.map((p) => {
    if (!sameHubPlugin(p, target) || !p.compatible || p.builtin) {
      return p;
    }
    return {
      ...p,
      installationState: 'INSTALLED' as InstallationState,
      activationState: 'INACTIVE' as ActivationState,
    };
  });
}

/**
 * Uninstalls a plugin by name+kind identity. Built-ins cannot be uninstalled.
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to uninstall.
 * @returns Updated list and whether uninstall was allowed.
 */
export function uninstallPlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): { updated: Plugin[]; success: boolean } {
  const match = plugins.find((p) => sameHubPlugin(p, target));
  if (match?.builtin) {
    return { updated: plugins, success: false };
  }
  const updated = plugins.map((p) =>
    sameHubPlugin(p, target)
      ? {
          ...p,
          installationState: 'AVAILABLE' as InstallationState,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
  return { updated, success: true };
}

/**
 * Activates an installed plugin by name+kind identity.
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to activate.
 * @returns Updated plugin list.
 */
export function activatePlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): Plugin[] {
  return plugins.map((p) =>
    sameHubPlugin(p, target)
      ? {
          ...p,
          activationState: 'ACTIVE' as ActivationState,
        }
      : p,
  );
}

/**
 * Deactivates an installed plugin by name+kind identity.
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to deactivate.
 * @returns Updated plugin list.
 */
export function deactivatePlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): Plugin[] {
  return plugins.map((p) =>
    sameHubPlugin(p, target)
      ? {
          ...p,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}
