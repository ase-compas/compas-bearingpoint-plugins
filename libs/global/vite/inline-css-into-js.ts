import type { Plugin } from 'vite';

/** Must match the string literal in each plugin-wrapper. */
export const INLINED_CSS_PLACEHOLDER = '__INLINED_PLUGIN_CSS_PLACEHOLDER__';

/**
 * Fold extracted CSS into the lib JS entry and drop sibling `.css` assets.
 * OpenSCD only loads `index.js`; the wrapper injects this string into Shadow DOM.
 */
export function inlineCssIntoJs(): Plugin {
  return {
    name: 'inline-css-into-js',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      let css = '';
      const cssAssets: string[] = [];

      for (const [fileName, item] of Object.entries(bundle)) {
        if (item.type === 'asset' && fileName.endsWith('.css')) {
          css +=
            typeof item.source === 'string'
              ? item.source
              : new TextDecoder().decode(item.source);
          cssAssets.push(fileName);
        }
      }

      if (!css) {
        this.error('inline-css-into-js: no CSS assets to inline');
        return;
      }

      const jsChunk = Object.values(bundle).find(
        (item) => item.type === 'chunk' && item.isEntry,
      );
      if (jsChunk?.type !== 'chunk') {
        this.error('inline-css-into-js: no JS entry chunk found');
        return;
      }

      const placeholderPattern = new RegExp(`["']${INLINED_CSS_PLACEHOLDER}["']`);
      if (!placeholderPattern.test(jsChunk.code)) {
        this.error(
          `inline-css-into-js: placeholder ${INLINED_CSS_PLACEHOLDER} not found in entry chunk`,
        );
        return;
      }

      jsChunk.code = jsChunk.code.replace(
        placeholderPattern,
        JSON.stringify(css),
      );

      for (const fileName of cssAssets) {
        delete bundle[fileName];
      }
    },
  };
}
