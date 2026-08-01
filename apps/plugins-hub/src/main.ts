import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';
import { createFakeCompasLayout, listenOscdConfigurePlugin } from './dev/fake-open-scd';

// Dev-only: full-viewport html/body to simulate the host plugin container.
// Production loads plugin-wrapper.svelte.ts (not this file) and must not include these rules.
import '../../../libs/global/dev-container.css';

// =============================================
// Dev-Only: Fake erstellen + Event abhören
// =============================================
let fakeCompasLayout: HTMLElement | null = null;
if (import.meta.env?.DEV) {
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
