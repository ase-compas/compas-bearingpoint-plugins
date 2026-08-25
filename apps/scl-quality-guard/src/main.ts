import App from './App.svelte';
import '../public/global.css';
import '../public/material-icon.css';
import 'svelte-material-ui/bare.css';
import { mount } from 'svelte';

const app = mount(App, {
  target: document.body,
  props: { dev: true },
});

export default app;
