import LocaleDocLayout from "@/features/docs/LocaleDocLayout";
import { localeDocMeta } from "@/i18n/localeDocMeta";

export const generateMetadata = async ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  return localeDocMeta[locale] ?? localeDocMeta.en;
};

import type { RyunixNode } from "@unsetsoft/ryunixjs";
import type { PageProps } from "@/types/pages";

const DocLayout = ({ children, params }: PageProps & { children?: RyunixNode }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  return <LocaleDocLayout locale={locale}>{children}</LocaleDocLayout>;
};

export default DocLayout;
