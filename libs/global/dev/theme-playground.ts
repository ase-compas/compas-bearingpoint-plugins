/**
 * Dev-only host theme playground: toggle a single CSS class on <html>
 * (e.g. bearingpoint-light). Variable values live in host-theme-presets.css.
 *
 * UX: floating toolbar + optional ?brand=&mode= query params.
 * Import only from app main.ts (never from the production plugin entry).
 */
import './host-theme-presets.css';
import {
  HOST_THEME_CLASSES,
  HOST_THEME_PRESETS,
  HOST_MODE_PRESETS,
  hostThemeClass,
  type ThemeBrand,
  type ThemeMode,
} from './host-themes';

const STORAGE_KEY = 'plugins-hub-dev-theme';
const TOOLBAR_OPEN_KEY = 'plugins-hub-dev-theme-toolbar-open';
const TOOLBAR_ID = 'plugins-hub-theme-playground';
const TOGGLE_ID = 'plugins-hub-theme-playground-toggle';
const PANEL_ID = 'plugins-hub-theme-playground-panel';

/** Query keys for shareable local smoke-test links. */
export const THEME_QUERY_BRAND = 'brand';
export const THEME_QUERY_MODE = 'mode';

export interface ThemePlaygroundState {
  brand: ThemeBrand;
  mode: ThemeMode;
}

function isThemeBrand(value: string): value is ThemeBrand {
  return HOST_THEME_PRESETS.some((p) => p.brand === value);
}

function isThemeMode(value: string): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

/** Map legacy brand ids (e.g. stored "compas") to current ThemeBrand. */
function normalizeBrand(value: string | undefined): ThemeBrand | undefined {
  if (!value) return undefined;
  if (value === 'compas') return 'transnetbw';
  if (isThemeBrand(value)) return value;
  return undefined;
}

/**
 * Read theme from URL query (`?brand=transnetbw&mode=dark`).
 */
export function readThemeFromQuery(
  search = typeof window !== 'undefined' ? window.location.search : '',
): Partial<ThemePlaygroundState> {
  const params = new URLSearchParams(search);
  const result: Partial<ThemePlaygroundState> = {};

  const brand = normalizeBrand(params.get(THEME_QUERY_BRAND) ?? undefined);
  if (brand) {
    result.brand = brand;
  }

  const mode = params.get(THEME_QUERY_MODE);
  if (mode && isThemeMode(mode)) {
    result.mode = mode;
  }

  return result;
}

export function writeThemeToQuery(state: ThemePlaygroundState): void {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  url.searchParams.set(THEME_QUERY_BRAND, state.brand);
  url.searchParams.set(THEME_QUERY_MODE, state.mode);
  window.history.replaceState(null, '', url.toString());
}

/**
 * Load selection: query params → localStorage → OpenSCD light.
 */
export function loadThemeState(): ThemePlaygroundState {
  const fromQuery = readThemeFromQuery();
  const fromStorage: Partial<ThemePlaygroundState> = {};

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<ThemePlaygroundState> & {
        brand?: string;
      };
      const brand = normalizeBrand(parsed.brand);
      if (brand) {
        fromStorage.brand = brand;
      }
      if (parsed.mode && isThemeMode(parsed.mode)) {
        fromStorage.mode = parsed.mode;
      }
    }
  } catch {
    /* ignore corrupt storage */
  }

  return {
    brand: fromQuery.brand ?? fromStorage.brand ?? 'openscd',
    mode: fromQuery.mode ?? fromStorage.mode ?? 'light',
  };
}

function saveThemeState(state: ThemePlaygroundState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota / private mode */
  }
}

/**
 * Apply host theme by setting one class on <html> (e.g. bearingpoint-light).
 * CSS in host-theme-presets.css defines all --oscd-theme-* / bare tokens.
 */
export function applyHostTheme(state: ThemePlaygroundState): void {
  const root = document.documentElement;
  const nextClass = hostThemeClass(state.brand, state.mode);

  root.classList.remove(...HOST_THEME_CLASSES);
  root.classList.remove(...HOST_MODE_PRESETS);
  root.classList.add(nextClass);
  root.classList.add(state.mode);
  root.dataset.themeBrand = state.brand;
  root.dataset.themeMode = state.mode;

  // Clear any leftover inline body background from older playground versions
  document.body.style.background = '';

  saveThemeState(state);
  writeThemeToQuery(state);
}

function loadToolbarOpen(): boolean {
  try {
    return localStorage.getItem(TOOLBAR_OPEN_KEY) === '1';
  } catch {
    return false;
  }
}

function saveToolbarOpen(open: boolean): void {
  try {
    localStorage.setItem(TOOLBAR_OPEN_KEY, open ? '1' : '0');
  } catch {
    /* ignore */
  }
}

/** Small palette icon (16×16) for the toolbar toggle. */
function createPaletteIcon(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '12');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M12 3a9 9 0 0 0 0 18c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.5-.7-.5-1.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 0-10H12zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  );
  path.setAttribute('fill', 'currentColor');
  svg.appendChild(path);
  return svg;
}

/**
 * Mount host-theme UI top-left: 16×16 toggle icon + collapsible toolbar.
 */
export function mountThemeToolbar(initial: ThemePlaygroundState): void {
  if (document.getElementById(TOOLBAR_ID)) return;

  let state: ThemePlaygroundState = { ...initial };
  let open = loadToolbarOpen();

  const root = document.createElement('div');
  root.id = TOOLBAR_ID;
  Object.assign(root.style, {
    position: 'fixed',
    left: '8px',
    top: '8px',
    zIndex: '10000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    fontFamily: 'system-ui, sans-serif',
    fontSize: '12px',
  });

  const toggle = document.createElement('button');
  toggle.id = TOGGLE_ID;
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', PANEL_ID);
  toggle.title = 'Host theme toolbar';
  Object.assign(toggle.style, {
    width: '16px',
    height: '16px',
    padding: '0',
    margin: '0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(0,0,0,0.25)',
    borderRadius: '3px',
    background: 'rgba(0, 0, 0, 0.55)',
    color: '#f5f5f5',
    cursor: 'pointer',
    lineHeight: '0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  });
  toggle.appendChild(createPaletteIcon());

  const panel = document.createElement('div');
  panel.id = PANEL_ID;
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', 'Host theme playground');
  Object.assign(panel.style, {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.78)',
    color: '#f5f5f5',
    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
  });

  const label = document.createElement('span');
  label.textContent = 'Host theme';
  label.style.opacity = '0.85';
  label.style.fontWeight = '600';

  const brandSelect = document.createElement('select');
  brandSelect.setAttribute('aria-label', 'Host brand preset');
  Object.assign(brandSelect.style, {
    fontSize: '12px',
    padding: '4px 6px',
    borderRadius: '4px',
    border: '1px solid #555',
    background: '#1a1a1a',
    color: '#f5f5f5',
  });
  for (const preset of HOST_THEME_PRESETS) {
    const opt = document.createElement('option');
    opt.value = preset.brand;
    opt.textContent = preset.label;
    if (preset.brand === state.brand) opt.selected = true;
    brandSelect.appendChild(opt);
  }

  const modeBtn = document.createElement('button');
  modeBtn.type = 'button';
  modeBtn.setAttribute('aria-label', 'Toggle light and dark mode');
  Object.assign(modeBtn.style, {
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '4px',
    border: '1px solid #555',
    background: '#2a2a2a',
    color: '#f5f5f5',
    cursor: 'pointer',
  });

  const syncModeBtn = () => {
    modeBtn.textContent = state.mode === 'light' ? 'Light ☀' : 'Dark ☾';
  };
  syncModeBtn();

  const apply = () => {
    applyHostTheme(state);
    syncModeBtn();
    brandSelect.value = state.brand;
  };

  const syncOpen = () => {
    panel.style.display = open ? 'flex' : 'none';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute(
      'aria-label',
      open ? 'Hide host theme toolbar' : 'Show host theme toolbar',
    );
    saveToolbarOpen(open);
  };
  syncOpen();

  toggle.addEventListener('click', () => {
    open = !open;
    syncOpen();
  });

  brandSelect.addEventListener('change', () => {
    const value = brandSelect.value;
    if (isThemeBrand(value)) {
      state = { ...state, brand: value };
      apply();
    }
  });

  modeBtn.addEventListener('click', () => {
    state = {
      ...state,
      mode: state.mode === 'light' ? 'dark' : 'light',
    };
    apply();
  });

  panel.append(label, brandSelect, modeBtn);
  root.append(toggle, panel);
  document.body.appendChild(root);
}

/**
 * Initialise playground: apply query/stored/default theme and show toolbar.
 */
export function initThemePlayground(): ThemePlaygroundState {
  const state = loadThemeState();
  applyHostTheme(state);
  mountThemeToolbar(state);
  console.log(
    '%c[Dev] Host theme class on <html> — toolbar or ?brand=&mode=',
    'color:#0ea5e9; font-weight:bold',
  );
  return state;
}
