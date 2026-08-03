import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  buildBuiltinCandidates,
  getAppBasePath,
  resolveAgainstHostOrigin,
  mapOfficialPluginToManifest,
  loadBuiltinProviders,
  tryLoadOfficialPlugins,
  writeBuiltinProbeCacheFromSuccesses,
  readBuiltinProbeCache,
  clearBuiltinProbeCache,
  writeBuiltinProbeCache,
  BUILTIN_PROBE_CACHE_KEY,
} from './builtin-plugin-loader';

const HOST_ORIGIN = 'http://localhost:8080';

describe('getAppBasePath', () => {
  it('returns / for root', () => {
    expect(getAppBasePath('/')).toBe('/');
  });

  it('ensures trailing slash without stripping path segments', () => {
    expect(getAppBasePath('/openscd')).toBe('/openscd/');
    expect(getAppBasePath('/openscd/')).toBe('/openscd/');
  });
});

describe('resolveAgainstHostOrigin', () => {
  it('resolves root-relative paths against the host origin', () => {
    expect(resolveAgainstHostOrigin('/public/js/plugins.js', HOST_ORIGIN)).toBe(
      'http://localhost:8080/public/js/plugins.js',
    );
  });

  it('remaps absolute URLs from another origin onto the host origin path', () => {
    expect(
      resolveAgainstHostOrigin(
        'http://localhost:4301/public/js/plugins.js',
        HOST_ORIGIN,
      ),
    ).toBe('http://localhost:8080/public/js/plugins.js');
  });
});

describe('buildBuiltinCandidates', () => {
  it('includes CoMPAS and Open-SCD absolute host URLs and dedupes', () => {
    const list = buildBuiltinCandidates('/openscd/', HOST_ORIGIN);
    const urls = list.map((c) => c.url);
    expect(urls).toContain('http://localhost:8080/public/js/plugins.js');
    expect(urls).toContain('http://localhost:8080/openscd/src/plugins.js');
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('uses base path for relative open-scd candidate on host origin', () => {
    const list = buildBuiltinCandidates('/app/', HOST_ORIGIN);
    expect(
      list.some((c) => c.url === 'http://localhost:8080/app/src/plugins.js'),
    ).toBe(true);
  });
});

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
    // Host-only fields live on Plugin (via buildPlugin options), not the manifest
    expect(m).not.toHaveProperty('builtin');
    expect(m).not.toHaveProperty('activeByDefault');
    expect(m).not.toHaveProperty('requireDoc');
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

describe('tryLoadOfficialPlugins', () => {
  it('returns array when module exports officialPlugins', async () => {
    const raw = await tryLoadOfficialPlugins('/x.js', async () => ({
      officialPlugins: [{ name: 'A', src: '/a.js', kind: 'editor' }],
    }));
    expect(raw).toHaveLength(1);
  });

  it('returns null on import failure or invalid shape', async () => {
    expect(
      await tryLoadOfficialPlugins('/x.js', async () => {
        throw new Error('404');
      }),
    ).toBeNull();
    expect(
      await tryLoadOfficialPlugins('/x.js', async () => ({})),
    ).toBeNull();
  });
});

describe('writeBuiltinProbeCacheFromSuccesses / read', () => {
  beforeEach(() => {
    clearBuiltinProbeCache();
  });

  it('writes { ts, buildInProviders } for all successes', () => {
    writeBuiltinProbeCacheFromSuccesses([
      { host: 'compas', url: '/public/js/plugins.js' },
      { host: 'open-scd', url: '/openscd/src/plugins.js' },
    ]);
    const cache = readBuiltinProbeCache();
    expect(cache?.buildInProviders).toEqual([
      { host: 'compas', url: '/public/js/plugins.js' },
      { host: 'open-scd', url: '/openscd/src/plugins.js' },
    ]);
    expect(typeof cache?.ts).toBe('number');
  });

  it('does not write when successes is empty', () => {
    writeBuiltinProbeCacheFromSuccesses([]);
    expect(readBuiltinProbeCache()).toBeNull();
    expect(localStorage.getItem(BUILTIN_PROBE_CACHE_KEY)).toBeNull();
  });

  it('rejects legacy cache shapes', () => {
    localStorage.setItem(
      BUILTIN_PROBE_CACHE_KEY,
      JSON.stringify({ hosts: ['compas'], urls: ['/public/js/plugins.js'] }),
    );
    expect(readBuiltinProbeCache()).toBeNull();
  });
});

describe('loadBuiltinProviders', () => {
  beforeEach(() => {
    clearBuiltinProbeCache();
  });

  it('initial: returns both providers and caches all successes (dual-dev)', async () => {
    const importFn = vi.fn(async (url: string) => {
      if (url === `${HOST_ORIGIN}/public/js/plugins.js`) {
        return {
          officialPlugins: [
            {
              name: 'CoMPAS Dummy',
              src: '/external-api/provider/compas-builtin-dummy.js',
              kind: 'editor',
              icon: 'extension',
              activeByDefault: false,
              requireDoc: true,
            },
          ],
        };
      }
      if (
        url === `${HOST_ORIGIN}/openscd/src/plugins.js` ||
        url.endsWith('/src/plugins.js')
      ) {
        return {
          officialPlugins: [
            {
              name: 'OpenSCD Dummy',
              src: '/external-api/provider/openscd-builtin-dummy.js',
              kind: 'menu',
              icon: 'extension',
              activeByDefault: true,
              requireDoc: false,
              position: 'middle',
            },
          ],
        };
      }
      throw new Error('not found');
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(2);
    expect(results.map((r) => r.host).sort()).toEqual(['compas', 'open-scd']);
    expect(results[0].plugins[0].builtin).toBe(true);
    expect(results[0].plugins[0].id).toBe(results[0].plugins[0].name);
    expect(results[0].plugins[0].installationState).toBe('INSTALLED');

    const cache = readBuiltinProbeCache();
    expect(cache?.buildInProviders).toHaveLength(2);
    expect(cache?.buildInProviders.map((p) => p.host).sort()).toEqual([
      'compas',
      'open-scd',
    ]);
    expect(
      cache?.buildInProviders.every((p) => p.url.startsWith(HOST_ORIGIN)),
    ).toBe(true);
  });

  it('initial: single host success writes single cache entry with host origin', async () => {
    const importFn = vi.fn(async (url: string) => {
      if (url === `${HOST_ORIGIN}/public/js/plugins.js`) {
        return {
          officialPlugins: [
            {
              name: 'IED',
              src: '/external-plugins/IedEditor.js',
              kind: 'editor',
              icon: 'developer_board',
              activeByDefault: true,
              requireDoc: true,
            },
          ],
        };
      }
      throw new Error('not found');
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(1);
    expect(results[0].host).toBe('compas');
    expect(results[0].plugins[0].id).toBe('IED');
    expect(results[0].plugins[0].activationState).toBe('ACTIVE');
    expect(readBuiltinProbeCache()?.buildInProviders).toEqual([
      {
        host: 'compas',
        url: 'http://localhost:8080/public/js/plugins.js',
      },
    ]);
  });

  it('initial: zero successes does not write cache', async () => {
    const importFn = vi.fn(async () => {
      throw new Error('not found');
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(0);
    expect(readBuiltinProbeCache()).toBeNull();
  });

  it('follow-up: loads only cached providers (does not probe others)', async () => {
    writeBuiltinProbeCache({
      ts: Date.now(),
      buildInProviders: [
        { host: 'compas', url: `${HOST_ORIGIN}/public/js/plugins.js` },
      ],
    });

    const importFn = vi.fn(async (url: string) => {
      if (url === `${HOST_ORIGIN}/public/js/plugins.js`) {
        return {
          officialPlugins: [
            {
              name: 'IED',
              src: '/external-plugins/IedEditor.js',
              kind: 'editor',
              icon: 'developer_board',
              activeByDefault: true,
              requireDoc: true,
            },
          ],
        };
      }
      // Would succeed if probed — must not be called on cache hit
      if (url.includes('openscd') || url.endsWith('src/plugins.js')) {
        return {
          officialPlugins: [
            {
              name: 'OpenSCD Dummy',
              src: '/x.js',
              kind: 'editor',
              icon: 'extension',
            },
          ],
        };
      }
      throw new Error('not found');
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(1);
    expect(results[0].host).toBe('compas');
    const probedUrls = importFn.mock.calls.map((c) => c[0] as string);
    expect(probedUrls).toEqual([`${HOST_ORIGIN}/public/js/plugins.js`]);
    // Cache retained on success
    expect(readBuiltinProbeCache()?.buildInProviders).toHaveLength(1);
  });

  it('follow-up: remaps stale plugin-origin cache URLs onto host origin', async () => {
    writeBuiltinProbeCache({
      ts: Date.now(),
      buildInProviders: [
        {
          host: 'compas',
          url: 'http://localhost:4301/public/js/plugins.js',
        },
      ],
    });

    const importFn = vi.fn(async (url: string) => {
      if (url === `${HOST_ORIGIN}/public/js/plugins.js`) {
        return {
          officialPlugins: [
            {
              name: 'IED',
              src: '/external-plugins/IedEditor.js',
              kind: 'editor',
              icon: 'developer_board',
              activeByDefault: true,
              requireDoc: true,
            },
          ],
        };
      }
      throw new Error(`unexpected url: ${url}`);
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(1);
    expect(importFn).toHaveBeenCalledWith(
      'http://localhost:8080/public/js/plugins.js',
    );
  });

  it('follow-up: clears cache when all cached providers fail', async () => {
    writeBuiltinProbeCache({
      ts: Date.now(),
      buildInProviders: [
        { host: 'compas', url: `${HOST_ORIGIN}/public/js/plugins.js` },
        { host: 'open-scd', url: `${HOST_ORIGIN}/openscd/src/plugins.js` },
      ],
    });

    const importFn = vi.fn(async () => {
      throw new Error('offline');
    });

    const results = await loadBuiltinProviders([], '0.44.0', {
      importFn,
      pathname: '/',
      origin: HOST_ORIGIN,
    });

    expect(results).toHaveLength(0);
    expect(readBuiltinProbeCache()).toBeNull();
  });

  it('merges active state from stored plugins by src', async () => {
    const importFn = async (url: string) => {
      if (url !== `${HOST_ORIGIN}/public/js/plugins.js`) throw new Error('nf');
      return {
        officialPlugins: [
          {
            name: 'Cleanup',
            src: '/plugins/dist/editors/Cleanup.js',
            kind: 'editor',
            icon: 'cleaning_services',
            activeByDefault: false,
            requireDoc: true,
          },
        ],
      };
    };

    const results = await loadBuiltinProviders(
      [
        {
          name: 'Cleanup',
          src: '/plugins/dist/editors/Cleanup.js',
          kind: 'editor',
          icon: 'cleaning_services',
          active: true,
        },
      ],
      '0.44.0',
      { importFn, pathname: '/', origin: HOST_ORIGIN },
    );

    expect(results[0].plugins[0].activationState).toBe('ACTIVE');
  });
});
