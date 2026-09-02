<script lang="ts">
  import DemoTheme from './app/demo-theme.svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown;
  }

  let { doc, editCount, plugins }: Props = $props();
</script>

<DemoTheme {doc} {editCount} {plugins} />

<style>
  :host {
    min-height: 0; /* needed for flex-heigth! */
    height: 100%;
  }
</style>
