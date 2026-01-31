// functions/_middleware.ts

type PagesContext = { request: Request; next: () => Promise<Response> };

type Locale = "en" | "ar";
const LOCALES = new Set<Locale>(["en", "ar"]);

const LOCALELESS_PREFIXES = new Set(["about", "contact", "projects", "services", "blog"]);

const STRIP_QUERY_KEYS = new Set([
  "lang",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "mc_cid",
  "mc_eid",
]);

function collapseSlashes(pathname: string): string {
  return pathname.replace(/\/{2,}/g, "/");
}

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

// IMPORTANT: only touch index.html (do NOT touch google-site-verification html file)
function stripIndexHtml(pathname: string): string {
  if (pathname === "/index.html") return "/";
  if (pathname.endsWith("/index.html")) return pathname.slice(0, -"/index.html".length) || "/";
  return pathname;
}

function firstSegment(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  return parts[0] || null;
}

function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "ar") parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}

function withLocale(pathname: string, locale: Locale): string {
  const clean = stripLocalePrefix(pathname);
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

function isLocalePath(pathname: string): boolean {
  const seg = firstSegment(pathname);
  return !!seg && (seg === "en" || seg === "ar");
}

function isLocaleLessKnownRoute(pathname: string): boolean {
  const seg = firstSegment(pathname);
  return !!seg && LOCALELESS_PREFIXES.has(seg);
}

function isAssetOrNext(pathname: string): boolean {
  // لا تلمس أصول الصور (أسماء ملفات عندك فيها Spaces/Uppercase)
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/brand/") ||
    pathname.startsWith("/reviews/") ||
    pathname.startsWith("/skills/") ||
    pathname === "/favicon.svg" ||
    pathname === "/og-cover.svg" ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js") ||
    pathname.endsWith(".map")
  );
}

function addSecurityHeaders(res: Response): Response {
  const out = new Response(res.body, res);
  out.headers.set("X-Content-Type-Options", "nosniff");
  out.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return out;
}

export async function onRequest(context: PagesContext) {
  const url = new URL(context.request.url);

  const originalPath = url.pathname;
  const originalSearch = url.search;

  // ---- A) Normalize pathname (lightweight) ----
  let pathname = collapseSlashes(url.pathname);
  pathname = stripIndexHtml(pathname);
  pathname = stripTrailingSlash(pathname);

  // Special-case sitemaps/robots (we want to normalize these even though they look like "assets")
  if (pathname === "/sitemap-index.xml") pathname = "/sitemap.xml";

  // ---- B) Detect desired locale from ?lang= (if present) ----
  let desiredLocale: Locale | null = null;
  const langParam = url.searchParams.get("lang");
  if (langParam === "en" || langParam === "ar") desiredLocale = langParam;

  // ---- C) Canonicalize root + locale-less known routes ----
  // Root:
  if (pathname === "/") {
    pathname = `/${desiredLocale ?? "en"}`;
  }

  // Locale-less known routes (/about, /blog/x, ...)
  if (!isLocalePath(pathname) && isLocaleLessKnownRoute(pathname)) {
    pathname = `/${desiredLocale ?? "en"}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  }

  // If it's already a locale path but ?lang says otherwise, move to the right locale
  if (desiredLocale && isLocalePath(pathname)) {
    pathname = withLocale(pathname, desiredLocale);
  }

  // ---- D) Strip query params (lang + tracking) ----
  let changedQuery = false;
  for (const key of Array.from(url.searchParams.keys())) {
    if (STRIP_QUERY_KEYS.has(key)) {
      url.searchParams.delete(key);
      changedQuery = true;
    }
  }

  // ---- E) If it’s a pure asset path, do not rewrite path casing etc. ----
  // We still allow redirect normalization above for sitemap-index.xml and index.html and trailing slash.
  // After those transforms, if it's an asset, just proceed.
  const isAsset = isAssetOrNext(pathname) || pathname === "/robots.txt" || pathname === "/sitemap.xml" || pathname === "/llms.txt" || pathname === "/ai.txt";

  // rebuild URL if any change happened
  const newSearch = url.searchParams.toString();
  const rebuiltSearch = newSearch ? `?${newSearch}` : "";

  const changedPath = pathname !== originalPath;
  const changed = changedPath || changedQuery || originalSearch !== rebuiltSearch;

  if (changed) {
    const redirectUrl = `${url.origin}${pathname}${rebuiltSearch}`;
    const res = Response.redirect(redirectUrl, 301);
    return addSecurityHeaders(res);
  }

  // ---- F) Pass-through ----
  const res = await context.next();
  return addSecurityHeaders(res);
}
