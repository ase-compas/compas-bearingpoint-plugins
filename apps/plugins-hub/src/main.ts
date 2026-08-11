import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';
import { createFakeCompasLayout, listenOscdConfigurePlugin } from './dev/fake-open-scd';
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only; main.ts is not the production entry
import { initThemePlayground } from '../../../libs/global/dev/theme-playground';

// Dev-only: full-viewport html/body to simulate the host plugin container.
// Production loads plugin-wrapper.svelte.ts (not this file) and must not include these rules.
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only CSS outside the lib graph; main.ts is not the production entry
import '../../../libs/global/dev-container.css';

// =============================================
// Dev-Only: Fake host + theme playground
// =============================================
let fakeCompasLayout: HTMLElement | null = null;
if (import.meta.env?.DEV) {
  // Host theme vars before mount so first paint already matches the selected preset
  initThemePlayground();

  fakeCompasLayout = createFakeCompasLayout();

  if (fakeCompasLayout) {
    fakeCompasLayout.addEventListener('oscd-configure-plugin', (e: Event) => listenOscdConfigurePlugin(e));

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
  props: {},
});

export default app;
