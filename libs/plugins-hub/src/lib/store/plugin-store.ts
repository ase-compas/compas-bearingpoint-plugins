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
  pluginIdentityKey,
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
export type PluginIdentityTarget = Pick<
  Plugin,
  'name' | 'kind' | 'provider' | 'builtin' | 'shadowedByHostBuiltin'
>;

/**
 * Tooltip when a provider/custom entry is blocked because a host built-in already
 * uses the same registration name + kind.
 *
 * @param hostBuiltinName - Host built-in registration name (identity `name`).
 */
export function shadowedByHostBuiltinTooltip(hostBuiltinName: string): string {
  return `A built-in plugin with the name "${hostBuiltinName}" already exists.`;
}

/**
 * Marks remote/custom catalogue entries whose **registration name + kind**
 * matches a host built-in (`registrationName(provider, name)` equals the
 * built-in's host name).
 *
 * Those entries stay under their provider, show as installed/built-in-like, and
 * must not be installed, removed, or enable/disabled (manage the host built-in).
 *
 * @param plugins - Full hub list including host built-ins and remote catalogues.
 * @returns Updated list with `shadowedByHostBuiltin` set where applicable.
 */
export function markPluginsOverlappingBuiltins(plugins: Plugin[]): Plugin[] {
  const hostBuiltins = plugins.filter(
    (p) => p.builtin === true && p.provider?.source === 'builtin',
  );
  if (hostBuiltins.length === 0) return plugins;

  // Host built-ins: identity name is plain `name` (no provider prefix).
  const twinByKey = new Map<string, Plugin>();
  for (const b of hostBuiltins) {
    twinByKey.set(pluginIdentityKey(b.name, b.kind), b);
  }

  return plugins.map((p) => {
    if (p.provider?.source === 'builtin') return p;
    // Compare registration name (with prefix when set) to host built-in name.
    const twin = twinByKey.get(
      pluginIdentityKey(registrationName(p.provider, p.name), p.kind),
    );
    if (!twin) return p;
    return {
      ...p,
      shadowedByHostBuiltin: true,
      installationState: 'INSTALLED' as InstallationState,
      activationState: twin.activationState,
      activeByDefault: twin.activeByDefault,
      requireDoc: twin.requireDoc,
    };
  });
}

function isLockedByHostBuiltin(
  plugin: Pick<Plugin, 'builtin' | 'shadowedByHostBuiltin'> | undefined,
): boolean {
  return plugin?.builtin === true || plugin?.shadowedByHostBuiltin === true;
}

/**
 * Installs a plugin by name+kind identity (sets INSTALLED + INACTIVE).
 * Incompatible plugins, built-ins, and host-shadowed entries are left unchanged.
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
    if (
      !sameHubPlugin(p, target) ||
      !p.compatible ||
      isLockedByHostBuiltin(p)
    ) {
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
 * Uninstalls a plugin by name+kind identity.
 * Built-ins and host-shadowed provider entries cannot be uninstalled.
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
  if (isLockedByHostBuiltin(match) || isLockedByHostBuiltin(target)) {
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
 * Activates an installed plugin by identity.
 * Host-shadowed provider entries are not activated (use the built-in instead).
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to activate.
 * @returns Updated plugin list.
 */
export function activatePlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): Plugin[] {
  if (target.shadowedByHostBuiltin) {
    return plugins;
  }
  return plugins.map((p) =>
    sameHubPlugin(p, target) && !p.shadowedByHostBuiltin
      ? {
          ...p,
          activationState: 'ACTIVE' as ActivationState,
        }
      : p,
  );
}

/**
 * Deactivates an installed plugin by identity.
 * Host-shadowed provider entries are not deactivated (use the built-in instead).
 *
 * @param plugins - Current hub plugin list.
 * @param target - Plugin identity to deactivate.
 * @returns Updated plugin list.
 */
export function deactivatePlugin(
  plugins: Plugin[],
  target: PluginIdentityTarget,
): Plugin[] {
  if (target.shadowedByHostBuiltin) {
    return plugins;
  }
  return plugins.map((p) =>
    sameHubPlugin(p, target) && !p.shadowedByHostBuiltin
      ? {
          ...p,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}
