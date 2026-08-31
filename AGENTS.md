# AGENTS.md

Guidance for agentic coding tools working in this repository.

## Project Overview

Nx monorepo (Nx 19) for **BearingPoint Plugins** — Svelte 5 + TypeScript + Vite
plugins for OpenSCD/CoMPAS. The main deliverable is **Plugin-Hub**, a UI plugin
that aggregates, installs and manages plugins from multiple providers inside the
OpenSCD/CoMPAS host application.

No Cursor or Copilot rules exist in this repo. Use this file as the source of
truth for conventions.

## Monorepo layout

| Path               | Purpose                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `apps/plugins-hub` | The Plugin-Hub application (Svelte UI, entry `src/plugin-wrapper.svelte.ts`, built as a lib bundle `index.js` with CSS inlined) |
| `libs/plugins-hub` | All domain logic: types, services, store, utils. Public API re-exported from `src/index.ts`. **All unit tests live here**      |
| `libs/global`      | Shared CSS / icons / Vite helpers (imported cross-project)                                                                     |
| `wiremock/`        | WireMock stubs for `/external-api` and `/proxy` (mock providers)                                                             |
| `doc/`             | Feature docs (`doc/features/plugins-hub.md`), plans, review                                                                  |
| `dist/`            | Build output (gitignored)                                                                                                    |

The lib is consumed by the app via the path alias `@compas-bearingpoint/plugins-hub`
(defined in `tsconfig.base.json`). New code that is shared should go in
`libs/plugins-hub` and be exported from `libs/plugins-hub/src/index.ts`.

## Commands (run from repo root)

First-time setup uses legacy peer deps (Svelte 5 + svelte-material-ui 8):

```bash
npm ci --legacy-peer-deps        # CI install (use npm install --legacy-peer-deps locally)
```

### Build / serve

```bash
npm run build                     # production build of the app (-> dist/apps/plugins-hub)
npm run run:plugins-hub           # dev server with HMR (port 4201) — requires `npm run wiremock`
npm run preview:plugins-hub       # preview server (port 4301), dev providers
npm run preview:plugins-hub-prod  # preview with production providers.json
npm run wiremock                  # mock API on port 8181 (needed for dev/preview)
```

### Lint / type-check

```bash
npm run lint                      # eslint on both projects
npx nx run plugins-hub-lib:lint   # lint one project
npx eslint libs/plugins-hub/src/lib/services/provider-loader.ts   # single file
npm run check                     # svelte-check (type checks .svelte files) on both projects
npx svelte-check --workspace libs/plugins-hub                     # single project
```

### Tests

Tests are Vitest 1.x + happy-dom, configured in each project's `vite.config.ts`
(`test.include: ['src/**/*.{test,spec}.{ts,...}']`). The **app** has no enabled
test target - all tests live in `libs/plugins-hub`.

```bash
npm run test:all                   # nx run-many --target=test (lib only)
npx nx run plugins-hub-lib:test    # run the lib test suite
npx vitest run --project plugins-hub-lib src/lib/services/version-resolver.spec.ts   # ONE spec file
npx vitest run --project plugins-hub-lib src/lib/services/version-resolver.spec.ts -t "returns -1 when a < b"  # ONE test by name
```

`--project` must match `test.name` in `vite.config.ts` (`plugins-hub-lib` /
`plugins-hub-app`); the vitest workspace (`vitest.workspace.ts`) includes both.

### Full verification (used by CI)

```bash
npm run verify                     # lint + check + test
```

## Code Style

### TypeScript / imports

- `verbatimModuleSyntax: true` — **must use `import type { X }`** for type-only
  imports and `export type` for type-only exports (see `libs/plugins-hub/src/index.ts`).
- Relative imports for intra-lib modules (`../types/provider`), the
  `@compas-bearingpoint/plugins-hub` alias only from the app into the lib.
- Group imports logically; `import type` and value imports can be interleaved in
  one statement (`import { type Plugin, buildPlugin } from ...`).
- Prefer interfaces for object shapes; document public types/interfaces with JSDoc.
- Use type guards (`value is X`) when validating unknown/raw JSON
  (see `isValidPluginManifestEntry` in `libs/plugins-hub/src/lib/services/provider-loader.ts`).
- `strict: false` in tsconfigs, but still avoid `any` — validate `unknown` and
  narrow. Avoid casting unless necessary.
- Use `as const` + `satisfies` for constant mappings and derived union types
  (e.g. `PluginKindTextMapping` in `libs/plugins-hub/src/lib/types/plugin.ts`).

### Formatting

- Prettier with `singleQuote: true` (`.prettierrc`). Svelte files formatted by
  the `svelte.svelte-vscode` extension (`apps/plugins-hub` default formatter).
- 2-space indent. Semicolons. Trailing commas in multiline structures.

### Naming

- Files: `kebab-case.ts` for modules; `PascalCase.svelte` for components;
  specs are `*.spec.ts` colocated next to the source file.
- Constants: `UPPER_SNAKE_CASE` (`STORAGE_KEY`, `CUSTOM_PROVIDER`, `PLUGIN_KINDS`).
- Functions: camelCase verbs (`loadProvider`, `buildPlugin`).
- Types/interfaces: PascalCase (`Provider`, `PluginManifestEntry`); union types
  like `InstallationState = 'INSTALLED' | 'AVAILABLE'`.
- State: `let x = $state(...)` / `const y = $derived(...)` in Svelte 5 runes.

### Svelte 5 conventions

- Use runes: `$props()` (typed via `interface Props`), `$state`, `$derived`, `$effect`.
  No stores, no `export let`. See `apps/plugins-hub/src/app/plugins-hub.svelte`.
- Component communication via callback props (`onInstall={handleInstall}`), not events.
- CSS in a `<style>` block per component, scoped; use `:global(...)` for
  SMUI/MDC internals; use design tokens via the host theme bridge
  (`libs/global/oscd-theme-bridge.css`): prefer `var(--bearingpoint-color-*)`
  / `var(--bearingpoint-text-*)` aliases (mapped from `--oscd-theme-*` →
  `--oscd-*`). Do not hardcode brand colours or set `--oscd-theme-*` in the
  plugin. Do not ship `@font-face` / font files in the production plugin;
  host icon classes live in `libs/global/oscd-typography.css`. Dev-only host
  brand/light-dark switching and OpenSCD font faces live under
  `libs/global/dev/` (wired from app `main.ts`, not the production entry).

### Error handling

- Prefer **result objects** over thrown exceptions: functions return
  `{ ..., error?: string }` and callers check `error` (see `loadProvider`,
  `uninstallPlugin`).
- Wrap `JSON.parse` / `localStorage` access in `try/catch` and fall back to safe
  defaults (`loadStoredPlugins` returns `[]` on failure).
- Log warnings for recoverable problems: `console.warn('[ProviderLoader] ...')`.
- Throwing is reserved for truly invariant failures (e.g. missing shadow root in
  `plugin-wrapper.svelte.ts`).

### Documentation comments

- JSDoc for every exported function/type: `@param`, `@returns`, and a summary
  line. Inline comments explain _why_ (rationale), not _what_.

### Tests

- Vitest globals enabled (`globals: true`); import `{ describe, it, expect, vi, beforeEach, afterEach }` from `vitest` anyway (repo style).
- Mock `global.fetch` via `vi.fn().mockResolvedValue(...)`; `vi.restoreAllMocks()`
  in `beforeEach`.
- Name tests like `returns plugins on successful fetch`; one `describe` per unit
  under test. Assert state transitions (e.g. `INSTALLED`/`ACTIVE`) in store specs.

## Architecture / domain rules

- **A plugin's unique key is registration `name` + `kind`** (OpenSCD host
  identity). Use `registrationName(provider, plugin.name)` + `kind` /
  `hubPluginKey(plugin)`. `src` is the load URL only. Stored host plugins are
  deduped with `dedupeStoredPluginsByNameAndKind`.
- Providers: remote (from `providers.json` / `providers.dev.json`) and builtin
  (from the host's `getBuiltInPlugins()`); JSON config is selected by
  `import.meta.env.MODE === 'development'`.
- All external absolute URLs go through `proxyUrl()` on localhost
  (`/proxy/host/path`); only proxy when not already localhost.
- Communicate with the host via the `oscd-configure-plugin` `CustomEvent`
  (`bubbles: true, composed: true`, dispatched on the compas/oscd layout element);
  registration name = `${provider.prefix} - ${plugin.name}` when prefix is set
  (see `registrationName` in `libs/plugins-hub/src/lib/services/plugin-loader.ts`).
- Host interaction is isolated in `libs/plugins-hub/src/lib/dom/open-scd-helpers.ts`
  (getLayout, detectHostEdition, getBuiltInPluginsFromHost).
- Do **not** commit local Vite-proxy monkey patches to compas-open-scd (see `DEVELOPMENT.md`).
- `@nx/enforce-module-boundaries` is on: app may depend on lib, lib must not
  depend on app; keep the graph clean.

## Git

- Conventional Commits style, scoped: `feat(plugins-hub):`, `fix(plugins-hub):`,
  `update(plugins-hub):`, `refactor(...)`, `update(docu):` (see `git log`).
- `apps/plugins-hub/CHANGELOG.md` follows Keep a Changelog + SemVer; update it
  with feature changes.
- CI (`main.yml`): `npm ci --legacy-peer-deps` → `npm run build` → `npm run verify`; on main push, `dist/apps/*` is copied to the `published-plugins` branch for deployment.
