/**
 * How the provider's plugin list is obtained.
 * - remote: fetch pluginsUrl (default for providers.json entries)
 * - builtin: host officialPlugins via dynamic import of plugins.js
 */
export type ProviderSource = 'remote' | 'builtin';

/**
 * Represents a plugin provider in the federated registry.
 * Remote providers are listed in providers.json; builtin providers are
 * discovered at runtime from the host's officialPlugins module.
 */
export interface Provider {
  /**
   * Optional short prefix for host registration names (e.g. "BP").
   * When set, OpenSCD config name is `"${prefix} - ${plugin.name}"`.
   * Omit for built-in and Custom providers (register with plain plugin name).
   */
  prefix?: string;
  /** Display name of the provider (1–64 chars). Used as filter key in the UI. */
  name: string;
  /** Icon URL (.svg preferred, square ≤ 64 KB) or Material icon name. */
  icon: string;
  /** Short description of the provider (≤ 280 chars). */
  description: string;
  /**
   * HTTPS URL to the provider's plugins.json manifest.
   * Optional for builtin providers (they load from host plugins.js).
   */
  pluginsUrl?: string;
  /** Defaults to 'remote' when omitted. */
  source?: ProviderSource;
}
