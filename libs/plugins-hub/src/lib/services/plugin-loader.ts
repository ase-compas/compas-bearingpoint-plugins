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
 * Builds the unique plugin ID from provider prefix and plugin name.
 * Format: "<providerPrefix>:<pluginName>"
 * e.g. "BP - Transformermporter"
 */
export function buildPluginId(providerPrefix: string, pluginName: string): string {
  return `${providerPrefix} - ${pluginName}`;
}
