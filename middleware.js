const LOCALE_COOKIE = "ryunix_locale";

export const config = {
  matcher: ["/"],
};

export default function middleware(request) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = cookie === "es" || cookie === "en" ? cookie : "en";
  return Response.redirect(new URL(`/${locale}`, request.url), 302);
}
