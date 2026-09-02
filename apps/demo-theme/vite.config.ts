/// <reference types='vitest' />
import path from 'node:path';
import { defineConfig, type UserConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { inlineCssIntoJs } from '../../libs/global/vite/inline-css-into-js';

export default defineConfig(async (): Promise<UserConfig> => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  const proxy = {
    '/external-api': {
      target: 'http://localhost:8181',
      secure: false,
      changeOrigin: true,
    },
  };
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/demo-theme',

    server: {
      port: 4201,
      host: 'localhost',
      fs: {
        // App root is apps/demo-theme; shared CSS/fonts live in libs/global
        // (dev-only faces under libs/global/dev/google).
        allow: [path.resolve(__dirname, '../..')],
      },
      proxy,
    },

    preview: {
      port: 4301,
      host: 'localhost',
      proxy,
    },

    plugins: [svelte(), nxViteTsPaths(), inlineCssIntoJs()],

    build: {
      outDir: '../../dist/apps/demo-theme',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: 'index.js',
          assetFileNames: (assetInfo) =>
            assetInfo.name || '[name]-[hash][extname]',
        },
      },
      lib: {
        entry: 'src/plugin-wrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },

    test: {
      name: 'demo-theme-app',
      globals: true,
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/demo-theme',
        provider: 'v8',
      },
    },
  };
});
