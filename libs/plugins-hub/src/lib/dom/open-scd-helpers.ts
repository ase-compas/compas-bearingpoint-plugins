/**
 * Returns the OpenSCD host element (`<open-scd>`) or null if not found.
 */
function getOpenSCDHost(): HTMLElement | null {
  return document.querySelector('open-scd');
}

/**
 * Returns the `<compas-layout>` element or the  `<oscd-layout>` inside the OpenSCD shadow DOM, or null if not found.
 */
export function getLayout(): HTMLElement | null {
  const openScd = getOpenSCDHost();
  if (!openScd?.shadowRoot) return null;
  return (
    openScd.shadowRoot?.querySelector('compas-layout') ??
    openScd.shadowRoot?.querySelector('oscd-layout') ??
    null
  );
}
