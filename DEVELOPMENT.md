# Developer Guide

## Start Scripts

Three modes are available — all require WireMock running in parallel.

| Script | Hot Reload | Realism | Providers |
|--------|-----------|---------|-----------|
| `npm run run:plugins-hub` | Auto | Low | `providers.dev.json` |
| `npm run preview:plugins-hub` | Manual | Medium | `providers.dev.json` |
| `npm run preview:plugins-hub-prod` | Manual | High | `providers.json` (production) |

> **run** = fastest dev loop. **preview-prod** = closest to production behavior.

---

## Local Development (run)

```bash
npm run run:plugins-hub   # terminal 1 — dev server with HMR
npm run wiremock          # terminal 2 — mock API on port 8181 (required)
```

Open: http://localhost:4301

Built-in plugins in standalone dev come from the **fake OpenSCD host**
(`createFakeCompasLayout` → `getBuiltInPlugins()`), not from WireMock.
WireMock is only needed for remote provider manifests under `/external-api`.

### Host theme playground (standalone only)

Standalone `run:plugins-hub` lets you smoke-test host theming **on the real Hub
page** without registering the plugin in OpenSCD/CoMPAS.

#### How presets are maintained

| Piece | Role |
|--------|------|
| **`libs/global/dev/host-theme-presets.css`** | **Source of truth** — `html` holds derived MDC/`--oscd-*` via `var(...)`; brand+mode classes only override the Solarized palette (`--base*`, accents) |
| **`libs/global/dev/host-themes.ts`** | Brand labels + class-name helpers for the toolbar |
| **`libs/global/dev/theme-playground.ts`** | Toggles brand + mode classes on `<html>` (+ toolbar / query / localStorage); `-new` brands also set `color-scheme` |

JS does **not** set individual CSS variables. To add a brand: add
`html.{brand}.light` / `html.{brand}.dark` blocks in the CSS and one entry in
`HOST_THEME_PRESETS`. `-new` brands additionally set `document.documentElement.style.colorScheme`
so CSS `light-dark()` works.

| Option | Used? |
|--------|-------|
| Fixture CSS classes | **Yes** |
| UI switcher | **Yes** |
| Query params (`?brand=&mode=`) | **Yes** |
| Separate story/demo page | No |

Runtime is wired from `apps/plugins-hub/src/main.ts` only (**not** the production
plugin entry). Shared fake OpenSCD host lives in `libs/global/dev/fake-open-scd.ts`;
Hub builtins stay in `apps/plugins-hub/src/dev/fake-open-scd.ts`
(`createFakeCompasLayout`).

#### Fonts (standalone only)

Production inherits Roboto / Roboto Mono / Material Symbols Outlined from the
OpenSCD host and must **not** ship `@font-face` files. The plugin only bundles
the host icon **classes** in `libs/global/oscd-typography.css` (needed inside
Shadow DOM). Default `--oscd-icon-font` is `'Material Symbols Outlined'`.

Standalone `run:plugins-hub` registers the same faces as OpenSCD
(`packages/distribution/public/google`) via `libs/global/dev/oscd-fonts.css` →
`libs/global/dev/google/` (Roboto, Roboto Mono, Material Icons Outlined,
Material Symbols Outlined).

#### Using it

| Control | Options |
|---------|---------|
| Brand preset | `openscd` (Solarized), `transnetbw` (TransnetBW teal), `bearingpoint` (demo), plus `-new` variants (`openscd-new`, `transnetbw-new`, `bearingpoint-new`) that enable `light-dark()` via `color-scheme` |
| Mode | `light` / `dark` |

- Toolbar: top-left on http://localhost:4301 — small 16×16 palette icon toggles
  the panel open/closed (open state in `localStorage`)
- Query examples (open directly; also updated when you use the toolbar):

```text
http://localhost:4301/?brand=openscd&mode=light
http://localhost:4301/?brand=transnetbw&mode=dark
http://localhost:4301/?brand=bearingpoint&mode=light
http://localhost:4301/?brand=openscd-new&mode=dark
```

- Priority on load: **query** → `localStorage` (`plugins-hub-dev-theme`) → OpenSCD light.
- Sets brand + mode as separate classes on `<html>` (e.g. `transnetbw` + `dark`); CSS defines the host
  variables; production bridge maps them into Hub / SMUI tokens.
  `-new` brands also set `color-scheme` so `light-dark()` resolves.

Production still inherits the **real** host theme when loaded as a plugin; use
the full Compas stack below for end-to-end host integration (events, layout).

---

## Preview with full Compas stack

Needed for a realistic end-to-end test of the plugin inside Open-SCD
(install events, layout, real host theme cascade).

**Terminal 1 — mocks:**
```bash
npm run wiremock
```

**Terminal 2 — preview server:**
```bash
npm run preview:plugins-hub          # dev providers
# OR
npm run preview:plugins-hub-prod     # production providers
```

**Terminal 3 — Compas Open-SCD (one-time setup):**
```bash
git clone https://github.com/com-pas/compas-open-scd
pnpm install
pnpm start
```

Open: http://localhost:8080

### Required patch in Compas / Open-SCD (Vite proxy)

Compas Open-SCD and the OpenSCD monorepo use **Vite**. For local WireMock, proxy
`/external-api` and `/proxy` to port **8181** on both `server` and `preview`.

| Project layout | Vite config file |
|----------------|------------------|
| **CoMPAS Open-SCD** (single-app) | root `vite.config.ts` |
| **OpenSCD monorepo** | `packages/distribution/vite.config.ts` |

Merge into the existing `defineConfig` (keep existing port/plugins; do not remove other proxies):

```ts
server: {
  port: 8080,
  // Local backend (e.g. WireMock / Compas API) – replaces former Snowpack routes
  proxy: {
    '^/(external-api|proxy)/.*': {
      target: 'http://localhost:8181',
      changeOrigin: true,
    },
  },
},
preview: {
  port: 8080,
  proxy: {
    '^/(external-api|proxy)/.*': {
      target: 'http://localhost:8181',
      changeOrigin: true,
    },
  },
},
```

**Notes:**

- WireMock must listen on **8181** (`npm run wiremock` in this repo).
- Vite serves Open-SCD on **8080**.
- This is a **local monkey patch** — do not commit it unless you intend to upstream it.

### First-time plugin registration

After opening http://localhost:8080 for the first time, add the Plugin-Hub plugin manually:

- **Name:** `BP-Hub`
- **URL:** `http://localhost:4301/index.js`

![COMPAS - Custom Plugin](doc/img/compas-custom-plugin.png)

