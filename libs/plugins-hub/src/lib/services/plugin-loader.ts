import type { Plugin } from '../types/plugin.ts';

/**
 * Dynamically loads a plugin's ESM bundle and registers it as a custom element
 * in the OpenSCD host page.
 *
 * The plugin bundle is expected to export a default `HTMLElement` class that
 * will be registered under the custom-element tag derived from the plugin id.
 *
 * @param plugin - The plugin to load.
 * @returns Promise that resolves when the plugin is loaded (or rejects on error).
 */
export async function loadPlugin(plugin: Plugin): Promise<void> {
  const tag = pluginIdToTag(plugin.id);

  // Skip if already registered
  if (customElements.get(tag)) {
    return;
  }

  const module = await import(/* @vite-ignore */ plugin.url);
  const PluginClass = module.default;

  if (typeof PluginClass !== 'function') {
    throw new Error(
      `[PluginLoader] Plugin "${plugin.name}" (${plugin.url}) did not export a default class.`
    );
  }

  customElements.define(tag, PluginClass);
}

/**
 * Converts a plugin ID (e.g. "bp:transformer-importer") to a valid HTML custom-element tag
 * (e.g. "plugin-bp-transformer-importer").
 *
 * Custom element tags must contain a hyphen, so we use the "plugin-" prefix.
 */
export function pluginIdToTag(pluginId: string): string {
  return `plugin-${pluginId.replace(':', '-')}`;
}

/**
 * Slugifies a plugin name for use in a plugin ID.
 * e.g. "Transformer Importer" → "transformer-importer"
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Builds the unique plugin ID from provider prefix and plugin name.
 * Format: "<providerPrefix>:<slug>"
 * e.g. "bp:transformer-importer"
 */
export function buildPluginId(providerPrefix: string, pluginName: string): string {
  return `${providerPrefix}:${slugify(pluginName)}`;
}
