import PluginsHub from './app/plugins-hub.svelte';
import { mount } from 'svelte';

const app = mount(PluginsHub, {
  target: document.body,
  props: {},
});

export default app;
