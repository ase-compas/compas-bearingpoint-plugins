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

export { pluginIdToTag, slugify, buildPluginId, isUrlTrusted } from './lib/services/plugin-loader';

export { isVersionCompatible, compareSemver } from './lib/services/version-resolver';

export { buildPlugin, installPlugin, uninstallPlugin, loadStoredPlugins } from './lib/store/plugin-store';

import { default as providersConfigProd } from './lib/config/providers.json';
import { default as providersConfigDev } from './lib/config/providers.dev.json';


const isDev = (import.meta.env.MODE === 'development');
const providersConfig = isDev ? providersConfigDev : providersConfigProd;
export { providersConfig };

