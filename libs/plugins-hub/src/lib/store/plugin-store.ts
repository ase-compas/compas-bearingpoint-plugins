import {
  type Plugin,
  type InstallationState,
  type ActivationState,
  PluginKindIconMapping,
  PluginKindTextMapping,
} from '../types/plugin';
import type { Provider } from '../types/provider';
import type { PluginManifestEntry } from '../types/plugin';
import { buildPluginId } from '../services/plugin-loader';
import { isVersionCompatible } from '../services/version-resolver';
import type { StoredPlugin } from '../types/stored-plugin';
import { proxyUrl } from '../utils/proxy-url';

/** Persistent store key for installed plugins */
const STORAGE_KEY = 'plugins';

export function loadStoredPlugins(): StoredPlugin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredPlugin[]) : [];
  } catch {
    return [];
  }
}

/**
 * Finds a stored plugin matching the given source URL.
 * Compares raw src, proxied src, and exact name for host built-ins.
 */
function findStoredMatch(
  entry: PluginManifestEntry,
  stored: StoredPlugin[],
): StoredPlugin | undefined {
  const proxied = proxyUrl(entry.src);
  return stored.find(
    (p) =>
      p.src === entry.src ||
      p.src === proxied ||
      (entry.builtin && p.name === entry.name && p.kind === entry.kind),
  );
}

/**
 * Builds a Plugin record from a manifest entry, provider, and core version.
 */
export function buildPlugin(
  entry: PluginManifestEntry,
  provider: Provider,
  coreVersion: string,
  stored: StoredPlugin[],
): Plugin {
  const isBuiltin = entry.builtin === true || provider.source === 'builtin';
  let id = buildPluginId(provider.prefix, entry.name, { builtin: isBuiltin });
  const matching = findStoredMatch(entry, stored);
  if (matching && !isBuiltin) {
    id = matching.name;
  }
  const installationState: InstallationState = isBuiltin
    ? 'INSTALLED'
    : matching
      ? 'INSTALLED'
      : 'AVAILABLE';
  const activationState: ActivationState = matching
    ? matching.active
      ? 'ACTIVE'
      : 'INACTIVE'
    : isBuiltin && entry.activeByDefault
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
    id,
    provider: provider,
    compatible,
    kindText: PluginKindTextMapping[entry.kind],
    kindIcon: PluginKindIconMapping[entry.kind],
    installationState,
    activationState,
  };
}

/**
 * Installs a plugin by adding it to stored plugins with active: false.
 * Incompatible plugins and built-ins are left unchanged.
 */
export function installPlugin(plugins: Plugin[], pluginId: string): Plugin[] {
  return plugins.map((p) => {
    if (p.id !== pluginId || !p.compatible || p.builtin) {
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
 * Uninstalls a plugin if not active. Built-ins cannot be uninstalled.
 */
export function uninstallPlugin(
  plugins: Plugin[],
  pluginId: string,
): { updated: Plugin[]; success: boolean } {
  const target = plugins.find((p) => p.id === pluginId);
  if (target?.builtin) {
    return { updated: plugins, success: false };
  }
  const updated = plugins.map((p) =>
    p.id === pluginId
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
 * Activates an installed plugin (sets active: true in storage).
 */
export function activatePlugin(plugins: Plugin[], pluginId: string): Plugin[] {
  return plugins.map((p) =>
    p.id === pluginId
      ? {
          ...p,
          activationState: 'ACTIVE' as ActivationState,
        }
      : p,
  );
}

/**
 * Deactivates an installed plugin (sets active: false in storage).
 */
export function deactivatePlugin(plugins: Plugin[], pluginId: string): Plugin[] {
  return plugins.map((p) =>
    p.id === pluginId
      ? {
          ...p,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}