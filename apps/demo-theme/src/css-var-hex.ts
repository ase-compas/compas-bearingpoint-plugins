/**
 * Resolve a CSS custom property to #rrggbb using the computed color on `host`.
 */
export function cssVarToHex(name: string, host: Element): string {
  const probe = document.createElement('span');
  probe.style.color = `var(${name})`;
  host.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  host.removeChild(probe);
  return rgbToHex(computed);
}

function rgbToHex(rgb: string): string {
  const m = rgb.match(/[\d.]+/g);
  if (!m || m.length < 3) return rgb;
  const hex = [m[0], m[1], m[2]]
    .map((n) => Math.round(Number(n)).toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
}
