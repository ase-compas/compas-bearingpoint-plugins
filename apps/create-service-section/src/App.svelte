<script lang="ts">
  import { setDoc } from '../store/services-form.svelte';
  import Panel from '../ui/panel.svelte';

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
    setDoc(doc);
  }

  function handleEdit(e: Event) {
    // eslint-disable-next-line no-console
    console.log('oscd-edit-v2', (e as CustomEvent).detail);
  }

  $effect(() => {
    window.addEventListener('oscd-edit-v2', handleEdit as EventListener);
    return () => window.removeEventListener('oscd-edit-v2', handleEdit as EventListener);
  });
</script>

<main>
  <h1>Create Service Section Plugin (dev harness)</h1>
  <p>This page simulates what CompAS/OpenSCD does with a `kind: 'editor'` plugin: the content is always mounted and reacts to the current `doc`.</p>

  <label>
    Load an SCD file:
    <input type="file" accept=".scd,.ssd,.sed,.icd" onchange={handleFile} />
  </label>
  <p>Loaded: {fileName}</p>
</main>

<Panel />

<style>
  main {
    padding: 1.5rem;
    max-width: 720px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="file"] {
    margin-left: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }
</style>
