/**
 * Reactive (Svelte 5 runes) state for the Create Service Section plugin.
 *
 * Kept module-level rather than component-level state because the
 * `editor` plugin instance stays mounted while its tab is inactive, so
 * state must survive across show/hide cycles.
 */

import { createDefaultServicesFormState, parseServicesFormState, getIeds, getIedName, getExistingServices } from '../core/services';
import type { SectionState } from '../core/services';

export type CreateServiceSectionState = {
  doc?: XMLDocument;
  selectedIedName?: string;
  nameLength: string;
  formState: Record<string, SectionState>;
  error?: string;
  success?: string;
};

export const createServiceSectionState: CreateServiceSectionState = $state({
  doc: undefined,
  selectedIedName: undefined,
  nameLength: '64',
  formState: createDefaultServicesFormState(),
  error: undefined,
  success: undefined,
});

export function setDoc(newDoc: XMLDocument | undefined): void {
  createServiceSectionState.doc = newDoc;
}

export function selectIed(iedName: string): void {
  createServiceSectionState.selectedIedName = iedName || undefined;
  createServiceSectionState.error = undefined;
  createServiceSectionState.success = undefined;

  if (!iedName) {
    createServiceSectionState.formState = createDefaultServicesFormState();
    createServiceSectionState.nameLength = '64';
    return;
  }

  const ied = getIeds(createServiceSectionState.doc).find(
    candidate => getIedName(candidate) === iedName
  );
  const existingServices = ied ? getExistingServices(ied) : null;

  createServiceSectionState.formState = parseServicesFormState(existingServices);
  createServiceSectionState.nameLength = existingServices?.getAttribute('nameLength') ?? '64';
}

export function setNameLength(value: string): void {
  createServiceSectionState.nameLength = value;
}

export function setSectionEnabled(tag: string, enabled: boolean): void {
  const section = createServiceSectionState.formState[tag];
  if (section) section.enabled = enabled;
}

export function setChildSectionEnabled(parentTag: string, childTag: string, enabled: boolean): void {
  const child = createServiceSectionState.formState[parentTag]?.children[childTag];
  if (child) child.enabled = enabled;
}

export function setFieldValue(tag: string, fieldName: string, value: string): void {
  const section = createServiceSectionState.formState[tag];
  if (section) section.values[fieldName] = value;
}

export function setChildFieldValue(
  parentTag: string,
  childTag: string,
  fieldName: string,
  value: string
): void {
  const child = createServiceSectionState.formState[parentTag]?.children[childTag];
  if (child) child.values[fieldName] = value;
}

export function setError(message: string): void {
  createServiceSectionState.error = message;
  createServiceSectionState.success = undefined;
}

export function setSuccess(message: string): void {
  createServiceSectionState.success = message;
  createServiceSectionState.error = undefined;
}

/** Resets the form (IED selection and every section) back to its defaults. */
export function resetForm(): void {
  createServiceSectionState.selectedIedName = undefined;
  createServiceSectionState.nameLength = '64';
  createServiceSectionState.formState = createDefaultServicesFormState();
  createServiceSectionState.error = undefined;
  createServiceSectionState.success = undefined;
}
