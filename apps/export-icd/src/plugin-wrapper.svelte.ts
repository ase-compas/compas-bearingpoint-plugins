import ExportIcdDialog from './ExportIcdDialog.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import { setDoc, setDocName, openDialog } from './exportIcdStore.svelte';

const UPGRADABLE_PROPERTIES = ['doc', 'editCount', 'docName'] as const;

/**
 * Custom element registered by OpenSCD/CoMPAS as a `kind: 'menu'` plugin.
 *
 * OpenSCD keeps one instance of this element permanently mounted in the page
 * (as soon as the plugin is active) and calls its `run()` method whenever
 * the user clicks the corresponding menu entry.
 */
export default class ExportIcdElement extends HTMLElement {
  constructor() {
    super();

    // OpenSCD registers this element's tag asynchronously (via a dynamic
    // `import()` followed by `customElements.define()`), while lit-html may
    // already start rendering `<export-icd .doc=${doc} ...>` before that
    // registration completes. Any properties set on the element while it is
    // still an "undefined" custom element land as plain own properties on
    // the instance. When the browser later upgrades the element to this
    // class, those own properties shadow the accessors defined below, so
    // our setters would never be called again. Re-applying any pre-upgrade
    // values through the real accessors fixes that.
    UPGRADABLE_PROPERTIES.forEach(prop => this.upgradeProperty(prop));
  }

  private upgradeProperty(prop: string): void {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = (this as Record<string, unknown>)[prop];
      delete (this as Record<string, unknown>)[prop];
      (this as Record<string, unknown>)[prop] = value;
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    // Vite's library build extracts this component's styles into a
    // sibling `style.css` instead of injecting a <style> tag into
    // `document.head`. Since the dialog renders inside a Shadow DOM, a
    // head-level stylesheet would never reach it, so the stylesheet is
    // loaded explicitly into the shadow root here (mirroring the
    // `plugins-hub` plugin's wrapper in this same monorepo).
    const linkElement = createStyleLinkElement();
    shadowRoot.appendChild(linkElement);

    const mountDialog = () => mount(ExportIcdDialog, { target: shadowRoot });
    linkElement.addEventListener('load', mountDialog, { once: true });
    linkElement.addEventListener('error', mountDialog, { once: true });
  }

  /** Called by OpenSCD when the user clicks the "Export IED as ICD" menu entry. */
  async run(): Promise<void> {
    openDialog();
  }

  set doc(newDoc: XMLDocument | undefined) {
    setDoc(newDoc);
  }

  set editCount(_newCount: number) {
    // The export always reads the latest `doc`, no bookkeeping needed here.
  }

  set docName(newDocName: string | undefined) {
    setDocName(newDocName);
  }
}

function createStyleLinkElement(): HTMLLinkElement {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.type = 'text/css';
  linkElement.href = generateStylePath();
  linkElement.id = `${pkg.name}-v${pkg.version}-style`;
  return linkElement;
}

/** Resolves `style.css` next to this module, wherever it was loaded from. */
function generateStylePath(): string {
  const moduleUrl = new URL(import.meta.url);
  const path = moduleUrl.pathname.split('/').slice(0, -1).filter(Boolean).join('/');
  return [moduleUrl.origin, path, 'style.css'].filter(Boolean).join('/');
}
