---
name: create-plugin
description: >
  Scaffold a new OpenSCD/CoMPAS plugin app + lib in this Nx monorepo from the
  Plugin-Hub skeleton (Hello-World UI, own lib, host props, theme playground).
  Use when the user wants a new plugin, to scaffold/add a plugin app, or runs
  /create-plugin.
---

# Create plugin

Scaffold **one** new plugin as `apps/<name>/` + `libs/<name>/`. Copy structure from Plugin-Hub; do **not** copy Hub domain (providers, store, cards). Do **not** add `oscd-api` as a dependency. Do **not** create `apps/<name>/src/dev/fake-open-scd.ts`.

Ask the two questions below **before** writing files. Do not invent a name.

## 1. Plugin name

Ask as a normal question (not a multiple-choice prompt).

Normalize to kebab-case (`my-editor`). Reject if it is not `[a-z0-9-]+`, does not start/end with alphanumeric, is `plugins-hub`, or `apps/<name>/` or `libs/<name>/` already exists.

Derive:

| Use | Value |
| --- | --- |
| Folder / Nx app / `package.json` `name` | `<name>` (kebab) |
| Nx lib `project.json` `name` | `<name>-lib` |
| Path alias | `@compas-bearingpoint/<name>` → `libs/<name>/src/index.ts` |
| Custom element class | PascalCase + `Element` (`my-editor` → `MyEditorElement`) |
| Root UI | `apps/<name>/src/app/<name>.svelte` |

## 2. Host input properties

Use a **multi-select** prompt. Source: [oscd-api Plugin.ts](https://github.com/openscd/oscd-api/blob/main/src/Plugin.ts) plus Hub extras.

If the user skips the prompt, use **`doc`**, **`editCount`**, **`plugins`**.

| Property | Description | Type in scaffold |
| --- | --- | --- |
| `doc` | SCL document currently being edited, if any | `XMLDocument \| undefined` |
| `docName` | Name of the current document | `string \| undefined` |
| `docVersion` | Changes when the document is modified. **Not yet implemented in CoMPAS** | `unknown` |
| `docs` | Map of document names to loaded `XMLDocument`s | `Record<string, XMLDocument> \| undefined` |
| `locale` | End-user locale | `string \| undefined` |
| `editor` | Host edit transactor | `unknown` |
| `editCount` | Document edit counter (CoMPAS/Hub setter today) | `number \| undefined` |
| `plugins` | All installed plugins (built-in + custom), with `active` for whether they should be shown | `unknown` |

Thread every selected property: wrapper `$state` + public `set` → `plugin.svelte` `$props()` → `app/<name>.svelte` `$props()`. Hello-World must **declare** them and **not** display them.

## Copy sources

- App: `apps/plugins-hub/` (vite, project.json, tsconfigs, `plugin-wrapper.svelte.ts`, `plugin.svelte`, `main.ts`, `styles/global.css`, `index.html`, `svelte.config.js`)
- Lib: `libs/plugins-hub/` **layout only**. Copy `src/lib/dom/open-scd-helpers.ts` as-is. Do **not** copy providers, store, plugin-loader, version-resolver, assets, or `providers.json`.

## App files (`apps/<name>/`)

Production entry: `src/plugin-wrapper.svelte.ts`. Register `inlineCssIntoJs()` from `libs/global/vite/inline-css-into-js.ts`. Placeholder string must stay `__INLINED_PLUGIN_CSS_PLACEHOLDER__`.

**`src/dev/`:** omit (no Hub `fake-open-scd.ts`).

**`src/main.ts`:** keep theme playground + shared fake host. Import from `libs/global/dev/` (eslint-disable `@nx/enforce-module-boundaries` like Hub `main.ts`). Call `createFakeOpenScd({ builtins: [], layoutTag: 'compas-layout' })` — not a local wrapper. Then `initFakeHostPlugins()` and `document.addEventListener('oscd-configure-plugin', listenOscdConfigurePlugin)`. Mount `app/<name>.svelte` on `document.body`. Pass `fakeHostProps` only if `plugins` was selected; otherwise `props: {}`.

**`src/plugin-wrapper.svelte.ts`:** same Shadow DOM, style inject, layout hack as Hub. Import `getLayout` from `@compas-bearingpoint/<name>` only — **never** `@compas-bearingpoint/plugins-hub`. Generate one `set` per selected host property.

**`src/plugin.svelte`:** mount `./app/<name>.svelte`, pass selected props, keep `:host { min-height: 0; height: 100%; }`.

**`src/app/<name>.svelte`:**

```svelte
<script lang="ts">
  interface Props {
    /* selected host props only */
  }
  let { /* destructure selected, unused */ }: Props = $props();
</script>

<h1><!-- display name --></h1>
```

**`src/styles/global.css`:** copy Hub; change the last import to `./<name>.css`. Keep SMUI `bare.css` and `libs/global/bearingpoint-theme.css`.

**`src/styles/<name>.css`:**

```css
/* Plugin-specific global styles (loaded from global.css). */
```

**`vite.config.ts`:** copy Hub; set `cacheDir` / `outDir` / `test.name` / coverage dir to `<name>`. **Ports stay `4201` (serve) and `4301` (preview).** If the port is taken, Vite uses the next one — do not pick 4202 yourself.

**`project.json`:** Nx application `<name>`; lint glob `apps/<name>/**/*.{ts,svelte,spec.ts}`; check/build/serve/preview like Hub (`xxx-test` is fine).

**`package.json`:** `{ "name": "<name>", "version": "0.0.1", "type": "module" }`.

**`CHANGELOG.md`:** Keep a Changelog stub with `## [Unreleased]`.

**`index.html`:** title = plugin display name.

## Lib files (`libs/<name>/`)

Nx library `<name>-lib`: lint, check, test (copy `libs/plugins-hub/project.json` and rename paths / `plugins-hub-lib`).

`src/index.ts` re-exports only DOM helpers:

```ts
export {
  getLayout,
  getOpenSCDHost,
  detectHostEdition,
  getBuiltInPluginsFromHost,
} from './lib/dom/open-scd-helpers';
export type { HostEdition, OpenScdHost } from './lib/dom/open-scd-helpers';
```

`src/lib/dom/open-scd-helpers.ts`: copy from `libs/plugins-hub/src/lib/dom/open-scd-helpers.ts`.

Copy lib `vite.config.ts`, `svelte.config.js`, `tsconfig.json`, `tsconfig.lib.json`, `tsconfig.spec.json`; rename `test.name` to `<name>-lib`, cache/coverage dirs.

Add to `tsconfig.base.json` `paths`:

```json
"@compas-bearingpoint/<name>": ["./libs/<name>/src/index.ts"]
```

App may depend on this lib. Lib must not depend on the app or on `plugins-hub`.

## Repo wiring

Root `package.json` scripts (same flags as Hub):

```json
"build:<name>": "nx run --prod <name>:build --no-outputhashing --emptyOutDir --verbose",
"run:<name>": "nx run <name>:serve",
"preview:<name>": "nx run <name>:preview --configuration=development"
```

Append `&& npm run build:<name>` to the existing `"build"` script so CI (`npm run build` in `.github/workflows/main.yml`) emits `dist/apps/<name>/`. `main.yml` already copies `dist/apps/*` — do not add a per-plugin name there.

`.github/workflows/release-plugin.yml`: add `<name>` under `on.workflow_dispatch.inputs.PLUGIN_NAME_TO_RELEASE.options` (today only `plugins-hub`).

`vitest.workspace.ts`: add `apps/<name>/vite.config.ts` and `libs/<name>/vite.config.ts`.

## Wrapper setter sketch

For each selected property `foo` of type `T`:

```ts
private _foo?: T;
public set foo(value: T) {
  this._foo = value;
  this.props.foo = value;
}
```

Constructor `$state({ ... })` and `connectedCallback` copy `_foo` → `props.foo` the same way Hub does for `doc` / `editCount` / `plugins`.

## Done when

- `npx svelte-check --workspace apps/<name>` and `--workspace libs/<name>` are clean.
- No import of `@compas-bearingpoint/plugins-hub` from the new app/lib.
- No `src/dev/fake-open-scd.ts` in the new app.
- `main.ts` still calls `initThemePlayground()`.
- Tell the user: `npm run run:<name>` (port 4201, or the next free port).
