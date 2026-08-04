import type { Provider } from '../types/provider';

/**
 * Extracts unique trusted origins from the given providers.
 * Each provider's pluginsUrl is parsed and its origin (protocol + host) is collected.
 * Invalid URLs are skipped.
 *
 * @param providers - Array of providers to extract origins from.
 * @returns Set of trusted origins (e.g. "https://example.com").
 */
function buildTrustedOrigins(providers: Provider[]): Set<string> {
  const origins = new Set<string>();
  for (const p of providers) {
    if (!p.pluginsUrl) continue;
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
 * Host registration name for `oscd-configure-plugin` (OpenSCD detail.name).
 * Uses `"${prefix} - ${pluginName}"` when the provider has a non-empty prefix;
 * otherwise returns the plain plugin name (built-in / Custom).
 */
export function registrationName(
  provider: Pick<Provider, 'prefix'> | undefined,
  pluginName: string,
): string {
  const prefix = provider?.prefix?.trim();
  if (prefix) {
    return `${prefix} - ${pluginName}`;
  }
  return pluginName;
}
