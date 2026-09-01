<script lang="ts">
  import PluginsHub from './app/plugins-hub.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    coreVersion?: string;
    plugins?: unknown;
  }

  let { doc, editCount, coreVersion, plugins }: Props = $props();
</script>

<PluginsHub {coreVersion} {plugins} />

<style>
  :host {
    min-height: 0; /* needed for flex-heigth! */
    height: 100%;
  }
</style>