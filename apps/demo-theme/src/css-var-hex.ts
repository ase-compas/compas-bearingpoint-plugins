/**
 * Apply `var(name)` as `property` on a probe under `host` and return the
 * computed value (e.g. `color`, `font-family`, `border-top-left-radius`).
 *
 * @param name CSS custom property, including the leading dashes.
 * @param host Element used as the probe parent (inherits its custom properties).
 * @param property CSS property to resolve, e.g. `font-family`.
 * @returns The computed property value, trimmed.
 */
export function cssVarComputed(
  name: string,
  host: Element,
  property: string,
): string {
  const probe = document.createElement('span');
  probe.style.setProperty(property, `var(${name})`);
  host.appendChild(probe);
  const computed = getComputedStyle(probe).getPropertyValue(property).trim();
  host.removeChild(probe);
  return computed;
}

/**
 * Resolve a CSS custom property to #rrggbb using the computed color on `host`.
 *
 * @param name CSS custom property, including the leading dashes.
 * @param host Element used as the probe parent (inherits its custom properties).
 * @returns `#rrggbb`, or the raw computed color if it cannot be parsed.
 */
export function cssVarToHex(name: string, host: Element): string {
  return rgbToHex(cssVarComputed(name, host, 'color'));
}

function rgbToHex(rgb: string): string {
  const m = rgb.match(/[\d.]+/g);
  if (!m || m.length < 3) return rgb;
  const hex = [m[0], m[1], m[2]]
    .map((n) => Math.round(Number(n)).toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
}
