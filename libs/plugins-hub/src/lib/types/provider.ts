/**
 * Represents a plugin provider in the federated registry.
 * Providers are listed in the hardcoded providers.json config.
 */
export interface Provider {
  /** Unique short prefix for this provider (e.g. "bp", "openscd"). Used to namespace plugin IDs. */
  prefix: string;
  /** Display name of the provider (1–64 chars). */
  name: string;
  /** Icon URL (.svg preferred, square ≤ 64 KB). */
  icon: string;
  /** Short description of the provider (≤ 280 chars). */
  description: string;
  /** HTTPS URL to the provider's plugins.json manifest. */
  pluginsUrl: string;
}
