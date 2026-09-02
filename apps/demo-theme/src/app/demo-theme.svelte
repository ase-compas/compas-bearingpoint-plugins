<script lang="ts">
  import '../styles/global.css';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown;
  }

  let { doc, editCount, plugins }: Props = $props();
</script>

<h1>Demo Theme</h1>
