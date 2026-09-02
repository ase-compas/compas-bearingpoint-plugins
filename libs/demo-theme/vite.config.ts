import { defineConfig, type UserConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async (): Promise<UserConfig> => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/demo-theme',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/libs/demo-theme',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      name: 'demo-theme-lib',
      globals: true,
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/libs/demo-theme',
        provider: 'v8',
      },
    },
  };
});
