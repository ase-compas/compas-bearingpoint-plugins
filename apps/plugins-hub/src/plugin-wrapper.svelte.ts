import Plugin from './plugin.svelte';
import * as pkg from '../package.json';
import { mount } from 'svelte';
import { getLayout } from '@compas-bearingpoint/plugins-hub';

type Props = {
  doc?: XMLDocument;
  editCount?: number;
  plugins?: unknown;
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
      plugins: undefined,
    });
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.props.doc = this._doc;
    this.props.editCount = this._editCount;
    this.props.plugins = this._plugins;

    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) {
      throw new Error('ShadowRoot not found');
    }

    shadowRoot.appendChild(createStyleElement());
    mount(Plugin, { target: shadowRoot, props: this.props });
    requestAnimationFrame(() => this.applyLayoutHack());
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

  private _plugins?: unknown;
  public set plugins(value: unknown) {
    this._plugins = value;
    this.props.plugins = value;
  }

  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  private applyLayoutHack() {

    const compasLayout = getLayout();
    if (!compasLayout?.shadowRoot) return;

    this.targetDiv = compasLayout.shadowRoot.querySelector('div') as HTMLDivElement;
    if (!this.targetDiv) return;

    // Save original styles before applying hack.
    this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection,
    };

    // Apply layout hack.
    this.targetDiv.style.height = 'calc(100vh - 4px)'; // 4px is the bottom progressbar from the oscd-waiter wrapper
    this.targetDiv.style.display = 'flex';
    this.targetDiv.style.flexDirection = 'column';
  }

  private restoreLayoutHack() {
    if (!this.targetDiv) return;

    // Restore original styles.
    this.targetDiv.style.height = this.originalStyles.height ?? '';
    this.targetDiv.style.display = this.originalStyles.display ?? '';
    this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? '';

    this.targetDiv = null;
  }
}

/**
 * Replaced at production build time with the extracted CSS string
 * (see `inlineCssIntoJs` in `libs/global/vite/inline-css-into-js.ts`).
 */
const INLINED_PLUGIN_CSS = '__INLINED_PLUGIN_CSS_PLACEHOLDER__';

function createStyleElement(): HTMLStyleElement {
  const styleElement = document.createElement('style');
  styleElement.id = `${pkg.name}-v${pkg.version}-style`;
  styleElement.textContent = INLINED_PLUGIN_CSS;
  return styleElement;
}
