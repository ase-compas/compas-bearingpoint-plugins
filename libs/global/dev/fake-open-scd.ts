/**
 * Shared fake OpenSCD / CoMPAS host for standalone plugin apps.
 * Import only from app `main.ts` (never from the production plugin entry).
 */
import {
  fakeHostProps,
  type FakeHostPlugin,
} from './fake-host-props.svelte';

export { fakeHostProps };
export type { FakeHostPlugin };

/** Official-plugin shape returned by host `getBuiltInPlugins()`. */
export interface FakeBuiltinPlugin {
  name: string;
  src: string;
  kind: string;
  icon?: string;
  description?: string;
  activeByDefault?: boolean;
  requireDoc?: boolean;
  position?: string;
}

const STORAGE_KEY = 'plugins';

let fakeHostPlugins: FakeHostPlugin[] = [];

/**
 * Seed the in-memory host list. Optional localStorage mirror is debug-only;
 * standalone apps should read `fakeHostProps.plugins`, never storage.
 *
 * @returns The seeded host plugin list.
 */
export function initFakeHostPlugins(): FakeHostPlugin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    fakeHostPlugins = Array.isArray(parsed)
      ? (parsed as FakeHostPlugin[])
      : [];
  } catch {
    fakeHostPlugins = [];
  }
  fakeHostProps.plugins = fakeHostPlugins;
  return fakeHostPlugins;
}

/**
 * Creates `<open-scd>` + layout in the document and implements
 * `getBuiltInPlugins()` like the real host.
 *
 * @param options.builtins - Catalogue returned by `getBuiltInPlugins()`.
 * @param options.layoutTag - `'compas-layout'` (default) or `'oscd-layout'`.
 * @returns The layout element, or `null` outside DEV.
 */
export function createFakeOpenScd(options: {
  builtins: readonly FakeBuiltinPlugin[];
  layoutTag?: string;
}): HTMLElement | null {
  if (!import.meta.env?.DEV) return null;

  const layoutTag = options.layoutTag ?? 'compas-layout';
  const builtins = [...options.builtins];

  const fakeOpenScd = document.createElement('open-scd') as HTMLElement & {
    getBuiltInPlugins: () => FakeBuiltinPlugin[];
  };
  const shadow = fakeOpenScd.attachShadow({ mode: 'open' });

  const layout = document.createElement(layoutTag);
  shadow.appendChild(layout);

  fakeOpenScd.getBuiltInPlugins = () => [...builtins];

  document.body.appendChild(fakeOpenScd);

  return layout;
}

/**
 * Mirrors OpenSCD `handleConfigurationPluginEvent`: updates the in-memory
 * host list (optional localStorage mirror) and `fakeHostProps.plugins`.
 *
 * @param e - `oscd-configure-plugin` CustomEvent.
 */
export function listenOscdConfigurePlugin(e: Event): void {
  const event = e as CustomEvent;

  const { name, kind, config } = event.detail;

  console.log(
    '%c📡 oscd-configure-plugin received (fake open-scd)',
    'background:#0ea5e9; color:white; padding:2px 6px; border-radius:3px; font-weight:bold',
    event.detail,
  );
  const hasPlugin = hasPluginInHost(name, kind);
  const hasConfig = config !== null;

  const isChangeEvent = hasPlugin && hasConfig;
  const isRemoveEvent = hasPlugin && !hasConfig;
  const isAddEvent = !hasPlugin && hasConfig;

  if (isChangeEvent && config) {
    changePluginInHost(config);
  } else if (isRemoveEvent) {
    removePluginFromHost(name, kind);
  } else if (isAddEvent && config) {
    addPluginToHost(config);
  } else {
    console.warn('%c⚠️ Invalid plugin configuration event', 'color:#ef4444', {
      name,
      kind,
      config,
    });
  }
}

function persist(plugins: FakeHostPlugin[]) {
  fakeHostPlugins = plugins;
  fakeHostProps.plugins = plugins;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plugins));
  } catch {
    // debug mirror only
  }
}

function hasPluginInHost(name: string, kind: string): boolean {
  return fakeHostPlugins.some((p) => p.name === name && p.kind === kind);
}

function removePluginFromHost(name: string, kind: string) {
  persist(
    fakeHostPlugins.filter((p) => p.name !== name || p.kind !== kind),
  );
}

function addPluginToHost(plugin: FakeHostPlugin) {
  persist([...fakeHostPlugins, plugin]);
}

function changePluginInHost(plugin: FakeHostPlugin) {
  const plugins = [...fakeHostPlugins];
  const index = plugins.findIndex(
    (p) => p.name === plugin.name && p.kind === plugin.kind,
  );

  if (index === -1) {
    console.warn('Plugin not found for change');
    return;
  }

  plugins[index] = { ...plugins[index], ...plugin };
  persist(plugins);
}
