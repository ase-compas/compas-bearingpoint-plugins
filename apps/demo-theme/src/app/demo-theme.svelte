<script lang="ts">
  import '../styles/global.css';
  import { cssVarToHex } from '../css-var-hex';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown;
  }

  let { doc, editCount, plugins }: Props = $props();

  let root: HTMLElement | undefined = $state();
  let hex = $state<Record<string, string>>({});

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

  function srcToken(id: string): string {
    return `--oscd-theme-${id}`;
  }

  function myToken(id: string): string {
    return `--my-internal-${id}`;
  }

  function readHexes() {
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
  }

  $effect(() => {
    if (!root) return;
    readHexes();
    const obs = new MutationObserver(readHexes);
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
          <th width="150px">Token</th>
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
</style>
