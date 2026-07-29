# Plugins-Hub

A central, extensible plugin hub for OpenSCD. Inspired by
[`@sprinteins/oscd-launcher`](https://github.com/sprinteins/oscd-launcher),
re-built on the architecture of
[`@ase-compas/compas-transnetbw-plugins`](https://github.com/ase-compas/compas-transnetbw-plugins)
with more functionality and a more sophisticated UI.

## Overview

Plugins-Hub ships with a **hardcoded list of plugin providers**. Each provider
hosts a JSON manifest of the plugins it offers. Plugins-Hub aggregates all of
them, filters them by the host's OpenSCD core version, and allows the user to
browse, inspect, and load plugins on demand.

New providers onboard themselves via **Pull Request** to the central
`providers.json`.

## Architecture (ASCII)

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                         OpenSCD Core (Host App)                         │
│                      Core Version: e.g. 1.4.0 (runtime)                │
└───────────────────────────────┬──────────────────────────────────────────┘
                                ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                           Plugins-Hub Plugin                            │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────────┐   │
│  │  UI Layer (Svelte) │  │   Hub Services     │  │  Local State     │   │
│  │  - plugins-hub     │◄─┤ - ProviderLoader   │─►│  - providers[]   │   │
│  │  - provider-card   │  │ - PluginLoader     │  │  - plugins[]     │   │
│  │  - plugin-card     │  │ - VersionResolver  │  │  - plugin states │   │
│  │  - plugin-details  │  │ - PluginStore      │  │                  │   │
│  └────────────────────┘  └─────────┬──────────┘  └──────────────────┘   │
│                                    │                                     │
│                     ┌──────────────▼───────────────┐                    │
│                     │  providers.json (hardcoded)  │                    │
│                     └──────────────┬───────────────┘                    │
└────────────────────────────────────┼──────────────────────────────────────┘
                                     │  HTTPS fetch
         ┌───────────────────────────┼──────────────────────┐
         ▼                           ▼                      ▼
   Provider A                  Provider B             Provider C
   plugins.json                plugins.json           plugins.json
         │                           │                      │
         └───────────────────────────┴──────────────────────┘
                                     │
                       Remote ESM plugin bundles (lazy-loaded)
```

## JSON Contracts

### `providers.json` (shipped in-repo at `libs/plugins-hub/src/lib/config/providers.json`)

Array of `Provider`:

```ts
interface Provider {
  prefix: string;      // unique short prefix, e.g. "bp", "openscd" — used for plugin IDs
  name: string;        // display name (1–64 chars)
  icon: string;        // URL, .svg preferred
  description: string; // ≤ 280 chars
  pluginsUrl: string;  // HTTPS URL to plugins.json
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
      "description": "Imports transformer models into SCL."
    }
  ]
}
```

- `supportedCoreVersion` is optional. If not present, no constraint.
- `icon` is a Material Design Icon name (string).

### Plugin (runtime, with state)

Each plugin in the hub store has a unique **ID** and two state fields:

```ts
interface Plugin extends PluginManifestEntry {
  /** Unique ID. Format: "<providerPrefix>:<slug>", e.g. "bp:transformer-importer" */
  id: string;
  providerPrefix: string;
  compatible: boolean;               // true if coreVersion ∈ [from, to)
  installationState: 'INSTALLED' | 'AVAILABLE';
  activationState:   'ACTIVE'    | 'INACTIVE';
}
```

**Installation state**:
- `AVAILABLE` — plugin is known but not yet installed in OpenSCD.
- `INSTALLED` — plugin has been registered as a custom element.

**Activation state** (only meaningful when `INSTALLED`):
- `ACTIVE` — plugin is enabled and running.
- `INACTIVE` — plugin is installed but currently disabled.

## Plugin ID Uniqueness

Each provider is assigned a short `prefix` (e.g. `"bp"` for BearingPoint).
Plugin IDs are namespaced as `"<prefix>:<slug>"` to avoid collisions across providers.

```
bp:transformer-importer
openscd:history-viewer
```

## UI Features

| Capability                          | oscd-launcher | Plugins-Hub |
|-------------------------------------|:-------------:|:-----------:|
| Single static plugin list           | ✅            | ✅          |
| Multiple federated providers        | ❌            | ✅          |
| Core-version compatibility filter   | ❌            | ✅          |
| Search / filter                     | ❌            | ✅          |
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
| `author` | string | Required |
| `src` | string (URL) | HTTPS, ESM bundle |
| `kind` | string | e.g. "editor" |
| `icon` | string | Material Design Icon name |
| `description` | string | Required (short description shown on cards) |
| `longDescription` | string | Optional. When present, rendered in the detail panel directly after the URL. |
| `supportedCoreVersion.from` | string | semver (optional) |
| `supportedCoreVersion.to` | string | semver (exclusive upper bound, optional) |
| `kind` | string | One of `editor` \| `menu` \| `validator`. Used for filtering and displayed as a badge. |

## Developer References

### From [`sprinteins/oscd-launcher`](https://github.com/sprinteins/oscd-launcher)
- Launcher UI — [`src/launcher.svelte`](https://github.com/sprinteins/oscd-launcher/blob/main/src/launcher.svelte)
- Plugin loader — [`src/plugin.ts`](https://github.com/sprinteins/oscd-launcher/blob/main/src/plugin.ts)
- Vite config — [`vite.config.ts`](https://github.com/sprinteins/oscd-launcher/blob/main/vite.config.ts)

### From [`ase-compas/compas-transnetbw-plugins`](https://github.com/ase-compas/compas-transnetbw-plugins)
- Monorepo layout — [`nx.json`](https://github.com/ase-compas/compas-transnetbw-plugins/blob/main/nx.json)
- Example app — [`apps/archive-explorer`](https://github.com/ase-compas/compas-transnetbw-plugins/tree/main/apps/archive-explorer)
- Plugin wrapper pattern — [`apps/archive-explorer/src/plugin-wrapper.svelte.ts`](https://github.com/ase-compas/compas-transnetbw-plugins/blob/main/apps/archive-explorer/src/plugin-wrapper.svelte.ts)
