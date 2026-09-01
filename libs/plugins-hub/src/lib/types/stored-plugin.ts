import type { MenuPosition, PluginKind } from "./plugin";

/**
 * Represents a plugin in the host `plugins` list (same shape as the former
 * `localStorage['plugins']` JSON entries).
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