const LOCALE_COOKIE = "ryunix_locale";

export const config = {
  matcher: ["/"],
};

function getLocaleFromCookie(request: Request): "en" | "es" {
  const header = request.headers.get("cookie");
  if (!header) return "en";
  const match = header.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=(en|es)(?:;|$)`));
  return match?.[1] === "es" ? "es" : "en";
}

export default function middleware(request: Request) {
  const locale = getLocaleFromCookie(request);
  const destination = new URL(`/${locale}`, request.url);
  return Response.redirect(destination, 302);
}
