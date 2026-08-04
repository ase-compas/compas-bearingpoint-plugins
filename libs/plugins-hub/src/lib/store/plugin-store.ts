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
import type { StoredPlugin } from '../types/stored-plugin';

/** Persistent store key for installed plugins */
const STORAGE_KEY = 'plugins';

/**
 * Deduplicates stored plugins by hub identity key `src` (strict string equality).
 *
 * Host localStorage may contain duplicates (OpenSCD keys by name+kind). The hub
 * UI keys cards by `src`, so duplicates would crash Svelte's keyed `{#each}`.
 *
 * - Entries without a non-empty string `src` are dropped.
 * - Later entries overwrite earlier ones for the same `src` (last-wins fields).
 * - `active` is OR-merged so an enabled duplicate is not lost to a later inactive one.
 */
export function dedupeStoredPluginsBySrc(stored: StoredPlugin[]): StoredPlugin[] {
  const bySrc = new Map<string, StoredPlugin>();
  for (const p of stored) {
    if (typeof p?.src !== 'string' || !p.src) continue;
    const prev = bySrc.get(p.src);
    bySrc.set(
      p.src,
      prev ? { ...prev, ...p, active: Boolean(prev.active || p.active) } : p,
    );
  }
  return [...bySrc.values()];
}

export function loadStoredPlugins(): StoredPlugin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return dedupeStoredPluginsBySrc(parsed as StoredPlugin[]);
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
 * Finds a stored plugin matching the given source URL (strict equality).
 */
function findStoredMatch(
  entry: PluginManifestEntry,
  stored: StoredPlugin[],
  isBuiltin: boolean,
): StoredPlugin | undefined {
  return stored.find(
    (p) =>
      p.src === entry.src ||
      (isBuiltin && p.name === entry.name && p.kind === entry.kind),
  );
}

/**
 * Builds a Plugin record from a manifest entry, provider, and core version.
 * Unique key in the hub is always `entry.src`.
 */
export function buildPlugin(
  entry: PluginManifestEntry,
  provider: Provider,
  coreVersion: string,
  stored: StoredPlugin[],
  options?: BuildPluginOptions,
): Plugin {
  const isBuiltin = options?.builtin === true || provider.source === 'builtin';
  const matching = findStoredMatch(entry, stored, isBuiltin);
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

/**
 * Installs a plugin by src (sets INSTALLED + INACTIVE).
 * Incompatible plugins and built-ins are left unchanged.
 */
export function installPlugin(plugins: Plugin[], pluginSrc: string): Plugin[] {
  return plugins.map((p) => {
    if (p.src !== pluginSrc || !p.compatible || p.builtin) {
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
 * Uninstalls a plugin by src. Built-ins cannot be uninstalled.
 */
export function uninstallPlugin(
  plugins: Plugin[],
  pluginSrc: string,
): { updated: Plugin[]; success: boolean } {
  const target = plugins.find((p) => p.src === pluginSrc);
  if (target?.builtin) {
    return { updated: plugins, success: false };
  }
  const updated = plugins.map((p) =>
    p.src === pluginSrc
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
 * Activates an installed plugin by src.
 */
export function activatePlugin(plugins: Plugin[], pluginSrc: string): Plugin[] {
  return plugins.map((p) =>
    p.src === pluginSrc
      ? {
          ...p,
          activationState: 'ACTIVE' as ActivationState,
        }
      : p,
  );
}

/**
 * Deactivates an installed plugin by src.
 */
export function deactivatePlugin(
  plugins: Plugin[],
  pluginSrc: string,
): Plugin[] {
  return plugins.map((p) =>
    p.src === pluginSrc
      ? {
          ...p,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}
