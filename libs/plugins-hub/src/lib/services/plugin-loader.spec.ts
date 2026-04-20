import { describe, it, expect } from 'vitest';
import { slugify, buildPluginId, pluginIdToTag } from './plugin-loader.ts';

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
