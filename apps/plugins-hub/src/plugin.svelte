<script lang="ts">
  import PluginsHub from './app/plugins-hub.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown;
  }

  let { doc, editCount, plugins }: Props = $props();
</script>

<PluginsHub {plugins} />

<style>
  :host {
    min-height: 0; /* needed for flex-heigth! */
    height: 100%;
  }
</style>