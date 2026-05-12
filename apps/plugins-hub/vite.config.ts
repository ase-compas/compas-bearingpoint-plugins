/// <reference types='vitest' />
import { defineConfig, UserConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(async (): Promise<UserConfig> => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');

  const proxy = {
    '/external-api': {
      target: 'http://localhost:8181',
      secure: false,
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ''), // falls der path-prefix '/api' stört
    },
  };
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/plugins-hub',

    server: {
      port: 4201,
      host: 'localhost',
      fs: {
        allow: ['..'],
      },
      proxy,
    },

    preview: {
      port: 4301,
      host: 'localhost',
      proxy,
    },

    plugins: [svelte(), nxViteTsPaths()],

    build: {
      outDir: '../../dist/apps/plugins-hub',
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
        entry: 'src/plugin-wrapper.svelte.ts',
        formats: ['es'],
        fileName: 'index',
      },
    },

    test: {
      name: 'plugins-hub-app',
      globals: true,
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/plugins-hub',
        provider: 'v8',
      },
    },
  };
});
