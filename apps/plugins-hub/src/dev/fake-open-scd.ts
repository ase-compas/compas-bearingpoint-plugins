// a fake implementation ti simulate the save into the lo0calStorage via open-scd.ts
// See  public handleConfigurationPluginEvent(e: ConfigurePluginEvent) - https://github.com/openscd/open-scd/blob/main/packages/openscd/src/open-scd.ts#L156-L184
import type { StoredPlugin } from '@compas-bearingpoint/plugins-hub';

/**
 * Fake der Host-Umgebung (nur Dev)
 */
export function createFakeCompasLayout(): HTMLElement | null {
  if (!import.meta.env?.DEV) return null;

  const fakeOpenScd = document.createElement('open-scd');
  const shadow = fakeOpenScd.attachShadow({ mode: 'open' });

  const fakeCompasLayout = document.createElement('compas-layout');
  shadow.appendChild(fakeCompasLayout);

  document.body.appendChild(fakeOpenScd);

  return fakeCompasLayout;
}

/**
 * Exakte Nachbildung von handleConfigurationPluginEvent aus open-scd
 * → aktualisiert localStorage['plugins'] genau wie die Original-App
 */
export function listenOscdConfigurePlugin(e: Event): void {
  const event = e as CustomEvent;

  const { name, kind, config } = event.detail;

  console.log(
    '%c📡 oscd-configure-plugin received (fake compas-layout)',
    'background:#0ea5e9; color:white; padding:2px 6px; border-radius:3px; font-weight:bold',
    event.detail,
  );
  const hasPlugin = hasPluginInLocalStorage(name, kind);
  const hasConfig = config !== null;

  const isChangeEvent = hasPlugin && hasConfig;
  const isRemoveEvent = hasPlugin && !hasConfig;
  const isAddEvent = !hasPlugin && hasConfig;

  if (isChangeEvent && config) {
    changePluginInLocalStorage(config);
  } else if (isRemoveEvent) {
    removePluginFromLocalStorage(name, kind);
  } else if (isAddEvent && config) {
    addPluginToLocalStorage(config);
  } else {
    console.warn('%c⚠️ Invalid plugin configuration event', 'color:#ef4444', {
      name,
      kind,
      config,
    });
  }
}

// ─────────────────────────────────────────────────────────────
// Interne Helper (exakt wie in open-scd.ts)
// ─────────────────────────────────────────────────────────────

function getPluginsFromLocalStorage(): StoredPlugin[] {
  const str = localStorage.getItem('plugins') ?? '[]';
  return JSON.parse(str);
}

function savePluginsToLocalStorage(plugins: StoredPlugin[]) {
  localStorage.setItem('plugins', JSON.stringify(plugins));
}

function hasPluginInLocalStorage(name: string, kind: string): boolean {
  return getPluginsFromLocalStorage().some(
    (p: StoredPlugin) => p.name === name && p.kind === kind,
  );
}

function removePluginFromLocalStorage(name: string, kind: string) {
  const plugins = getPluginsFromLocalStorage().filter(
    (p: StoredPlugin) => p.name !== name || p.kind !== kind,
  );
  savePluginsToLocalStorage(plugins);
}

function addPluginToLocalStorage(plugin: StoredPlugin) {
  const plugins = [...getPluginsFromLocalStorage(), plugin];
  savePluginsToLocalStorage(plugins);
}

function changePluginInLocalStorage(plugin: StoredPlugin) {
  const plugins = getPluginsFromLocalStorage();
  const index = plugins.findIndex(
    (p: StoredPlugin) => p.name === plugin.name && p.kind === plugin.kind,
  );

  if (index === -1) {
    console.warn('Plugin not found for change');
    return;
  }

  plugins[index] = { ...plugins[index], ...plugin };
  savePluginsToLocalStorage(plugins);
}
