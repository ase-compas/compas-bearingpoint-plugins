# Plugins-Hub

A central, extensible plugin hub for OpenSCD. Inspired by
[`@sprinteins/oscd-launcher`](https://github.com/sprinteins/oscd-launcher),
re-built on the architecture of
[`@ase-compas/compas-transnetbw-plugins`](https://github.com/ase-compas/compas-transnetbw-plugins)
with more functionality and a more sophisticated UI.

## Overview

Plugins-Hub ships with a **hardcoded list of remote plugin providers**. Each
provider hosts a JSON manifest of the plugins it offers. In addition, the hub
**discovers host built-in plugins** from the running Open-SCD or CoMPAS
instance (`officialPlugins` in the host's `plugins.js`).

Plugins-Hub aggregates remote + built-in catalogues, filters remotes by the
host's OpenSCD core version, and allows the user to browse, inspect, enable,
and (for remotes) install plugins on demand.

New remote providers onboard themselves via **Pull Request** to the central
`providers.json`.

## Architecture (ASCII)

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                    OpenSCD / CoMPAS Host App                             │
│   officialPlugins ← /public/js/plugins.js  OR  {base}/src/plugins.js     │
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
│  │  - plugin-details  │  │ - PluginStore      │  │  - probe cache   │   │
│  └────────────────────┘  └─────────┬──────────┘  └──────────────────┘   │
│                                    │                                     │
│              ┌─────────────────────┼─────────────────────┐              │
│              ▼                     ▼                     ▼              │
│     host plugins.js      providers.json          remote plugins.json    │
│   (CoMPAS / Open-SCD)     (hardcoded)              (HTTPS fetch)        │
└──────────────────────────────────────────────────────────────────────────┘
```

### Built-in providers (Open-SCD / CoMPAS)

At startup the hub probes host catalogues. Paths are resolved against
**`location.origin` of the host page** (not the plugin module origin). That
matters when the hub is loaded from e.g. `http://localhost:4301/index.js`
inside CoMPAS on `http://localhost:8080/` — imports must hit **8080**, not 4301.

| Host | Path candidate (→ `new URL(path, location.origin)`) | Provider name |
|---|---|---|
| CoMPAS | `/public/js/plugins.js` | **CoMPAS** |
| Open-SCD | `{basePath}src/plugins.js`, `/openscd/src/plugins.js` | **Open-SCD** |

- Every **reachable** catalogue becomes its own provider (both when both work).
- Probe results are cached in `localStorage` key `plugins-hub.builtin-probe`:

  ```ts
  {
    ts: number,
    buildInProviders: Array<{ host: 'compas' | 'open-scd'; url: string }>
  }
  ```

  | Situation | Behaviour |
  |---|---|
  | Cache empty, ≥1 success | Write **all** working providers (local dual → both; prod → one) |
  | Cache empty, 0 successes | Do **not** write cache |
  | Cache present | Load **only** cached providers |
  | Cache present, all fail | **Clear** cache (next load rediscovers) |
  | Cache present, ≥1 success | Keep cache unchanged |
- Built-in plugins: `builtin: true`, always treated as installed, **no Install/Remove**, only Enable/Disable.
- Plugin `id` / configure `name` is the **plain host name** (no provider prefix), matching the host plugin manager.
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

Unique key in the hub is always **`src`** (strict string equality). State fields are added on top of the manifest.

```ts
interface Plugin extends PluginManifestEntry {
  // src is the unique key
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

## Host registration name (not hub identity)

For `oscd-configure-plugin`, OpenSCD still uses `name` + `kind`. The hub builds:

```ts
registrationName(provider, plugin.name)
// → "BP - PluginHub" when provider.prefix is set
// → "Substation" when prefix is omitted (built-in / Custom)
```

`proxyUrl(src)` is applied only to `config.src` in that event, never when comparing plugins in the hub.

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
