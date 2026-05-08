import type { Provider } from '../types/provider';
import type { PluginManifestEntry } from '../types/plugin';

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
export async function loadProvider(provider: Provider): Promise<ProviderLoadResult> {
  try {
    const response = await fetch(provider.pluginsUrl);

    if (!response.ok) {
      return {
        provider,
        plugins: [],
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      return {
        provider,
        plugins: [],
        error: 'Provider plugins.json must be a JSON array.',
      };
    }

    const plugins = data.filter(isValidPluginManifestEntry);
    const skipped = data.length - plugins.length;

    if (skipped > 0) {
      console.warn(
        `[ProviderLoader] Provider "${provider.name}": skipped ${skipped} invalid plugin entries.`
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
export async function loadAllProviders(providers: Provider[]): Promise<ProviderLoadResult[]> {
  return Promise.all(providers.map(loadProvider));
}

/**
 * Type-guard that validates a raw JSON value is a PluginManifestEntry.
 */
function isValidPluginManifestEntry(value: unknown): value is PluginManifestEntry {
  if (!value || typeof value !== 'object') return false;
  const p = value as Record<string, unknown>;

  return (
    typeof p['name'] === 'string' &&
    p['name'].length >= 1 &&
    p['name'].length <= 64 &&
    typeof p['description'] === 'string' &&
    p['description'].length <= 280 &&
    typeof p['url'] === 'string' &&
    p['url'].startsWith('https://') &&
    typeof p['icon'] === 'string' &&
    typeof p['supportedCoreVersion'] === 'object' &&
    p['supportedCoreVersion'] !== null &&
    typeof (p['supportedCoreVersion'] as Record<string, unknown>)['from'] === 'string' &&
    typeof (p['supportedCoreVersion'] as Record<string, unknown>)['to'] === 'string'
  );
}
