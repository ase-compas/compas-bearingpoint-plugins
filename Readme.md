# BearingPoint Plugins

See installation instructions from: https://ase-compas.github.io/compas-bearingpoint-plugins/

## Plugin-Hub

```json
{
  "name": "PluginHub",
  "kind": "editor",
  "description": "BearingPoint Plugin Hub – Central plugin for integrating and managing plugins from multiple providers",
  "src": "https://ase-compas.github.io/compas-bearingpoint-plugins/compas/plugins/plugins-hub/index.js",
}
```

### Theme compatibility

Plugin Hub **inherits the host OpenSCD / CoMPAS theme** (`--oscd-theme-*` and
related tokens) instead of shipping a fixed brand palette. Maintainers: see
theming notes in [`doc/features/plugins-hub.md`](doc/features/plugins-hub.md)
and the bridge in `libs/global/oscd-theme-bridge.css`.

### Local development (theme smoke tests)

```bash
npm ci --legacy-peer-deps
npm run wiremock          # terminal 1
npm run run:plugins-hub   # terminal 2 → http://localhost:4301
```

Use the floating **Host theme** toolbar (bottom-right) or query params
(`?brand=transnetbw&mode=dark`) to switch presets and light/dark without
registering the Hub as a plugin in a full host. Details:
[`DEVELOPMENT.md`](DEVELOPMENT.md).