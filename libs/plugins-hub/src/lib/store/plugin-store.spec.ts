import { afterEach, describe, expect, it } from 'vitest';
import type { StoredPlugin } from '../types/stored-plugin';
import { dedupeStoredPluginsBySrc, loadStoredPlugins } from './plugin-store';

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

describe('dedupeStoredPluginsBySrc', () => {
  it('returns empty array for empty input', () => {
    expect(dedupeStoredPluginsBySrc([])).toEqual([]);
  });

  it('keeps unique src entries in insertion order', () => {
    const input = [
      stored({ name: 'A', src: '/a.js' }),
      stored({ name: 'B', src: '/b.js' }),
    ];
    const result = dedupeStoredPluginsBySrc(input);
    expect(result).toHaveLength(2);
    expect(result.map((p) => p.src)).toEqual(['/a.js', '/b.js']);
  });

  it('collapses duplicate src to a single entry (last-wins fields)', () => {
    const input = [
      stored({ name: 'First', src: '/same.js', icon: 'old', active: false }),
      stored({ name: 'Second', src: '/same.js', icon: 'new', active: false }),
    ];
    const result = dedupeStoredPluginsBySrc(input);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Second');
    expect(result[0].icon).toBe('new');
    expect(result[0].src).toBe('/same.js');
  });

  it('OR-merges active so an enabled duplicate is preserved', () => {
    const input = [
      stored({ name: 'Active', src: '/p.js', active: true }),
      stored({ name: 'Inactive', src: '/p.js', active: false }),
    ];
    const result = dedupeStoredPluginsBySrc(input);
    expect(result).toHaveLength(1);
    expect(result[0].active).toBe(true);
    expect(result[0].name).toBe('Inactive');
  });

  it('keeps active when the last duplicate is active', () => {
    const input = [
      stored({ name: 'Off', src: '/p.js', active: false }),
      stored({ name: 'On', src: '/p.js', active: true }),
    ];
    expect(dedupeStoredPluginsBySrc(input)[0].active).toBe(true);
  });

  it('drops entries with missing or empty src', () => {
    const input = [
      stored({ name: 'Ok', src: '/ok.js' }),
      { name: 'NoSrc', kind: 'editor', icon: 'e', active: true } as StoredPlugin,
      stored({ name: 'Empty', src: '' }),
    ];
    const result = dedupeStoredPluginsBySrc(input);
    expect(result).toHaveLength(1);
    expect(result[0].src).toBe('/ok.js');
  });
});

describe('loadStoredPlugins', () => {
  afterEach(() => {
    localStorage.removeItem('plugins');
  });

  it('returns empty array when key is missing', () => {
    expect(loadStoredPlugins()).toEqual([]);
  });

  it('returns empty array for invalid JSON', () => {
    localStorage.setItem('plugins', '{not-json');
    expect(loadStoredPlugins()).toEqual([]);
  });

  it('returns empty array when JSON is not an array', () => {
    localStorage.setItem('plugins', JSON.stringify({ name: 'x' }));
    expect(loadStoredPlugins()).toEqual([]);
  });

  it('deduplicates by src after reading localStorage', () => {
    localStorage.setItem(
      'plugins',
      JSON.stringify([
        stored({ name: 'A', src: 'https://cdn.example/x.js', active: true }),
        stored({ name: 'B', src: 'https://cdn.example/x.js', active: false }),
        stored({ name: 'C', src: 'https://cdn.example/y.js', active: false }),
      ]),
    );
    const result = loadStoredPlugins();
    expect(result).toHaveLength(2);
    expect(result[0].src).toBe('https://cdn.example/x.js');
    expect(result[0].active).toBe(true);
    expect(result[0].name).toBe('B');
    expect(result[1].src).toBe('https://cdn.example/y.js');
  });
});
