import { describe, it, expect } from 'vitest';
import type { Plugin } from '../types/plugin';
import type { Provider } from '../types/provider';
import {
  registrationName,
  pluginIdentityKey,
  hubPluginKey,
  matchesStoredPlugin,
  sameHubPlugin,
  isUrlTrusted,
} from './plugin-loader';

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

describe('plugin identity helpers', () => {
  const provider: Provider = {
    prefix: 'BP',
    name: 'BearingPoint',
    icon: 'hub',
    description: 't',
  };

  it('pluginIdentityKey combines host name and kind', () => {
    expect(pluginIdentityKey('BP - PluginHub', 'editor')).toBe(
      'BP - PluginHub\0editor',
    );
  });

  it('hubPluginKey uses registration name', () => {
    const plugin = {
      name: 'PluginHub',
      kind: 'editor' as const,
      provider,
    };
    expect(hubPluginKey(plugin)).toBe(pluginIdentityKey('BP - PluginHub', 'editor'));
  });

  it('matchesStoredPlugin compares name and kind only', () => {
    expect(
      matchesStoredPlugin(
        {
          name: 'BP - PluginHub',
          kind: 'editor',
          src: '/old.js',
          icon: 'e',
          active: true,
        },
        'BP - PluginHub',
        'editor',
      ),
    ).toBe(true);
    expect(
      matchesStoredPlugin(
        {
          name: 'BP - PluginHub',
          kind: 'menu',
          src: '/old.js',
          icon: 'e',
          active: true,
        },
        'BP - PluginHub',
        'editor',
      ),
    ).toBe(false);
  });

  it('sameHubPlugin is true when registration name+kind match', () => {
    const a = {
      name: 'PluginHub',
      kind: 'editor' as const,
      provider,
      src: '/1.js',
    } as Pick<Plugin, 'name' | 'kind' | 'provider'>;
    const b = {
      name: 'PluginHub',
      kind: 'editor' as const,
      provider,
      src: '/2.js',
    } as Pick<Plugin, 'name' | 'kind' | 'provider'>;
    expect(sameHubPlugin(a, b)).toBe(true);
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
