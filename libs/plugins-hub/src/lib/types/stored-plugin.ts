import type { MenuPosition, PluginKind } from "./plugin";

/**
 * Represents a plugin that has been stored in the localStorage 'plugins'.
 */
export type StoredPlugin = {
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