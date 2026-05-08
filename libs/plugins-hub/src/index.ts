// Public API for libs/plugins-hub
export type { Provider } from './lib/types/provider.ts';
export type {
  Plugin,
  PluginManifestEntry,
  SupportedCoreVersion,
  InstallationState,
  ActivationState,
} from './lib/types/plugin.ts';

export { loadProvider, loadAllProviders } from './lib/services/provider-loader';
export type { ProviderLoadResult } from './lib/services/provider-loader';

export { loadPlugin, pluginIdToTag, slugify, buildPluginId, isUrlTrusted } from './lib/services/plugin-loader';

export { isVersionCompatible, compareSemver } from './lib/services/version-resolver';

export { buildPlugin, updatePluginState, loadPersistedState } from './lib/store/plugin-store';

export { default as providersConfig } from './lib/config/providers.json';

