/**
 * Compares two semver strings.
 * Returns:
 *  -1 if a < b
 *   0 if a === b
 *   1 if a > b
 */
export function compareSemver(a: string, b: string): -1 | 0 | 1 {
  const pa = parseSemver(a);
  const pb = parseSemver(b);

  for (let i = 0; i < 3; i++) {
    if (pa[i] < pb[i]) return -1;
    if (pa[i] > pb[i]) return 1;
  }
  return 0;
}

/**
 * Parses a semver string into a [major, minor, patch] tuple.
 * Non-numeric pre-release suffixes are ignored.
 */
function parseSemver(version: string): [number, number, number] {
  const clean = version.replace(/^v/, '').split('-')[0];
  const parts = clean.split('.').map((p) => parseInt(p, 10) || 0);
  return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
}

/**
 * Checks whether a given core version is within the plugin's supported range.
 *
 * The range is [from, to) — inclusive on `from`, exclusive on `to`.
 * If from and to are undefined, assumes compatible.
 *
 * @param coreVersion - The current host core version.
 * @param from - Minimum supported version (inclusive) or undefined.
 * @param to - Maximum supported version (exclusive) or undefined.
 * @returns `true` if compatible.
 */
export function isVersionCompatible(
  coreVersion: string,
  from?: string,
  to?: string,
): boolean {
  if (from === undefined || to === undefined) return true;
  return (
    compareSemver(coreVersion, from) >= 0 && compareSemver(coreVersion, to) < 0
  );
}
