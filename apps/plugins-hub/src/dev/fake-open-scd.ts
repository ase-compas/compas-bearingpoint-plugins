// Fake host environment for standalone plugins-hub dev (no real OpenSCD/CoMPAS).
// Mirrors handleConfigurationPluginEvent + getBuiltInPlugins from open-scd.ts
import type { StoredPlugin } from '@compas-bearingpoint/plugins-hub';
import { standaloneProps } from './standalone-props.svelte';

const FAKE_BUILTINS = [
  {
    name: 'Fake Substation',
    src: '/plugins/dist/editors/Substation.js',
    icon: 'margin',
    kind: 'editor',
    activeByDefault: true,
    requireDoc: true,
  },
  {
    name: 'Fake Help',
    src: '/plugins/dist/menu/Help.js',
    icon: 'help',
    kind: 'menu',
    activeByDefault: false,
    requireDoc: false,
    position: 'bottom',
  },
  {
    name: "BP - PluginHub",
    kind: "editor",
    description: "BearingPoint Plugin Hub – Central plugin for integrating and managing plugins from multiple providers",
    src: "/plugins-bearingpoint/plugin-hub/index.js",
    icon: "hub",
  },
] as const;

let fakeHostPlugins: StoredPlugin[] = [];

/**
 * Seed the in-memory host list. Optional localStorage mirror is debug-only;
 * the Hub reads `standaloneProps.plugins`, never storage.
 */
export function initFakeHostPlugins(): StoredPlugin[] {
  try {
    const raw = localStorage.getItem('plugins');
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    fakeHostPlugins = Array.isArray(parsed) ? (parsed as StoredPlugin[]) : [];
  } catch {
    fakeHostPlugins = [];
  }
  standaloneProps.plugins = fakeHostPlugins;
  return fakeHostPlugins;
}

/**
 * Fake der Host-Umgebung (nur Dev).
 * Provides getBuiltInPlugins() instead of serving plugins.js via WireMock.
 */
export function createFakeCompasLayout(): HTMLElement | null {
  if (!import.meta.env?.DEV) return null;

  const fakeOpenScd = document.createElement('open-scd') as HTMLElement & {
    getBuiltInPlugins: () => typeof FAKE_BUILTINS;
  };
  const shadow = fakeOpenScd.attachShadow({ mode: 'open' });

  const fakeCompasLayout = document.createElement('compas-layout');
  shadow.appendChild(fakeCompasLayout);

  // Same API as real OpenSCD / CoMPAS host
  fakeOpenScd.getBuiltInPlugins = () => [...FAKE_BUILTINS];

  document.body.appendChild(fakeOpenScd);

  return fakeCompasLayout;
}

/**
 * Exakte Nachbildung von handleConfigurationPluginEvent aus open-scd
 * → aktualisiert die in-memory host list (optional localStorage mirror).
 */
export function listenOscdConfigurePlugin(e: Event): void {
  const event = e as CustomEvent;

  const { name, kind, config } = event.detail;

  console.log(
    '%c📡 oscd-configure-plugin received (fake compas-layout)',
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

function persist(plugins: StoredPlugin[]) {
  fakeHostPlugins = plugins;
  standaloneProps.plugins = plugins;
  try {
    localStorage.setItem('plugins', JSON.stringify(plugins));
  } catch {
    // debug mirror only
  }
}

function hasPluginInHost(name: string, kind: string): boolean {
  return fakeHostPlugins.some(
    (p: StoredPlugin) => p.name === name && p.kind === kind,
  );
}

function removePluginFromHost(name: string, kind: string) {
  persist(
    fakeHostPlugins.filter(
      (p: StoredPlugin) => p.name !== name || p.kind !== kind,
    ),
  );
}

function addPluginToHost(plugin: StoredPlugin) {
  persist([...fakeHostPlugins, plugin]);
}

function changePluginInHost(plugin: StoredPlugin) {
  const plugins = [...fakeHostPlugins];
  const index = plugins.findIndex(
    (p: StoredPlugin) => p.name === plugin.name && p.kind === plugin.kind,
  );

  if (index === -1) {
    console.warn('Plugin not found for change');
    return;
  }

  plugins[index] = { ...plugins[index], ...plugin };
  persist(plugins);
}
