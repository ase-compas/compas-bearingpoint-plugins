<script lang="ts">
  import type { Provider } from '@compas-bearingpoint/plugins-hub';
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';
  import { hubPluginListKey } from '@compas-bearingpoint/plugins-hub';
  import PluginCard from './plugin-card.svelte';

  interface Props {
    provider: Provider;
    plugins: Plugin[];
    selectedPluginKey: string | null;
    onSelectPlugin: (plugin: Plugin) => void;
    onInstall: (plugin: Plugin) => void;
    onUninstall: (plugin: Plugin) => void;
    onEnable: (plugin: Plugin) => void;
    onDisable: (plugin: Plugin) => void;
  }

  let {
    provider,
    plugins,
    selectedPluginKey,
    onSelectPlugin,
    onInstall,
    onUninstall,
    onEnable,
    onDisable,
  }: Props = $props();
</script>

<section class="provider-card">
  <div class="provider-header">
    <div class="provider-info">
      <h3 class="provider-name bp-typo-h3">{provider.name}</h3>
      <span class="provider-description bp-typo-body">{provider.description}</span>
    </div>
    {#if provider.icon.startsWith('http') || provider.icon.startsWith('/') || provider.icon.startsWith('data:')}
      <img
        class="provider-icon"
        src={provider.icon}
        alt="{provider.name} logo"
        onerror={(e) =>
          ((e.currentTarget as HTMLImageElement).style.display = 'none')}
      />
    {:else}
      <span class="material-icons-outlined provider-icon">{provider.icon}</span>
    {/if}
  </div>

  <div class="plugins-grid">
    {#each plugins as plugin (hubPluginListKey(plugin))}
      <PluginCard
        {plugin}
        selected={selectedPluginKey === hubPluginListKey(plugin)}
        onSelect={() => onSelectPlugin(plugin)}
        onInstall={() => onInstall(plugin)}
        onUninstall={() => onUninstall(plugin)}
        onEnable={() => onEnable(plugin)}
        onDisable={() => onDisable(plugin)}
      />
    {/each}
  </div>
</section>

<style>
  .provider-card {
    background: var(--bearingpoint-color-surface);
    border: none;
    border-radius: 8px;
    padding: 20px 20px 16px;
    box-shadow: none;
  }

  .provider-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .provider-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .provider-name {
    margin: 0;
  }

  .provider-description {
    color: var(--bearingpoint-color-text-secondary);
  }

  .provider-icon {
    height: 40px;
    object-fit: contain;
    border-radius: 4px;
  }

  .plugins-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
</style>
