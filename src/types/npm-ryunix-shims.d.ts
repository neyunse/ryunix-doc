/**
 * Published @unsetsoft/* canary packages ship i18n at runtime but lag on .d.ts.
 * Remove this file once npm types match the canary runtime.
 */
export {};

declare module "@unsetsoft/ryunixjs" {
  export interface RyunixI18nConfig {
    locales: readonly string[];
    defaultLocale: string;
    localePrefix?: "always" | "as-needed" | "never";
    localeLabels?: Record<string, string>;
    cookieName?: string;
  }

  export interface RyunixCreateI18nOptions extends RyunixI18nConfig {
    messages?: Record<string, Record<string, string>>;
  }

  export interface RyunixI18nHandle {
    Provider: import("@unsetsoft/ryunixjs").RyunixComponent<Record<string, unknown>>;
    generateStaticParams: () => Array<{ locale: string }>;
    resolveLocaleFromCookie: () => string;
    setLocaleCookie: (locale: string) => void;
    getLocaleCookie: () => string | null;
    useLocale: () => string;
    useTranslations: () => (key: string) => string;
    useI18n: () => RyunixI18nHandle;
    LocaleSwitcher: import("@unsetsoft/ryunixjs").RyunixComponent<Record<string, unknown>>;
  }

  export function createI18n(options: RyunixCreateI18nOptions): RyunixI18nHandle;
  export function getRyunixI18nConfig(): RyunixI18nConfig | null;
  export function getLocaleFromPath(
    pathname: string,
    locales: readonly string[],
  ): string | null;
  export function pickLocale<T>(
    record: Record<string, T> | Partial<Record<string, T>> | null | undefined,
    locale: string,
    fallback: string,
  ): T | undefined;
  export function swapLocalePath(
    pathname: string,
    targetLocale: string,
    options: { locales: readonly string[]; defaultLocale: string },
  ): string;
}

declare module "@unsetsoft/ryunix-presets" {
  interface RyunixI18nConfig {
    locales: readonly string[];
    defaultLocale: string;
    localePrefix?: "always" | "as-needed" | "never";
    localeLabels?: Record<string, string>;
    cookieName?: string;
  }

  interface RyunixConfig {
    i18n?: RyunixI18nConfig;
  }
}
