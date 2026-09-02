import DemoTheme from './app/demo-theme.svelte';
import { mount } from 'svelte';
// Production loads plugin-wrapper.svelte.ts (not this file) and must not include these rules.
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only helpers outside the lib graph; main.ts is not the production entry
import { initThemePlayground } from '../../../libs/global/dev/theme-playground';
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only; not the production entry
import {
  createFakeOpenScd,
  fakeHostProps,
  initFakeHostPlugins,
  listenOscdConfigurePlugin,
} from '../../../libs/global/dev/fake-open-scd';

// =============================================
// Dev-Only: Fake host + theme playground
// =============================================
let fakeCompasLayout: HTMLElement | null = null;
if (import.meta.env?.DEV) {
  // Host theme vars before mount so first paint already matches the selected preset
  initThemePlayground();

  fakeCompasLayout = createFakeOpenScd({
    builtins: [],
    layoutTag: 'compas-layout',
  });

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
}

const app = mount(DemoTheme, {
  target: document.body,
  props: fakeHostProps,
});

export default app;
