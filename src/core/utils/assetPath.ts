export function getAssetPath(rawPath: string): string {
  if (!rawPath) return rawPath;

  // Strip any odd leading Arabic diacritics that may accidentally appear in filenames.
  const cleaned = rawPath.replace(/^[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/, "");

  const withoutLeadingSlash = cleaned.replace(/^\/+/, "");

  // Next serves from site root. If you later use basePath, adapt here.
  return `/${withoutLeadingSlash}`;
}
