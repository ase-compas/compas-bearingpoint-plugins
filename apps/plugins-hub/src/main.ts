import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';

// ─────────────────────────────────────────────────────────────
// Nur im Dev-Modus: Event abfangen und auf die Console loggen
// ─────────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  document.addEventListener('oscd-configure-plugin', (e: Event) => {
    const event = e as CustomEvent;           // TypeScript-Sicherheit

    console.log(
      '%c📡 oscd-configure-plugin empfangen (main.ts)',
      'background:#0ea5e9; color:white; padding:2px 6px; border-radius:3px; font-weight:bold',
      event.detail
    );

    // Optional: noch detailliertere Ausgabe
    // console.dir(event.detail);
  });

  console.log('%c✅ [Dev] Listener für "oscd-configure-plugin" aktiv', 'color:#0ea5e9; font-weight:bold');
}


const app = mount(PluginsHub, {
  target: document.body,
  props: {},
});

export default app;
