# XPath Background Validator

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
doc setter [Document loaded]
  ↓
editCount setter [On every edit]
  ↓
validate() [Runs XPath checks]
  ↓
Results logged to console + reported to OpenSCD
```

## Integration with CompAS

To add this validator to CompAS, register it in your plugin configuration:

```javascript
{
  name: 'XPath Validator',
  src: '/public/offline-plugins/compas/plugins/validator-prototype/0.0.1/index.js',
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

## Diagnostics Pane Integration

Rule violations are reported to OpenSCD as `issue` events (the same mechanism
used by the built-in `ValidateSchema`/`ValidateTemplates` validators), so they
show up grouped under this plugin in the **Diagnostics** pane (Ctrl+D). Each
validation run first clears this plugin's previous issues (`empty-issues`
event) before reporting the current ones, so the pane always reflects the
latest document state.

## Console Logging

Since this is a prototype, only genuine failures are logged to the console
with the `[XPATH-VALIDATOR]` prefix (e.g. network/API errors, unexpected
response shapes, thrown exceptions). Routine trace logging (mount/property
lifecycle, rule pass/fail) was removed in favor of the Diagnostics pane.

## Development

### Build
```bash
npm run build:validator-prototype
```

### Preview
```bash
npm run preview:validator-prototype
```

### Output
- Built to: `dist/apps/validator-prototype/index.js`
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
