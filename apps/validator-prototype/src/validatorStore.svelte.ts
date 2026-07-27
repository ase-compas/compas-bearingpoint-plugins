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

let host: HTMLElement | undefined;
let pluginId: string | undefined;

/** OpenSCD host element to dispatch 'issue'/'empty-issues' events on. */
export function setHost(element: HTMLElement) {
  host = element;
}

/** validatorId used to group/clear this plugin's issues in the diagnostics pane. */
export function setPluginId(id: string) {
  pluginId = id;
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
  host.dispatchEvent(
    new CustomEvent('empty-issues', {
      bubbles: true,
      composed: true,
      detail: { pluginSrc: pluginId },
    })
  );
}

export function setDoc(doc: XMLDocument | undefined) {
  currentDoc = doc;
  if (doc) {
    validate().catch(err => console.error('[XPATH-VALIDATOR] Auto-validation failed:', err));
  }
}

export function setEditCount(count: number) {
  if (currentEditCount !== count) {
    currentEditCount = count;
    validate().catch(err => console.error('[XPATH-VALIDATOR] Edit-triggered validation failed:', err));
  }
}

export function setPlugins(plugins: unknown[]) {
  // Kept as a no-op hook point; not currently used by this prototype.
  void plugins;
}

export async function validate(): Promise<void> {
  if (!currentDoc) return;

  if (validationInProgress) {
    console.error('[XPATH-VALIDATOR] ⚠️ Validation already in progress, skipping');
    return;
  }

  validationInProgress = true;
  clearIssues();

  try {
    const sclContent = new XMLSerializer().serializeToString(currentDoc);

    const results = await Promise.allSettled(
      DEFAULT_RULES.map((rule) => validateRule(rule, sclContent))
    );

    results.forEach((result, idx) => {
      const rule = DEFAULT_RULES[idx];
      if (result.status === 'fulfilled') {
        result.value.errors.forEach(error => {
          reportIssue(
            rule.title,
            `${error.message ?? rule.message ?? ''} (${error.xpath})`.trim()
          );
        });
      } else {
        console.error(
          `[XPATH-VALIDATOR] ⚠️ Rule "${rule.title}" threw error:`,
          result.reason
        );
        reportIssue(rule.title, `Validation rule could not be executed: ${result.reason}`);
      }
    });
  } catch (error) {
    console.error('[XPATH-VALIDATOR] ❌ Validation failed:', error);
  } finally {
    validationInProgress = false;
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
    console.error(`[XPATH-VALIDATOR] Failed to validate rule "${rule.title}":`, error);
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
