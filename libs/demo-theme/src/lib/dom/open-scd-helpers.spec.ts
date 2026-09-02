import { describe, it, expect, afterEach } from 'vitest';
import {
  detectHostEdition,
  getBuiltInPluginsFromHost,
  getLayout,
  getOpenSCDHost,
  type OpenScdHost,
} from './open-scd-helpers';

afterEach(() => {
  document.body.replaceChildren();
});

describe('getOpenSCDHost', () => {
  it('returns null when no open-scd element exists', () => {
    expect(getOpenSCDHost()).toBeNull();
  });

  it('returns the open-scd element when present', () => {
    const host = document.createElement('open-scd');
    document.body.appendChild(host);
    expect(getOpenSCDHost()).toBe(host);
  });
});

describe('getLayout', () => {
  it('returns null when host has no shadow root', () => {
    document.body.appendChild(document.createElement('open-scd'));
    expect(getLayout()).toBeNull();
  });

  it('returns compas-layout from the host shadow root', () => {
    const host = document.createElement('open-scd');
    const shadow = host.attachShadow({ mode: 'open' });
    const layout = document.createElement('compas-layout');
    shadow.appendChild(layout);
    document.body.appendChild(host);
    expect(getLayout()).toBe(layout);
  });
});

describe('detectHostEdition', () => {
  it('returns null when no host exists', () => {
    expect(detectHostEdition()).toBeNull();
  });

  it('returns compas when layout tag is compas-layout', () => {
    const host = document.createElement('open-scd');
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.appendChild(document.createElement('compas-layout'));
    document.body.appendChild(host);
    expect(detectHostEdition()).toBe('compas');
  });
});

describe('getBuiltInPluginsFromHost', () => {
  it('returns empty array when host is missing', () => {
    expect(getBuiltInPluginsFromHost(() => null)).toEqual([]);
  });

  it('returns the host catalogue when present', () => {
    const list = [{ name: 'Substation' }];
    const host = {
      getBuiltInPlugins: () => list,
    } as unknown as OpenScdHost;
    expect(getBuiltInPluginsFromHost(() => host)).toEqual(list);
  });
});
