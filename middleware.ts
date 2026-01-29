import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["en", "ar"] as const;
type Locale = (typeof SUPPORTED)[number];

function pickLocale(req: NextRequest): Locale {
  const lang = (req.nextUrl.searchParams.get("lang") || "").toLowerCase();
  if (lang === "ar" || lang === "en") return lang;

  const cookie = (req.cookies.get("lang")?.value || "").toLowerCase();
  if (cookie === "ar" || cookie === "en") return cookie as Locale;

  const header = (req.headers.get("accept-language") || "").toLowerCase();
  if (header.includes("ar")) return "ar";
  return "en";
}

function stripLangParam(url: URL): boolean {
  if (!url.searchParams.has("lang")) return false;
  url.searchParams.delete("lang");
  return true;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  const isFile = /\.[a-z0-9]+$/i.test(pathname);
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    isFile
  ) {
    const changed = stripLangParam(url);
    if (changed) return NextResponse.redirect(url);
    return NextResponse.next();
  }

  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (first === "en" || first === "ar") {
    const changed = stripLangParam(url);
    if (changed) return NextResponse.redirect(url);

    const res = NextResponse.next();
    res.cookies.set("lang", first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  const locale = pickLocale(req);
  url.pathname = `/${locale}${pathname}`;
  stripLangParam(url);

  const res = NextResponse.redirect(url);
  res.cookies.set("lang", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
