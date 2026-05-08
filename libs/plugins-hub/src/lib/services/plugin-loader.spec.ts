import { describe, it, expect } from 'vitest';
import { slugify, buildPluginId, pluginIdToTag, isUrlTrusted } from './plugin-loader';

describe('slugify', () => {
  it('converts name to lowercase slug', () => {
    expect(slugify('Transformer Importer')).toBe('transformer-importer');
    expect(slugify('My Awesome Plugin!')).toBe('my-awesome-plugin');
    expect(slugify('  leading & trailing  ')).toBe('leading-trailing');
  });

  it('collapses multiple separators', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
    expect(slugify('foo--bar')).toBe('foo-bar');
  });

  it('handles already-slugified input', () => {
    expect(slugify('my-plugin')).toBe('my-plugin');
  });
});

describe('buildPluginId', () => {
  it('combines prefix and slugified name', () => {
    expect(buildPluginId('bp', 'Transformer Importer')).toBe('bp:transformer-importer');
    expect(buildPluginId('openscd', 'History Viewer')).toBe('openscd:history-viewer');
  });
});

describe('pluginIdToTag', () => {
  it('converts plugin ID to valid custom element tag', () => {
    expect(pluginIdToTag('bp:transformer-importer')).toBe('plugin-bp-transformer-importer');
    expect(pluginIdToTag('openscd:history-viewer')).toBe('plugin-openscd-history-viewer');
  });
});

describe('isUrlTrusted', () => {
  const trustedOrigins = new Set(['https://plugins.bearingpoint.eu']);

  it('returns true for URL matching a trusted origin', () => {
    expect(
      isUrlTrusted('https://plugins.bearingpoint.eu/transformer-importer.js', trustedOrigins)
    ).toBe(true);
  });

  it('returns false for URL from an untrusted origin', () => {
    expect(
      isUrlTrusted('https://malicious.example.com/evil.js', trustedOrigins)
    ).toBe(false);
  });

  it('returns false for non-HTTPS URLs', () => {
    expect(
      isUrlTrusted('http://plugins.bearingpoint.eu/plugin.js', trustedOrigins)
    ).toBe(false);
  });

  it('returns false for invalid URLs', () => {
    expect(isUrlTrusted('not-a-url', trustedOrigins)).toBe(false);
  });

  it('returns false when trusted origins set is empty', () => {
    expect(isUrlTrusted('https://plugins.bearingpoint.eu/plugin.js', new Set())).toBe(false);
  });
});
