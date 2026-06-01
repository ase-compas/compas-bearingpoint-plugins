import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { proxyUrl } from './proxy-url';

describe('proxyUrl', () => {
  // Save original window.location for restoration
  const originalLocation = window.location;

  afterEach(() => {
    // Restore original window.location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true,
    });
  });

  describe('when running on localhost', () => {
    beforeEach(() => {
      // Mock localhost environment
      Object.defineProperty(window, 'location', {
        value: { hostname: 'localhost', pathname: '/', href: 'http://localhost:4201/' },
        writable: true,
        configurable: true,
      });
    });

    it('converts https URL to proxy path', () => {
      const input = 'https://ase-compas.github.io/compas-bearingpoint-plugins/plugins.json';
      const expected = '/proxy/ase-compas.github.io/compas-bearingpoint-plugins/plugins.json';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('converts http URL to proxy path', () => {
      const input = 'http://example.com/api/plugins.json';
      const expected = '/proxy/example.com/api/plugins.json';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('preserves query parameters in proxy path', () => {
      const input = 'https://example.com/plugins.json?v=2&format=json';
      const expected = '/proxy/example.com/plugins.json?v=2&format=json';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('leaves relative URLs unchanged', () => {
      const input = '/local/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('leaves localhost URLs unchanged (prevents double-proxying)', () => {
      const input = 'http://localhost:8181/api/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('leaves 127.0.0.1 URLs unchanged (prevents double-proxying)', () => {
      const input = 'http://127.0.0.1:9000/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('handles URLs with port numbers', () => {
      const input = 'https://example.com:8443/plugins.json';
      const expected = '/proxy/example.com:8443/plugins.json';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('returns relative URLs unchanged', () => {
      const input = './plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('handles data URLs unchanged', () => {
      const input = 'data:text/plain,Hello';
      expect(proxyUrl(input)).toBe(input);
    });
  });

  describe('when running on 127.0.0.1', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        value: { hostname: '127.0.0.1', pathname: '/', href: 'http://127.0.0.1:4201/' },
        writable: true,
        configurable: true,
      });
    });

    it('converts external https URL to proxy path', () => {
      const input = 'https://ase-compas.github.io/plugins.json';
      const expected = '/proxy/ase-compas.github.io/plugins.json';
      expect(proxyUrl(input)).toBe(expected);
    });
  });

  describe('when not running on localhost', () => {
    beforeEach(() => {
      // Mock production environment
      Object.defineProperty(window, 'location', {
        value: { hostname: 'my-app.example.com', pathname: '/', href: 'https://my-app.example.com/' },
        writable: true,
        configurable: true,
      });
    });

    it('returns external URL unchanged', () => {
      const input = 'https://ase-compas.github.io/compas-bearingpoint-plugins/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('returns http URLs unchanged', () => {
      const input = 'http://example.com/api/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });

    it('returns relative URLs unchanged', () => {
      const input = '/local/plugins.json';
      expect(proxyUrl(input)).toBe(input);
    });
  });

  describe('edge cases', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        value: { hostname: 'localhost', pathname: '/', href: 'http://localhost:4201/' },
        writable: true,
        configurable: true,
      });
    });

    it('handles empty path in URL', () => {
      const input = 'https://example.com';
      const expected = '/proxy/example.com/';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('handles URLs with hash fragments', () => {
      const input = 'https://example.com/path#section';
      // Note: hash is not included in URL.pathname or URL.search, so this tests current behavior
      const expected = '/proxy/example.com/path';
      expect(proxyUrl(input)).toBe(expected);
    });

    it('handles malformed URLs gracefully by returning original', () => {
      const input = 'not a valid url at all';
      expect(proxyUrl(input)).toBe(input);
    });

    it('preserves URL encoding in pathname', () => {
      const input = 'https://example.com/path%20with%20spaces/file.json';
      const expected = '/proxy/example.com/path%20with%20spaces/file.json';
      expect(proxyUrl(input)).toBe(expected);
    });
  });
});
