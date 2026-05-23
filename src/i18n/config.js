export const locales = ["en", "es"];
export const defaultLocale = "en";
export const localeLabels = { en: "English", es: "Español" };
export const LOCALE_COOKIE_NAME = "ryunix_locale";

export const docSections = {
  en: {
    Introduction: [
      { path: "/en/docs/introduction/getting-started", label: "Getting Started" },
      { path: "/en/docs/introduction/installation", label: "Installation" },
      { path: "/en/docs/introduction/differences-with-react", label: "Differences with React" },
      { path: "/en/docs/introduction/about", label: "About" },
      { path: "/en/docs/introduction/project-structure", label: "Project Structure" },
      { path: "/en/docs/introduction/navigation", label: "Navigation" },
      { path: "/en/docs/introduction/css", label: "CSS" },
      { path: "/en/docs/introduction/deploying", label: "Deploying" },
    ],
    API: [
      { path: "/en/docs/api/configuration", label: "Configuration" },
      { path: "/en/docs/api/components", label: "Components" },
      { path: "/en/docs/api/functions", label: "Functions" },
      { path: "/en/docs/api/special-files", label: "Special Files" },
    ],
    Core: [
      { path: "/en/docs/core/rendering", label: "Rendering & SSR" },
      { path: "/en/docs/core/error-handling", label: "Error Handling" },
      { path: "/en/docs/core/server-actions", label: "Server Actions" },
      { path: "/en/docs/core/advanced-components", label: "Advanced Components" },
      { path: "/en/docs/core/performance", label: "Performance" },
    ],
    Guides: [
      { path: "/en/docs/guides/cli", label: "CLI Commands" },
      { path: "/en/docs/guides/ssg", label: "SSG & Prerendering" },
      { path: "/en/docs/guides/api-routes", label: "API Routes" },
      { path: "/en/docs/guides/mdx", label: "MDX & Frontmatter" },
      { path: "/en/docs/guides/create-app", label: "Create Ryunix App" },
      { path: "/en/docs/guides/devtools", label: "DevTools" },
    ],
  },
  es: {
    Introducción: [
      { path: "/es/docs/introduction/getting-started", label: "Primeros pasos" },
      { path: "/es/docs/introduction/installation", label: "Instalación" },
      { path: "/es/docs/introduction/differences-with-react", label: "Diferencias con React" },
      { path: "/es/docs/introduction/about", label: "Acerca de" },
      { path: "/es/docs/introduction/project-structure", label: "Estructura del proyecto" },
      { path: "/es/docs/introduction/navigation", label: "Navegación" },
      { path: "/es/docs/introduction/css", label: "CSS" },
      { path: "/es/docs/introduction/deploying", label: "Despliegue" },
    ],
    API: [
      { path: "/es/docs/api/configuration", label: "Configuración" },
      { path: "/es/docs/api/components", label: "Componentes" },
      { path: "/es/docs/api/functions", label: "Funciones" },
      { path: "/es/docs/api/special-files", label: "Archivos especiales" },
    ],
    Core: [
      { path: "/es/docs/core/rendering", label: "Renderizado y SSR" },
      { path: "/es/docs/core/error-handling", label: "Manejo de errores" },
      { path: "/es/docs/core/server-actions", label: "Server Actions" },
      { path: "/es/docs/core/advanced-components", label: "Componentes avanzados" },
      { path: "/es/docs/core/performance", label: "Rendimiento" },
    ],
    Guías: [
      { path: "/es/docs/guides/cli", label: "Comandos CLI" },
      { path: "/es/docs/guides/ssg", label: "SSG y prerender" },
      { path: "/es/docs/guides/api-routes", label: "Rutas API" },
      { path: "/es/docs/guides/mdx", label: "MDX y frontmatter" },
      { path: "/es/docs/guides/create-app", label: "Create Ryunix App" },
      { path: "/es/docs/guides/devtools", label: "DevTools" },
    ],
  },
};

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
  const match = pathname.match(/^\/(en|es)(\/|$)/);
  return match ? match[1] : null;
}
