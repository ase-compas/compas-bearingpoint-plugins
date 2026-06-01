## Open-SCD Plugin Events Documentation

(used by the `plugins-hub` plugin in this repository)

**Source-Repository:** https://github.com/openscd/open-scd (packages/openscd/src/)  
**Key files analyzed:** `open-scd.ts`, `plugin.events.ts`, `addons/Layout.ts`, `addons/plugin-manager/plugin-manager.ts`, `addons/plugin-manager/custom-plugin-dialog.ts`, `plugin.ts`, and related components.  

All events are standard `CustomEvent`s using the Web Components event pattern (`bubbles: true`, `composed: true`). This allows events to propagate from child components (including dynamically loaded **Editor Plugins**) up to the core `oscd-layout` / `<open-scd>` host. Editor plugins **can dispatch any of these events** (they are not internal-only).  

LocalStorage usage (across all events):  
- Key: `'plugins'`  
- Stores: `JSON.stringify(plugins.map(withoutContent))` where `withoutContent` removes the runtime `content` function.  
- Contains: name, src, kind, active, position, requireDoc, activeByDefault, etc. for user-added + overridden official plugins.  
- Usage: Loaded on startup (`loadPlugins()`), merged with built-in `officialPlugins`, `addContent()` is called for active plugins (dynamic `import()` + `customElements.define`). Changes to activation or external plugins are persisted here and trigger re-renders of menu/editor tabs.  

---

### `@open-plugin-download`

**Example call (from plugin manager or any plugin):**
```ts
const event = new CustomEvent('open-plugin-download', {
  bubbles: true,
  composed: true,
  // no detail required
});
this.dispatchEvent(event); // or document.dispatchEvent(event)
```

**Detail parameters:** None (empty `CustomEvent`).  

**What happens with the event:**  
- Listened in `Layout.ts` (both on the host element and via `document.addEventListener`).  
- Calls `this.pluginDownloadUI.show()` → opens `<oscd-custom-plugin-dialog>`.  
- No internal store or localStorage is updated directly.  
- Purpose: UI entry point for adding external plugins (user fills form → dispatches `@add-external-plugin`).  

**Can an Editor-Plugin dispatch it?** Yes (bubbles/composed).

---

### `@oscd-activate-editor`

**Example call (from an Editor Plugin):**
```ts
const event = new CustomEvent<{ name: string; src: string }>('oscd-activate-editor', {
  bubbles: true,
  composed: true,
  detail: { name: 'My Editor', src: 'https://example.com/my-editor.js' },
});
this.dispatchEvent(event);
```

**Detail parameters:**  
- `name: string` (plugin name)  
- `src: string` (plugin source URL)  
(One of them is sufficient; the handler matches either.)

**What happens with the event:**  
- Handled in `Layout.ts` (`handleActivateEditorByEvent`).  
- Searches active editors (`calcActiveEditors()`) by `name` or `src`.  
- Sets internal `this.activeEditor` (reactive state).  
- Triggers re-render of the editor content area with the selected plugin’s `content()`.  
- No localStorage change (only UI state).  

**Can an Editor-Plugin dispatch it?** Yes – intended use case (plugins can switch to another editor).

---

### `@oscd-run-menu`

**Example call (from an Editor Plugin):**
```ts
const event = new CustomEvent<{ name: string }>('oscd-run-menu', {
  bubbles: true,
  composed: true,
  detail: { name: 'My Menu Action' },
});
this.dispatchEvent(event);
```

**Detail parameters:**  
- `name: string` (exact name of the menu plugin entry).

**What happens with the event:**  
- Handled in `Layout.ts` (`handleRunMenuByEvent`).  
- Opens the menu drawer (`menuUI.open = true`).  
- Finds the menu item by `[data-name]`, resolves the plugin element, and calls `(menuContentElement as MenuPlugin).run()`.  
- No store or localStorage change.  
- Purpose: Allows any component/plugin to programmatically execute a menu plugin action.  

**Can an Editor-Plugin dispatch it?** Yes.

---

### `@oscd-editor-tab-activated`

**Example call:**  
(This event is normally dispatched by the internal `<oscd-menu-tabs>` component when a tab is clicked. Plugins rarely need to dispatch it manually.)

```ts
// Example (internal from menu-tabs)
const event = new CustomEvent<TabActivatedEvent>('oscd-editor-tab-activated', {
  bubbles: true,
  composed: true,
  detail: { editor: selectedPlugin }, // Plugin object
});
this.dispatchEvent(event);
```

**Detail parameters:**  
- `editor: Plugin` (full plugin object from the tab).  

**What happens with the event:**  
- Listened in `Layout.ts` (`handleEditorTabActivated`).  
- Sets `this.activeEditor = e.detail.editor`.  
- Updates the main content area to render the new editor plugin.  
- Purely internal UI state change (no localStorage).  

**Can an Editor-Plugin dispatch it?** Technically yes, but it is primarily an internal tab-switch event.

---

### `@add-external-plugin`

**Example call (from custom-plugin-dialog.ts):**
```ts
this.dispatchEvent(
  newAddExternalPluginEvent({
    src: 'https://example.com/plugin.js',
    name: 'My External Plugin',
    kind: 'editor', // or 'menu' | 'validator'
    requireDoc: true,
    position: 'middle', // only for menu
    active: true,
    activeByDefault: false,
  })
);
```

**Detail parameters (via helper `newAddExternalPluginEvent`):**  
- `plugin: Omit<Plugin, 'content'>` (object with `name`, `src`, `kind`, `requireDoc`, `position`, `active`, `activeByDefault`, etc.).

**What happens with the event:**  
- Handled in `open-scd.ts` (`handleAddExternalPlugin`).  
- Calls `addExternalPlugin(e.detail.plugin)` → adds to `storedPlugins`.  
- Then dispatches `@oscd-configure-plugin` internally.  
- Triggers `updateStoredPlugins` → persists to `localStorage 'plugins'`.  

**Can an Editor-Plugin dispatch it?** Yes (via the helper or raw event).

---

### `@oscd-configure-plugin`

**Example call:**
```ts
const event = new CustomEvent<ConfigurePluginDetail>(
  'oscd-configure-plugin',
  {
    bubbles: true,
    composed: true,
    detail: {
      name: plugin.name,
      kind: plugin.kind,
      config: shouldDelete ? null : plugin,
    },
  },
);
this.dispatchEvent(event);
```

**Detail parameters (ConfigurePluginDetail):**  
- `name: string`  
- `kind: PluginKind` (`'editor' | 'menu' | 'validator'`)  
- `config: Plugin | null` (null = remove; otherwise add/reconfigure).

**What happens with the event:**  
- Handled in `open-scd.ts` (`handleConfigurationPluginEvent`).  
- Determines add / change / remove.  
- Calls `addPlugin` / `changePlugin` / `removePlugin`.  
- Calls `updateStoredPlugins` → writes to `localStorage 'plugins'`.  
- Merges with built-in plugins on next load.  

**Can an Editor-Plugin dispatch it?** Yes – this is the official API for plugins to self-configure / uninstall themselves.

---

### `@set-plugins`

**Example call (from plugin-manager.ts):**
```ts
const event = newSetPluginsEvent(selectedPlugins); // selectedPlugins: Plugin[]
this.dispatchEvent(event);
```

**Detail parameters (SetPluginsDetail):**  
- `selectedPlugins: Plugin[]` (array of currently selected plugins).

**What happens with the event:**  
- Handled in `open-scd.ts` (`(e: SetPluginsEvent) => this.setPlugins(e.detail.selectedPlugins)`).  
- Updates the `active` flag on matching plugins in `storedPlugins`.  
- Calls `updateStoredPlugins` → persists to `localStorage 'plugins'`.  
- Triggers re-render of menu tabs, editor list, etc.  

**Can an Editor-Plugin dispatch it?** Yes (though usually dispatched by the plugin manager UI).

---

**Summary**  
- All events are designed for **plugin ↔ core** communication.  
- `localStorage 'plugins'` is the single source of truth for persistence (activated plugins, external plugins, overrides).  
- Editor plugins can freely dispatch any of them because the listeners are attached with `bubbles` + `composed`.  
- Helper functions (`newConfigurePluginEvent`, `newAddExternalPluginEvent`, `newSetPluginsEvent`, …) are exported for convenience.  

If you need the full type definitions or more context from a specific file, let me know!