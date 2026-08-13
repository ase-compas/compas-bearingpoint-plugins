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
export const HOST_MODE_PRESETS: ThemeMode[] = ['light', 'dark'];
export const HOST_THEME_PRESETS: HostThemePreset[] = [
  { brand: 'openscd', label: 'OpenSCD' },
  { brand: 'transnetbw', label: 'TransnetBW' },
  { brand: 'bearingpoint', label: 'BearingPoint' },
];

/** CSS class on <html> for a brand+mode pair (matches host-theme-presets.css). */
export function hostThemeClass(brand: ThemeBrand, mode: ThemeMode): string {
  return `${brand}-${mode}`;
}

/** All known preset classes (for removing the previous one when switching). */
export const HOST_THEME_CLASSES: string[] = HOST_THEME_PRESETS.flatMap((p) =>
  (HOST_MODE_PRESETS).map((mode) => hostThemeClass(p.brand, mode)),
);
