<script lang="ts">
  import { getIeds, getIedName, buildIcdDocument, buildIcdFilename, serializeXmlDocument } from './foundation';
  import { downloadTextFile } from './download';
  import { exportIcdState, closeDialog, selectIed, setError } from './exportIcdStore.svelte';

  // The `menu` plugin's custom element is mounted once, permanently, as
  // soon as it becomes active - typically before any project is even
  // loaded. Reading the IED list via a top-level `$derived` therefore
  // risks capturing an initial (empty) snapshot. To guarantee we always
  // pick up the *current* document, the IED list is (re)computed
  // explicitly every time the dialog transitions to "open", exactly
  // mirroring when the user actually needs it.
  let ieds = $state<Element[]>([]);

  // Use the browser's native <dialog> element rather than a hand-rolled
  // `position: fixed` overlay. CompAS/OpenSCD keeps every active `menu`
  // plugin's custom element permanently mounted inside its own nested
  // Shadow DOM (`#menuContent`), sitting in normal document flow *before*
  // the editor tab content. A plain `position: fixed` element there can
  // end up trapped behind the editor content whenever any ancestor in that
  // deeply nested tree establishes its own stacking/containment context
  // (e.g. `transform`, `filter`, `contain`, or `will-change`, all commonly
  // used by Material Web Components). `dialog.showModal()` instead promotes
  // the element to the browser's "top layer", which by spec always paints
  // above regular page content - including across Shadow DOM boundaries -
  // no matter what the ancestors do. It also gives us a native `::backdrop`
  // and Escape-to-close for free.
  let dialogEl: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (!dialogEl) return;

    if (exportIcdState.open && !dialogEl.open) {
      ieds = getIeds(exportIcdState.doc);
      dialogEl.showModal();
    } else if (!exportIcdState.open && dialogEl.open) {
      dialogEl.close();
    }
  });

  // Keep the store in sync when the dialog is closed via Escape or the
  // native close button, not just via our own "Close" button.
  function handleClose() {
    closeDialog();
  }

  // Close when the backdrop (the dialog element itself, outside its content
  // box) is clicked.
  function handleDialogClick(e: MouseEvent) {
    if (e.target === dialogEl) dialogEl?.close();
  }

  function handleExport() {
    if (!exportIcdState.doc || !exportIcdState.selectedIedName) return;

    const icdDoc = buildIcdDocument(exportIcdState.doc, exportIcdState.selectedIedName);
    if (!icdDoc) {
      setError(`No IED named "${exportIcdState.selectedIedName}" found`);
      return;
    }

    const filename = buildIcdFilename(exportIcdState.docName ?? 'project', exportIcdState.selectedIedName);
    downloadTextFile(serializeXmlDocument(icdDoc), filename, 'application/xml');

    dialogEl?.close();
  }
</script>

<dialog bind:this={dialogEl} onclose={handleClose} onclick={handleDialogClick} aria-labelledby="export-icd-title">
  <div class="content">
    <h2 id="export-icd-title">Export IED as ICD</h2>

    {#if ieds.length === 0}
      <p class="hint">No IEDs found in the currently opened project.</p>
    {:else}
      <div class="field">
        <label for="export-icd-ied-select">Select IED</label>
        <select
          id="export-icd-ied-select"
          value={exportIcdState.selectedIedName ?? ''}
          onchange={(e) => selectIed((e.target as HTMLSelectElement).value)}
        >
          <option value="" disabled>Choose an IED…</option>
          {#each ieds as ied (getIedName(ied))}
            <option value={getIedName(ied)}>{getIedName(ied)}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if exportIcdState.error}
      <p class="error">{exportIcdState.error}</p>
    {/if}

    <div class="actions">
      <button type="button" class="secondary" onclick={() => dialogEl?.close()}>Close</button>
      <button
        type="button"
        class="primary"
        disabled={!exportIcdState.selectedIedName}
        onclick={handleExport}
      >
        Export
      </button>
    </div>
  </div>
</dialog>

<style>
  dialog {
    padding: 0;
    min-width: 360px;
    max-width: 90vw;
    border: none;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    font-family: Roboto, Arial, sans-serif;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  .content {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  h2 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
    color: #1a1a1a;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: #555;
  }

  select {
    width: 100%;
    padding: 0.6rem 0.75rem;
    font-size: 0.95rem;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    transition: border-color 0.15s ease;
  }

  select:hover {
    border-color: #999;
  }

  select:focus-visible {
    outline: none;
    border-color: #0d47a1;
    box-shadow: 0 0 0 3px rgba(13, 71, 161, 0.15);
  }

  .hint {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .error {
    margin: 0;
    padding: 0.6rem 0.75rem;
    background: #fdecea;
    color: #b3261e;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    margin-top: 0.25rem;
  }

  button {
    padding: 0.55rem 1.25rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
  }

  .secondary {
    background: transparent;
    color: #555;
  }

  .secondary:hover {
    background: #f0f0f0;
  }

  .primary {
    background: #0d47a1;
    color: white;
  }

  .primary:hover:not(:disabled) {
    background: #0b3d8f;
    box-shadow: 0 2px 6px rgba(13, 71, 161, 0.35);
  }

  .primary:disabled {
    background: #c4c4c4;
    color: #eee;
    cursor: not-allowed;
  }
</style>
