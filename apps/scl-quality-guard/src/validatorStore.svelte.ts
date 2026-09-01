/**
 * Validator store - holds validator state and logic
 * Called by validator.svelte props
 */

interface ValidationError {
  ruleName: string;
  message: string;
  xpath: string;
  severity: string;
  lineNumber: number | null;
}

interface ValidationResult {
  validationType: string;
  valid: boolean;
  errors: ValidationError[];
}

interface XPathRule {
  title: string;
  description: string;
  context: string;
  assertion: string;
  message?: string;
}

const API_URL = '/compas-validation-service/api/v1/validate';

const DEFAULT_RULES: XPathRule[] = [
  {
    title: 'Substation Required',
    description: 'Ensures the document contains at least one Substation element',
    context: 'SCL',
    assertion: 'count(//Substation) > 0',
    message: 'Document must contain at least one Substation element',
  },
  {
    title: 'Substation Name Prefix',
    description: 'Ensures all Substation names start with "tbw"',
    context: 'SCL',
    assertion: 'count(//Substation[not(starts-with(@name, "tbw"))]) = 0',
    message: 'All Substation names must start with "tbw"',
  },
];

let currentDoc: XMLDocument | undefined = $state(undefined);
let currentEditCount = $state(-1);
let validationInProgress = false;
// Set when a validation is requested (setDoc/setEditCount) while one is
// already running. Rather than silently dropping that request (which would
// mean a document change never actually gets validated), we remember it and
// re-run once the in-flight validation finishes.
let rerunRequested = false;

let host: HTMLElement | undefined;
let pluginId: string | undefined;

// `validate()` is OpenSCD's official hook for validators - it's called
// both (1) when a user clicks this validator's entry in the menu, and (2)
// automatically whenever any active validator needs to re-run (after every
// document load/edit). We deliberately do NOT run the actual XPath checks
// from here at all, in either case: this method exists solely to open the
// rule-configuration dialog, and only for a genuine manual click (case 1).
// The real validation logic lives in `runValidation()` below, wired
// exclusively to `setDoc`/`setEditCount` - i.e. actual document changes -
// so dialog and validation are fully independent of each other.
//
// To tell the two `validate()` call reasons apart, we rely on the fact that
// OpenSCD's menu happens to dispatch an `empty-issues` event for this exact
// plugin immediately before a manual click's `validate()` call (see
// `generateValidatorMenus` in Layout.ts), but not before automatic
// revalidation. We use that as a one-shot "this validate() call came from a
// manual click" signal.
let manualTrigger = false;
let emptyIssuesListenerAttached = false;
// Guards against our own `clearIssues()` call (below) re-triggering the
// capture listener and incorrectly re-arming `manualTrigger` for the next,
// unrelated automatic revalidation.
let suppressOwnEmptyIssues = false;

/** OpenSCD host element to dispatch 'issue'/'empty-issues' events on. */
export function setHost(element: HTMLElement) {
  host = element;

  if (emptyIssuesListenerAttached) return;
  emptyIssuesListenerAttached = true;
  // Capture phase: the event is dispatched on an ancestor (OpenSCD's
  // layout element), so it must be intercepted on the way down, before it
  // would otherwise just bubble past us.
  document.addEventListener(
    'empty-issues',
    (e: Event) => {
      if (suppressOwnEmptyIssues) return;
      const detail = (e as CustomEvent<{ pluginSrc?: string }>).detail;
      if (pluginId && detail?.pluginSrc === pluginId) manualTrigger = true;
    },
    true
  );
}

/** validatorId used to group/clear this plugin's issues in the diagnostics pane. */
export function setPluginId(id: string) {
  pluginId = id;
}

let dialogOpen = $state(false);

/** Reactive getter consumed by validator.svelte's `$effect`. */
export function isDialogOpen(): boolean {
  return dialogOpen;
}
export function closeDialog(): void {
  dialogOpen = false;
}

/** Opens this plugin's own "create validation rule" dialog. This UI is
 * entirely custom (native `<dialog>` rendered inside validator.svelte's own
 * shadow DOM), so unlike OpenSCD's wizard-dialog it isn't limited to
 * predefined text/select/checkbox inputs - it can grow into any multi-step
 * Svelte flow. For now the steps only show placeholder text; no rule is
 * actually created/persisted yet. */
function openRuleDialog(): void {
  dialogOpen = true;
}

function reportIssue(title: string, message: string): void {
  if (!host || !pluginId) return;
  host.dispatchEvent(
    new CustomEvent('issue', {
      bubbles: true,
      composed: true,
      detail: { validatorId: pluginId, title, message },
    })
  );
}

function clearIssues(): void {
  if (!host || !pluginId) return;
  suppressOwnEmptyIssues = true;
  host.dispatchEvent(
    new CustomEvent('empty-issues', {
      bubbles: true,
      composed: true,
      detail: { pluginSrc: pluginId },
    })
  );
  suppressOwnEmptyIssues = false;
}

export function setDoc(doc: XMLDocument | undefined) {
  if (currentDoc === doc) return;
  currentDoc = doc;
  if (doc) {
    runValidation().catch(err => console.error('[SCL-QUALITY-GUARD] Auto-validation failed:', err));
  }
}

export function setEditCount(count: number) {
  if (currentEditCount !== count) {
    currentEditCount = count;
    runValidation().catch(err => console.error('[SCL-QUALITY-GUARD] Edit-triggered validation failed:', err));
  }
}

export function setPlugins(plugins: unknown[]) {
  // Kept as a no-op hook point; not currently used by this prototype.
  void plugins;
}

/** OpenSCD's official validator hook. Fully decoupled from the actual
 * validation logic (see `runValidation()`): this only opens the
 * rule-configuration dialog, and only in response to a genuine manual
 * click - never in response to document changes/automatic revalidation. */
export async function validate(): Promise<void> {
  if (!manualTrigger) return;
  manualTrigger = false;
  openRuleDialog();
}

/** Runs the actual XPath validation logic. Triggered exclusively by
 * `setDoc`/`setEditCount` above - i.e. whenever the document is loaded or
 * changes - never by a menu click on this plugin. */
async function runValidation(): Promise<void> {
  if (!currentDoc) return;

  if (validationInProgress) {
    // Don't drop this request: a document change happened and must still
    // be validated once the current run completes.
    rerunRequested = true;
    return;
  }

  validationInProgress = true;
  clearIssues();
  console.info(`[SCL-QUALITY-GUARD] ▶️ Running ${DEFAULT_RULES.length} rule(s)...`);

  try {
    const sclContent = new XMLSerializer().serializeToString(currentDoc);

    const results = await Promise.allSettled(
      DEFAULT_RULES.map((rule) => validateRule(rule, sclContent))
    );

    let totalIssues = 0;
    results.forEach((result, idx) => {
      const rule = DEFAULT_RULES[idx];
      if (result.status === 'fulfilled') {
        result.value.errors.forEach(error => {
          totalIssues++;
          reportIssue(
            rule.title,
            `${error.message ?? rule.message ?? ''} (${error.xpath})`.trim()
          );
        });
      } else {
        console.error(
          `[SCL-QUALITY-GUARD] ⚠️ Rule "${rule.title}" threw error:`,
          result.reason
        );
        reportIssue(rule.title, `Validation rule could not be executed: ${result.reason}`);
      }
    });

    console.info(
      totalIssues === 0
        ? '[SCL-QUALITY-GUARD] ✅ Validation passed, no issues found'
        : `[SCL-QUALITY-GUARD] ❌ Validation found ${totalIssues} issue(s)`
    );
  } catch (error) {
    console.error('[SCL-QUALITY-GUARD] ❌ Validation failed:', error);
  } finally {
    validationInProgress = false;
    if (rerunRequested) {
      rerunRequested = false;
      runValidation().catch(err => console.error('[SCL-QUALITY-GUARD] Queued re-validation failed:', err));
    }
  }
}

async function validateRule(rule: XPathRule, sclContent: string): Promise<ValidationResult> {
  const formData = new FormData();
  formData.append('validationType', 'XPATH');
  formData.append('sclFile', new File([sclContent], 'document.scd', { type: 'application/xml' }));
  formData.append('rulesJson', JSON.stringify([
    {
      context: rule.context,
      assertion: rule.assertion,
    }
  ]));
  formData.append('sclFileExtension', 'SCD');

  try {
    const response = await fetch(API_URL, { method: 'POST', body: formData });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    if (!isValidationResult(data)) {
      throw new Error('Unexpected response shape from validation API');
    }
    return data;
  } catch (error) {
    console.error(`[SCL-QUALITY-GUARD] Failed to validate rule "${rule.title}":`, error);
    throw error;
  }
}

function isValidationResult(data: unknown): data is ValidationResult {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).valid === 'boolean' &&
    Array.isArray((data as Record<string, unknown>).errors)
  );
}
