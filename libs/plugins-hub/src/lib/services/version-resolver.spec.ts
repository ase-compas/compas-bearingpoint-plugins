import { describe, it, expect } from 'vitest';
import { compareSemver, isVersionCompatible } from './version-resolver.ts';

describe('compareSemver', () => {
  it('returns 0 for equal versions', () => {
    expect(compareSemver('1.0.0', '1.0.0')).toBe(0);
    expect(compareSemver('2.3.4', '2.3.4')).toBe(0);
  });

  it('returns -1 when a < b', () => {
    expect(compareSemver('1.0.0', '2.0.0')).toBe(-1);
    expect(compareSemver('1.0.0', '1.1.0')).toBe(-1);
    expect(compareSemver('1.0.0', '1.0.1')).toBe(-1);
  });

  it('returns 1 when a > b', () => {
    expect(compareSemver('2.0.0', '1.0.0')).toBe(1);
    expect(compareSemver('1.1.0', '1.0.0')).toBe(1);
    expect(compareSemver('1.0.1', '1.0.0')).toBe(1);
  });

  it('handles v-prefixed versions', () => {
    expect(compareSemver('v1.2.3', '1.2.3')).toBe(0);
  });

  it('handles pre-release suffixes by ignoring them', () => {
    expect(compareSemver('1.2.3-beta', '1.2.3')).toBe(0);
  });
});

describe('isVersionCompatible', () => {
  it('returns true when coreVersion is within [from, to)', () => {
    expect(isVersionCompatible('1.0.0', '1.0.0', '2.0.0')).toBe(true);
    expect(isVersionCompatible('1.5.0', '1.0.0', '2.0.0')).toBe(true);
    expect(isVersionCompatible('1.99.99', '1.0.0', '2.0.0')).toBe(true);
  });

  it('returns false when coreVersion equals the exclusive upper bound', () => {
    expect(isVersionCompatible('2.0.0', '1.0.0', '2.0.0')).toBe(false);
  });

  it('returns false when coreVersion is below from', () => {
    expect(isVersionCompatible('0.9.0', '1.0.0', '2.0.0')).toBe(false);
  });

  it('returns false when coreVersion is above to', () => {
    expect(isVersionCompatible('3.0.0', '1.0.0', '2.0.0')).toBe(false);
  });
});
