import { describe, it, expect } from 'vitest';
import type { Plugin } from '../types/plugin';
import type { Provider } from '../types/provider';
import type { StoredPlugin } from '../types/stored-plugin';
import {
  CUSTOM_PROVIDER,
  collectKnownPluginIdentities,
  isKnownStoredPlugin,
  buildCustomPluginsFromStored,
} from './custom-plugin-loader';
import { pluginIdentityKey, registrationName } from './plugin-loader';

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

describe('collectKnownPluginIdentities', () => {
  it('includes registration name+kind keys', () => {
    const known = collectKnownPluginIdentities([
      makePlugin({
        name: 'A',
        src: 'https://example.com/a.js',
      }),
      makePlugin({
        name: 'B',
        src: '/external-api/provider/b.js',
        kind: 'menu',
      }),
    ]);
    expect(
      known.has(
        pluginIdentityKey(registrationName(remoteProvider, 'A'), 'editor'),
      ),
    ).toBe(true);
    expect(
      known.has(
        pluginIdentityKey(registrationName(remoteProvider, 'B'), 'menu'),
      ),
    ).toBe(true);
  });
});

describe('isKnownStoredPlugin', () => {
  it('matches host name+kind identity', () => {
    const known = new Set([
      pluginIdentityKey('BP - A', 'editor'),
      pluginIdentityKey('Substation', 'editor'),
    ]);
    expect(
      isKnownStoredPlugin(
        {
          name: 'BP - A',
          src: 'https://example.com/a.js',
          kind: 'editor',
          icon: 'e',
          active: true,
        },
        known,
      ),
    ).toBe(true);
    expect(
      isKnownStoredPlugin(
        {
          name: 'X',
          src: 'https://other.com/x.js',
          kind: 'editor',
          icon: 'e',
          active: false,
        },
        known,
      ),
    ).toBe(false);
  });
});

describe('buildCustomPluginsFromStored', () => {
  const known = collectKnownPluginIdentities([
    makePlugin({
      name: 'Substation',
      src: '/plugins/dist/editors/Substation.js',
      provider: { name: 'CoMPAS', icon: 'c', description: 'b', source: 'builtin' },
    }),
    makePlugin({
      name: 'Remote',
      src: 'https://example.com/remote.js',
    }),
  ]);

  it('returns only stored plugins whose name+kind is not in the catalogue', () => {
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

  it('does not treat a version-bumped src as custom when name+kind matches catalogue', () => {
    const catalogue = [
      makePlugin({
        name: 'PluginHub',
        src: 'https://cdn.example.org/plugins-hub/1.3.0/index.js',
      }),
    ];
    const knownIds = collectKnownPluginIdentities(catalogue);
    const stored: StoredPlugin[] = [
      {
        name: 'BP - PluginHub',
        src: 'https://cdn.example.org/plugins-hub/1.2.0/index.js',
        kind: 'editor',
        icon: 'extension',
        active: true,
      },
    ];
    expect(buildCustomPluginsFromStored(stored, knownIds, '0.44.0')).toHaveLength(
      0,
    );
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
