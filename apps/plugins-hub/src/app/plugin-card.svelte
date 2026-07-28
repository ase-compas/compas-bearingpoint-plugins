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
        INSTALL
      {:else if isActive}
        DISABLE
      {:else}
        ENABLE
      {/if}
    </button>
  </div>

  <div class="plugin-name">{plugin.name}</div>
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
    background: #fff;
    border: 1px solid #e5e7eb;
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
    border-color: #9ca3af;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .plugin-card.selected {
    border-color: #0d3d4a;
    box-shadow: 0 0 0 2px rgba(13, 61, 74, 0.2);
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
    letter-spacing: 0.05em;
    transition: background 0.15s;
  }

  .action-btn.install {
    background: #004552;
    color: #fff;
  }

  .action-btn.install:hover {
    background: #0a2f3a;
  }

  .action-btn.uninstall {
    background: #dc2626;
    color: #fff;
  }

  .action-btn.uninstall:hover {
    background: #b91c1c;
  }

  .action-btn.enable {
    background: #0CA6C4;
    color: #fff;
  }

  .action-btn.enable:hover {
    background: #09829A;
  }

  .action-btn.disable {
    background: #fff;
    color: #0CA6C4;
  }

  .action-btn.disable:hover {
    background: #eee;
    color: #0CA6C4;
  }

  .plugin-name {
    font-size: 13px;
    font-weight: 600;
    color: #002B37;
    line-height: 1.3;
  }

  .plugin-description {
    font-size: 12px;
    color: #004552;
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
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 12px;
  }

  .badge-installed {
    color: #02A75D;
    border-color: #02A75D;
    background: #E4FBEF;
  }

  .badge-available {
    color: #1d4ed8;
    border-color: #1d4ed8;
    background: #eff6ff;
  }

  .badge-active {
    color: #0d3d4a;
    border-color: #0d3d4a;
    background: #ecfeff;
  }

  .badge-inactive {
    color: #004552;
    border-color: #004552;
    background: #EDF1F2;
  }

  .badge-incompatible {
    color: #b45309;
    border-color: #b45309;
    background: #fffbeb;
  }
</style>
