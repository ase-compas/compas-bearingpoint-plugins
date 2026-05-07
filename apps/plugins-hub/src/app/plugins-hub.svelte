<script lang="ts">
  import type { Provider } from '@compas-bearingpoint/plugins-hub';
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';
  import {
    loadAllProviders,
    buildPlugin,
    updatePluginState,
    loadPersistedState,
    loadPlugin,
  } from '@compas-bearingpoint/plugins-hub';
  import providersConfig from '../../../../libs/plugins-hub/src/lib/config/providers.json';
  import ProviderCard from './provider-card.svelte';
  import PluginDetails from './plugin-details.svelte';

  interface Props {
    coreVersion?: string;
    onClose?: () => void;
  }

  let { coreVersion = '1.0.0', onClose }: Props = $props();

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
    const persisted = loadPersistedState();
    const results = await loadAllProviders(providers);
    const allPlugins: Plugin[] = [];

    for (const result of results) {
      if (result.error) {
        loadErrors = [...loadErrors, `${result.provider.name}: ${result.error}`];
      }
      const provider = result.provider;
      for (const entry of result.plugins) {
        allPlugins.push(buildPlugin(entry, provider, coreVersion, persisted));
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
    return filteredPlugins.filter((p) => p.providerPrefix === prefix);
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
        providerFilter === 'all' || p.providerPrefix === providerFilter;

      return matchesSearch && matchesStatus && matchesProvider;
    })
  );

  function handleInstall(pluginId: string) {
    plugins = updatePluginState(plugins, pluginId, {
      installationState: 'INSTALLED',
      activationState: 'ACTIVE',
    });
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = plugins.find((p) => p.id === pluginId) ?? null;
    }
    const plugin = plugins.find((p) => p.id === pluginId);
    if (plugin) {
      loadPlugin(plugin, providers).catch((err) =>
        console.error(`[Plugins-Hub] Failed to load plugin "${plugin.name}":`, err)
      );
    }
  }

  function handleUninstall(pluginId: string) {
    plugins = updatePluginState(plugins, pluginId, {
      installationState: 'AVAILABLE',
      activationState: 'INACTIVE',
    });
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = plugins.find((p) => p.id === pluginId) ?? null;
    }
  }

  function handleEnable(pluginId: string) {
    plugins = updatePluginState(plugins, pluginId, { activationState: 'ACTIVE' });
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = plugins.find((p) => p.id === pluginId) ?? null;
    }
  }

  function handleDisable(pluginId: string) {
    plugins = updatePluginState(plugins, pluginId, { activationState: 'INACTIVE' });
    if (selectedPlugin?.id === pluginId) {
      selectedPlugin = plugins.find((p) => p.id === pluginId) ?? null;
    }
  }

  function handleSelectPlugin(plugin: Plugin) {
    selectedPlugin = selectedPlugin?.id === plugin.id ? null : plugin;
  }

  function handleCloseDetails() {
    selectedPlugin = null;
  }
</script>

<div class="plugins-hub">
  <div class="hub-header">
    <h2 class="hub-title">Plugin Store</h2>
    <button class="close-btn" onclick={() => onClose?.()} aria-label="Close plugin store">✕</button>
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

    <select class="filter-select" bind:value={statusFilter} aria-label="Filter by status">
      <option value="all">All status</option>
      <option value="installed">Installed</option>
      <option value="available">Available</option>
    </select>

    <select class="filter-select" bind:value={providerFilter} aria-label="Filter by contributor">
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

  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    padding: 0 4px;
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
    padding: 6px 12px;
    background: #fff;
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
