import SiteLayout from "@/features/marketing/SiteLayout";
import { siteCopy } from "@/features/marketing/siteCopy";
import { I18nProvider, generateStaticParams } from "@/i18n/app";
import { pickLocale } from "@/i18n/config";
import { localeMarketingMeta } from "@/i18n/localeMarketingMeta";

export { generateStaticParams };

export const generateMetadata = async ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  return localeMarketingMeta[locale] ?? localeMarketingMeta.en;
};

import type { RyunixNode } from "@unsetsoft/ryunixjs";
import type { PageProps } from "@/types/pages";

const LocaleLayout = ({ children, params }: PageProps & { children?: RyunixNode }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  return (
    <I18nProvider locale={locale}>
      <SiteLayout
        locale={locale}
        docsPath={`/${locale}/docs`}
        templatesPath={`/${locale}/templates`}
        copy={pickLocale(siteCopy, locale)}
      >
        {children}
      </SiteLayout>
    </I18nProvider>
  );
};

export default LocaleLayout;
