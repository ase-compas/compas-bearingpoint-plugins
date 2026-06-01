import { describe, it, expect } from 'vitest';
import { buildPluginId, isUrlTrusted } from './plugin-loader';

describe('buildPluginId', () => {
  it('combines prefix and slugified name', () => {
    expect(buildPluginId('BP', 'Transformer Importer')).toBe('BP - Transformer Importer');
    expect(buildPluginId('openscd', 'History Viewer')).toBe('openscd - History Viewer');
  });
});

describe('isUrlTrusted', () => {
  const trustedOrigins = new Set(['https://plugins.bearingpoint.eu']);

  it('returns true for absolute domain-relative-paths', () => {
    expect(
      isUrlTrusted('/esternal-api/transformer-importer.js', trustedOrigins)
    ).toBe(true);
  });

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
