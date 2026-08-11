import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  mapOfficialPluginToManifest,
  loadBuiltinProviders,
} from './builtin-plugin-loader';
import type { OpenScdHost } from '../dom/open-scd-helpers';

describe('mapOfficialPluginToManifest', () => {
  it('maps a valid official plugin entry', () => {
    const m = mapOfficialPluginToManifest(
      {
        name: 'Substation',
        src: '/plugins/dist/editors/Substation.js',
        kind: 'editor',
        icon: 'margin',
        activeByDefault: true,
        requireDoc: true,
      },
      'CoMPAS',
    );
    expect(m).toMatchObject({
      name: 'Substation',
      author: 'CoMPAS',
      kind: 'editor',
      description: 'Built-in editor plugin',
    });
    expect(m).not.toHaveProperty('builtin');
  });

  it('rejects invalid entries', () => {
    expect(mapOfficialPluginToManifest({ name: 'x' }, 'A')).toBeNull();
    expect(
      mapOfficialPluginToManifest(
        { name: 'x', src: '/a.js', kind: 'unknown' },
        'A',
      ),
    ).toBeNull();
  });

  it('falls back to kind icon when icon missing', () => {
    const m = mapOfficialPluginToManifest(
      {
        name: 'Subscriber Update',
        src: '/plugins/dist/menu/SubscriberInfo.js',
        kind: 'menu',
        requireDoc: true,
        activeByDefault: true,
        position: 'middle',
      },
      'Open-SCD',
    );
    expect(m?.icon).toBe('play_circle');
    expect(m?.position).toBe('middle');
  });
});

describe('loadBuiltinProviders', () => {
  it('returns empty when host has no getBuiltInPlugins', () => {
    const results = loadBuiltinProviders([], '0.44.0', {
      getHost: () => null,
      detectEdition: () => 'compas',
    });
    expect(results).toEqual([]);
  });

  it('returns empty when getBuiltInPlugins returns non-array', () => {
    const host = {
      getBuiltInPlugins: () => undefined,
    } as unknown as OpenScdHost;
    const results = loadBuiltinProviders([], '0.44.0', {
      getHost: () => host,
      detectEdition: () => 'open-scd',
    });
    expect(results).toEqual([]);
  });

  it('maps host list to a single CoMPAS provider without prefix', () => {
    const host = {
      getBuiltInPlugins: () => [
        {
          name: 'IED',
          src: '/external-plugins/IedEditor.js',
          kind: 'editor',
          icon: 'developer_board',
          activeByDefault: true,
          requireDoc: true,
        },
        {
          name: 'Invalid',
          src: '/x.js',
          kind: 'nope',
        },
      ],
    } as unknown as OpenScdHost;

    const results = loadBuiltinProviders([], '0.44.0', {
      getHost: () => host,
      detectEdition: () => 'compas',
    });

    expect(results).toHaveLength(1);
    expect(results[0].host).toBe('compas');
    expect(results[0].provider.name).toBe('CoMPAS Plugins');
    expect(results[0].provider.prefix).toBeFalsy();
    expect(results[0].provider.source).toBe('builtin');
    expect(results[0].plugins).toHaveLength(1);
    expect(results[0].plugins[0].name).toBe('IED');
    expect(results[0].plugins[0].src).toBe('/external-plugins/IedEditor.js');
    expect(results[0].plugins[0].builtin).toBe(true);
    expect(results[0].plugins[0].installationState).toBe('INSTALLED');
    expect(results[0].plugins[0].activationState).toBe('ACTIVE');
  });

  it('uses Open-SCD provider branding when edition is open-scd', () => {
    const host = {
      getBuiltInPlugins: () => [
        {
          name: 'Help',
          src: '/plugins/src/menu/Help.js',
          kind: 'menu',
          icon: 'help',
          activeByDefault: false,
          requireDoc: false,
          position: 'bottom',
        },
      ],
    } as unknown as OpenScdHost;

    const results = loadBuiltinProviders([], '1.0.0', {
      getHost: () => host,
      detectEdition: () => 'open-scd',
    });

    expect(results[0].provider.name).toBe('Open-SCD Plugins');
    expect(results[0].plugins[0].activationState).toBe('INACTIVE');
    expect(results[0].plugins[0].activeByDefault).toBe(false);
  });

  it('merges active state from stored plugins by name+kind', () => {
    const host = {
      getBuiltInPlugins: () => [
        {
          name: 'Cleanup',
          src: '/plugins/dist/editors/Cleanup.js',
          kind: 'editor',
          icon: 'cleaning_services',
          activeByDefault: false,
          requireDoc: true,
        },
      ],
    } as unknown as OpenScdHost;

    const results = loadBuiltinProviders(
      [
        {
          name: 'Cleanup',
          // Different src than the builtin catalogue — identity is name+kind
          src: '/plugins/dist/editors/Cleanup-offline.js',
          kind: 'editor',
          icon: 'cleaning_services',
          active: true,
        },
      ],
      '0.44.0',
      { getHost: () => host, detectEdition: () => 'compas' },
    );

    expect(results[0].plugins[0].activationState).toBe('ACTIVE');
    expect(results[0].plugins[0].src).toBe('/plugins/dist/editors/Cleanup.js');
  });
});

describe('detectHostEdition (DOM)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('detects compas-layout', async () => {
    const { detectHostEdition } = await import('../dom/open-scd-helpers');
    const host = document.createElement('open-scd');
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.appendChild(document.createElement('compas-layout'));
    document.body.appendChild(host);
    expect(detectHostEdition()).toBe('compas');
  });

  it('detects oscd-layout', async () => {
    const { detectHostEdition } = await import('../dom/open-scd-helpers');
    const host = document.createElement('open-scd');
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.appendChild(document.createElement('oscd-layout'));
    document.body.appendChild(host);
    expect(detectHostEdition()).toBe('open-scd');
  });
});
