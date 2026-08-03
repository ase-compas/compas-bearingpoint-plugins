// Public API for libs/plugins-hub
export type { Provider } from './lib/types/provider';
export type {
  Plugin,
  PluginManifestEntry,
  SupportedCoreVersion,
  InstallationState,
  ActivationState,
  PluginKind,
  PluginKindText,
  PluginKindIcon,
  MenuPosition,
} from './lib/types/plugin';
export {
  PLUGIN_KINDS,
  PluginKindTextMapping,
  PluginKindIconMapping,
} from './lib/types/plugin';
export type { StoredPlugin } from './lib/types/stored-plugin';

export { loadProvider, loadAllProviders } from './lib/services/provider-loader';
export type { ProviderLoadResult } from './lib/services/provider-loader';

export {
  loadBuiltinProviders,
  buildBuiltinCandidates,
  mapOfficialPluginToManifest,
  BUILTIN_PROBE_CACHE_KEY,
} from './lib/services/builtin-plugin-loader';
export type {
  BuiltinLoadResult,
  BuiltinHostId,
  OfficialPluginRaw,
} from './lib/services/builtin-plugin-loader';

export { buildPluginId, isUrlTrusted } from './lib/services/plugin-loader';

export { isVersionCompatible, compareSemver } from './lib/services/version-resolver';

export {
  buildPlugin,
  installPlugin,
  uninstallPlugin,
  activatePlugin,
  deactivatePlugin,
  loadStoredPlugins,
} from './lib/store/plugin-store';
export type { BuildPluginOptions } from './lib/store/plugin-store';
export { getAppVersion } from './lib/store/app-version-store';

export { getLayout } from './lib/dom/open-scd-helpers';

export { proxyUrl } from './lib/utils/proxy-url';

import { default as providersConfigProd } from './lib/config/providers.json';
import { default as providersConfigDev } from './lib/config/providers.dev.json';


const isDev = (import.meta.env.MODE === 'development');
const providersConfig = isDev ? providersConfigDev : providersConfigProd;
export { providersConfig };
