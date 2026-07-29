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
 * Builds a Plugin record from a manifest entry, provider, and core version.
 */
export function buildPlugin(
  entry: PluginManifestEntry,
  provider: Provider,
  coreVersion: string,
  stored: StoredPlugin[],
): Plugin {
  let id = buildPluginId(provider.prefix, entry.name);
  const matching = stored.find((p) => p.src === proxyUrl(entry.src));
  if (matching) {
    id = matching.name;
  }
  const installationState: InstallationState = matching
    ? 'INSTALLED'
    : 'AVAILABLE';
  const activationState: ActivationState =
    matching && matching.active ? 'ACTIVE' : 'INACTIVE';
  const compatible = isVersionCompatible(
    coreVersion,
    entry.supportedCoreVersion?.from,
    entry.supportedCoreVersion?.to,
  );

  return {
    ...entry,
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
 */
export function installPlugin(plugins: Plugin[], pluginId: string): Plugin[] {

  return plugins.map((p) =>
    p.id === pluginId
      ? {
          ...p,
          installationState: 'INSTALLED' as InstallationState,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}

/**
 * Uninstalls a plugin if not active.
 */
export function uninstallPlugin(
  plugins: Plugin[],
  pluginId: string,
): { updated: Plugin[]; success: boolean } {
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