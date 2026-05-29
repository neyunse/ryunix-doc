import TemplatesPage from "@/features/templates/TemplatesPage";
import { templatesCopy } from "@/features/templates/templatesCopy";
import { pickLocale } from "@/i18n/config";

export const generateMetadata = async ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  const meta = templatesCopy[locale]?.meta ?? templatesCopy.en.meta;
  return {
    title: `RyunixJS — ${meta.title}`,
    description: meta.description,
    "og:title": `RyunixJS — ${meta.title}`,
    "og:description": meta.description,
  };
};

const LocaleTemplates = ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  const copy = pickLocale(templatesCopy, locale);
  return (
    <TemplatesPage copy={copy} docsBase={`/${locale}/docs`} locale={locale} />
  );
};

export default LocaleTemplates;
