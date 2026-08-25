<script lang="ts">
  import Panel from '../ui/panel.svelte';
  import { setDoc } from '../store/services-form.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
  }

  let { doc }: Props = $props();

  $effect(() => {
    setDoc(doc);
  });
</script>

{#if doc}
  <Panel />
{:else}
  <p class="hint">No project loaded.</p>
{/if}

<style>
  :host {
    display: block;
  }

  .hint {
    padding: 1.5rem;
    color: #666;
  }
</style>
