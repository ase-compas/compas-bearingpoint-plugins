/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/create-service-section',

    server: {
      port: 4212,
      host: 'localhost',
      fs: {
        allow: ['..'],
      },
    },

    preview: {
      port: 4312,
      host: 'localhost',
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/apps/create-service-section',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: 'index.js',
        },
      },
      lib: {
        entry: 'src/plugin/wrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/create-service-section',
        provider: 'v8',
      },
    },
  };
});
