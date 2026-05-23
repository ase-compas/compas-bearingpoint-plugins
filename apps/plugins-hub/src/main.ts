import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';
import { createFakeCompasLayout, listenOscdConfigurePlugin } from './dev/fake-open-scd';

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
}


const app = mount(PluginsHub, {
  target: document.body,
  props: {},
});

export default app;
