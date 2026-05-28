export const THEME_COOKIE_NAME = "ryunix_theme";
export const themes = ["light", "system", "dark"];
export const defaultTheme = "dark";

const MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

export function getThemeCookie() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${THEME_COOKIE_NAME}=(light|system|dark)(?:;|$)`),
  );
  return match ? match[1] : null;
}

export function setThemeCookie(theme) {
  if (typeof document === "undefined" || !themes.includes(theme)) return;
  document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function resolveThemeFromCookie() {
  return getThemeCookie() || defaultTheme;
}

export function getSystemColorScheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveEffectiveTheme(theme) {
  const choice = themes.includes(theme) ? theme : defaultTheme;
  if (choice === "system") return getSystemColorScheme();
  return choice;
}

export function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const preference = themes.includes(theme) ? theme : defaultTheme;
  const effective = resolveEffectiveTheme(preference);

  document.documentElement.classList.toggle("dark", effective === "dark");
  document.documentElement.dataset.theme = preference;
  document.documentElement.dataset.themeEffective = effective;
  document.documentElement.style.colorScheme = effective === "dark" ? "dark" : "light";
}

export const themeInitScript = `(function(){try{var m=document.cookie.match(/(?:^|;\\s*)ryunix_theme=(light|system|dark)(?:;|$)/);var t=m?m[1]:'dark';var dark=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',dark);r.dataset.theme=t;r.dataset.themeEffective=dark?'dark':'light';r.style.colorScheme=dark?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`;

export function watchSystemTheme(onChange) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => onChange(getSystemColorScheme());
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}
