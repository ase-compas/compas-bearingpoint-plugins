# SCL Quality Guard – Debugging & Setup Guide

## Overview: OCL Validator Service

This plugin demonstrates a **background validator** that runs passively in OpenSCD. Unlike menu plugins which require user interaction, validators are designed to:
- Mount automatically when enabled (no user action required)
- Run validation checks passively or on-demand
- Report validation issues back to the system

### Key Differences: Menu vs Validator

| Aspect | Menu Plugin | Validator |
|--------|-----------|-----------|
| **Kind** | `kind: 'menu'` | `kind: 'validator'` |
| **Activation** | User clicks menu entry | Runs in background / on-demand |
| **Method** | `run()` → returns Promise<void> | `validate()` → returns Promise<ValidationIssue[]> |
| **UI** | Visible menu item | No menu entry (unless included) |
| **Lifecycle** | Mounts when clicked | Mounts when enabled + document loads |

### How Validators Load

1. **Registration** – The plugin is declared in plugins.js with:
   - `src`: URL/path to the compiled `index.js`
   - `kind: 'validator'` (instead of `'menu'`)
   - `activeByDefault: true` (to auto-enable)
   - Plugin name, icon, etc.

2. **Build & Placement** – The built `dist/apps/scl-quality-guard/index.js` must be:
   - Copied to the CompAS distribution or served remotely
   - Served at the URL specified in `src`

3. **Plugin Manager** – When CompAS loads:
   - Reads plugins.js and discovers the registered validators
   - OpenSCD's `<oscd-layout>` calls `renderMenuContent()` which mounts every active validator
   - Your plugin's `connectedCallback()` fires → properties are set by the host
   - `validate()` is called when the system runs validators

4. **Console Logs** – Check:
   - Browser DevTools → **Console** tab → look for `[SCL-QUALITY-GUARD]` messages
   - Browser DevTools → **Network** tab → confirm `index.js` is fetched (200 status)
   - Browser DevTools → **Elements** → search for the validator's custom element tag

### Checklist for Setup

- [ ] **Build** – Run `npm run build:scl-quality-guard`
- [ ] **Register** – Add entry to `packages/compas-open-scd/public/js/plugins.js`:
  ```javascript
  {
    name: 'SCL Quality Guard',
    src: '/public/offline-plugins/compas/plugins/scl-quality-guard/0.0.1/index.js',
    icon: 'check_circle',
    activeByDefault: true,
    kind: 'validator',
    requireDoc: true,  // Validator needs a document to work with
  }
  ```
- [ ] **Copy Built Files** – From `dist/apps/scl-quality-guard/` to the CompAS offline plugins directory
- [ ] **Start CompAS** – `npm run dev` or build & serve the distribution
- [ ] **Open Browser DevTools** → Console tab
- [ ] **Load/Create Document** in CompAS
- [ ] **Monitor Console** for `[SCL-QUALITY-GUARD]` debug messages

### Expected Console Output

Once the plugin is properly hooked up, you should see (in the **Console** tab):

```
[SCL-QUALITY-GUARD] ✅ Constructor called - plugin is loading!
[SCL-QUALITY-GUARD] ✅ connectedCallback fired - VALIDATOR MOUNTED!
[SCL-QUALITY-GUARD] doc changed (XSD document node)
[SCL-QUALITY-GUARD] editCount changed to 0
... (on every edit)
[SCL-QUALITY-GUARD] ✅ validate() called - VALIDATION TRIGGERED!
```

### What the Plugin Does (Today)

- `validate()` is called whenever the system runs validators
- Logs debug messages to console
- Shows an alert to confirm the validator is alive (for testing)
- Currently just a proof-of-concept; ready to implement real OCL validation logic

### Next Steps

1. Register the plugin in `plugins.js` (see checkbox above)
2. Run the full CompAS build or dev server
3. Open DevTools Console and look for `[SCL-QUALITY-GUARD]` messages
4. If still no output, check **Network** tab to confirm `index.js` loaded (200 status)
5. Once working, implement real OCL validation inside `validate()` method

### To Test Locally Without Full Integration

Run during development:
```bash
cd apps/scl-quality-guard
npm run serve
# Opens http://localhost:4210
# Shows the validator in isolation (if dev UI is configured)
```

---

## Immediate Debugging Steps (If You've Already Added via Plugin Manager)

1. **Rebuild the validator with debug logging**:
   ```bash
   npm run build:scl-quality-guard
   # Updates dist/apps/scl-quality-guard/index.js
   ```

2. **Re-add the plugin** in CompAS (or reload the page):
   - Open DevTools **Console** tab **before** adding the plugin

3. **Watch Console for Lifecycle Events**:
   - Should see: `[SCL-QUALITY-GUARD] ✅ Constructor called - plugin is loading!`
   - Then: `[SCL-QUALITY-GUARD] ✅ connectedCallback fired - VALIDATOR MOUNTED!`
   - Then: `[SCL-QUALITY-GUARD] doc changed`

4. **If No Console Output At All**:
   - Check **Network** tab → filter by `scl-quality-guard`
   - Look for `index.js` request and verify status is **200**
   - If **404** or **error**: file not served at that location

5. **Trigger Validation**:
   - Load a document in CompAS
   - Look for menu entries with validators or trigger validation manually
   - Console should show: `[SCL-QUALITY-GUARD] ✅ validate() called - VALIDATION TRIGGERED!`

---

## Summary

**Before Plugin Activation:**
- No `[SCL-QUALITY-GUARD]` messages in Console

**After Adding via Plugin Manager (with correct URL):**
- Console shows: `[SCL-QUALITY-GUARD] ✅ Constructor called - plugin is loading!`
- Console shows: `[SCL-QUALITY-GUARD] ✅ connectedCallback fired - VALIDATOR MOUNTED!`

**After Loading a Document:**
- Console shows: `[SCL-QUALITY-GUARD] doc changed [element]`
- Console shows: `[SCL-QUALITY-GUARD] editCount changed to 0`

**When Validation Runs:**
- Console shows: `[SCL-QUALITY-GUARD] ✅ validate() called - VALIDATION TRIGGERED!`

**If You See None of These:**
- Verify the plugin URL and file are accessible (Network tab)
- Check Console for any loading or registration errors
- Confirm the plugin kind is set to `'validator'` in plugins.js
