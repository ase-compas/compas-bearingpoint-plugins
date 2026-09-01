<script lang="ts">
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import { onMount } from 'svelte';

  interface Props {
    doc?: XMLDocument;
    dev?: boolean;
    editCount?: number;
    plugins?: unknown[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: unknown;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: unknown;
    host?: HTMLElement;
  }

  let {
    doc,
    dev = false,
    editCount = 0,
  }: Props = $props();

  let lastEvent = $state('waiting for document...');
  let recentEvents: string[] = $state([]);

  const maxRecentEvents = 10;

  function addEvent(msg: string) {
    recentEvents = [msg, ...recentEvents.slice(0, maxRecentEvents - 1)];
  }

  $effect(() => {
    if (!doc) {
      lastEvent = 'no document loaded yet';
      addEvent('⏸️ No document');
      return;
    }

    lastEvent = `reacting to edit #${editCount} on "${doc.documentElement?.nodeName ?? 'document'}"`;
    addEvent(`📝 Edit #${editCount}`);
  });

  onMount(() => {
    addEvent('✅ Validator plugin mounted');
  });
</script>

{#if dev}
  <pre class="status">XPath Validator: {lastEvent}</pre>
{/if}

<style>
  .status {
    font-family: monospace;
    font-size: 0.75rem;
    padding: 0.5rem;
  }
</style>
