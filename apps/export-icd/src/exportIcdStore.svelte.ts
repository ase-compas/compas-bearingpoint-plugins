/**
 * Reactive (Svelte 5 runes) state for the Export ICD menu plugin.
 *
 * A `menu` plugin instance is kept alive in the page for as long as it is
 * active, so all state needs to live outside of any single component
 * instance in order to survive being shown/hidden by the dialog.
 */

export type ExportIcdState = {
  doc?: XMLDocument;
  docName?: string;
  open: boolean;
  selectedIedName?: string;
  error?: string;
};

export const exportIcdState: ExportIcdState = $state({
  doc: undefined,
  docName: undefined,
  open: false,
  selectedIedName: undefined,
  error: undefined,
});

export function setDoc(newDoc: XMLDocument | undefined): void {
  exportIcdState.doc = newDoc;
}

export function setDocName(newDocName: string | undefined): void {
  exportIcdState.docName = newDocName;
}

/** Called when the user clicks the menu entry (the plugin's `run()`). */
export function openDialog(): void {
  exportIcdState.selectedIedName = undefined;
  exportIcdState.error = undefined;
  exportIcdState.open = true;
}

export function closeDialog(): void {
  exportIcdState.open = false;
}

export function selectIed(iedName: string): void {
  exportIcdState.selectedIedName = iedName || undefined;
  exportIcdState.error = undefined;
}

export function setError(message: string): void {
  exportIcdState.error = message;
}
