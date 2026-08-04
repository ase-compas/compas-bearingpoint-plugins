import { describe, it, expect } from 'vitest';
import type { Plugin } from '../types/plugin';
import type { Provider } from '../types/provider';
import type { StoredPlugin } from '../types/stored-plugin';
import {
  CUSTOM_PROVIDER,
  collectKnownPluginSrcs,
  isKnownStoredSrc,
  buildCustomPluginsFromStored,
} from './custom-plugin-loader';

const remoteProvider: Provider = {
  prefix: 'BP',
  name: 'BearingPoint',
  icon: 'hub',
  description: 'test',
  pluginsUrl: 'https://example.com/plugins.json',
};

function makePlugin(partial: Partial<Plugin> & Pick<Plugin, 'name' | 'src'>): Plugin {
  return {
    kind: 'editor',
    icon: 'edit',
    description: 'd',
    provider: remoteProvider,
    compatible: true,
    kindText: 'Editor plugin',
    kindIcon: 'tab',
    installationState: 'AVAILABLE',
    activationState: 'INACTIVE',
    ...partial,
  };
}

describe('collectKnownPluginSrcs', () => {
  it('includes raw src values only', () => {
    const known = collectKnownPluginSrcs([
      makePlugin({
        name: 'A',
        src: 'https://example.com/a.js',
      }),
      makePlugin({
        name: 'B',
        src: '/external-api/provider/b.js',
      }),
    ]);
    expect(known.has('https://example.com/a.js')).toBe(true);
    expect(known.has('/external-api/provider/b.js')).toBe(true);
  });
});

describe('isKnownStoredSrc', () => {
  it('matches exact src only', () => {
    const known = new Set(['https://example.com/a.js', '/local/b.js']);
    expect(
      isKnownStoredSrc(
        { name: 'A', src: 'https://example.com/a.js', kind: 'editor', icon: 'e', active: true },
        known,
      ),
    ).toBe(true);
    expect(
      isKnownStoredSrc(
        { name: 'X', src: 'https://other.com/x.js', kind: 'editor', icon: 'e', active: false },
        known,
      ),
    ).toBe(false);
  });
});

describe('buildCustomPluginsFromStored', () => {
  const known = new Set([
    '/plugins/dist/editors/Substation.js',
    'https://example.com/remote.js',
  ]);

  it('returns only stored plugins whose src is not in the catalogue', () => {
    const stored: StoredPlugin[] = [
      {
        name: 'Substation',
        src: '/plugins/dist/editors/Substation.js',
        kind: 'editor',
        icon: 'margin',
        active: true,
      },
      {
        name: 'My Manual Plugin',
        src: 'https://cdn.example.org/manual.js',
        kind: 'menu',
        icon: 'extension',
        active: false,
        position: 'middle',
      },
    ];

    const customs = buildCustomPluginsFromStored(stored, known, '0.44.0');
    expect(customs).toHaveLength(1);
    expect(customs[0].name).toBe('My Manual Plugin');
    expect(customs[0].provider.name).toBe(CUSTOM_PROVIDER.name);
    expect(customs[0].provider.prefix).toBeFalsy();
    expect(customs[0].description).toBe('https://cdn.example.org/manual.js');
    expect(customs[0].src).toBe('https://cdn.example.org/manual.js');
    expect(customs[0].installationState).toBe('INSTALLED');
    expect(customs[0].activationState).toBe('INACTIVE');
    expect(customs[0].builtin).toBe(false);
  });

  it('marks active stored custom plugins as ACTIVE', () => {
    const stored: StoredPlugin[] = [
      {
        name: 'Active Custom',
        src: 'https://cdn.example.org/active.js',
        kind: 'editor',
        icon: 'edit',
        active: true,
      },
    ];
    const customs = buildCustomPluginsFromStored(stored, known, '0.44.0');
    expect(customs[0].activationState).toBe('ACTIVE');
  });

  it('skips invalid kind or missing fields', () => {
    const stored = [
      {
        name: 'Bad',
        src: 'https://x.com/bad.js',
        kind: 'not-a-kind',
        icon: 'e',
        active: true,
      },
      {
        name: '',
        src: 'https://x.com/empty-name.js',
        kind: 'editor',
        icon: 'e',
        active: true,
      },
    ] as StoredPlugin[];
    expect(buildCustomPluginsFromStored(stored, known, '0.44.0')).toHaveLength(0);
  });

  it('returns empty when all stored plugins are known', () => {
    const stored: StoredPlugin[] = [
      {
        name: 'Substation',
        src: '/plugins/dist/editors/Substation.js',
        kind: 'editor',
        icon: 'margin',
        active: true,
      },
    ];
    expect(buildCustomPluginsFromStored(stored, known, '0.44.0')).toHaveLength(0);
  });
});
