<script lang="ts">
  import type { Provider } from '@compas-bearingpoint/plugins-hub';
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';
  import PluginCard from './plugin-card.svelte';

  interface Props {
    provider: Provider;
    plugins: Plugin[];
    selectedPluginId: string | null;
    onSelectPlugin: (plugin: Plugin) => void;
    onInstall: (pluginId: string) => void;
    onUninstall: (pluginId: string) => void;
    onEnable: (pluginId: string) => void;
    onDisable: (pluginId: string) => void;
  }

  let {
    provider,
    plugins,
    selectedPluginId,
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
      <h3 class="provider-name">{provider.name}</h3>
      <span class="provider-description">{provider.description}</span>
    </div>
    {#if provider.icon.startsWith('http') || provider.icon.startsWith('/')}
      <img
        class="provider-icon"
        src={provider.icon}
        alt="{provider.name} logo"
        onerror={(e) =>
          ((e.currentTarget as HTMLImageElement).style.display = 'none')}
      />
    {:else}
      <span class="material-icons provider-icon">{provider.icon}</span>
    {/if}
  </div>

  <div class="plugins-grid">
    {#each plugins as plugin (plugin.id)}
      <PluginCard
        {plugin}
        selected={selectedPluginId === plugin.id}
        onSelect={() => onSelectPlugin(plugin)}
        onInstall={() => onInstall(plugin.id)}
        onUninstall={() => onUninstall(plugin.id)}
        onEnable={() => onEnable(plugin.id)}
        onDisable={() => onDisable(plugin.id)}
      />
    {/each}
  </div>
</section>

<style>
  .provider-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px 20px 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
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
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .provider-description {
    font-size: 12px;
    color: #6b7280;
  }

  .provider-icon {
    width: 40px;
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
