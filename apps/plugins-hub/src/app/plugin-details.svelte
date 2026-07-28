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

  const isInstalled = $derived(plugin.installationState === 'INSTALLED');
  const isActive = $derived(plugin.activationState === 'ACTIVE');
</script>

<aside class="plugin-details">
  <div class="details-header">
    <div class="details-title-row">
      <span class="material-icons details-icon">{plugin.icon}</span>
      <h3 class="details-name">{plugin.name}</h3>
      <button class="close-btn" onclick={onClose} aria-label="Close details"
        >✕</button
      >
    </div>
    <p class="details-short-desc">{plugin.description}</p>

    <div class="details-badges">
      <span class="badge badge-{plugin.installationState.toLowerCase()}">
        {plugin.installationState === 'INSTALLED' ? 'Installed' : 'Available'}
      </span>
      {#if isInstalled}
        <span class="badge badge-{plugin.activationState.toLowerCase()}">
          {isActive ? 'Active' : 'Inactive'}
        </span>
      {/if}
      {#if !plugin.compatible}
        <span class="badge badge-incompatible">Incompatible</span>
      {/if}
    </div>
  </div>

  <div class="details-meta">
    <div class="meta-item">
      <span class="meta-label">PROVIDER</span>
      <span class="meta-value">{plugin.provider.prefix.toUpperCase()}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">AUTHOR</span>
      <span class="meta-value">{plugin.author}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">KIND</span>
      <span class="meta-value">{plugin.kind}</span>
    </div>
    {#if plugin.supportedCoreVersion && (plugin.supportedCoreVersion.from || plugin.supportedCoreVersion.to)}
      <div class="meta-item">
        <span class="meta-label">CORE VERSION</span>
        <span class="meta-value">
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
      <span class="meta-label">PLUGIN ID</span>
      <span class="meta-value">{plugin.id}</span>
    </div>
    {#if coreVersion}
      <div class="meta-item">
        <span class="meta-label">CURRENT CORE</span>
        <span class="meta-value">{coreVersion}</span>
      </div>
    {/if}
  </div>

  <div class="details-url">
    <span class="meta-label">URL</span>
    <a
      href={plugin.src}
      target="_blank"
      rel="noopener noreferrer"
      class="url-link">{plugin.src}</a
    >
  </div>

  <div class="details-actions">
    {#if !isInstalled}
      <button
        class="action-btn install"
        onclick={() => onInstall(plugin.id)}
        disabled={!plugin.compatible}
      >
        INSTALL
      </button>
    {:else}
      <button class="action-btn remove" onclick={() => onUninstall(plugin.id)}>REMOVE</button>
      {#if isActive}
        <button class="action-btn disable" onclick={() => onDisable(plugin.id)}>DISABLE</button>
      {:else}
        <button class="action-btn enable" onclick={() => onEnable(plugin.id)}>ENABLE</button>
      {/if}
    {/if}
  </div>
</aside>

<style>
  .plugin-details {
    width: 320px;
    min-width: 280px;
    border-left: 1px solid #e5e7eb;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px;
    gap: 16px;
  }

  .details-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
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

  .details-icon-fallback {
    font-size: 18px;
  }

  .details-name {
    flex: 1;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #6b7280;
    padding: 0 2px;
    line-height: 1;
  }

  .close-btn:hover {
    color: #111827;
  }

  .details-short-desc {
    margin: 0;
    font-size: 13px;
    color: #374151;
    line-height: 1.5;
  }

  .details-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .badge {
    font-size: 11px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 12px;
  }

  .badge-installed {
    color: #02A75D;
    background: #E4FBEF;
  }

  .badge-available {
    color: #1d4ed8;
    background: #eff6ff;
  }

  .badge-active {
    color: #0d3d4a;
    background: #ecfeff;
  }

  .badge-inactive {
    color: #004552;
    background: #EDF1F2;
  }

  .badge-incompatible {
    color: #b45309;
    background: #fffbeb;
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

  .meta-item:last-child {
    grid-column: span 2;
  }

  .meta-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #9ca3af;
    text-transform: uppercase;
  }

  .meta-value {
    font-size: 12px;
    color: #111827;
    font-weight: 500;
  }

  .details-url {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .url-link {
    font-size: 12px;
    color: #1d4ed8;
    word-break: break-all;
    text-decoration: none;
  }

  .url-link:hover {
    text-decoration: underline;
  }

  .details-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
  }

  .action-btn {
    flex: 1;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: background 0.15s;
  }

  .action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .action-btn.install {
    background: #004552;
    color: #fff;
  }

  .action-btn.install:hover:not(:disabled),
  .action-btn.enable:hover {
    background: #0a2f3a;
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

  .action-btn.remove {
    background: #dc2626;
    color: #fff;
  }

  .action-btn.remove:hover {
    background: #b91c1c;
  }

</style>
