import type { DocLocale } from "./types";
import { LOCALE_COOKIE_NAME, defaultLocale, locales } from "./config";

const MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

export function getLocaleCookie() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE_NAME}=(en|es)(?:;|$)`)
  );
  return match ? match[1] : null;
}

export function setLocaleCookie(locale: DocLocale) {
  if (typeof document === "undefined" || !locales.includes(locale)) return;
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function resolveLocaleFromCookie() {
  return getLocaleCookie() || defaultLocale;
}
