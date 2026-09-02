/**
 * Reactive host props for standalone plugin `main.ts` (not production entries).
 * Mirrors the OpenSCD custom-element `plugins` input.
 */
export type FakeHostPlugin = {
  name: string;
  src: string;
  kind: string;
  icon?: string;
  active?: boolean;
  author?: string;
  description?: string;
  requireDoc?: boolean;
  position?: string;
  activeByDefault?: boolean;
  installed?: boolean;
  [key: string]: unknown;
};

export const fakeHostProps = $state({
  plugins: [] as FakeHostPlugin[],
});
