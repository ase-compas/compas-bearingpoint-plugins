import type { StoredPlugin } from '@compas-bearingpoint/plugins-hub';

/** Reactive props for standalone `main.ts` (not the production wrapper). */
export const standaloneProps = $state({
  plugins: [] as StoredPlugin[],
});
