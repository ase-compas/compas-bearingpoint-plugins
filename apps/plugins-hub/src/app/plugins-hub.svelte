<script lang="ts">
  import Textfield from '@smui/textfield';
  import Select, { Option } from '@smui/select';
  import Icon from '@smui/textfield/icon';
  import type { Provider, StoredPlugin, Plugin, PluginKind } from '@compas-bearingpoint/plugins-hub';
  import {
    loadAllProviders,
    loadBuiltinProviders,
    buildPlugin,
    markPluginsOverlappingBuiltins,
    loadStoredPlugins,
    providersConfig,
    installPlugin,
    uninstallPlugin,
    activatePlugin,
    deactivatePlugin,
    getAppVersion,
    getLayout,
    proxyUrl,
    PLUGIN_KINDS,
    CUSTOM_PROVIDER,
    collectKnownPluginIdentities,
    buildCustomPluginsFromStored,
    registrationName,
    hubPluginListKey,
    sameHubPluginEntry,
  } from '@compas-bearingpoint/plugins-hub';
  import ProviderCard from './provider-card.svelte';
  import PluginDetails from './plugin-details.svelte';

  // general stylings
  import '../styles/global.css';

  interface Props {
    coreVersion?: string;
  }

  let { coreVersion = getAppVersion() }: Props = $props();

  let plugins = $state<Plugin[]>([]);
  let providers = $state<Provider[]>([]);
  let loading = $state(true);
  let loadErrors = $state<string[]>([]);
  let selectedPlugin = $state<Plugin | null>(null);

  let searchTerm = $state('');
  let statusFilter = $state<'all' | 'installed' | 'available'>('all');
  /** Filter key is provider.name (prefix is optional on built-in/Custom). */
  let providerFilter = $state<string>('all');
  let kindFilter = $state<'all' | PluginKind>('all');

  const remoteProviders: Provider[] = (providersConfig as Provider[]).map(p => ({
    ...p,
    icon: proxyUrl(p.icon),
  }));

  async function initHub() {
    loading = true;
    loadErrors = [];
    const stored = loadStoredPlugins();
    const allPlugins: Plugin[] = [];
    const allProviders: Provider[] = [];

    const builtinResults = await loadBuiltinProviders(stored, coreVersion);
    for (const result of builtinResults) {
      allProviders.push(result.provider);
      allPlugins.push(...result.plugins);
    }

    const results = await loadAllProviders(remoteProviders);
    for (const result of results) {
      if (result.error) {
        loadErrors = [
          ...loadErrors,
          `Error loading Provider '${result.provider.name}': ${result.error}`,
        ];
      }
      allProviders.push(result.provider);
      for (const entry of result.plugins) {
        allPlugins.push(buildPlugin(entry, result.provider, coreVersion, stored));
      }
    }

    // Custom: stored plugins whose name+kind is not covered by any loaded catalogue
    const knownIdentities = collectKnownPluginIdentities(allPlugins);
    const customPlugins = buildCustomPluginsFromStored(
      stored,
      knownIdentities,
      coreVersion,
    );
    if (customPlugins.length >= 1) {
      allProviders.push(CUSTOM_PROVIDER);
      allPlugins.push(...customPlugins);
    }

    // Remote/custom entries with the same manifest name+kind as a host built-in
    // are marked built-in too (badge, no install/remove).
    providers = allProviders;
    plugins = markPluginsOverlappingBuiltins(allPlugins);
    loading = false;
  }

  function isCustomPlugin(plugin: Plugin | undefined): boolean {
    return plugin?.provider?.name === CUSTOM_PROVIDER.name;
  }

  $effect(() => {
    // Re-initialise when the host core version changes
    const _version = coreVersion;
    initHub();
  });

  function getPluginsForProvider(providerName: string): Plugin[] {
    return filteredPlugins.filter((p) => p.provider.name === providerName);
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
        providerFilter === 'all' || p.provider?.name === providerFilter;

      const matchesKind =
        kindFilter === 'all' || p.kind === kindFilter;

      return matchesSearch && matchesStatus && matchesProvider && matchesKind;
    }),
  );

  function handleInstall(target: Plugin) {
    if (!target.compatible || target.builtin || target.shadowedByHostBuiltin) {
      return;
    }

    plugins = installPlugin(plugins, target);
    const updatedPlugin = plugins.find((p) => sameHubPluginEntry(p, target));
    if (selectedPlugin && sameHubPluginEntry(selectedPlugin, target)) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {
      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleUninstall(target: Plugin) {
    const pluginBefore = plugins.find((p) => sameHubPluginEntry(p, target));
    if (pluginBefore?.builtin || pluginBefore?.shadowedByHostBuiltin) {
      return;
    }

    // Custom plugins leave the hub list entirely when uninstalled
    if (isCustomPlugin(pluginBefore)) {
      plugins = plugins.filter((p) => !sameHubPluginEntry(p, target));
      if (!plugins.some((p) => isCustomPlugin(p))) {
        // Reset filter first while Custom <Option> still exists.
        if (providerFilter === CUSTOM_PROVIDER.name) {
          providerFilter = 'all';
        }
        // Removing the selected option in the same tick crashes SMUI Select
        // (getElement null on getPrimaryText). Defer provider list update.
        setTimeout(() => {
          providers = providers.filter(
            (p) => p.name !== CUSTOM_PROVIDER.name,
          );
        }, 1);
      }
      if (selectedPlugin && sameHubPluginEntry(selectedPlugin, target)) {
        selectedPlugin = null;
      }
      if (pluginBefore) {
        dispatchConfigurePlugin(pluginBefore, true);
      }
      return;
    }

    const { updated, success } = uninstallPlugin(plugins, target);
    plugins = updated;
    const updatedPlugin = plugins.find((p) => sameHubPluginEntry(p, target));
    if (selectedPlugin && sameHubPluginEntry(selectedPlugin, target)) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (pluginBefore && success) {
      dispatchConfigurePlugin(pluginBefore, true);
    }
  }

  function handleEnable(target: Plugin) {
    if (target.shadowedByHostBuiltin) {
      return;
    }
    plugins = activatePlugin(plugins, target);
    const updatedPlugin = plugins.find((p) => sameHubPluginEntry(p, target));
    if (selectedPlugin && sameHubPluginEntry(selectedPlugin, target)) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {
      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleDisable(target: Plugin) {
    if (target.shadowedByHostBuiltin) {
      return;
    }
    plugins = deactivatePlugin(plugins, target);
    const updatedPlugin = plugins.find((p) => sameHubPluginEntry(p, target));
    if (selectedPlugin && sameHubPluginEntry(selectedPlugin, target)) {
      selectedPlugin = updatedPlugin ?? null;
    }
    if (updatedPlugin) {
      dispatchConfigurePlugin(updatedPlugin);
    }
  }

  function handleSelectPlugin(plugin: Plugin) {
    selectedPlugin =
      selectedPlugin && sameHubPluginEntry(selectedPlugin, plugin)
        ? null
        : plugin;
  }

  function handleCloseDetails() {
    selectedPlugin = null;
  }

  interface ConfigureTarget {
    kind: 'editor' | 'menu' | 'validator';
    name: string;
    author?: string;
    src: string;
    icon?: string;
    description?: string;
    position?: 'top' | 'middle' | 'bottom';
    activationState?: 'ACTIVE' | 'INACTIVE';
    installationState?: 'INSTALLED' | 'AVAILABLE';
    provider?: Provider;
    builtin?: boolean;
    activeByDefault?: boolean;
    requireDoc?: boolean;
  }

  /**
   * Dispatches oscd-configure-plugin to the OpenSCD host.
   * Built-ins use plain plugin name (no provider prefix) and the host official
   * `src` when a twin exists. Remotes use registrationName + proxyUrl(src).
   */
  function dispatchConfigurePlugin(target: ConfigureTarget, remove = false) {
    const hostBuiltinTwin =
      target.builtin === true
        ? plugins.find(
            (p) =>
              p.provider?.source === 'builtin' &&
              p.name === target.name &&
              p.kind === target.kind,
          )
        : undefined;

    // Official / built-in host identity is always plain name (no remote prefix).
    const regName =
      target.builtin === true
        ? target.name
        : registrationName(target.provider, target.name);

    const configSrc =
      target.builtin === true
        ? (hostBuiltinTwin?.src ?? target.src)
        : proxyUrl(target.src);

    const detail: { name: string; kind: PluginKind; config: StoredPlugin | null } = remove
      ? {
          name: regName,
          kind: target.kind,
          config: null,
        }
      : {
          name: regName,
          kind: target.kind,
          config: {
            name: regName,
            author: target.author || target.provider?.name,
            src: configSrc,
            icon: target.icon!,
            kind: target.kind,
            description: target.description,
            requireDoc: target.requireDoc ?? true,
            position: target.position || (target.kind === 'menu' ? 'middle' : undefined),
            active: target.activationState === 'ACTIVE',
            activeByDefault: hostBuiltinTwin?.activeByDefault ?? target.activeByDefault,
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
  <div class="hub-toolbar">
    <!--
      TODO(min-task): verify whether SMUI Textfield/Select surface background
      can be set via CSS (.hub-toolbar :global(.mdc-text-field / .mdc-select__anchor))
      instead of inline style={...}. Must be tested separately against MDC DOM
      before removing the inline styles.
    -->
    <Textfield bind:value={searchTerm} label="Search plugins" placeholder="Search..." variant="outlined" style={`flex: 1; background: var(--bearingpoint-color-surface)`} >
      {#snippet leadingIcon()}
          <Icon class="material-icons-outlined" >search</Icon>
        {/snippet}
    </Textfield>

    <Select
      bind:value={statusFilter}
      style={`background: var(--bearingpoint-color-surface)`}
      variant="outlined">
        <Option value="all">All status</Option>
        <Option value="installed">Installed</Option>
        <Option value="available">Available</Option>
    </Select>

    <Select
      bind:value={providerFilter}
      style={`width:300px; background: var(--bearingpoint-color-surface)` }
      variant="outlined">
        <Option value="all">All contributors</Option>
        {#each providers as provider}
          <Option value={provider.name}>{provider.name}</Option>
        {/each}
    </Select>

    <Select
      bind:value={kindFilter}
      style={`background: var(--bearingpoint-color-surface)`}
      variant="outlined">
        <Option value="all">All kinds</Option>
        {#each PLUGIN_KINDS as kind}
          <Option value={kind}>{kind.charAt(0).toUpperCase() + kind.slice(1)}</Option>
        {/each}
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
          {@const providerPlugins = getPluginsForProvider(provider.name)}
          {#if providerPlugins.length > 0}
            <ProviderCard
              {provider}
              plugins={providerPlugins}
              selectedPluginKey={selectedPlugin ? hubPluginListKey(selectedPlugin) : null}
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
