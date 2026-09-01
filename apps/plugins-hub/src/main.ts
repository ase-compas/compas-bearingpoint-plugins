import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';
import {
  createFakeCompasLayout,
  initFakeHostPlugins,
  listenOscdConfigurePlugin,
} from './dev/fake-open-scd';
import { standaloneProps } from './dev/standalone-props.svelte';
// Production loads plugin-wrapper.svelte.ts (not this file) and must not include these rules.
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only CSS outside the lib graph; main.ts is not the production entry
import { initThemePlayground } from '../../../libs/global/dev/theme-playground';

// =============================================
// Dev-Only: Fake host + theme playground
// =============================================
let fakeCompasLayout: HTMLElement | null = null;
if (import.meta.env?.DEV) {
  // Host theme vars before mount so first paint already matches the selected preset
  initThemePlayground();

  fakeCompasLayout = createFakeCompasLayout();

  if (fakeCompasLayout) {
    initFakeHostPlugins();
    document.addEventListener('oscd-configure-plugin', (e: Event) =>
      listenOscdConfigurePlugin(e),
    );

    console.log(
      '%c✅ [Dev] Fake open-scd + compas-layout created und oscd-configure-plugin listener registered',
      'color:#0ea5e9; font-weight:bold',
    );
  }

  // Simulate Core-App writing appVersion to localStorage
  localStorage.setItem('appVersion', '0.44.0-8');
  console.log('%c[Dev] appVersion set in localStorage: 0.44.0-8', 'color:#0ea5e9');
}


const app = mount(PluginsHub, {
  target: document.body,
  props: standaloneProps,
});

export default app;
