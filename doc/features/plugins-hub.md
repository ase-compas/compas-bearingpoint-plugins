# Plugins-Hub

A central, extensible plugin hub for OpenSCD. Inspired by
[`@sprinteins/oscd-launcher`](https://github.com/sprinteins/oscd-launcher),
re-built on the architecture of
[`@ase-compas/compas-transnetbw-plugins`](https://github.com/ase-compas/compas-transnetbw-plugins)
with more functionality and a more sophisticated UI.

## Overview

Plugins-Hub ships with a **hardcoded list of remote plugin providers**. Each
provider hosts a JSON manifest of the plugins it offers. In addition, the hub
**loads host built-in plugins** from the running Open-SCD or CoMPAS instance via
`document.querySelector('open-scd').getBuiltInPlugins()`.

Plugins-Hub aggregates remote + built-in catalogues, filters remotes by the
host's OpenSCD core version, and allows the user to browse, inspect, enable,
and (for remotes) install plugins on demand.

New remote providers onboard themselves via **Pull Request** to the central
`providers.json`.

## Theming

Plugins-Hub **does not ship a fixed brand look**. It consumes the host
OpenSCD / CoMPAS theme so customer-branded distros stay visually consistent.
**Scope:** the full Hub UI (header, toolbar/SMUI controls, provider/plugin
cards, detail pane, badges, action buttons).

| Layer | Responsibility |
| --- | --- |
| Host / distro | Defines optional `--oscd-theme-*` and/or bare Solarized tokens (`--primary`, `--base*`, `--cyan`, …) |
| Plugin bridge (`libs/global/oscd-theme-bridge.css`) | Maps host vars → internal `--oscd-*` with Solarized fallbacks; binds MDC / MD3; keeps `--bearingpoint-*` as semantic **aliases** for existing component CSS |
| Components | Use `var(--bearingpoint-*)` / SMUI (reads MDC vars) |

Fallback chain (so older hosts without `--oscd-theme-*` still brand correctly):

1. `--oscd-theme-*` (official distro API)
2. Host bare tokens that inherit into Shadow DOM (`--primary`, `--base03`…, `--cyan`, …)
3. Solarized hex defaults (readable unbranded OpenSCD look)

Rules aligned with [OpenSCD theming docs](https://github.com/stee-re/oscd-api/blob/feat_add-theming-docs/docs/theming.md):

- **Do** initialize internal colours from theme variables with safe defaults.
- **Do** style from internal `--oscd-*` / mapped MDC / aliases.
- **Do not** hardcode brand colours in production token sources.
- **Do not** set `--oscd-theme-*` in the production plugin (dev playground may set them on `documentElement` only to *simulate* a host).

Light and dark: when the host inverts the Solarized base scale (or the local
playground toggles mode), surfaces/text/badges follow `--oscd-base*` /
accents.

**Local presets:** CSS classes in
`libs/global/dev/host-theme-presets.css` (e.g. `html.bearingpoint.light`,
`html.transnetbw.dark`). The playground sets brand + mode as separate classes
on `<html>`; `-new` brands also set `color-scheme` so `light-dark()` works.
Toolbar + `?brand=&mode=` on the real Hub dev page; not shipped in the
production plugin bundle. See `DEVELOPMENT.md`.

## Architecture (ASCII)

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                    OpenSCD / CoMPAS Host App                             │
│   getBuiltInPlugins()  +  layout: compas-layout | oscd-layout            │
│                      Core Version: e.g. 0.44.0 (runtime)                 │
└───────────────────────────────┬──────────────────────────────────────────┘
                                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                           Plugins-Hub Plugin                            │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────────┐   │
│  │  UI Layer (Svelte) │  │   Hub Services     │  │  Local State     │   │
│  │  - plugins-hub     │◄─┤ - BuiltinLoader    │─►│  - providers[]   │   │
│  │  - provider-card   │  │ - ProviderLoader   │  │  - plugins[]     │   │
│  │  - plugin-card     │  │ - VersionResolver  │  │  - plugin states │   │
│  │  - plugin-details  │  │ - PluginStore      │  │                  │   │
│  └────────────────────┘  └─────────┬──────────┘  └──────────────────┘   │
│                                    │                                     │
│              ┌─────────────────────┼─────────────────────┐              │
│              ▼                     ▼                     ▼              │
│   host.getBuiltInPlugins()  providers.json       remote plugins.json    │
│   (same document)            (hardcoded)           (HTTPS fetch)        │
└──────────────────────────────────────────────────────────────────────────┘
```

### Built-in providers (Open-SCD / CoMPAS)

At startup the hub calls **`getBuiltInPlugins()`** on `<open-scd>` (no
`plugins.js` import, no URL probing, no probe cache).

Host edition (provider branding) is detected from the layout in the host shadow DOM:

| Signal | Provider name |
|---|---|
| `compas-layout` (or `compas-session`) | **CoMPAS** |
| `oscd-layout` | **Open-SCD** |

- Built-in plugins: `builtin: true`, always treated as installed, **no Install/Remove**, only Enable/Disable.
- Configure `name` uses plain host plugin name (no provider prefix).
- Unique hub key is always **registration `name` + `kind`** (not `src`).
- Detail view shows `activeByDefault` and `requireDoc`.
## JSON Contracts

### `providers.json` (shipped in-repo at `libs/plugins-hub/src/lib/config/providers.json`)

Array of `Provider`:

```ts
interface Provider {
  prefix?: string;     // optional; host registration name = "prefix - name" when set
  name: string;        // display name (1–64 chars); also UI filter key
  icon: string;        // URL, data-URL, or Material icon name
  description: string; // ≤ 280 chars
  pluginsUrl?: string; // HTTPS URL to plugins.json (omit for source: 'builtin')
  source?: 'remote' | 'builtin'; // default remote
}
```

### `plugins.json` (hosted per provider)

```json
{
  "plugins": [
    {
      "name": "Transformer Importer",
      "author": "BearingPoint",
      "src": "https://plugins.bearingpoint.eu/transformer-importer.js",
      "kind": "editor",
      "icon": "account_tree",
      "description": "Imports transformer models into SCL.",
      "longDescription": "A detailed description for end users that explains what the plugin does and when to use it."
    }
  ]
}
```

- `kind` is required (`editor`, `menu` or `validator`).
- `supportedCoreVersion` is optional. If not present, no constraint.
- `icon` is a Material Design Icon name (string).
- `longDescription` is optional. For example, when you want to provide a detailed user description of the plugin.

### Plugin (runtime, with state)

Unique key in the hub (and OpenSCD host) is always **registration `name` + `kind`**.
`src` is the resource URL used to load the plugin, not the identity.

```ts
interface Plugin extends PluginManifestEntry {
  // identity: registrationName(provider, name) + kind
  // src: load URL only
  provider: Provider;
  compatible: boolean;
  kindText: string;
  kindIcon: string;
  installationState: 'INSTALLED' | 'AVAILABLE';
  activationState:   'ACTIVE'    | 'INACTIVE';
  builtin?: boolean;
  activeByDefault?: boolean;
  requireDoc?: boolean;
}
```

**Installation state**:
- `AVAILABLE` — plugin is known but not yet installed in OpenSCD.
- `INSTALLED` — plugin has been registered as a custom element.

**Activation state** (only meaningful when `INSTALLED`):
- `ACTIVE` — plugin is enabled and running.
- `INACTIVE` — plugin is installed but currently disabled.

## Plugin identity (name + kind)

Aligned with OpenSCD [`oscd-configure-plugin`](https://github.com/com-pas/open-scd/blob/main/packages/openscd/src/plugin.events.ts)
and [open-scd#157](https://github.com/com-pas/open-scd/issues/157):

> The combination of name and kind uniquely identifies the plugin to be configured.

The hub builds the host `name` as:

```ts
registrationName(provider, plugin.name)
// → "BP - PluginHub" when provider.prefix is set
// → "Substation" when prefix is omitted (built-in / Custom)
```

| Concern | Key |
| --- | --- |
| Hub list / selection / install state | `registrationName` + `kind` (`hubPluginKey`) |
| Host localStorage match | stored `name` + `kind` |
| Load path | `src` (catalogue URL; `proxyUrl` only on configure `config.src`) |

Changing `src` for the same registration name + kind (version bump, offline path, mirror) updates that plugin instead of creating a second entry. Custom plugins are stored entries whose **name+kind** is not covered by any remote or built-in catalogue.

If a **remote (or custom) catalogue entry** has the same **registration name +
kind** as a host built-in (`registrationName(provider, name)` equals the built-in
`name`), the hub still lists it under that provider with a **Built-in** badge
(`shadowedByHostBuiltin`). Enable/Disable is disabled with a tooltip that a
built-in of that name already exists; install/remove are blocked. Manage the
entry under the host built-in provider instead.

### Migration / duplicates

If host localStorage still contains name+kind duplicates (historical open-scd#157), the hub **dedupes on read** (`dedupeStoredPluginsByNameAndKind`: last-wins fields, `active` OR-merged). The hub does not rewrite host storage by itself; a permanent cleanup needs the host fix or reconfigure of the surviving entry.

## UI Features

| Capability                          | oscd-launcher | Plugins-Hub |
|-------------------------------------|:-------------:|:-----------:|
| Single static plugin list           | ✅            | ✅          |
| Multiple federated providers        | ❌            | ✅          |
| Core-version compatibility filter   | ❌            | ✅          |
| Search / filter                     | ❌            | ✅          |
| Kind filter + kind badges (editor / menu / validator) | ❌ | ✅ |
| Plugin detail view                  | ❌            | ✅          |
| Lazy ESM loading                    | ✅            | ✅          |
| Install / uninstall                 | ✅            | ✅          |
| Activate / deactivate               | ❌ (manual via OpenSCD menu)  | ✅ |
| Uninstall only if inactive          | ❌            | ✅          |
| Status display (Available/Installed/Active/Inactive) | ❌ | ✅ |
| Material icons for plugins          | ✅            | ✅          |
| Icons for providers (string/URL)    | ❌            | ✅          |
| PR-based onboarding                 | ❌            | ✅          |
| Persistent state (localStorage)     | ✅            | ✅          |

## Adding a New Provider

1. Fork this repo.
2. Add your entry to `libs/plugins-hub/src/lib/config/providers.json`:
   ```json
   {
     "prefix": "myco",
     "name": "My Company Plugins",
     "icon": "https://cdn.example.com/icon.svg",
     "description": "Plugin collection from My Company.",
     "pluginsUrl": "https://plugins.example.com/plugins.json"
   }
   ```
3. Host your own `plugins.json` at an HTTPS URL.
4. Open a PR — CI will validate the schema and reachability.

## Field Constraints

### Provider
| Field | Type | Constraint |
|---|---|---|
| `prefix` | string | 1–16 chars, lowercase alphanumeric, unique |
| `name` | string | 1–64 chars |
| `icon` | string (URL) | `.svg` preferred, square, ≤ 64 KB |
| `description` | string | ≤ 280 chars |
| `pluginsUrl` | string (URL) | HTTPS, returns valid plugins.json |

### Plugin manifest
| Field | Type | Constraint |
|---|---|---|
| `name` | string | Required |
| `author` | string | Optional |
| `src` | string (URL) | HTTPS, ESM bundle |
| `kind` | string | One of `editor` \| `menu` \| `validator`. Used for filtering and displayed as a badge (with friendly label + icon). |
| `icon` | string | Material Design Icon name |
| `description` | string | Required (short description shown on cards) |
| `longDescription` | string | Optional. When present, rendered in the detail panel directly after the URL. For example, when you want to provide a detailed user description of the plugin. |
| `position` | string | Optional. One of `top` \| `middle` \| `bottom`. Only relevant for `kind === 'menu'`. |
| `supportedCoreVersion.from` | string | semver (optional) |
| `supportedCoreVersion.to` | string | semver (exclusive upper bound, optional) |

## Developer References

### From [`sprinteins/oscd-launcher`](https://github.com/sprinteins/oscd-launcher)
- Launcher UI — [`src/launcher.svelte`](https://github.com/sprinteins/oscd-launcher/blob/main/src/launcher.svelte)
- Plugin loader — [`src/plugin.ts`](https://github.com/sprinteins/oscd-launcher/blob/main/src/plugin.ts)
- Vite config — [`vite.config.ts`](https://github.com/sprinteins/oscd-launcher/blob/main/vite.config.ts)

### From [`ase-compas/compas-transnetbw-plugins`](https://github.com/ase-compas/compas-transnetbw-plugins)
- Monorepo layout — [`nx.json`](https://github.com/ase-compas/compas-transnetbw-plugins/blob/main/nx.json)
- Example app — [`apps/archive-explorer`](https://github.com/ase-compas/compas-transnetbw-plugins/tree/main/apps/archive-explorer)
- Plugin wrapper pattern — [`apps/archive-explorer/src/plugin-wrapper.svelte.ts`](https://github.com/ase-compas/compas-transnetbw-plugins/blob/main/apps/archive-explorer/src/plugin-wrapper.svelte.ts)
