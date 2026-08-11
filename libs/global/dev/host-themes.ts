/**
 * Dev-only host theme meta (labels + class names).
 * Variable values live in host-theme-presets.css — one class per brand+mode
 * (e.g. html.bearingpoint-light). Production must never import this.
 */

export type ThemeMode = 'light' | 'dark';
export type ThemeBrand = 'openscd' | 'transnetbw' | 'bearingpoint';

export interface HostThemePreset {
  brand: ThemeBrand;
  label: string;
}

export const HOST_THEME_PRESETS: HostThemePreset[] = [
  { brand: 'openscd', label: 'OpenSCD Solarized' },
  { brand: 'transnetbw', label: 'TransnetBW teal' },
  { brand: 'bearingpoint', label: 'BearingPoint demo' },
];

/** CSS class on <html> for a brand+mode pair (matches host-theme-presets.css). */
export function hostThemeClass(brand: ThemeBrand, mode: ThemeMode): string {
  return `${brand}-${mode}`;
}

/** All known preset classes (for removing the previous one when switching). */
export const HOST_THEME_CLASSES: string[] = HOST_THEME_PRESETS.flatMap((p) =>
  (['light', 'dark'] as const).map((mode) => hostThemeClass(p.brand, mode)),
);
