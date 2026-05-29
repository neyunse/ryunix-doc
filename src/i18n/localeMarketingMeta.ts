import { siteOgImage, siteOgImageAlt } from "@/i18n/siteOgImage";

/** Home / marketing layout SEO per locale. */
export const localeMarketingMeta = {
  en: {
    description:
      "Official documentation for RyunixJS — guides, API reference, and examples for building modern web apps.",
    "og:type": "website",
    "og:site_name": "RyunixJS",
    ...siteOgImage,
    "og:image:alt": siteOgImageAlt.en,
    "og:locale": "en_US",
  },
  es: {
    description:
      "Documentación oficial de RyunixJS — guías, referencia de API y ejemplos para crear aplicaciones web modernas.",
    "og:type": "website",
    "og:site_name": "RyunixJS",
    ...siteOgImage,
    "og:image:alt": siteOgImageAlt.es,
    "og:locale": "es_ES",
  },
};
