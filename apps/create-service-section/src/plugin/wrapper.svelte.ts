import Plugin from './plugin.svelte';
import * as pkg from '../../package.json';
import { mount } from 'svelte';

type Props = {
  doc?: XMLDocument;
  editCount?: number;
};

/**
 * Custom element registered by OpenSCD/CoMPAS as a `kind: 'editor'` plugin.
 * Editor plugins have no `run()` entry point: content mounts as soon as the
 * element is connected, and re-renders when `doc`/`editCount` change.
 */
export default class CreateServiceSectionElement extends HTMLElement {
  private readonly props: Props;

  constructor() {
    super();
    this.props = $state({
      doc: undefined,
      editCount: undefined,
    });
  }

  connectedCallback(): void {
    this.attachShadow({ mode: 'open' });
    this.props.doc = this._doc;
    this.props.editCount = this._editCount;

    const shadowRoot = this.shadowRoot!;

    // Vite's library build extracts styles into a sibling `style.css`
    // instead of injecting them into `document.head`, which wouldn't
    // reach this Shadow DOM, so it's loaded explicitly here (mirroring
    // the `plugins-hub` plugin's wrapper in this monorepo).
    const linkElement = createStyleLinkElement();
    shadowRoot.appendChild(linkElement);

    const mountPlugin = () => mount(Plugin, { target: shadowRoot, props: this.props });
    linkElement.addEventListener('load', mountPlugin, { once: true });
    linkElement.addEventListener('error', mountPlugin, { once: true });
  }

  private _doc?: XMLDocument;
  public set doc(newDoc: XMLDocument | undefined) {
    this._doc = newDoc;
    this.props.doc = newDoc;
  }

  private _editCount?: number;
  public set editCount(newCount: number) {
    this._editCount = newCount;
    this.props.editCount = newCount;
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
