<script lang="ts">
  import Textfield from '@smui/textfield';
  import Select, { Option } from '@smui/select';
  import Icon from '@smui/textfield/icon';
  import type { Provider, StoredPlugin } from '@compas-bearingpoint/plugins-hub';
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';
  import {
    loadAllProviders,
    buildPlugin,
    loadStoredPlugins,
    providersConfig,
    installPlugin,
    uninstallPlugin,
    activatePlugin,
    deactivatePlugin,
    getAppVersion,
    getLayout,
    proxyUrl,
  } from '@compas-bearingpoint/plugins-hub';
  import ProviderCard from './provider-card.svelte';
  import PluginDetails from './plugin-details.svelte';

  // general stylings
  import '../../public/global.css';
  
  import type { PluginKind } from '../../../../libs/plugins-hub/src/lib/types/plugin';

  interface Props {
    coreVersion?: string;
  }

  let { coreVersion = getAppVersion() }: Props = $props();

  let plugins = $state<Plugin[]>([]);
  let loading = $state(true);
  let loadErrors = $state<string[]>([]);
  let selectedPlugin = $state<Plugin | null>(null);

  let searchTerm = $state('');
  let statusFilter = $state<'all' | 'installed' | 'available'>('all');
  let providerFilter = $state<string>('all');
  let kindFilter = $state<'all' | PluginKind>('all');

  const providers: Provider[] = (providersConfig as Provider[]).map(p => ({...p, icon: proxyUrl(p.icon)}));

  async function initHub() {
    loading = true;
    loadErrors = [];
    const stored = loadStoredPlugins();
    const results = await loadAllProviders(providers);
    const allPlugins: Plugin[] = [];

    for (const result of results) {
      if (result.error) {
        loadErrors = [
          ...loadErrors,
          `Error loading Provider '${result.provider.name}'': ${result.error}`,
        ];
      }
      const provider = result.provider;
      for (const entry of result.plugins) {
        allPlugins.push(buildPlugin(entry, provider, coreVersion, stored));
      }
    }

    plugins = allPlugins;
    loading = false;
  }

  $effect(() => {
    // Re-initialise when the host core version changes
    const _version = coreVersion;
    initHub();
  });

  function getPluginsForProvider(prefix: string): Plugin[] {
    return filteredPlugins.filter((p) => p.provider.prefix === prefix);
  }

  const filteredPlugins = $derived(
    plugins.filter((p) => {
      const matchesSearch =
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'installed' && p.installationState === 'INSTALLED') ||
        (statusFilter === 'available' && p.installationState === 'AVAILABLE');

      const matchesProvider =
        providerFilter === 'all' || p.provider?.prefix === providerFilter;

      const matchesKind =
        kindFilter === 'all' || p.kind === kindFilter;

      return matchesSearch && matchesStatus && matchesProvider && matchesKind;
    }),
  );

  function handleInstall(pluginId: string) {
    plugins = installPlugin(plugins, pluginId);
    const updatedPlugin = plugins.find((p) => p.id === pluginId);
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {

      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleUninstall(pluginId: string) {
    const pluginBefore = plugins.find((p) => p.id === pluginId);
    const { updated, success } = uninstallPlugin(plugins, pluginId);
    plugins = updated;
    const updatedPlugin = plugins.find((p) => p.id === pluginId);
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (pluginBefore) {
      dispatchConfigurePlugin({ id: pluginBefore.id, kind: pluginBefore.kind }, true);
    }
  }

  function handleEnable(pluginId: string) {
    plugins = activatePlugin(plugins, pluginId);
    const updatedPlugin = plugins.find((p) => p.id === pluginId);
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {
      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleDisable(pluginId: string) {
    plugins = deactivatePlugin(plugins, pluginId);
    const updatedPlugin = plugins.find((p) => p.id === pluginId);
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {
      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleSelectPlugin(plugin: Plugin) {
    selectedPlugin = selectedPlugin?.id === plugin.id ? null : plugin;
  }

  function handleCloseDetails() {
    selectedPlugin = null;
  }

  interface ConfigureTarget {
    id: string;
    kind: 'editor' | 'menu' | 'validator';
    name?: string;
    author?: string;
    src?: string;
    icon?: string;
    description?: string;
    position?: 'top' | 'middle' | 'bottom';
    activationState?: 'ACTIVE' | 'INACTIVE';
    installationState?: 'INSTALLED' | 'AVAILABLE';
    provider?: Provider;
  }

  /**
   * Dispatches the oscd-configure-plugin event to integrate with the OpenSCD host.
   * Uses the namespaced plugin.id as the unique registration key (detail.name) to
   * prevent collisions across providers. The config payload includes display metadata.
   */
  function dispatchConfigurePlugin(target: ConfigureTarget, remove = false) {
    const detail: {name: string, kind: PluginKind, config: StoredPlugin | null } = remove
      ? {
          name: target.id,
          kind: target.kind,
          config: null,
        }
      : {
          name: target.id,
          kind: target.kind,
          config: {
            name: target.id, // use identifier which is provider-prefix plus provider-plugin.name
            author: target.author || target.provider?.name,
            src: proxyUrl(target.src!),
            icon: target.icon!,
            kind: target.kind,
            description: target.description,
            requireDoc: true,
            position: target.position || (target.kind === 'menu' ? 'middle' : undefined),
            active: target.activationState === 'ACTIVE',
            installed: target.installationState === 'INSTALLED',
          },
        };

    const event = new CustomEvent('oscd-configure-plugin', {
      bubbles: true,
      composed: true,
      detail,
    });

    getLayout()?.dispatchEvent(event);
  }

</script>

<div class="plugins-hub bp-typo-body">
  <div class="hub-header">
    <h2 class="hub-title">Plugin Store</h2>
  </div>

  <div class="hub-toolbar">

    <!-- Keep legacy --oscd-base2 for SMUI/MDC compatibility; fallback now uses our token -->
    <Textfield bind:value={searchTerm} label="Search plugins" placeholder="Search..." variant="outlined" style={`flex: 1; background: var(--bearingpoint-color-surface, #fff)`} >
      {#snippet leadingIcon()}
          <Icon class="material-icons" >search</Icon>
        {/snippet}
    </Textfield>

    <Select
      bind:value={statusFilter}
      style={`background: var(--bearingpoint-color-surface, #fff)`}
      variant="outlined">
        <Option value="all">All status</Option>
        <Option value="installed">Installed</Option>
        <Option value="available">Available</Option>
    </Select>

    <Select
      class="filter-select"
      bind:value={providerFilter}
      style={`width:300px; background: var(--bearingpoint-color-surface, #fff)` }
      variant="outlined">
        <Option value="all">All contributors</Option>
        {#each providers as provider}
          <Option value={provider.prefix}>{provider.name}</Option>
        {/each}
    </Select>

    <Select
      bind:value={kindFilter}
      style={`background: var(--bearingpoint-color-surface, #fff)`}
      variant="outlined">
        <Option value="all">All kinds</Option>
        <Option value="editor">Editor</Option>
        <Option value="menu">Menu</Option>
        <Option value="validator">Validator</Option>
    </Select>

  </div>

  {#if loadErrors.length > 0}
    <div class="load-errors">
      {#each loadErrors as error}
        <p class="error-message bp-typo-body">⚠️ {error}</p>
      {/each}
    </div>
  {/if}

  <div class="hub-body" class:with-details={selectedPlugin !== null}>
    <div class="providers-list">
      {#if loading}
        <div class="loading bp-typo-16-regular">Loading plugins…</div>
      {:else if filteredPlugins.length === 0}
        <div class="empty-state bp-typo-body">No plugins match your search.</div>
      {:else}
        {#each providers as provider}
          {@const providerPlugins = getPluginsForProvider(provider.prefix)}
          {#if providerPlugins.length > 0}
            <ProviderCard
              {provider}
              plugins={providerPlugins}
              selectedPluginId={selectedPlugin?.id ?? null}
              onSelectPlugin={handleSelectPlugin}
              onInstall={handleInstall}
              onUninstall={handleUninstall}
              onEnable={handleEnable}
              onDisable={handleDisable}
            />
          {/if}
        {/each}
      {/if}
    </div>

    {#if selectedPlugin !== null}
      <PluginDetails
        plugin={selectedPlugin}
        onClose={handleCloseDetails}
        onInstall={handleInstall}
        onUninstall={handleUninstall}
        onEnable={handleEnable}
        onDisable={handleDisable}
        {coreVersion}
      />
    {/if}
  </div>
</div>

<style>
  .plugins-hub {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 400px;
    background: var(--bearingpoint-color-bg-page);
    color: var(--bearingpoint-color-text-primary);
    overflow: hidden;
  }

  .hub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bearingpoint-color-primary-dark);
    color: var(--bearingpoint-color-surface);
    padding: 16px 24px;
  }

  .hub-title {
    margin: 0;
    font-family: var(--bearingpoint-font-roboto);
    font-weight: 500;
    font-size: var(--bearingpoint-text-h1-size);
    leading-trim: NONE;
    line-height: 32px;
    letter-spacing: 0.25px;
        
  }

  .hub-toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    background: var(--bearingpoint-color-bg-page);
    border-bottom: 1px solid var(--bearingpoint-color-border);
    flex-wrap: wrap;
  }
  .hub-toolbar :global(.mdc-select__anchor),
  .hub-toolbar :global(.mdc-text-field) {
    height: 42px !important;
  }

  .load-errors {
    padding: 8px 24px;
    background: var(--bearingpoint-color-warning-bg);
    border-bottom: 1px solid var(--bearingpoint-color-border);
  }

  .error-message {
    margin: 4px 0;
    color: var(--bearingpoint-color-warning-text);
  }

  .hub-body {
    display: flex;
    flex: 1;
    overflow: hidden;
    background: var(--bearingpoint-color-bg-page);
    border-bottom: 1px solid var(--bearingpoint-color-border);
  }

  .hub-body.with-details .providers-list {
    flex: 1;
  }

  .providers-list {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .loading,
  .empty-state {
    text-align: center;
    color: var(--bearingpoint-color-text-secondary);
    padding: 40px;
  }
</style>
