// Hub-only fake host: builtins for standalone `main.ts`.
// Shared OpenSCD stub lives in libs/global/dev (other plugins can reuse it).
// eslint-disable-next-line @nx/enforce-module-boundaries -- dev-only; not the production entry
import { createFakeOpenScd } from '../../../../libs/global/dev/fake-open-scd';

const FAKE_BUILTINS = [
  {
    name: 'Fake Substation',
    src: '/plugins/dist/editors/Substation.js',
    icon: 'margin',
    kind: 'editor',
    activeByDefault: true,
    requireDoc: true,
  },
  {
    name: 'Fake Help',
    src: '/plugins/dist/menu/Help.js',
    icon: 'help',
    kind: 'menu',
    activeByDefault: false,
    requireDoc: false,
    position: 'bottom',
  },
  {
    name: 'BP - PluginHub',
    kind: 'editor',
    description:
      'BearingPoint Plugin Hub – Central plugin for integrating and managing plugins from multiple providers',
    src: '/plugins-bearingpoint/plugin-hub/index.js',
    icon: 'hub',
  },
] as const;

/**
 * Fake CoMPAS host for Plugin-Hub standalone dev.
 * Provides getBuiltInPlugins() instead of serving plugins.js via WireMock.
 */
export function createFakeCompasLayout(): HTMLElement | null {
  return createFakeOpenScd({
    builtins: FAKE_BUILTINS,
    layoutTag: 'compas-layout',
  });
}
