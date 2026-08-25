<script lang="ts">
  import ExportIcdDialog from './ExportIcdDialog.svelte';
  import { setDoc, setDocName, openDialog, exportIcdState } from './exportIcdStore.svelte';

  let fileName = $state('no file loaded');

  async function handleFile(e: Event) {
    const file = (e.target as HTMLInputElement).files?.item(0);
    if (!file) return;

    const text = await file.text();
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    if (doc.querySelector('parsererror')) {
      fileName = `${file.name} (invalid XML, not loaded)`;
      return;
    }

    fileName = file.name;
    setDocName(file.name);
    setDoc(doc);
  }
</script>

<main>
  <h1>Export ICD Plugin (dev harness)</h1>
  <p>This page simulates what CompAS/OpenSCD does with a `kind: 'menu'` plugin: it keeps one instance mounted and calls <code>run()</code> when the menu entry is clicked.</p>

  <label>
    Load an SCD file:
    <input type="file" accept=".scd,.ssd,.sed" onchange={handleFile} />
  </label>
  <p>Loaded: {fileName}</p>

  <button type="button" onclick={openDialog} disabled={!exportIcdState.doc}>
    Simulate menu click (run())
  </button>
</main>

<ExportIcdDialog />

<style>
  main {
    font-family: Roboto, Arial, sans-serif;
    padding: 1rem;
    max-width: 640px;
  }
</style>
