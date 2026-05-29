import { createI18n, getRyunixI18nConfig } from "@unsetsoft/ryunixjs";
import { docI18nSettings } from "./settings.js";

/** Runtime i18n (client bundle uses `ryunix.config.i18n`; Node/SSG uses `docI18nSettings`). */
export const i18n = createI18n({
  ...(getRyunixI18nConfig() ?? docI18nSettings),
});

export const {
  Provider: I18nProvider,
  generateStaticParams,
  resolveLocaleFromCookie,
  setLocaleCookie,
  getLocaleCookie,
  useLocale,
  useTranslations,
  useI18n,
  LocaleSwitcher: BaseLocaleSwitcher,
} = i18n;

export default i18n;
