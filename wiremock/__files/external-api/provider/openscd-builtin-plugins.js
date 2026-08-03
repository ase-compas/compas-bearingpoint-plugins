export function generatePluginPath(plugin) {
  return location.origin + location.pathname + plugin;
}

export const officialPlugins = [
  {
    name: 'OpenSCD Dummy',
    src: '/external-api/provider/openscd-builtin-dummy.js',
    icon: 'extension',
    activeByDefault: true,
    kind: 'menu',
    requireDoc: false,
    position: 'middle',
  },
];
