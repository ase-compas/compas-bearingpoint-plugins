/**
 * Minimal typing for the OpenSCD / CoMPAS host custom element.
 * TypeScript `private` methods on the host are still callable at runtime.
 */
export interface OpenScdHost extends HTMLElement {
  getBuiltInPlugins?(): unknown;
}

export type HostEdition = 'compas' | 'open-scd';

/**
 * Returns the OpenSCD host element (`<open-scd>`) or null if not found.
 */
export function getOpenSCDHost(): OpenScdHost | null {
  return document.querySelector('open-scd');
}

/**
 * Returns the `<compas-layout>` or `<oscd-layout>` inside the OpenSCD shadow DOM,
 * or null if not found.
 */
export function getLayout(): HTMLElement | null {
  const openScd = getOpenSCDHost();
  if (!openScd?.shadowRoot) return null;
  return (
    openScd.shadowRoot.querySelector('compas-layout') ??
    openScd.shadowRoot.querySelector('oscd-layout') ??
    null
  );
}

/**
 * Detects CoMPAS vs plain Open-SCD edition.
 * Primary: layout tag from {@link getLayout}; secondary: `compas-session`.
 */
export function detectHostEdition(): HostEdition | null {
  const layout = getLayout();
  if (layout?.localName === 'compas-layout') return 'compas';
  if (layout?.localName === 'oscd-layout') return 'open-scd';

  const host = getOpenSCDHost();
  if (!host) return null;
  if (host.shadowRoot?.querySelector('compas-session')) return 'compas';
  // Both editions use <open-scd>; default to open-scd when host exists.
  return 'open-scd';
}

/**
 * Reads the host built-in plugin catalogue via getBuiltInPlugins().
 * Returns [] if the host or method is missing.
 */
export function getBuiltInPluginsFromHost(
  getHost: () => OpenScdHost | null = getOpenSCDHost,
): unknown[] {
  const host = getHost();
  const list = host?.getBuiltInPlugins?.();
  return Array.isArray(list) ? list : [];
}
