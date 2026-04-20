import type { Plugin, InstallationState, ActivationState } from '../types/plugin.ts';
import type { Provider } from '../types/provider.ts';
import type { PluginManifestEntry } from '../types/plugin.ts';
import { buildPluginId } from '../services/plugin-loader.ts';
import { isVersionCompatible } from '../services/version-resolver.ts';

/**
 * In-memory store for all aggregated plugins across all providers.
 * Uses Svelte 5 runes ($state) for reactivity when used inside Svelte components.
 */

/** Persistent store key for installed/activation states */
const STORAGE_KEY = 'plugins-hub:state';

type PersistedPluginState = Record<string, { installationState: InstallationState; activationState: ActivationState }>;

function loadPersistedState(): PersistedPluginState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PersistedPluginState) : {};
  } catch {
    return {};
  }
}

function savePersistedState(state: PersistedPluginState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  persisted: PersistedPluginState
): Plugin {
  const id = buildPluginId(provider.prefix, entry.name);
  const compatible = isVersionCompatible(
    coreVersion,
    entry.supportedCoreVersion.from,
    entry.supportedCoreVersion.to
  );

  const savedState = persisted[id];

  return {
    ...entry,
    id,
    providerPrefix: provider.prefix,
    compatible,
    installationState: savedState?.installationState ?? 'AVAILABLE',
    activationState: savedState?.activationState ?? 'INACTIVE',
  };
}

/**
 * Updates the installation/activation state of a plugin and persists it.
 */
export function updatePluginState(
  plugins: Plugin[],
  pluginId: string,
  update: Partial<Pick<Plugin, 'installationState' | 'activationState'>>
): Plugin[] {
  const updated = plugins.map((p) =>
    p.id === pluginId ? { ...p, ...update } : p
  );

  const persisted: PersistedPluginState = {};
  for (const p of updated) {
    if (p.installationState === 'INSTALLED') {
      persisted[p.id] = {
        installationState: p.installationState,
        activationState: p.activationState,
      };
    }
  }
  savePersistedState(persisted);

  return updated;
}

export { loadPersistedState };
