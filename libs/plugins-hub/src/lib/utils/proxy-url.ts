/**
 * Converts external absolute URLs to proxy URLs when running on localhost.
 * Used for development to intercept external requests through a local proxy.
 * This is needed because HTTP does not work with HTTPS locally with cross-site scripting.
 *
 * Example:
 * - Input (on localhost): 'https://ase-compas.github.io/plugins.json'
 * - Output: '/proxy/ase-compas.github.io/plugins.json'
 *
 * @param url - The URL to potentially proxy
 * @returns Proxied URL if on localhost and URL is external, otherwise unchanged
 */
export function proxyUrl(url: string): string {
  if (!isLocalhost()) {
    return url;
  }

  try {
    const parsed = new URL(url);

    // Only proxy absolute HTTP(S) URLs
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return url;
    }

    // Don't proxy localhost or 127.0.0.1 URLs to avoid double-proxying
    if (
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1'
    ) {
      return url;
    }

    // Convert to proxy path: https://example.com/path?query → /proxy/example.com/path?query
    return `/proxy/${parsed.host}${parsed.pathname}${parsed.search}`;
  } catch {
    // If URL parsing fails, return original URL (likely relative URL)
    return url;
  }
}

/**
 * Checks if the application is running on localhost.
 * Used to determine whether to enable URL proxying.
 *
 * @returns true if running on localhost or 127.0.0.1
 */
function isLocalhost(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const hostname = window.location.hostname;
  return hostname === 'localhost' || hostname === '127.0.0.1';
}
