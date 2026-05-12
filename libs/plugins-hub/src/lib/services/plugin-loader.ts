import type { Plugin } from '../types/plugin';
import type { Provider } from '../types/provider';

/**
 * Returns the set of allowed origins derived from the provider registry.
 * Only plugin URLs whose origin matches a provider's pluginsUrl origin are permitted.
 */
function buildTrustedOrigins(providers: Provider[]): Set<string> {
  const origins = new Set<string>();
  for (const p of providers) {
    try {
      origins.add(new URL(p.pluginsUrl).origin);
    } catch (e) {
      // skip invalid URLs
      console.debug('invalid URL:', p.pluginsUrl, e);
    }
  }
  return origins;
}

/**
 * Validates that a plugin URL belongs to a trusted origin.
 * Trusted origins are derived from the registered providers' pluginsUrl hosts.
 *
 * @param url - The URL to validate.
 * @param trustedOrigins - Set of allowed origins.
 * @returns true if the URL's origin is trusted.
 */
export function isUrlTrusted(url: string, trustedOrigins: Set<string>): boolean {
  if (url.startsWith('/')) {
    // same server path is always valid (mostly used for local dev, but must be configured via server proxies)
    return true;
  }
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && trustedOrigins.has(parsed.origin);
  } catch {
    return false;
  }
}

/**
 * Dynamically loads a plugin's ESM bundle and registers it as a custom element
 * in the OpenSCD host page.
 *
 * The plugin bundle is expected to export a default `HTMLElement` class that
 * will be registered under the custom-element tag derived from the plugin id.
 *
 * @param plugin - The plugin to load.
 * @param providers - The registered providers used to determine trusted origins.
 * @returns Promise that resolves when the plugin is loaded (or rejects on error).
 */
export async function loadPlugin(plugin: Plugin, providers: Provider[] = []): Promise<void> {
  const tag = pluginIdToTag(plugin.id);

  // Skip if already registered
  if (customElements.get(tag)) {
    return;
  }

  const trustedOrigins = buildTrustedOrigins(providers);
  if (providers.length > 0 && !isUrlTrusted(plugin.url, trustedOrigins)) {
    throw new Error(
      `[PluginLoader] Plugin "${plugin.name}" URL "${plugin.url}" is not from a trusted origin.`
    );
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
