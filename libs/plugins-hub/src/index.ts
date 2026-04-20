// Public API for libs/plugins-hub
export type { Provider } from './lib/types/provider.ts';
export type {
  Plugin,
  PluginManifestEntry,
  SupportedCoreVersion,
  InstallationState,
  ActivationState,
} from './lib/types/plugin.ts';

export { loadProvider, loadAllProviders } from './lib/services/provider-loader.ts';
export type { ProviderLoadResult } from './lib/services/provider-loader.ts';

export { loadPlugin, pluginIdToTag, slugify, buildPluginId, isUrlTrusted } from './lib/services/plugin-loader.ts';

export { isVersionCompatible, compareSemver } from './lib/services/version-resolver.ts';

export { buildPlugin, updatePluginState, loadPersistedState } from './lib/store/plugin-store.ts';
