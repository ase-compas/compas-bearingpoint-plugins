<script lang="ts">
  import type { Plugin } from '@compas-bearingpoint/plugins-hub';

  interface Props {
    plugin: Plugin;
    selected: boolean;
    onSelect: () => void;
    onInstall: () => void;
    onUninstall: () => void;
    onEnable: () => void;
    onDisable: () => void;
  }

  let { plugin, selected, onSelect, onInstall, onUninstall, onEnable, onDisable }: Props = $props();

  const isInstalled = $derived(plugin.installationState === 'INSTALLED');
  const isActive = $derived(plugin.activationState === 'ACTIVE');

  function handleActionClick(e: MouseEvent) {
    e.stopPropagation();
    if (!isInstalled) {
      if (!plugin.compatible) return;
      onInstall();
    } else if (isActive) {
      onDisable();
    } else {
      onEnable();
    }
  }
</script>

<div
  class="plugin-card"
  class:selected
  class:incompatible={!plugin.compatible}
  onclick={onSelect}
  role="button"
  tabindex="0"
  aria-pressed={selected}
  onkeydown={(e) => e.key === 'Enter' && onSelect()}
>
  <div class="card-top">
    <div class="plugin-icon-wrapper">
      <span class="material-icons plugin-icon">{plugin.icon}</span>
    </div>

    <button
      class="action-btn bp-typo-button"
      class:disable={isInstalled && isActive}
      class:enable={isInstalled && !isActive}
      class:install={!isInstalled}
      onclick={handleActionClick}
      disabled={!isInstalled && !plugin.compatible}
      aria-label={!isInstalled ? 'Install' : isActive ? 'Disable' : 'Enable'}
    >
      {#if !isInstalled}
        Install
      {:else if isActive}
        Disable
      {:else}
        Enable
      {/if}
    </button>
  </div>

  <div class="plugin-name bp-typo-16-bold">{plugin.name}</div>
  <div class="plugin-kind-wrapper">
    <div class="badge badge-kind bp-typo-label">
      <span class="material-icons badge-icon">{plugin.kindIcon}</span>
      {plugin.kindText}
    </div>
  </div>
  <div class="plugin-description bp-typo-body">{plugin.description}</div>

  <div class="plugin-badges">
    <span class="badge badge-{plugin.installationState.toLowerCase()} bp-typo-button">
      {plugin.installationState === 'INSTALLED' ? 'Installed' : 'Available'}
    </span>
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

<style>
  .plugin-card {
    background: var(--bearingpoint-color-surface);
    border: 1px solid var(--bearingpoint-color-border);
    border-radius: 6px;
    padding: 12px;
    cursor: pointer;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;
    display: flex;
    flex-direction: column;
    gap: 6px;
    user-select: none;
  }

  .plugin-card:hover {
    border-color: #9ca3af; /* keep slightly darker neutral hover for now */
  }

  .plugin-card.selected {
    border-color: var(--bearingpoint-color-primary-dark);
  }

  .plugin-card.incompatible {
    opacity: 0.6;
  }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .plugin-icon-wrapper {
    margin: auto 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plugin-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .plugin-description {
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .plugin-kind-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .plugin-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }
</style>
