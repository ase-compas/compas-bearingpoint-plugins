<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

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
    manualRunCount?: number;
  }

  let {
    doc,
    dev = false,
    editCount = 0,
    plugins = [],
    docId,
    pluginId,
    docName,
    nsdoc,
    docs,
    locale,
    oscdApi,
    host,
    manualRunCount = 0,
  }: Props = $props();
</script>

<App
  {doc}
  {dev}
  {editCount}
  {plugins}
  {docId}
  {pluginId}
  {docName}
  {nsdoc}
  {docs}
  {locale}
  {oscdApi}
  {host}
  {manualRunCount}
/>

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
