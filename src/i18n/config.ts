import {
  getLocaleFromPath as getLocaleFromPathCore,
  pickLocale as pickLocaleCore,
  swapLocalePath as swapLocalePathCore,
} from "@unsetsoft/ryunixjs";
import type { DocLocale, DocSidebarSections } from "./types";
import { docI18nSettings } from "./settings";

export const locales = [...docI18nSettings.locales] as DocLocale[];
export const defaultLocale = docI18nSettings.defaultLocale as DocLocale;
export const localeLabels = docI18nSettings.localeLabels;
export const LOCALE_COOKIE_NAME = "ryunix_locale";

export const pickLocale = <T,>(record: Partial<Record<string, T>>, locale: string) =>
  pickLocaleCore(record, locale, defaultLocale);

export const swapLocalePath = (pathname: string, targetLocale: DocLocale) =>
  swapLocalePathCore(pathname, targetLocale, { locales, defaultLocale });

export const getLocaleFromPath = (pathname: string) =>
  getLocaleFromPathCore(pathname, locales);

/** Build a localized docs URL from a slug (no leading slash on slug). */
export function docPath(locale: DocLocale, slug: string) {
  return `/${locale}/docs/${slug}`;
}

export const docSections = {
  en: {
    Introduction: [
      { slug: "introduction/about", label: "About" },
      { slug: "introduction/getting-started", label: "Getting Started" },
      { slug: "introduction/installation", label: "Installation" },
      { slug: "introduction/project-structure", label: "Project Structure" },
      { slug: "introduction/navigation", label: "Navigation" },
      { slug: "introduction/css", label: "CSS" },
      { slug: "introduction/deploying", label: "Deploying" },
      { slug: "introduction/differences-with-react", label: "Differences with React" },
    ],
    Core: [
      { slug: "core/rendering", label: "Rendering & SSR" },
      { slug: "core/error-handling", label: "Error Handling" },
      { slug: "core/server-actions", label: "Server Actions" },
      { slug: "core/advanced-components", label: "Advanced Components" },
      { slug: "core/performance", label: "Performance" },
    ],
    API: [
      { slug: "api/configuration", label: "Configuration" },
      { slug: "api/components", label: "Components" },
      { slug: "api/functions", label: "Functions" },
      { slug: "api/special-files", label: "Special Files" },
    ],
    Guides: [
      { slug: "guides/cli", label: "CLI Commands" },
      { slug: "guides/create-app", label: "Create Ryunix App" },
      { slug: "guides/mdx", label: "MDX & Frontmatter" },
      { slug: "guides/ssg", label: "SSG & Prerendering" },
      { slug: "guides/seo-metadata", label: "SEO & Metadata" },
      { slug: "guides/i18n", label: "Internationalization" },
      { slug: "guides/api-routes", label: "API Routes" },
      { slug: "guides/typescript", label: "TypeScript" },
      { slug: "guides/vscode", label: "VS Code" },
      { slug: "guides/devtools", label: "DevTools" },
      { slug: "guides/ecosystem", label: "Ecosystem" },
    ],
  },
  es: {
    Introducción: [
      { slug: "introduction/about", label: "Acerca de" },
      { slug: "introduction/getting-started", label: "Primeros pasos" },
      { slug: "introduction/installation", label: "Instalación" },
      { slug: "introduction/project-structure", label: "Estructura del proyecto" },
      { slug: "introduction/navigation", label: "Navegación" },
      { slug: "introduction/css", label: "CSS" },
      { slug: "introduction/deploying", label: "Despliegue" },
      { slug: "introduction/differences-with-react", label: "Diferencias con React" },
    ],
    Core: [
      { slug: "core/rendering", label: "Renderizado y SSR" },
      { slug: "core/error-handling", label: "Manejo de errores" },
      { slug: "core/server-actions", label: "Server Actions" },
      { slug: "core/advanced-components", label: "Componentes avanzados" },
      { slug: "core/performance", label: "Rendimiento" },
    ],
    API: [
      { slug: "api/configuration", label: "Configuración" },
      { slug: "api/components", label: "Componentes" },
      { slug: "api/functions", label: "Funciones" },
      { slug: "api/special-files", label: "Archivos especiales" },
    ],
    Guías: [
      { slug: "guides/cli", label: "Comandos CLI" },
      { slug: "guides/create-app", label: "Create Ryunix App" },
      { slug: "guides/mdx", label: "MDX y frontmatter" },
      { slug: "guides/ssg", label: "SSG y prerender" },
      { slug: "guides/seo-metadata", label: "SEO y metadatos" },
      { slug: "guides/i18n", label: "Internacionalización" },
      { slug: "guides/api-routes", label: "Rutas API" },
      { slug: "guides/typescript", label: "TypeScript" },
      { slug: "guides/vscode", label: "VS Code" },
      { slug: "guides/devtools", label: "DevTools" },
      { slug: "guides/ecosystem", label: "Ecosistema" },
    ],
  },
};

/** Sidebar sections with resolved paths for the active locale. */
export function getDocSections(locale: DocLocale): DocSidebarSections {
  const source = docSections[locale as keyof typeof docSections] ?? docSections.en;
  const out: DocSidebarSections = {};
  for (const [section, routes] of Object.entries(source)) {
    out[section] = routes.map((route: { slug: string; label: string }) => ({
      path: docPath(locale, route.slug),
      label: route.label,
      slug: route.slug,
    }));
  }
  return out;
}

