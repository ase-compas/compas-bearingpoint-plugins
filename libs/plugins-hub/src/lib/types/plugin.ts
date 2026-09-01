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

export const PLUGIN_KINDS = ['editor', 'menu', 'validator'] as const;
export type PluginKind = typeof PLUGIN_KINDS[number];
export const PluginKindTextMapping = {
  editor: 'Editor plugin',
  menu: 'Navigation plugin',
  validator: 'Validation plugin',
} as const satisfies Record<PluginKind, string>;
export const PluginKindIconMapping = {
  editor: 'tab',
  menu: 'play_circle',
  validator: 'rule_folder',
} as const satisfies Record<PluginKind, string>;
export type PluginKindText = typeof PluginKindTextMapping[PluginKind];
export type PluginKindIcon = typeof PluginKindIconMapping[PluginKind];

const menuPositions = ['top', 'middle', 'bottom'] as const;
export type MenuPosition = (typeof menuPositions)[number];

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
}

/**
 * Enriched plugin record held in the hub's state.
 * Combines manifest data with runtime state.
 *
 * Unique key in the hub (and OpenSCD host) is registration **name** + **kind**
 * (see `registrationName` / `hubPluginKey`). {@link PluginManifestEntry.src}
 * is the load URL only, not the identity.
 */
export interface Plugin extends PluginManifestEntry {
  /** The provider that supplies this plugin. */
  provider: Provider;
  /** Kind Text for the given kind. */
  kindText: PluginKindText;
  /** Kind Icon for the given kind. */
  kindIcon: PluginKindIcon;
  /** Installation state. */
  installationState: InstallationState;
  /** Activation state (only meaningful when installationState === 'INSTALLED'). */
  activationState: ActivationState;
  /** Host built-in flag (officialPlugins). Not part of remote plugins.json. */
  builtin?: boolean;
  /**
   * True when this catalogue entry's registration name + kind matches a host
   * built-in. Listed under the provider, but install/remove and enable/disable
   * are blocked (manage the host built-in instead).
   */
  shadowedByHostBuiltin?: boolean;
  /** Host default activation (officialPlugins). */
  activeByDefault?: boolean;
  /** Whether the host plugin requires an open document. */
  requireDoc?: boolean;
}
