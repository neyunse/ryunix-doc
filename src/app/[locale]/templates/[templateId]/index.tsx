import TemplateDetailPage from "@/features/templates/TemplateDetailPage";
import { templatesCopy } from "@/features/templates/templatesCopy";
import { pickLocale } from "@/i18n/config";
import { templateIds, templatesById } from "@/i18n/templatesCatalog";

export const generateStaticParams = () =>
  templateIds.map((templateId) => ({ templateId }));

export const generateMetadata = async ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  const templateId = params?.templateId;
  const template = templatesById[templateId];
  const base = templatesCopy[locale] ?? templatesCopy.en;

  if (!template) {
    return {
      title: `RyunixJS — ${base.meta.title}`,
      description: base.meta.description,
    };
  }

  const t = base.templates[templateId];
  return {
    title: `RyunixJS — ${t.title}`,
    description: t.description,
    "og:title": `RyunixJS — ${t.title}`,
    "og:description": t.description,
  };
};

const LocaleTemplateDetail = ({ params }) => {
  const locale = params?.locale === "es" ? "es" : "en";
  const template = templatesById[params?.templateId];

  if (!template) {
    return null;
  }

  const copy = pickLocale(templatesCopy, locale);
  return (
    <TemplateDetailPage
      template={template}
      copy={copy}
      locale={locale}
      docsBase={`/${locale}/docs`}
    />
  );
};

export default LocaleTemplateDetail;
