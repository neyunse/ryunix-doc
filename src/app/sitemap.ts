import { docSlugs } from "../i18n/docSlugs";
import { docPath, locales } from "../i18n/config";
import { templateIds } from "../i18n/templatesCatalog";

const BASE_URL = "https://ryunixjs.unsetsoft.com";

export default async function sitemap() {
  const docs = locales.flatMap((locale) =>
    docSlugs.map((slug) => ({
      url: `${BASE_URL}${docPath(locale, slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  );

  const homes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: locale === "en" ? 1 : 0.9,
  }));

  const templatesIndex = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/templates`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const templateDetails = locales.flatMap((locale) =>
    templateIds.map((templateId) => ({
      url: `${BASE_URL}/${locale}/templates/${templateId}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...homes,
    ...templatesIndex,
    ...templateDetails,
    ...docs,
  ];
}
