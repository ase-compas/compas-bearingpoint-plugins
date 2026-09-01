import { describe, expect, it } from 'vitest';
import type { Plugin } from '../types/plugin';
import type { Provider } from '../types/provider';
import type { StoredPlugin } from '../types/stored-plugin';
import {
  activatePlugin,
  buildPlugin,
  deactivatePlugin,
  dedupeStoredPluginsByNameAndKind,
  installPlugin,
  normalizeStoredPlugins,
  markPluginsOverlappingBuiltins,
  uninstallPlugin,
} from './plugin-store';

function stored(
  partial: Partial<StoredPlugin> & Pick<StoredPlugin, 'name' | 'src'>,
): StoredPlugin {
  return {
    kind: 'editor',
    icon: 'edit',
    active: false,
    ...partial,
  };
}

const remoteProvider: Provider = {
  prefix: 'BP',
  name: 'BearingPoint',
  icon: 'hub',
  description: 'test',
  pluginsUrl: 'https://example.com/plugins.json',
};

const builtinProvider: Provider = {
  name: 'CoMPAS Plugins',
  icon: 'c',
  description: 'builtin',
  source: 'builtin',
};

describe('dedupeStoredPluginsByNameAndKind', () => {
  it('returns empty array for empty input', () => {
    expect(dedupeStoredPluginsByNameAndKind([])).toEqual([]);
  });

  it('keeps unique name+kind entries in insertion order', () => {
    const input = [
      stored({ name: 'A', src: '/a.js' }),
      stored({ name: 'B', src: '/b.js' }),
    ];
    const result = dedupeStoredPluginsByNameAndKind(input);
    expect(result).toHaveLength(2);
    expect(result.map((p) => p.name)).toEqual(['A', 'B']);
  });

  it('allows same name with different kinds', () => {
    const input = [
      stored({ name: 'Same', src: '/a.js', kind: 'editor' }),
      stored({ name: 'Same', src: '/b.js', kind: 'menu' }),
    ];
    const result = dedupeStoredPluginsByNameAndKind(input);
    expect(result).toHaveLength(2);
  });

  it('collapses same name+kind with different src (last-wins fields)', () => {
    const input = [
      stored({
        name: 'PluginHub',
        src: 'https://cdn.example/1.2.0/index.js',
        icon: 'old',
        active: false,
      }),
      stored({
        name: 'PluginHub',
        src: 'https://cdn.example/1.3.0/index.js',
        icon: 'new',
        active: false,
      }),
    ];
    const result = dedupeStoredPluginsByNameAndKind(input);
    expect(result).toHaveLength(1);
    expect(result[0].src).toBe('https://cdn.example/1.3.0/index.js');
    expect(result[0].icon).toBe('new');
  });

  it('OR-merges active so an enabled duplicate is preserved', () => {
    const input = [
      stored({ name: 'P', src: '/old.js', active: true }),
      stored({ name: 'P', src: '/new.js', active: false }),
    ];
    const result = dedupeStoredPluginsByNameAndKind(input);
    expect(result).toHaveLength(1);
    expect(result[0].active).toBe(true);
    expect(result[0].src).toBe('/new.js');
  });

  it('keeps active when the last duplicate is active', () => {
    const input = [
      stored({ name: 'P', src: '/old.js', active: false }),
      stored({ name: 'P', src: '/new.js', active: true }),
    ];
    expect(dedupeStoredPluginsByNameAndKind(input)[0].active).toBe(true);
  });

  it('drops entries with missing name, kind, or src', () => {
    const input = [
      stored({ name: 'Ok', src: '/ok.js' }),
      { name: '', src: '/x.js', kind: 'editor', icon: 'e', active: true },
      { name: 'NoKind', src: '/y.js', kind: '', icon: 'e', active: true },
      { name: 'NoSrc', kind: 'editor', icon: 'e', active: true } as StoredPlugin,
      stored({ name: 'EmptySrc', src: '' }),
    ] as StoredPlugin[];
    const result = dedupeStoredPluginsByNameAndKind(input);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Ok');
  });
});

describe('normalizeStoredPlugins', () => {
  it('returns empty array when input is missing', () => {
    expect(normalizeStoredPlugins(undefined)).toEqual([]);
  });

  it('returns empty array when input is not an array', () => {
    expect(normalizeStoredPlugins({ name: 'x' })).toEqual([]);
    expect(normalizeStoredPlugins('[]')).toEqual([]);
    expect(normalizeStoredPlugins(null)).toEqual([]);
  });

  it('deduplicates by name+kind', () => {
    const result = normalizeStoredPlugins([
      stored({
        name: 'BP - PluginHub',
        src: 'https://cdn.example/1.0.0/x.js',
        active: true,
      }),
      stored({
        name: 'BP - PluginHub',
        src: 'https://cdn.example/1.1.0/x.js',
        active: false,
      }),
      stored({
        name: 'Other',
        src: 'https://cdn.example/y.js',
        active: false,
      }),
    ]);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('BP - PluginHub');
    expect(result[0].src).toBe('https://cdn.example/1.1.0/x.js');
    expect(result[0].active).toBe(true);
    expect(result[1].name).toBe('Other');
  });
});

describe('buildPlugin identity matching', () => {
  it('matches stored install state by registration name+kind when src differs', () => {
    const storedList = [
      stored({
        name: 'BP - Transformer Importer',
        src: 'https://cdn.example/1.0.0/old.js',
        active: true,
      }),
    ];
    const plugin = buildPlugin(
      {
        name: 'Transformer Importer',
        src: 'https://cdn.example/2.0.0/new.js',
        kind: 'editor',
        icon: 'account_tree',
        description: 'd',
      },
      remoteProvider,
      storedList,
    );
    expect(plugin.installationState).toBe('INSTALLED');
    expect(plugin.activationState).toBe('ACTIVE');
    expect(plugin.src).toBe('https://cdn.example/2.0.0/new.js');
  });

  it('does not match when kind differs', () => {
    const storedList = [
      stored({
        name: 'BP - Transformer Importer',
        src: 'https://cdn.example/x.js',
        kind: 'menu',
        active: true,
      }),
    ];
    const plugin = buildPlugin(
      {
        name: 'Transformer Importer',
        src: 'https://cdn.example/x.js',
        kind: 'editor',
        icon: 'account_tree',
        description: 'd',
      },
      remoteProvider,
      storedList,
    );
    expect(plugin.installationState).toBe('AVAILABLE');
    expect(plugin.activationState).toBe('INACTIVE');
  });

  it('matches builtin by plain name+kind even when stored src differs', () => {
    const storedList = [
      stored({
        name: 'Cleanup',
        src: '/plugins/dist/editors/Cleanup-v2.js',
        active: true,
      }),
    ];
    const plugin = buildPlugin(
      {
        name: 'Cleanup',
        src: '/plugins/dist/editors/Cleanup.js',
        kind: 'editor',
        icon: 'cleaning_services',
        description: 'Built-in editor plugin',
      },
      builtinProvider,
      storedList,
      { builtin: true, activeByDefault: false },
    );
    expect(plugin.installationState).toBe('INSTALLED');
    expect(plugin.activationState).toBe('ACTIVE');
  });
});

describe('markPluginsOverlappingBuiltins', () => {
  function makePlugin(partial: Partial<Plugin> & Pick<Plugin, 'name'>): Plugin {
    return {
      src: '/a.js',
      kind: 'editor',
      icon: 'edit',
      description: 'd',
      provider: remoteProvider,
      kindText: 'Editor plugin',
      kindIcon: 'tab',
      installationState: 'AVAILABLE',
      activationState: 'INACTIVE',
      ...partial,
    };
  }

  it('marks remote when registration name+kind matches host built-in name', () => {
    // Host built-in name is already the full registration identity ("BP - Cleanup").
    // Remote "Cleanup" with prefix BP → registration "BP - Cleanup".
    const plugins = markPluginsOverlappingBuiltins([
      makePlugin({
        name: 'BP - Cleanup',
        provider: builtinProvider,
        builtin: true,
        src: '/plugins/dist/editors/Cleanup.js',
        installationState: 'INSTALLED',
        activationState: 'ACTIVE',
        activeByDefault: true,
        requireDoc: true,
      }),
      makePlugin({
        name: 'Cleanup',
        src: 'https://cdn.example/cleanup.js',
        installationState: 'AVAILABLE',
        activationState: 'INACTIVE',
      }),
      makePlugin({
        name: 'Other',
        src: 'https://cdn.example/other.js',
      }),
    ]);

    expect(plugins[1].shadowedByHostBuiltin).toBe(true);
    expect(plugins[1].builtin).toBeFalsy();
    expect(plugins[1].installationState).toBe('INSTALLED');
    expect(plugins[1].activationState).toBe('ACTIVE');
    expect(plugins[1].activeByDefault).toBe(true);
    expect(plugins[1].requireDoc).toBe(true);
    expect(plugins[1].provider.name).toBe(remoteProvider.name);
    expect(plugins[1].src).toBe('https://cdn.example/cleanup.js');
    expect(plugins[2].shadowedByHostBuiltin).toBeFalsy();
    expect(plugins[2].installationState).toBe('AVAILABLE');
  });

  it('does not mark remote when registration name differs from built-in name', () => {
    // Built-in plain "Cleanup" ≠ remote registration "BP - Cleanup"
    const plugins = markPluginsOverlappingBuiltins([
      makePlugin({
        name: 'Cleanup',
        provider: builtinProvider,
        builtin: true,
        installationState: 'INSTALLED',
      }),
      makePlugin({
        name: 'Cleanup',
        src: 'https://cdn.example/cleanup.js',
      }),
    ]);
    expect(plugins[1].shadowedByHostBuiltin).toBeFalsy();
  });

  it('does not mark remote when only kind differs', () => {
    const plugins = markPluginsOverlappingBuiltins([
      makePlugin({
        name: 'BP - Cleanup',
        kind: 'editor',
        provider: builtinProvider,
        builtin: true,
        installationState: 'INSTALLED',
      }),
      makePlugin({
        name: 'Cleanup',
        kind: 'menu',
        src: 'https://cdn.example/cleanup-menu.js',
      }),
    ]);
    expect(plugins[1].shadowedByHostBuiltin).toBeFalsy();
  });
});

describe('install / uninstall / activate / deactivate by identity', () => {
  function makePlugin(partial: Partial<Plugin> & Pick<Plugin, 'name'>): Plugin {
    return {
      src: '/a.js',
      kind: 'editor',
      icon: 'edit',
      description: 'd',
      provider: remoteProvider,
      kindText: 'Editor plugin',
      kindIcon: 'tab',
      installationState: 'AVAILABLE',
      activationState: 'INACTIVE',
      ...partial,
    };
  }

  it('installPlugin updates only the matching name+kind', () => {
    const plugins = [
      makePlugin({ name: 'A', src: '/a-old.js' }),
      makePlugin({ name: 'B', src: '/b.js' }),
    ];
    const updated = installPlugin(plugins, plugins[0]);
    expect(updated[0].installationState).toBe('INSTALLED');
    expect(updated[1].installationState).toBe('AVAILABLE');
  });

  it('installPlugin leaves host-shadowed remotes unchanged', () => {
    const plugins = [
      makePlugin({
        name: 'Cleanup',
        shadowedByHostBuiltin: true,
        installationState: 'INSTALLED',
        activationState: 'ACTIVE',
      }),
    ];
    const updated = installPlugin(plugins, plugins[0]);
    expect(updated[0].installationState).toBe('INSTALLED');
    expect(updated[0].activationState).toBe('ACTIVE');
  });

  it('activatePlugin and deactivatePlugin target by identity', () => {
    const plugins = [
      makePlugin({
        name: 'A',
        installationState: 'INSTALLED',
        activationState: 'INACTIVE',
      }),
    ];
    const active = activatePlugin(plugins, plugins[0]);
    expect(active[0].activationState).toBe('ACTIVE');
    const inactive = deactivatePlugin(active, plugins[0]);
    expect(inactive[0].activationState).toBe('INACTIVE');
  });

  it('activatePlugin ignores host-shadowed provider entries', () => {
    const remoteTwin = makePlugin({
      name: 'Cleanup',
      shadowedByHostBuiltin: true,
      src: 'https://cdn.example/cleanup.js',
      installationState: 'INSTALLED',
      activationState: 'INACTIVE',
    });
    const updated = activatePlugin([remoteTwin], remoteTwin);
    expect(updated[0].activationState).toBe('INACTIVE');
  });

  it('uninstallPlugin refuses built-ins', () => {
    const plugins = [
      makePlugin({
        name: 'Builtin',
        provider: builtinProvider,
        builtin: true,
        installationState: 'INSTALLED',
      }),
    ];
    const { updated, success } = uninstallPlugin(plugins, plugins[0]);
    expect(success).toBe(false);
    expect(updated[0].installationState).toBe('INSTALLED');
  });

  it('uninstallPlugin refuses host-shadowed remotes', () => {
    const plugins = [
      makePlugin({
        name: 'Cleanup',
        shadowedByHostBuiltin: true,
        installationState: 'INSTALLED',
      }),
    ];
    const { updated, success } = uninstallPlugin(plugins, plugins[0]);
    expect(success).toBe(false);
    expect(updated[0].installationState).toBe('INSTALLED');
  });
});
