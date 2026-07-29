import type { Provider } from './provider';

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

export type PluginKind = 'editor' | 'menu' | 'validator';
const menuPositions = ['top', 'middle', 'bottom'] as const;
export type MenuPosition = (typeof menuPositions)[number];

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
  /** Plugin name. */
  name: string;
  /** Author of the plugin. */
  author?: string;
  /** Source URL to the plugin script. */
  src: string;
  /** Kind of plugin (e.g., "editor"). */
  kind: PluginKind;
  /** Material Design Icon name. */
  icon: string;
  /** Short description. */
  description: string;
  /** Optional longer description shown in the detail view (after URL). */
  longDescription?: string;
  /** postion if kind === 'menu'. */
  position?: MenuPosition;
  /** Supported OpenSCD core version range (optional). */
  supportedCoreVersion?: SupportedCoreVersion;
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
  /** The provider that supplies this plugin. */
  provider: Provider;
  /** Whether the plugin is compatible with the running core version. */
  compatible: boolean;
  /** Installation state. */
  installationState: InstallationState;
  /** Activation state (only meaningful when installationState === 'INSTALLED'). */
  activationState: ActivationState;
}
