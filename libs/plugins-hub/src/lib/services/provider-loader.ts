import type { Provider } from '../types/provider';
import type { PluginManifestEntry } from '../types/plugin';
import { proxyUrl } from '../utils/proxy-url';

/** Result of loading a provider's plugin manifest. */
export interface ProviderLoadResult {
  provider: Provider;
  plugins: PluginManifestEntry[];
  error?: string;
}

/**
 * Fetches and validates a single provider's plugins.json manifest.
 *
 * @param provider - The provider configuration to load plugins from.
 * @returns A result object containing the provider, its plugins, and any error.
 */
export async function loadProvider(
  provider: Provider,
): Promise<ProviderLoadResult> {
  if (provider.source === 'builtin' || !provider.pluginsUrl) {
    return {
      provider,
      plugins: [],
      error: 'Builtin providers must be loaded via loadBuiltinProviders().',
    };
  }

  try {
    // Use proxy URL for external URLs when running on localhost
    const response = await fetch(proxyUrl(provider.pluginsUrl));

    if (!response.ok) {
      return {
        provider,
        plugins: [],
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const data: unknown = await response.json();

    if (
      !data ||
      typeof data !== 'object' ||
      !Array.isArray((data as any).plugins)
    ) {
      return {
        provider,
        plugins: [],
        error:
          'Provider plugins.json must be an object with a "plugins" array.',
      };
    }

    const rawPlugins = (data as any).plugins;
    const plugins = rawPlugins.filter(isValidPluginManifestEntry);
    const skipped = rawPlugins.length - plugins.length;

    if (skipped > 0) {
      console.warn(
        `[ProviderLoader] Provider "${provider.name}": skipped ${skipped} invalid plugin entries.`,
      );
    }

    return { provider, plugins };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { provider, plugins: [], error: message };
  }
}

/**
 * Loads all providers in parallel.
 *
 * @param providers - Array of provider configurations.
 * @returns Array of load results, one per provider.
 */
export async function loadAllProviders(
  providers: Provider[],
): Promise<ProviderLoadResult[]> {
  return Promise.all(providers.map(loadProvider));
}

/**
 * Type-guard that validates a raw JSON value is a PluginManifestEntry.
 */
function isValidPluginManifestEntry(
  value: unknown,
): value is PluginManifestEntry {
  if (!value || typeof value !== 'object') return false;
  const p = value as Record<string, unknown>;

  const isDev = import.meta.env.MODE === 'development';
  return (
    typeof p.name === 'string' &&
    (!p.author || typeof p.author === 'string') &&
    typeof p.src === 'string' &&
    (isDev || p.src.startsWith('https://') || p.src.startsWith('/')) &&
    typeof p.kind === 'string' &&
    typeof p.icon === 'string' &&
    typeof p.description === 'string'
  );
}
