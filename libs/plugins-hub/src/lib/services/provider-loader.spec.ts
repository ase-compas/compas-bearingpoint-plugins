import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Provider } from '../types/provider.ts';
import { loadProvider } from './provider-loader.ts';

const mockProvider: Provider = {
  prefix: 'bp',
  name: 'BearingPoint Plugins',
  icon: 'https://example.com/icon.svg',
  description: 'Test provider',
  pluginsUrl: 'https://example.com/plugins.json',
};

const validPlugin = {
  name: 'Transformer Importer',
  description: 'Imports transformer models.',
  url: 'https://example.com/transformer-importer.js',
  icon: 'https://example.com/icon.svg',
  supportedCoreVersion: { from: '1.0.0', to: '2.0.0' },
};

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('loadProvider', () => {
  it('returns plugins on successful fetch', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [validPlugin],
    } as Response);

    const result = await loadProvider(mockProvider);

    expect(result.error).toBeUndefined();
    expect(result.plugins).toHaveLength(1);
    expect(result.plugins[0].name).toBe('Transformer Importer');
  });

  it('returns error on non-ok response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response);

    const result = await loadProvider(mockProvider);

    expect(result.plugins).toHaveLength(0);
    expect(result.error).toContain('404');
  });

  it('returns error when response is not an array', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ notAnArray: true }),
    } as Response);

    const result = await loadProvider(mockProvider);

    expect(result.plugins).toHaveLength(0);
    expect(result.error).toContain('array');
  });

  it('skips invalid plugin entries', async () => {
    const invalidPlugin = { name: 'Invalid' }; // missing required fields
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [validPlugin, invalidPlugin],
    } as Response);

    const result = await loadProvider(mockProvider);

    expect(result.plugins).toHaveLength(1);
  });

  it('returns error on network failure', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const result = await loadProvider(mockProvider);

    expect(result.plugins).toHaveLength(0);
    expect(result.error).toContain('Network error');
  });
});
