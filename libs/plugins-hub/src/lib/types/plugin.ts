/**
 * Installation state of a plugin.
 * - INSTALLED: the plugin has been installed/registered in OpenSCD.
 * - AVAILABLE: the plugin is available from a provider but not yet installed.
 */
export type InstallationState = 'INSTALLED' | 'AVAILABLE';

/**
 * Activation state of a plugin.
 * - ACTIVE: the plugin is currently active/enabled.
 * - INACTIVE: the plugin is installed but currently disabled.
 */
export type ActivationState = 'ACTIVE' | 'INACTIVE';

/**
 * Semver version range specifying which OpenSCD core versions the plugin supports.
 */
export interface SupportedCoreVersion {
  /** Minimum supported core version (inclusive), e.g. "1.0.0". */
  from: string;
  /** Maximum supported core version (exclusive), e.g. "2.0.0". */
  to: string;
}

/**
 * Raw plugin entry as served from a provider's plugins.json.
 */
export interface PluginManifestEntry {
  /** Plugin name (1–64 chars). */
  name: string;
  /** Short description (≤ 280 chars). */
  description: string;
  /** HTTPS URL to the ESM bundle. */
  url: string;
  /** Icon URL (.svg preferred). */
  icon: string;
  /** Supported OpenSCD core version range. */
  supportedCoreVersion: SupportedCoreVersion;
}

/**
 * Enriched plugin record held in the hub's state.
 * Combines manifest data with runtime state and a unique identifier.
 */
export interface Plugin extends PluginManifestEntry {
  /**
   * Unique identifier scoped by provider prefix.
   * Format: "<providerPrefix>:<slugified-name>"
   * Example: "bp:transformer-importer"
   */
  id: string;
  /** The prefix of the provider that supplies this plugin. */
  providerPrefix: string;
  /** Whether the plugin is compatible with the running core version. */
  compatible: boolean;
  /** Installation state. */
  installationState: InstallationState;
  /** Activation state (only meaningful when installationState === 'INSTALLED'). */
  activationState: ActivationState;
}
