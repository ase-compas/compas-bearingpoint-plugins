import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';

type Props = {
  doc?: XMLDocument;
  editCount?: number;
  coreVersion?: string;
};

export default class PluginsHubElement extends HTMLElement {
  private readonly props: Props;

  // Target compas-layout > div where the css-hack will be mounted.
  private targetDiv: HTMLDivElement | null = null;
  // remember original styles of the target div.
  private originalStyles: {
    height?: string;
    display?: string;
    flexDirection?: string;
  } = {};

  constructor() {
    super();
    this.props = $state({
      doc: undefined,
      editCount: undefined,
      coreVersion: undefined,
    });
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.props.doc = this._doc;
    this.props.editCount = this._editCount;
    this.props.coreVersion = this._coreVersion;

    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) {
      throw new Error('ShadowRoot not found');
    }

    const linkElement = createStyleLinkElement();
    shadowRoot.appendChild(linkElement);

    const mountPlugin = () => {
      mount(Plugin, { target: shadowRoot, props: this.props });

      // apply Layout-Hack after plugin is mounted.
      requestAnimationFrame(() => this.applyLayoutHack());
    };

    linkElement.addEventListener('load', mountPlugin, { once: true });
    linkElement.addEventListener('error', mountPlugin, { once: true });
  }

  disconnectedCallback() {
    // restore LAyourt-Hack
    this.restoreLayoutHack();
  }

  private _doc?: XMLDocument;
  public set doc(newDoc: XMLDocument) {
    this._doc = newDoc;
    this.props.doc = newDoc;
  }

  private _editCount?: number;
  public set editCount(newCount: number) {
    this._editCount = newCount;
    this.props.editCount = newCount;
  }

  private _coreVersion?: string;
  public set coreVersion(newVersion: string) {
    this._coreVersion = newVersion;
    this.props.coreVersion = newVersion;
  }

  private applyLayoutHack() {
    const openScd = document.querySelector(
      'body > open-scd',
    ) as HTMLElement | null;
    if (!openScd?.shadowRoot) return;

    const compasLayout = openScd.shadowRoot.querySelector(
      'compas-layout',
    ) as HTMLElement | null;
    if (!compasLayout?.shadowRoot) return;

    this.targetDiv = compasLayout.shadowRoot.querySelector('div') as HTMLDivElement;
    if (!this.targetDiv) return;

    // Originalzustand sichern
    this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection,
    };

    // Dein gewünschter Hack
    this.targetDiv.style.height = 'calc(100vh - 4px)'; // 4px is the bottom progressbar from the oscd-waiter wrapper
    this.targetDiv.style.display = 'flex';
    this.targetDiv.style.flexDirection = 'column';
  }

  private restoreLayoutHack() {
    if (!this.targetDiv) return;

    // Originale Inline-Styles wiederherstellen
    this.targetDiv.style.height = this.originalStyles.height ?? '';
    this.targetDiv.style.display = this.originalStyles.display ?? '';
    this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? '';

    this.targetDiv = null;
  }
}

function createStyleLinkElement(): HTMLElement {
  const id = `${pkg.name}-v${pkg.version}-style`;
  const stylePath = generateStylePath();

  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.type = 'text/css';
  linkElement.href = stylePath;
  linkElement.id = id;

  return linkElement;
}

function generateStylePath(): string {
  const srcUrl = new URL(import.meta.url);
  const origin = srcUrl.origin;
  const path = srcUrl.pathname
    .split('/')
    .slice(0, -1)
    .filter(Boolean)
    .join('/');
  return [origin, path, 'style.css'].filter(Boolean).join('/');
}
