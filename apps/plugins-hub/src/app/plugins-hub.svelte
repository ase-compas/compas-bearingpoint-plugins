<script lang="ts">
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
  } from '@compas-bearingpoint/plugins-hub';
  import ProviderCard from './provider-card.svelte';
  import PluginDetails from './plugin-details.svelte';

  // general stylings from open-scd
  import 'svelte-material-ui/bare.css';
  import '../../public/material-icon.css';
  import '../../public/global.css';
  
  import type { PluginKind } from '../../../../libs/plugins-hub/src/lib/types/plugin';

  interface Props {
    coreVersion?: string;
  }

  let { coreVersion = '1.4.0' }: Props = $props();

  let plugins = $state<Plugin[]>([]);
  let loading = $state(true);
  let loadErrors = $state<string[]>([]);
  let selectedPlugin = $state<Plugin | null>(null);

  let searchTerm = $state('');
  let statusFilter = $state<'all' | 'installed' | 'available'>('all');
  let providerFilter = $state<string>('all');

  const providers: Provider[] = providersConfig as Provider[];

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

      return matchesSearch && matchesStatus && matchesProvider;
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
            src: target.src!,
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

    getLayoutContainer()?.dispatchEvent(event);
  }

  function getLayoutContainer(): HTMLElement | null {
    const openScd = document.querySelector('open-scd');
    const compasLayout = (openScd as any)?.shadowRoot?.querySelector('compas-layout') ?? null;
    // console.log('Compas-Layout:', compasLayout);
    return compasLayout;
  }

</script>

<div class="plugins-hub">
  <div class="hub-header">
    <h2 class="hub-title">Plugin Store</h2>
  </div>

  <div class="hub-toolbar">
    <div class="search-wrapper">
      <span class="search-icon">🔍</span>
      <input
        class="search-input"
        type="text"
        placeholder="Search..."
        bind:value={searchTerm}
        aria-label="Search plugins"
      />
    </div>

    <select
      class="filter-select"
      bind:value={statusFilter}
      aria-label="Filter by status"
    >
      <option value="all">All status</option>
      <option value="installed">Installed</option>
      <option value="available">Available</option>
    </select>

    <select
      class="filter-select"
      bind:value={providerFilter}
      aria-label="Filter by contributor"
    >
      <option value="all">All contributors</option>
      {#each providers as provider}
        <option value={provider.prefix}>{provider.name}</option>
      {/each}
    </select>
  </div>

  {#if loadErrors.length > 0}
    <div class="load-errors">
      {#each loadErrors as error}
        <p class="error-message">⚠️ {error}</p>
      {/each}
    </div>
  {/if}

  <div class="hub-body" class:with-details={selectedPlugin !== null}>
    <div class="providers-list">
      {#if loading}
        <div class="loading">Loading plugins…</div>
      {:else if filteredPlugins.length === 0}
        <div class="empty-state">No plugins match your search.</div>
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
    background: #fff;
    font-family: sans-serif;
    color: #222;
    overflow: hidden;
  }

  .hub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0d3d4a;
    color: #fff;
    padding: 16px 24px;
  }

  .hub-title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .hub-toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
    flex-wrap: wrap;
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 180px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 5px 6px;
    background: #fff;
    margin: 0 0 0.5em 0;
  }
  
  .search-wrapper .search-input {
    margin: 0;
    padding: 0;
  }

  .search-icon {
    margin-right: 8px;
    font-size: 14px;
    color: #9ca3af;
  }

  .search-input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    background: transparent;
  }

  .filter-select {
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 6px 28px 6px 12px;
    font-size: 14px;
    color: #374151;
    background: #fff;
    cursor: pointer;
    appearance: auto;
  }

  .load-errors {
    padding: 8px 24px;
    background: #fef9c3;
  }

  .error-message {
    margin: 4px 0;
    font-size: 13px;
    color: #92400e;
  }

  .hub-body {
    display: flex;
    flex: 1;
    overflow: hidden;
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
    color: #6b7280;
    padding: 40px;
    font-size: 15px;
  }
</style>
