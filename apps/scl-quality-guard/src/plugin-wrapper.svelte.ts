import Validator from './validator.svelte';
import { mount } from 'svelte';
import {
  setDoc,
  setEditCount,
  setHost,
  setPluginId,
  setPlugins,
  validate,
} from './validatorStore.svelte';

const UPGRADABLE_PROPERTIES = [
  'doc',
  'editCount',
  'plugins',
  'docId',
  'pluginId',
  'docName',
  'nsdoc',
  'docs',
  'locale',
  'oscdApi',
] as const;

export default class SclQualityGuard extends HTMLElement {
  constructor() {
    super();

    // OpenSCD registers this element's tag asynchronously (via a dynamic
    // `import()` followed by `customElements.define()`), while lit-html may
    // already start rendering `<scl-quality-guard .doc=${doc} ...>` before
    // that registration completes. Any properties set on the element while
    // it is still an "undefined" custom element land as plain own
    // properties on the instance. When the browser later upgrades the
    // element to this class, those own properties shadow the accessors
    // defined below, so our setters (and therefore `setDoc`/`setEditCount`)
    // are silently never called again - lit-html's dirty-checking then
    // skips re-assigning unchanged values (e.g. the same XMLDocument
    // reference), so `currentDoc` stays `undefined` forever.
    //
    // The standard fix is to "re-apply" any pre-upgrade values through the
    // real accessors once the class (and its setters) are in place.
    UPGRADABLE_PROPERTIES.forEach(prop => this.upgradeProperty(prop));
  }

  private upgradeProperty(prop: string): void {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = (this as Record<string, unknown>)[prop];
      delete (this as Record<string, unknown>)[prop];
      (this as Record<string, unknown>)[prop] = value;
    }
  }

  connectedCallback() {
    // Dispatched 'issue'/'empty-issues' events must bubble up to the OpenSCD
    // host, so the store needs a reference to this element to dispatch from.
    setHost(this);

    if (this.shadowRoot) return;

    this.attachShadow({ mode: 'open' });
    const shadowRoot = this.shadowRoot!;

    // Mount empty Svelte component (validator runs in background via store)
    mount(Validator, { target: shadowRoot });
  }

  /**
   * Required by OpenSCD - a placeholder content method for the validator.
   * Validators run silently without visible UI.
   */
  content(): unknown {
    return `<!-- XPath Validator running in background -->`;
  }

  /**
   * Called by OpenSCD validation system
   */
  async validate(): Promise<void> {
    return validate();
  }

  set doc(newDoc: XMLDocument | undefined) {
    setDoc(newDoc);
  }

  set editCount(newCount: number) {
    setEditCount(newCount);
  }

  set plugins(newPlugins: unknown[]) {
    setPlugins(newPlugins);
  }

  set docId(v: string) {}

  // Needed as the validatorId so issues reported to OpenSCD's diagnostics
  // pane (Ctrl+D) can be grouped/cleared per plugin instance.
  set pluginId(v: string) {
    setPluginId(v);
  }
  set docName(v: string) {}
  set nsdoc(v: unknown) {}
  set docs(v: Record<string, XMLDocument>) {}
  set locale(v: string) {}
  set oscdApi(v: unknown) {}
}
