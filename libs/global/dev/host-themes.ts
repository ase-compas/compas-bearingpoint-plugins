/**
 * Dev-only host theme meta (labels + class names).
 * Variable values live in host-theme-presets.css — brand and mode are
 * separate classes on <html> (e.g. html.bearingpoint.light).
 * Production must never import this.
 */

export type ThemeMode = 'light' | 'dark';
export type ThemeBrand =
  | 'openscd'
  | 'openscd-new'
  | 'transnetbw'
  | 'transnetbw-new'
  | 'bearingpoint'
  | 'bearingpoint-new'
  | 'omicron';

export interface HostThemePreset {
  brand: ThemeBrand;
  label: string;
}
export const HOST_MODE_PRESETS: ThemeMode[] = ['light', 'dark'];
export const HOST_THEME_PRESETS: HostThemePreset[] = [
  { brand: 'openscd', label: 'OpenSCD' },
  { brand: 'openscd-new', label: 'OpenSCD new' },
  { brand: 'transnetbw', label: 'TransnetBW' },
  { brand: 'transnetbw-new', label: 'TransnetBW new' },
  { brand: 'bearingpoint', label: 'BearingPoint' },
  { brand: 'bearingpoint-new', label: 'BearingPoint new' },
  { brand: 'omicron', label: 'OMICRONEnergyOSS' },
];

/** Brand class names on <html> (mode is a separate class). */
export const HOST_THEME_CLASSES: string[] = HOST_THEME_PRESETS.map((p) => p.brand);

/** `-new` presets set color-scheme so CSS light-dark() resolves. */
export function usesColorScheme(brand: ThemeBrand): boolean {
  return brand.endsWith('-new');
}
