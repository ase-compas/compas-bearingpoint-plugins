import { describe, it, expect } from 'vitest';
import { registrationName, isUrlTrusted } from './plugin-loader';

describe('registrationName', () => {
  it('uses prefix - name when prefix is set', () => {
    expect(registrationName({ prefix: 'BP' }, 'Transformer Importer')).toBe(
      'BP - Transformer Importer',
    );
    expect(registrationName({ prefix: 'openscd' }, 'History Viewer')).toBe(
      'openscd - History Viewer',
    );
  });

  it('returns plain name when prefix is missing or empty', () => {
    expect(registrationName({}, 'Substation')).toBe('Substation');
    expect(registrationName({ prefix: '' }, 'IED')).toBe('IED');
    expect(registrationName({ prefix: '   ' }, 'Help')).toBe('Help');
    expect(registrationName(undefined, 'Cleanup')).toBe('Cleanup');
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
