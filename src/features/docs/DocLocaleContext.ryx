import { createContext, type RyunixNode } from "@unsetsoft/ryunixjs";
import { defaultLocale } from "@/i18n/config";
import { docUiCopy } from "@/i18n/docUiCopy";
import { pickLocale } from "@/i18n/locale";

const { Provider: DocLocaleProviderRoot, useContext: useDocLocaleContext } =
  createContext("ryunix-doc-locale", defaultLocale);

export const DocLocaleProvider = ({ locale, children }: { locale: string; children?: RyunixNode }) => (
  <DocLocaleProviderRoot value={locale}>{children}</DocLocaleProviderRoot>
);

/** Active docs locale from `LocaleDocLayout` (en | es). */
export const useDocLocale = () => {
  const locale = useDocLocaleContext();
  return locale === "es" ? "es" : "en";
};

/** UI strings for the current docs locale (`install`, `tech`, `mdx`, …). */
export const useDocCopy = (section) => {
  const locale = useDocLocale();
  const copy = pickLocale(docUiCopy, locale);
  return section ? copy?.[section] : copy;
};
