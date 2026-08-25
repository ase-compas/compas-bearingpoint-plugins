# SCL Quality Guard

A passive XPath validation plugin that validates SCL documents on every change without requiring user interaction.

## Overview

Unlike the engineering-wizard (which requires users to open the tool and run validations manually), this validator:
- ✅ Runs automatically whenever the document changes
- ✅ Validates using the same `compas-validation-service` API
- ✅ Integrates with OpenSCD's validation pipeline
- ✅ Displays results in the unified validation UI
- ✅ Lightweight (~4.8 KB minified)

## How It Works

1. **Auto-Detection**: When a document is loaded, the validator mounts automatically
2. **Passive Validation**: On every edit (via `editCount` setter), validation runs
3. **Rule Execution**: Default XPath rules are executed against the document
4. **Result Reporting**: Issues are logged and reported back to OpenSCD

## Validation Rules

Currently includes three default XPath rules (can be extended):

- **IED Name Uniqueness**: Ensures all IED names are unique within the document
- **Valid Communication References**: Checks that SubNetwork references are valid
- **Complete LN Instance Numbers**: Verifies LN instance numbers are sequential

## Architecture

### Validator vs Menu Plugin

| Aspect | XPath Validator | Engineering Wizard |
|--------|-----------------|-------------------|
| **Type** | `kind: 'validator'` | `kind: 'editor'` |
| **Triggered** | Auto on every edit | Manual via menu |
| **Rules** | Built-in XPath rules | User-defined via UI |
| **Use Case** | Passive continuous validation | Interactive rule creation |

### Plugin Lifecycle

```
Constructor
  ↓
connectedCallback() [OpenSCD mounts validator]
  ↓
doc setter ──────────► runValidation() [Document loaded]
  ↓
editCount setter ────► runValidation() [On every edit]
                          ↓
                        Results logged to console + reported to OpenSCD

validate() [Manual menu click only] ──► openRuleWizard() [shows dialog]
```

`validate()` and `runValidation()` are intentionally on two separate,
non-overlapping paths - see "Wizard/Dialog Demo" below.

## Integration with CompAS

To add this validator to CompAS, register it in your plugin configuration:

```javascript
{
  name: 'SCL Quality Guard',
  src: '/public/offline-plugins/compas/plugins/scl-quality-guard/0.0.1/index.js',
  icon: 'check_circle',
  activeByDefault: true,
  kind: 'validator',
  requireDoc: true,
}
```

## Validation Service API

This validator communicates with the `compas-validation-service` API:

**Endpoint**: `POST /compas-validation-service/api/v1/validate`

**Request** (FormData):
- `validationType`: 'XPATH'
- `sclFile`: XML document file
- `rulesJson`: JSON array of `{context, assertion}` rules
- `sclFileExtension`: 'SCD'

**Response**:
```typescript
{
  validationType: 'XPATH',
  valid: boolean,
  errors: [
    {
      ruleName: string,
      message: string,
      xpath: string,
      severity: string,
      lineNumber: number | null
    }
  ]
}
```

## Wizard/Dialog Demo (fully decoupled from validation)

Clicking this validator's entry in OpenSCD's menu opens its own "create
validation rule" dialog - a simple, placeholder 3-step wizard (Select
Context → Define Assertion → Review & Save) showing illustrative text per
step. No rule is actually created/persisted yet; this only demonstrates
that `kind: 'validator'` plugins - like `kind: 'menu'` plugins - can pop up
a fully custom modal for the user.

**The dialog and the actual XPath validation logic are completely
independent of each other:**
- Clicking the plugin **only** opens/steps through the dialog. It never
  triggers a validation run.
- The XPath rules run **only** in reaction to the document actually
  changing - i.e. from `setDoc`/`setEditCount` (see `runValidation()` in
  `validatorStore.svelte.ts`), never from a click.

This split matters because OpenSCD calls this validator's `validate()`
method for two unrelated reasons: (1) a manual menu click, and (2)
automatic revalidation of every active validator after every document
load/edit (validators don't get a separate "click-only" hook the way menu
plugins get `run()`). `validate()` itself now does *only* one thing -
open the dialog - and only when reason (1) applies. To tell (1) and (2)
apart, we rely on OpenSCD's menu dispatching an `empty-issues` event for
this plugin immediately before a manual click's `validate()` call (see
`generateValidatorMenus` in OpenSCD's `Layout.ts`); a capture-phase
listener on `document` uses that as a one-shot "this was a manual click"
signal, and is careful to ignore this plugin's own `empty-issues` dispatch
(from `clearIssues()`) so it doesn't falsely re-arm itself.

Meanwhile, `runValidation()` - the code that actually calls the
`compas-validation-service` API and reports issues - is wired solely to
`setDoc` (initial document load) and `setEditCount` (every edit).
`editCount` is OpenSCD core's own edit-counter, incremented directly from
the `XMLEditor`'s commit/undo/redo subscriptions - the same underlying
signal that also drives OpenSCD's automatic revalidation - and is the only
document-change signal exposed to plugins as a prop, making it the
simplest and most direct way for a plugin to react to "the document
changed" independently of any menu interaction.

Rather than going through OpenSCD's `wizard-dialog` (which only reliably
renders content it's given either as one of its predefined
`TextField`/`Select`/`Checkbox` shapes, or as a `lit-html` `TemplateResult`
created from the *exact same* `lit-html` module instance OpenSCD uses - a
fragile requirement for a plugin built and shipped independently), the
dialog is entirely custom: a native `<dialog>` element rendered inside
`validator.svelte`'s own shadow DOM, toggled via reactive state
(`isDialogOpen`/`openRuleWizard`/`closeDialog`) in `validatorStore.svelte.ts`.
Since the markup lives in this plugin's own component, it can grow into any
multi-step Svelte flow going forward - forms, buttons, custom components,
etc. - with no coupling to OpenSCD internals.

## Diagnostics Pane Integration

Rule violations are reported to OpenSCD as `issue` events (the same mechanism
used by the built-in `ValidateSchema`/`ValidateTemplates` validators), so they
show up grouped under this plugin in the **Diagnostics** pane (Ctrl+D). Each
validation run first clears this plugin's previous issues (`empty-issues`
event) before reporting the current ones, so the pane always reflects the
latest document state.

### Overlapping validation requests are queued, not dropped

Document load (`setDoc`) and the first edit-count update (`setEditCount`)
can both fire in quick succession, and `runValidation()`'s API calls are
async - so a second request can arrive while the first is still in flight.
Rather than skipping that second request (which would mean a real document
change silently never gets validated), `runValidation()` records it
(`rerunRequested`) and automatically re-runs once the current run finishes.
`setDoc` also now no-ops if called with the same document reference it
already has, avoiding a redundant validation on top of the one already
triggered by the corresponding `editCount` change.

## Console Logging

Since this is a prototype, only genuine failures are logged to the console
with the `[SCL-QUALITY-GUARD]` prefix (e.g. network/API errors, unexpected
response shapes, thrown exceptions). Routine trace logging (mount/property
lifecycle, rule pass/fail) was removed in favor of the Diagnostics pane.

## Development

### Build
```bash
npm run build:scl-quality-guard
```

### Preview
```bash
npm run preview:scl-quality-guard
```

### Output
- Built to: `dist/apps/scl-quality-guard/index.js`
- Size: ~4.8 KB minified
- Format: ES module with single default export

## Future Enhancements

- [ ] Make XPath rules configurable from CompAS UI
- [ ] Add debouncing to prevent excessive API calls
- [ ] Implement rule priority/severity levels
- [ ] Cache validation results for unchanged documents
- [ ] Add performance metrics/timing data
- [ ] Support for multiple validation backends (OCL, Schematron, etc.)

## See Also

- [DEBUG.md](./DEBUG.md) - Debugging guide
- `engineering-wizard` - Interactive rule creation tool
- `compas-validation-service` - Backend validation API
