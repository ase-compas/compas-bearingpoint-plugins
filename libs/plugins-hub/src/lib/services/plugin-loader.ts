import type { Plugin, PluginKind } from '../types/plugin';
import type { Provider } from '../types/provider';
import type { StoredPlugin } from '../types/stored-plugin';

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
 *
 * @param provider - Provider that may supply a registration prefix.
 * @param pluginName - Manifest / display plugin name.
 * @returns Host registration name used as the OpenSCD identity `name`.
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

/**
 * Stable string key for a host plugin identity (`name` + `kind`).
 * `name` must already be the host registration name (see {@link registrationName}).
 *
 * @param name - Host registration name.
 * @param kind - Plugin kind.
 * @returns Opaque identity key for maps / Svelte `{#each}` keys.
 */
export function pluginIdentityKey(name: string, kind: PluginKind): string {
  return `${name}\0${kind}`;
}

/**
 * Hub identity key for a catalogue / runtime plugin: registration name + kind.
 * Aligns with OpenSCD (`oscd-configure-plugin`); `src` is not part of identity.
 *
 * @param plugin - Plugin with manifest name, kind, and provider (for prefix).
 * @returns Opaque identity key.
 */
export function hubPluginKey(
  plugin: Pick<Plugin, 'name' | 'kind' | 'provider'>,
): string {
  return pluginIdentityKey(
    registrationName(plugin.provider, plugin.name),
    plugin.kind,
  );
}

/**
 * UI / list entry key: provider + registration name + kind.
 * Distinguishes the same host identity listed under different providers
 * (e.g. host built-in vs shadowed remote catalogue entry).
 *
 * @param plugin - Plugin with provider, name, and kind.
 * @returns Opaque list key for selection and Svelte `{#each}`.
 */
export function hubPluginListKey(
  plugin: Pick<Plugin, 'name' | 'kind' | 'provider'>,
): string {
  return `${plugin.provider.name}\0${hubPluginKey(plugin)}`;
}

/**
 * Returns true when a stored host plugin matches the given host name + kind.
 *
 * @param stored - Entry from host localStorage `plugins`.
 * @param hostName - Host registration name.
 * @param kind - Plugin kind.
 */
export function matchesStoredPlugin(
  stored: Pick<StoredPlugin, 'name' | 'kind'>,
  hostName: string,
  kind: PluginKind,
): boolean {
  return stored.name === hostName && stored.kind === kind;
}

/**
 * Returns true when two hub plugins share the same host identity.
 *
 * @param a - First plugin.
 * @param b - Second plugin.
 */
export function sameHubPlugin(
  a: Pick<Plugin, 'name' | 'kind' | 'provider'>,
  b: Pick<Plugin, 'name' | 'kind' | 'provider'>,
): boolean {
  return hubPluginKey(a) === hubPluginKey(b);
}

/**
 * Returns true when two entries are the same hub list item (provider + host identity).
 * Use for UI selection; use {@link sameHubPlugin} for host configure identity.
 *
 * @param a - First plugin.
 * @param b - Second plugin.
 */
export function sameHubPluginEntry(
  a: Pick<Plugin, 'name' | 'kind' | 'provider'>,
  b: Pick<Plugin, 'name' | 'kind' | 'provider'>,
): boolean {
  return hubPluginListKey(a) === hubPluginListKey(b);
}
