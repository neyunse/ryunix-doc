export const locales = ["en", "es"];
export const defaultLocale = "en";
export const localeLabels = { en: "English", es: "Español" };
export const LOCALE_COOKIE_NAME = "ryunix_locale";

/** Build a localized docs URL from a slug (no leading slash on slug). */
export function docPath(locale, slug) {
  return `/${locale}/docs/${slug}`;
}

export const docSections = {
  en: {
    Introduction: [
      { slug: "introduction/getting-started", label: "Getting Started" },
      { slug: "introduction/installation", label: "Installation" },
      { slug: "introduction/differences-with-react", label: "Differences with React" },
      { slug: "introduction/about", label: "About" },
      { slug: "introduction/project-structure", label: "Project Structure" },
      { slug: "introduction/navigation", label: "Navigation" },
      { slug: "introduction/css", label: "CSS" },
      { slug: "introduction/deploying", label: "Deploying" },
    ],
    API: [
      { slug: "api/configuration", label: "Configuration" },
      { slug: "api/components", label: "Components" },
      { slug: "api/functions", label: "Functions" },
      { slug: "api/special-files", label: "Special Files" },
    ],
    Core: [
      { slug: "core/rendering", label: "Rendering & SSR" },
      { slug: "core/error-handling", label: "Error Handling" },
      { slug: "core/server-actions", label: "Server Actions" },
      { slug: "core/advanced-components", label: "Advanced Components" },
      { slug: "core/performance", label: "Performance" },
    ],
    Guides: [
      { slug: "guides/cli", label: "CLI Commands" },
      { slug: "guides/ssg", label: "SSG & Prerendering" },
      { slug: "guides/api-routes", label: "API Routes" },
      { slug: "guides/mdx", label: "MDX & Frontmatter" },
      { slug: "guides/create-app", label: "Create Ryunix App" },
      { slug: "guides/vscode", label: "VS Code" },
      { slug: "guides/typescript", label: "TypeScript" },
      { slug: "guides/devtools", label: "DevTools" },
      { slug: "guides/ecosystem", label: "Ecosystem" },
    ],
  },
  es: {
    Introducción: [
      { slug: "introduction/getting-started", label: "Primeros pasos" },
      { slug: "introduction/installation", label: "Instalación" },
      { slug: "introduction/differences-with-react", label: "Diferencias con React" },
      { slug: "introduction/about", label: "Acerca de" },
      { slug: "introduction/project-structure", label: "Estructura del proyecto" },
      { slug: "introduction/navigation", label: "Navegación" },
      { slug: "introduction/css", label: "CSS" },
      { slug: "introduction/deploying", label: "Despliegue" },
    ],
    API: [
      { slug: "api/configuration", label: "Configuración" },
      { slug: "api/components", label: "Componentes" },
      { slug: "api/functions", label: "Funciones" },
      { slug: "api/special-files", label: "Archivos especiales" },
    ],
    Core: [
      { slug: "core/rendering", label: "Renderizado y SSR" },
      { slug: "core/error-handling", label: "Manejo de errores" },
      { slug: "core/server-actions", label: "Server Actions" },
      { slug: "core/advanced-components", label: "Componentes avanzados" },
      { slug: "core/performance", label: "Rendimiento" },
    ],
    Guías: [
      { slug: "guides/cli", label: "Comandos CLI" },
      { slug: "guides/ssg", label: "SSG y prerender" },
      { slug: "guides/api-routes", label: "Rutas API" },
      { slug: "guides/mdx", label: "MDX y frontmatter" },
      { slug: "guides/create-app", label: "Create Ryunix App" },
      { slug: "guides/vscode", label: "VS Code" },
      { slug: "guides/typescript", label: "TypeScript" },
      { slug: "guides/devtools", label: "DevTools" },
      { slug: "guides/ecosystem", label: "Ecosistema" },
    ],
  },
};

/** Sidebar sections with resolved paths for the active locale. */
export function getDocSections(locale) {
  const source = docSections[locale] ?? docSections.en;
  const out = {};
  for (const [section, routes] of Object.entries(source)) {
    out[section] = routes.map((route) => ({
      path: docPath(locale, route.slug),
      label: route.label,
      slug: route.slug,
    }));
  }
  return out;
}

/** Swap locale prefix while keeping the rest of the path. */
export function swapLocalePath(pathname, targetLocale) {
  const match = pathname.match(/^\/(en|es)(\/.*)?$/);
  const rest = match ? match[2] || "" : pathname.replace(/^\/docs/, "/docs");
  if (match) {
    return `/${targetLocale}${rest || ""}`;
  }
  if (pathname.startsWith("/docs")) {
    return `/${targetLocale}${pathname}`;
  }
  return `/${targetLocale}`;
}

export function getLocaleFromPath(pathname) {
  if (typeof pathname !== "string") return null;
  const match = pathname.match(/^\/(en|es)(\/|$)/);
  return match ? match[1] : null;
}
