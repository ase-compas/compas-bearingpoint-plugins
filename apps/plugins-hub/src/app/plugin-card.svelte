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
      class="action-btn"
      class:disable={isInstalled && isActive}
      class:enable={isInstalled && !isActive}
      class:install={!isInstalled}
      onclick={handleActionClick}
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

  <div class="plugin-name">{plugin.name}</div>
  <div class="plugin-badges">
    <div class="badge badge-kind">
      <span class="material-icons badge-kind-icon">{plugin.kindIcon}</span>
      {plugin.kindText}
    </div>
  </div>
  <div class="plugin-description">{plugin.description}</div>

  <div class="plugin-badges">
    {#if plugin.compatible}
      <span class="badge badge-{plugin.installationState.toLowerCase()}">
        {plugin.installationState === 'INSTALLED' ? 'Installed' : 'Available'}
      </span>
    {/if}
    {#if plugin.installationState === 'INSTALLED'}
      <span class="badge badge-{plugin.activationState.toLowerCase()}">
        {plugin.activationState === 'ACTIVE' ? 'Active' : 'Inactive'}
      </span>
    {/if}
    {#if !plugin.compatible}
      <span class="badge badge-incompatible">Incompatible</span>
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

  .plugin-icon-fallback {
    font-size: 20px;
  }

  .action-btn {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    text-transform: none;
    letter-spacing: normal;
    transition: background 0.15s;
  }

  .action-btn.install {
    background: var(--bearingpoint-color-action-primary-bg);
    color: var(--bearingpoint-color-surface);
  }

  .action-btn.install:hover {
    background: var(--bearingpoint-color-action-primary-bg-hover);
  }

  .action-btn.uninstall {
    background: var(--bearingpoint-color-action-danger-bg);
    color: var(--bearingpoint-color-surface);
  }

  .action-btn.uninstall:hover {
    background: var(--bearingpoint-color-action-danger-bg-hover);
  }

  .action-btn.enable {
    background: var(--bearingpoint-color-action-secondary-bg);
    color: var(--bearingpoint-color-surface);
  }

  .action-btn.enable:hover {
    background: var(--bearingpoint-color-action-secondary-bg-hover);
  }

  .action-btn.disable {
    background: var(--bearingpoint-color-surface);
    color: var(--bearingpoint-color-action-secondary-bg);
  }

  .action-btn.disable:hover {
    background: #eee; /* subtle neutral hover, keep for now */
    color: var(--bearingpoint-color-action-secondary-bg);
  }

  .plugin-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--bearingpoint-color-text-primary);
    line-height: 1.3;
  }

  .plugin-description {
    font-size: 12px;
    line-height: 1.4;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .plugin-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }

  .badge {
    font-size: 11px;
    font-weight: 600; /* SemiBold per mockup AC */
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid currentColor;
  }

  .badge-installed {
    color: var(--bearingpoint-color-badge-installed-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-installed-text), var(--bearingpoint-color-badge-installed-bg) 90%);
    background: var(--bearingpoint-color-badge-installed-bg);
  }

  .badge-available {
    color: var(--bearingpoint-color-badge-available-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-available-text), var(--bearingpoint-color-badge-available-bg) 90%);
    background: var(--bearingpoint-color-badge-available-bg);
  }

  .badge-active {
    color: var(--bearingpoint-color-badge-active-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-active-text), var(--bearingpoint-color-badge-active-bg) 90%);
    background: var(--bearingpoint-color-badge-active-bg);
  }

  .badge-inactive {
    color: var(--bearingpoint-color-badge-inactive-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-inactive-text), var(--bearingpoint-color-badge-inactive-bg) 90%);
    background: var(--bearingpoint-color-badge-inactive-bg);
  }

  .badge-incompatible {
    color: var(--bearingpoint-color-badge-incompatible-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-incompatible-text), var(--bearingpoint-color-badge-incompatible-bg) 90%);
    background: var(--bearingpoint-color-badge-incompatible-bg);
  }

  .badge-kind {
    color: var(--bearingpoint-color-badge-kind-text);
    border-color: color-mix(in oklab, var(--bearingpoint-color-badge-kind-text), var(--bearingpoint-color-badge-kind-bg) 90%);
    background: var(--bearingpoint-color-badge-kind-bg);
    text-transform: capitalize;
    padding: 0px 8px 4px 4px;
    border-radius: 2px;
  }

  .badge-kind-icon {
    font-size: 16px;
    padding: 0px 2px 0px 0px;
    transform: translateY(4px);
  }
</style>
