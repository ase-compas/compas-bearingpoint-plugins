import type {
  Plugin,
  InstallationState,
  ActivationState,
  PluginKind,
  MenuPosition,
} from '../types/plugin';
import type { Provider } from '../types/provider';
import type { PluginManifestEntry } from '../types/plugin';
import { buildPluginId, pluginIdToTag } from '../services/plugin-loader';
import { isVersionCompatible } from '../services/version-resolver';

/**
 * In-memory store for all aggregated plugins across all providers.
 * Uses Svelte 5 runes ($state) for reactivity when used inside Svelte components.
 */

/** Persistent store key for installed plugins */
const STORAGE_KEY = 'plugins';

type StoredPlugin = {
  name: string;
  author?: string;
  src: string;
  kind: PluginKind;
  icon: string;
  description?: string;
  active: boolean;
  requireDoc?: boolean;
  position?: MenuPosition;
  activeByDefault?: boolean;
  installed?: boolean;
  [key: string]: any;
};

export function loadStoredPlugins(): StoredPlugin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredPlugin[]) : [];
  } catch {
    return [];
  }
}

export function saveStoredPlugins(stored: StoredPlugin[]): void {
  try {
    // TODO: refactoring: remove saveStoredPlugin: Updates are made with the 'oscd-configure-plugin' event.
    console.log('save localStorage deactivated');
    //localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // storage unavailable — ignore
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
  const id = buildPluginId(provider.prefix, entry.name);
  const matching = stored.find((p) => p.src === entry.src);
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
    installationState,
    activationState,
  };
}

/**
 * Installs a plugin by adding it to stored plugins with active: false.
 */
export function installPlugin(plugins: Plugin[], pluginId: string): Plugin[] {
  const plugin = plugins.find((p) => p.id === pluginId);
  if (!plugin) return plugins;

  const stored = loadStoredPlugins();
  if (stored.find((p) => p.src === plugin.src)) return plugins;

  const newStoredPlugin: StoredPlugin = {
    name: plugin.name,
    author: plugin.author || plugin.provider.name,
    src: plugin.src,
    kind: plugin.kind,
    icon: plugin.icon,
    description: plugin.description,
    position: plugin.position,
    active: false,
    requireDoc: true,
    activeByDefault: false,
    installed: true,
  };

  if (plugin.kind === 'menu' && !newStoredPlugin.position) {
    newStoredPlugin.position = 'middle'; // set default for menu-plugins
  }

  stored.push(newStoredPlugin);
  saveStoredPlugins(stored);

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
  const plugin = plugins.find((p) => p.id === pluginId);
  if (!plugin) return { updated: plugins, success: false };

  const stored = loadStoredPlugins();
  const index = stored.findIndex((p) => p.src === plugin.src);
  if (index === -1) return { updated: plugins, success: false };

  if (stored[index].active) {
    return { updated: plugins, success: false };
  }

  stored.splice(index, 1);
  saveStoredPlugins(stored);

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
  const plugin = plugins.find((p) => p.id === pluginId);
  if (!plugin) return plugins;

  const stored = loadStoredPlugins();
  const storedPlugin = stored.find((p) => p.src === plugin.src);
  if (!storedPlugin) return plugins;

  if (storedPlugin.active) return plugins;

  storedPlugin.active = true;
  saveStoredPlugins(stored);

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
  const plugin = plugins.find((p) => p.id === pluginId);
  if (!plugin) return plugins;

  const stored = loadStoredPlugins();
  const storedPlugin = stored.find((p) => p.src === plugin.src);
  if (!storedPlugin) return plugins;

  if (!storedPlugin.active) return plugins;

  storedPlugin.active = false;
  saveStoredPlugins(stored);

  return plugins.map((p) =>
    p.id === pluginId
      ? {
          ...p,
          activationState: 'INACTIVE' as ActivationState,
        }
      : p,
  );
}
