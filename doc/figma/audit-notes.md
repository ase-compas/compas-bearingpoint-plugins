# Audit Notes – Plugins-Hub vs Figma Mockup (Issue #5)

**Date:** 2026-07-29  
**Branch:** brabenetz/ISSUE-5_Update_Plugins-Hub_Apply_Mockup  
**Reference commit for this audit:** c926268 ("update(styling) apply styling from mockups")

## Mockup Sources
- Primary screenshot: `doc/figma/plugin-store-mockup.png`
- Key Figma node: `686-13619` / frame `686:13620` ("Plugin Store V2")
- Additional context from `get_metadata` + `get_design_context` for the same node (layout, labels, order of elements)

Two main visual states in the mockup:
1. List / grid of plugins grouped by provider with filters and tabs
2. Same view with right-hand detail panel open for a selected plugin

---

## Verified "Done" Items (from GitHub issue checkboxes)

| # | Item | Result | Evidence / Notes |
|---|------|--------|------------------|
| 1 | Badge colors for installed / available / inactive / active | ✅ Good | `badge-installed` (#02A75D on #E4FBEF), `badge-available` (blue), `badge-active` (teal on light), `badge-inactive` (dark on #EDF1F2). Close match to mockup. |
| 2 | Button colors (ENABLE / DISABLE / REMOVE) | ✅ Good | `.action-btn.install` dark teal, `.enable` cyan, `.disable` outline style, `.remove` red. Hover states present. |
| 3 | Detail View labels use regular font (no monospace) | ✅ Good | `.meta-value { font-size:12px; font-weight:500; }` – no `monospace`. |
| 4 | Page background light gray | ✅ Good | `.plugins-hub { background: #EDF1F2; }` matches the mockup canvas. |
| 5 | Search bar uses standard @smui components | ✅ Good | `Textfield` + `Select` (outlined) with leading search icon. Height forced to 42px. |

---

## Remaining Gaps & Observations (to be addressed by later tasks)

### High Priority (explicit ACs or user feedback)

1. **Action buttons are UPPERCASE + heavy letter-spacing**
   - Current code: `INSTALL`, `DISABLE`, `ENABLE`, `REMOVE`
   - Mockup: Sentence case ("Enable", "Disable", "Remove")
   - CSS: `letter-spacing: 0.05em; font-weight:700;`
   - Also in detail panel actions.

2. **Badge font-weight is not SemiBold**
   - Current: `.badge { font-weight: 500; }`
   - Required by AC: SemiBold (600)

3. **Provider cards still have border + light shadow**
   - `border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.06);`
   - Mockup provider sections look flat.

4. **Provider description color is too dark / same as name**
   - Current: `color: #004552;`
   - Mockup shows clearly lighter/secondary text under the provider name.

5. **No kind filter ("All types")**
   - Mockup has a filter for plugin type/kind.
   - Current filters: status + contributor only.
   - `kind` (editor/menu/validator) exists in data but is not filterable or prominently displayed.

6. **longDescription is missing end-to-end**
   - Not in `PluginManifestEntry` type.
   - Not rendered in detail panel.
   - User feedback (2026-07-29): **long description must appear directly after the URL**, before the action buttons.

7. **Detail panel element order**
   - Current: Header → short desc → badges → meta grid (Contributor/Version/Last updated/PLUGIN ID) → URL → actions
   - Required adjustment: longDescription right after URL.

8. **Kind visibility**
   - `KIND` appears as a meta label in uppercase, but the mockup shows type information more visibly on cards or as clear chips.

### Medium / Visual Polish

9. **Card subtitle lightness on plugin cards**
   - `.plugin-description` uses `#004552`. Mockup descriptions are lighter/secondary.

10. **Tabbar vs vertical provider sections**
    - Mockup uses a horizontal tab bar (OpenSCD Community / CoMPAS Community / BearingPoint / SprintEins / Omnicron).
    - Current implementation uses vertical `<ProviderCard>` sections.
    - This is a larger layout difference; may be acceptable or future work.

11. **Card layout style**
    - Mockup inside the content area uses more list-row style (icon + title + desc + pills + right-aligned action).
    - Current is a responsive grid of cards. Visual density and hierarchy differ.

12. **Provider icons**
    - TransnetBW still configured with `.ico`.
    - BearingPoint points to an external SVG.
    - **Task 8 (icons) is deferred to the user** per explicit instruction.

13. **Meta labels styling**
    - Use `text-transform: uppercase; letter-spacing: 0.08em; font-weight:700;` on `.meta-label`.
    - This is close but should be spot-checked against the exact mockup typography.

---

## Items Confirmed as Already Correct (thanks to c926268 + prior work)

- Overall color palette (dark header `#0d3d4a` / `#004552`, light bg `#EDF1F2`, accent teal/cyan).
- Use of SMUI Textfield + Select in toolbar.
- Background, header, toolbar structure.
- No monospace on plugin identifiers in the detail view.
- Badge color palette (green/blue/teal/amber) is already very close.

---

## Recommendations for Implementation Order (see plan.md)

Follow the numbered tasks in `plan.md`. Key sequencing notes:
- Task 2 (data model for longDescription) before Task 3 (rendering).
- Task 3 must place longDescription **immediately after the URL block**.
- Task 6 (badge font-weight) and Task 7 (Sentence Case buttons) are small, high-visibility wins.
- Task 8 (SVGs) is skipped in this plan (user will do).

---

## Files Inspected During This Audit

**Svelte components**
- `apps/plugins-hub/src/app/plugins-hub.svelte`
- `apps/plugins-hub/src/app/provider-card.svelte`
- `apps/plugins-hub/src/app/plugin-card.svelte`
- `apps/plugins-hub/src/app/plugin-details.svelte`

**Library**
- `libs/plugins-hub/src/lib/types/plugin.ts`
- `libs/plugins-hub/src/lib/store/plugin-store.ts`
- `libs/plugins-hub/src/lib/config/providers.json`

**Other**
- Figma-derived metadata for node 686:13620 (structure, text content, element order)
- Downloaded mockup image `doc/figma/plugin-store-mockup.png`

---

## Next Step After This Audit

Create one focused commit containing this audit document (and any tiny one-line observations if they were made).

Then proceed task-by-task, committing after each.

**End of Task 1 audit notes.**
