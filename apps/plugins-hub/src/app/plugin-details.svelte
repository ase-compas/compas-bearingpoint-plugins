<script lang="ts">
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';

  interface Props {
    plugin: Plugin;
    onClose: () => void;
    onInstall: (pluginId: string) => void;
    onUninstall: (pluginId: string) => void;
    onEnable: (pluginId: string) => void;
    onDisable: (pluginId: string) => void;
    coreVersion?: string;
  }

  let { plugin, onClose, onInstall, onUninstall, onEnable, onDisable, coreVersion }: Props = $props();

  const isBuiltin = $derived(plugin.builtin === true);
  const isInstalled = $derived(plugin.installationState === 'INSTALLED' || isBuiltin);
  const isActive = $derived(plugin.activationState === 'ACTIVE');
</script>

<aside class="plugin-details">
  <div class="details-header">
    <div class="details-title-row bp-typo-h1">
      <span class="material-icons details-icon">{plugin.icon}</span>
      <h3 class="details-name">{plugin.name}</h3>
      <button class="close-btn" onclick={onClose} aria-label="Close details"
        >✕</button
      >
    </div>

    <div class="details-kind-wrapper">
      <div class="badge badge-kind bp-typo-label">
        <span class="material-icons badge-icon">{plugin.kindIcon}</span>
        {plugin.kindText}
      </div>
    </div>

    <p class="details-short-desc bp-typo-body">{plugin.description}</p>

    <div class="details-badges">
      {#if isBuiltin}
        <span class="badge badge-builtin bp-typo-button">Built-in</span>
      {:else}
        <span class="badge badge-{plugin.installationState.toLowerCase()} bp-typo-button">
          {plugin.installationState === 'INSTALLED' ? 'Installed' : 'Available'}
        </span>
      {/if}
      {#if isInstalled}
        <span class="badge badge-{plugin.activationState.toLowerCase()} bp-typo-button">
          {isActive ? 'Active' : 'Inactive'}
        </span>
      {/if}
      {#if !plugin.compatible}
        <span class="badge badge-incompatible bp-typo-button">Incompatible</span>
      {/if}
    </div>
  </div>

  <div class="details-meta">
    <div class="meta-item">
      <span class="meta-label bp-typo-label">Provider</span>
      <span class="bp-typo-16-regular">{plugin.provider.prefix.toUpperCase()}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label bp-typo-label">Author</span>
      <span class="bp-typo-16-regular">{plugin.author}</span>
    </div>
    {#if isBuiltin}
      <div class="meta-item">
        <span class="meta-label bp-typo-label">Active by default</span>
        <span class="bp-typo-16-regular">{plugin.activeByDefault ? 'Yes' : 'No'}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label bp-typo-label">Requires document</span>
        <span class="bp-typo-16-regular">{plugin.requireDoc ? 'Yes' : 'No'}</span>
      </div>
    {/if}
    {#if plugin.supportedCoreVersion && (plugin.supportedCoreVersion.from || plugin.supportedCoreVersion.to)}
      <div class="meta-item">
        <span class="meta-label bp-typo-label">Supported Version</span>
        <span class="bp-typo-16-regular">
          {#if plugin.supportedCoreVersion.from && plugin.supportedCoreVersion.to}
            {plugin.supportedCoreVersion.from} – {plugin.supportedCoreVersion.to}
          {:else if plugin.supportedCoreVersion.from}
            ≥ {plugin.supportedCoreVersion.from}
          {:else if plugin.supportedCoreVersion.to}
            {'< ' + plugin.supportedCoreVersion.to}
          {/if}
        </span>
      </div>
    {/if}
    <div class="meta-item">
      <span class="meta-label bp-typo-label">Plugin ID</span>
      <span class="bp-typo-16-regular">{plugin.id}</span>
    </div>
    {#if coreVersion}
      <div class="meta-item">
        <span class="meta-label bp-typo-label">Current Core</span>
        <span class="bp-typo-16-regular">{coreVersion}</span>
      </div>
    {/if}
  </div>

  <div class="details-url">
    <span class="meta-label bp-typo-label">URL</span>
    <a
      href={plugin.src}
      target="_blank"
      rel="noopener noreferrer">{plugin.src}</a
    >
  </div>

  {#if plugin.longDescription}
    <p class="details-long-desc bp-typo-body">{plugin.longDescription}</p>
  {/if}

  <div class="details-actions">
    <div style="flex: 1"></div>
    {#if isBuiltin}
      {#if isActive}
        <button class="action-btn disable bp-typo-button" onclick={() => onDisable(plugin.id)}>Disable</button>
      {:else}
        <button class="action-btn enable bp-typo-button" onclick={() => onEnable(plugin.id)}>Enable</button>
      {/if}
    {:else if !isInstalled}
      <button
        class="action-btn install bp-typo-button"
        onclick={() => onInstall(plugin.id)}
        disabled={!plugin.compatible}
      >
        Install
      </button>
    {:else}
      <button class="action-btn remove bp-typo-button" onclick={() => onUninstall(plugin.id)}>Remove</button>
      {#if isActive}
        <button class="action-btn disable bp-typo-button" onclick={() => onDisable(plugin.id)}>Disable</button>
      {:else}
        <button class="action-btn enable bp-typo-button" onclick={() => onEnable(plugin.id)}>Enable</button>
      {/if}
    {/if}
  </div>
</aside>

<style>
  .plugin-details {
    width: 440px;
    min-width: 280px;
    border-left: 1px solid var(--bearingpoint-color-border);
    background: var(--bearingpoint-color-surface);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px;
    gap: 24px;
  }

  .details-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .details-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .details-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .details-name {
    flex: 1;
    margin: 0;
    color: var(--bearingpoint-color-text-dark);
  }

  .close-btn {
    background: none;
    border: none;
    font-size: var(--bearingpoint-text-h1-size);
    cursor: pointer;
    color: var(--bearingpoint-color-text-secondary);
    padding: 0 2px;
    line-height: 1;
  }

  .close-btn:hover {
    color: var(--bearingpoint-color-text-primary);
  }

  .details-short-desc {
    margin: 0;
  }

  .details-kind-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .details-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }

  .details-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0px;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .meta-label {
    color: var(--bearingpoint-color-text-secondary);
  }

  .details-url {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .details-long-desc {
    margin: 0;
  }

  .details-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--bearingpoint-color-border);
  }

  .action-btn {
    flex: 0;
    padding-right: 12px;
    padding-left: 12px;
  }

</style>
