<script lang="ts">
  import PluginsHub from './app/plugins-hub.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
  }

  let { doc, editCount }: Props = $props();
</script>

{#if doc !== undefined || editCount !== undefined}
  <PluginsHub />
{/if}
