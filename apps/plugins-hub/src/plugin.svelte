<script lang="ts">
  import PluginsHub from './app/plugins-hub.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    coreVersion?: string;
  }

  let { doc, editCount, coreVersion }: Props = $props();
</script>

<PluginsHub {coreVersion} />
