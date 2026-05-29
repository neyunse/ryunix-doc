import { siteOgImage, siteOgImageAlt } from "@/i18n/siteOgImage";

/** Metadatos SEO del layout de documentación por locale. */
export const localeDocMeta = {
  en: {
    title: {
      default: "RyunixJS: The new generation JavaScript Framework",
      template: "%s | RyunixJS",
    },
    description:
      "Official RyunixJS documentation — guides, API reference, and examples for building modern web apps.",
    keywords: [
      "Ryunix",
      "Documentation",
      "Home",
      "JS Framework",
      "Static Site Generator",
      "MDX Support",
      "ESLint Integration",
      "Webpack Configuration",
    ],
    "og:type": "website",
    "og:site_name": "RyunixJS",
    ...siteOgImage,
    "og:image:alt": siteOgImageAlt.en,
    "og:locale": "en_US",
    "og:locale:alternate": "es_ES",
  },
  es: {
    title: {
      default: "RyunixJS: El framework JavaScript de nueva generación",
      template: "%s | RyunixJS",
    },
    description:
      "Documentación oficial de RyunixJS — guías, referencia de API y ejemplos para crear aplicaciones web modernas.",
    keywords: [
      "Ryunix",
      "Documentación",
      "Framework JS",
      "Generador de sitios estáticos",
      "MDX",
      "ESLint",
      "Webpack",
    ],
    "og:type": "website",
    "og:site_name": "RyunixJS",
    ...siteOgImage,
    "og:image:alt": siteOgImageAlt.es,
    "og:locale": "es_ES",
    "og:locale:alternate": "en_US",
  },
};
