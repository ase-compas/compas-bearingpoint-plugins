<script lang="ts">
  import '../styles/global.css';
  import { cssVarComputed, cssVarToHex } from '../css-var-hex';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown;
  }

  let { doc, editCount, plugins }: Props = $props();

  let root: HTMLElement | undefined = $state();
  let hex = $state<Record<string, string>>({});
  let fontFamily = $state<Record<string, string>>({});
  let shapePx = $state<Record<string, string>>({});

  const greysOnBase3 = ['base03', 'base02', 'base01', 'base00'] as const;
  const greysOnBase03 = ['base3', 'base2', 'base1', 'base0'] as const;
  const accents = [
    'yellow',
    'orange',
    'red',
    'magenta',
    'violet',
    'blue',
    'cyan',
    'green',
  ] as const;
  const accentBgs = ['base03', 'base02', 'base2', 'base3'] as const;
  const buttonBgs = ['base3', 'base2'] as const;
  const fontIds = ['text-font', 'text-font-mono', 'icon-font'] as const;
  const fontWeights = [300, 400, 500, 600, 700] as const;
  const iconLigatures = ['home', 'search', 'settings'] as const;
  const shapeRows = [
    {
      id: 'shape-none',
      scale: '×0',
      use: 'Checkboxes, dense lists',
      preview: 'tile',
    },
    {
      id: 'shape-extra-small',
      scale: '×0.5',
      use: 'Chips, text fields',
      preview: 'chip',
    },
    {
      id: 'shape-small',
      scale: '×1',
      use: 'Buttons',
      preview: 'button',
    },
    {
      id: 'shape-medium',
      scale: '×1.5',
      use: 'Cards, menus',
      preview: 'card',
    },
    {
      id: 'shape-large',
      scale: '×2',
      use: 'Dialogs, FABs',
      preview: 'dialog',
    },
  ] as const;

  function srcToken(id: string): string {
    return `--oscd-theme-${id}`;
  }

  function myToken(id: string): string {
    return `--my-internal-${id}`;
  }

  function unquoteFont(value: string): string {
    return value.replace(/^["']+|["']+$/g, '');
  }

  function readTokens() {
    if (!root) return;
    const ids = [
      ...greysOnBase3,
      ...greysOnBase03,
      ...accents,
      'primary',
      'secondary',
      'error',
      'warning',
    ];
    const next: Record<string, string> = {};
    for (const id of ids) {
      next[id] = cssVarToHex(myToken(id), root);
    }
    hex = next;

    const nextFonts: Record<string, string> = {};
    for (const id of fontIds) {
      nextFonts[id] =
        unquoteFont(cssVarComputed(myToken(id), root, 'font-family')) || '…';
    }
    fontFamily = nextFonts;

    const nextShape: Record<string, string> = {};
    for (const id of ['shape', ...shapeRows.map((row) => row.id)]) {
      nextShape[id] =
        cssVarComputed(myToken(id), root, 'border-top-left-radius') || '…';
    }
    shapePx = nextShape;
  }

  $effect(() => {
    if (!root) return;
    readTokens();
    const obs = new MutationObserver(readTokens);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
    return () => obs.disconnect();
  });
</script>

<div class="page" bind:this={root}>
  <h1>Demo Theme</h1>
  <p class="lead">
    Internal tokens <code>--my-internal-*</code>, labeled with source
    <code>--oscd-theme-*</code>. Hex is read from the computed internal token.
  </p>

  <section>
    <h2>1. Primary &amp; secondary buttons</h2>
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Hex</th>
          {#each buttonBgs as bg}
            <th>{srcToken(bg)}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each ['primary', 'secondary'] as id}
          <tr>
            <td><code>{srcToken(id)}</code></td>
            <td class="hex">{hex[id] ?? '…'}</td>
            {#each buttonBgs as bg}
              <td>
                <button
                  type="button"
                  class="btn"
                  style="
                    background: var({myToken(id)});
                    color: var({myToken(bg)});
                    border-color: var({myToken(bg)});
                  "
                >
                  Button
                </button>
              </td>
            {/each}
          </tr>
          <tr>
            <td><code>{srcToken(id)} inverted</code></td>
            <td class="hex">{hex[id] ?? '…'}</td>
            {#each buttonBgs as bg}
              <td>
                <button
                  type="button"
                  class="btn"
                  style="
                    background: var({myToken(bg)});
                    color: var({myToken(id)});
                    border-color: var({myToken(id)});
                  "
                >
                  Button
                </button>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section>
    <h2>2. Solarized greys</h2>
    <div class="grey-band" style="background: var(--my-internal-base3)">
      {#each greysOnBase3 as id}
        <div class="grey-item" style="color: var({myToken(id)})">
          <span class="swatch" style="background: var({myToken(id)})"></span>
          <code>{srcToken(id)}</code>
          <span class="hex">{hex[id] ?? '…'}</span>
          <span>The quick brown fox</span>
        </div>
      {/each}
    </div>
    <div class="grey-band" style="background: var(--my-internal-base03)">
      {#each greysOnBase03 as id}
        <div class="grey-item" style="color: var({myToken(id)})">
          <span class="swatch" style="background: var({myToken(id)})"></span>
          <code>{srcToken(id)}</code>
          <span class="hex">{hex[id] ?? '…'}</span>
          <span>The quick brown fox</span>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>3. Solarized colors</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 150px">Token</th>
          <th>Hex</th>
          {#each accentBgs as bg}
            <th>{srcToken(bg)}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each accents as id}
          <tr>
            <td><code>{srcToken(id)}</code></td>
            <td class="hex">{hex[id] ?? '…'}</td>
            {#each accentBgs as bg}
              <td
                style="
                  background: var({myToken(bg)});
                  color: var({myToken(id)});
                "
              >
                Packed my box with five dozen liquor jugs.
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section>
    <h2>4. Error &amp; warning</h2>
    <div class="alerts">
      {#each ['error', 'warning'] as id}
        {#each buttonBgs as bg}
          <div
            class="alert"
            style="
              background: var({myToken(bg)});
              color: var({myToken(id)});
              border-color: var({myToken(id)});
            "
          >
            <div class="bar" style="background: var({myToken(id)})"></div>
            <div>
              <code>{srcToken(id)}</code>
              <span class="hex">{hex[id] ?? '…'}</span>
              <p>
                {id === 'error'
                  ? 'Something went wrong. Check the log.'
                  : 'This setting is deprecated.'}
              </p>
              <p class="on">on {srcToken(bg)}</p>
            </div>
          </div>
        {/each}
      {/each}
    </div>
  </section>

  <section>
    <h2>5. Fonts</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th style="width: 200px">Token</th>
            <th>Value</th>
            {#each fontWeights as weight}
              <th>{weight}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each fontIds as id}
            <tr>
              <td><code>{srcToken(id)}</code></td>
              <td class="hex">{fontFamily[id] ?? '…'}</td>
              {#each fontWeights as weight}
                <td>
                  {#if id === 'icon-font'}
                    <span
                      class="icon-sample"
                      style="
                        font-family: var({myToken(id)});
                        font-weight: {weight};
                        font-variation-settings: 'wght' {weight};
                      "
                    >
                      {#each iconLigatures as ligature}
                        <span>{ligature}</span>
                      {/each}
                    </span>
                  {:else}
                    <span
                      class="font-sample"
                      style="
                        font-family: var({myToken(id)});
                        font-weight: {weight};
                      "
                    >
                      The quick brown fox
                    </span>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <h2>6. Shape</h2>
    <p class="note">
      Host provides <code>--oscd-theme-shape</code>
      (<span class="hex">{shapePx['shape'] ?? '…'}</span> via
      <code>--my-internal-shape</code>). The MDC-style scale below is derived in
      <code>demo-theme.css</code>.
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Scale</th>
            <th>Computed</th>
            <th>Typical use</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {#each shapeRows as row}
            <tr>
              <td><code>{row.id}</code></td>
              <td class="hex">{row.scale}</td>
              <td class="hex">{shapePx[row.id] ?? '…'}</td>
              <td>{row.use}</td>
              <td>
                <div class="shape-preview">
                  {#if row.preview === 'tile'}
                    <div
                      class="shape-box"
                      style="border-radius: var({myToken(row.id)})"
                    ></div>
                  {:else if row.preview === 'chip'}
                    <span
                      class="shape-chip"
                      style="border-radius: var({myToken(row.id)})"
                    >
                      Chip
                    </span>
                    <span
                      class="shape-field"
                      style="border-radius: var({myToken(row.id)})"
                    >
                      Text field
                    </span>
                  {:else if row.preview === 'button'}
                    <button
                      type="button"
                      class="shape-btn"
                      style="border-radius: var({myToken(row.id)})"
                    >
                      Button
                    </button>
                  {:else if row.preview === 'card'}
                    <div
                      class="shape-card"
                      style="border-radius: var({myToken(row.id)})"
                    >
                      <strong>Card</strong>
                      <span>Menu / surface</span>
                    </div>
                  {:else}
                    <div
                      class="shape-dialog"
                      style="border-radius: var({myToken(row.id)})"
                    >
                      <strong>Dialog</strong>
                      <span>Modal surface</span>
                    </div>
                    <button
                      type="button"
                      class="shape-fab"
                      style="border-radius: var({myToken(row.id)})"
                      aria-label="FAB"
                    >
                      +
                    </button>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</div>

<style>
  .page {
    box-sizing: border-box;
    min-height: 100%;
    padding: 24px 28px 48px;
    font-family: var(--my-internal-text-font), system-ui, sans-serif;
    background: var(--my-internal-base3);
    color: var(--my-internal-base03);
    overflow: auto;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 1.6rem;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 1.15rem;
  }

  .lead {
    margin: 0 0 28px;
    color: var(--my-internal-base01);
    max-width: 52rem;
  }

  section {
    margin-bottom: 32px;
  }

  code,
  .hex {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 0.82rem;
  }

  .hex {
    opacity: 0.85;
  }

  .grey-band {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    padding: 16px;
    margin-bottom: 8px;
  }

  .grey-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .swatch {
    display: block;
    height: 36px;
    border: 1px solid currentColor;
  }

  .note {
    margin: 0 0 12px;
    color: var(--my-internal-base01);
    max-width: 52rem;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  th,
  td {
    border: 1px solid var(--my-internal-base01);
    padding: 8px 10px;
    text-align: left;
    vertical-align: middle;
  }

  th {
    background: var(--my-internal-base2);
    color: var(--my-internal-base03);
    font-weight: 600;
  }

  .btn {
    padding: 6px 14px;
    border: 2px solid;
    border-radius: 4px;
    font: inherit;
    cursor: default;
  }

  .alerts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .alert {
    display: flex;
    gap: 12px;
    padding: 12px 14px;
    border: 2px solid;
  }

  .bar {
    width: 6px;
    flex-shrink: 0;
  }

  .alert p {
    margin: 6px 0 0;
  }

  .on {
    opacity: 0.8;
    font-size: 0.82rem;
  }

  .alert code,
  .alert .hex {
    margin-right: 8px;
  }

  .font-sample {
    font-size: 0.95rem;
  }

  .icon-sample {
    display: inline-flex;
    gap: 8px;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    -webkit-font-feature-settings: 'liga';
    font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .shape-preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .shape-box {
    width: 48px;
    height: 48px;
    background: var(--my-internal-primary);
  }

  .shape-chip {
    padding: 4px 12px;
    background: var(--my-internal-base2);
    border: 1px solid var(--my-internal-base01);
    font-size: 0.82rem;
  }

  .shape-field {
    padding: 8px 12px;
    border: 1px solid var(--my-internal-base01);
    background: var(--my-internal-base3);
    font-size: 0.82rem;
  }

  .shape-btn,
  .shape-fab {
    border: none;
    font: inherit;
    cursor: default;
  }

  .shape-btn {
    padding: 8px 16px;
    background: var(--my-internal-primary);
    color: var(--my-internal-base3);
  }

  .shape-card,
  .shape-dialog {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 140px;
    padding: 12px 14px;
    background: var(--my-internal-base2);
    color: var(--my-internal-base03);
    font-size: 0.82rem;
  }

  .shape-dialog {
    background: var(--my-internal-base3);
    border: 1px solid var(--my-internal-base01);
  }

  .shape-fab {
    width: 48px;
    height: 48px;
    background: var(--my-internal-secondary);
    color: var(--my-internal-base3);
    font-size: 1.4rem;
    line-height: 1;
  }
</style>
