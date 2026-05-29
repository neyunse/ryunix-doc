/** Textos de UI de documentación por locale (evita duplicar lógica en layouts y componentes). */
export const docUiCopy = {
  en: {
    prev: "Previous",
    next: "Next",
    install: {
      craHeading: "Using Create Ryunix App",
      craIntro:
        "The fastest way to get started is by scaffolding a new project automatically. Works with npm, yarn, bun, and pnpm:",
      manualHeading: "Package managers",
      manualIntro:
        "You can also install RyunixJS manually into an existing project. It works with all major package managers:",
      packagesHeading: "Published packages on npm",
      packagesIntro:
        "RyunixJS is split into focused packages. CRA resolves `latest` or `canary` tags from the registry when scaffolding.",
      channelStable: "Stable (`latest`)",
      channelCanary: "Canary (`canary`)",
      requirementsHeading: "Requirements",
      requirements: "Node.js **20**, **22**, or **24** (see `engines` in CRA templates)",
      packageRole: {
        runtime: "UI runtime (VDOM, hooks, SSR, JSX)",
        tooling: "CLI `ryunix`, Webpack, routing, SSG, API routes",
        scaffold: "Create Ryunix App (`npx @unsetsoft/cra`)",
        devtools: "Browser extension (Chromium, load unpacked from repo)",
        editor: "VS Code extension (Marketplace)",
      },
      devtoolsDistribution: "Distributed from the monorepo; load unpacked in Chrome.",
      vscodeDistribution: "Install from Visual Studio Marketplace, not npm.",
    },
    tech: {
      heading: "Toolchain in generated apps",
      intro: "Apps created with CRA typically use:",
      area: {
        bundler: "Bundler",
        transpile: "Transpilation",
        mdx: "MDX",
        styles: "Styles",
        runtime: "Runtime",
      },
    },
    mdx: {
      i18nHeading: "Bilingual docs without duplicated logic",
      i18nIntro:
        "This site uses a single app route tree under `src/app/[locale]/` with locale-specific prose in `src/content/docs/{locale}/`, and centralizes shared data and snippets so EN/ES content does not drift:",
      i18nItems: [
        "`src/i18n/packages.js` — npm names, `latest` / `canary` versions, install command builders",
        "`src/i18n/config.js` — sidebar routes per locale",
        "`src/i18n/docPageRegistry.js` — static MDX imports and `getDocPage(locale, slug)`",
        "`src/i18n/locale.js` — `pickLocale()` for shared locale records",
        "`src/i18n/docUiCopy.js` — labels for docs UI and install sections",
        "`src/features/docs/DocLocaleContext.tsx` — `useDocLocale()` / `useDocCopy()` inside MDX components",
        "`src/components/docs/*` — MDX building blocks (`CraQuickStart`, `ManualInstallTabs`, `NpmPackagesTable`)",
      ],
      i18nNote:
        "URLs still use `/en/docs/...` and `/es/docs/...` for SEO; the catch-all route `src/app/[locale]/docs/[...slug]/` renders the matching MDX from `src/content/docs/`.",
    },
  },
  es: {
    prev: "Anterior",
    next: "Siguiente",
    install: {
      craHeading: "Usar Create Ryunix App",
      craIntro:
        "La forma más rápida de empezar es generar un proyecto nuevo de forma automática. Funciona con npm, yarn, bun y pnpm:",
      manualHeading: "Gestores de paquetes",
      manualIntro:
        "También puedes instalar RyunixJS manualmente en un proyecto existente. Funciona con todos los gestores principales:",
      packagesHeading: "Paquetes publicados en npm",
      packagesIntro:
        "RyunixJS se divide en paquetes con responsabilidades claras. CRA resuelve las etiquetas `latest` o `canary` del registro al generar el proyecto.",
      channelStable: "Estable (`latest`)",
      channelCanary: "Canary (`canary`)",
      requirementsHeading: "Requisitos",
      requirements: "Node.js **20**, **22** o **24** (ver `engines` en las plantillas CRA)",
      packageRole: {
        runtime: "Runtime UI (VDOM, hooks, SSR, JSX)",
        tooling: "CLI `ryunix`, Webpack, routing, SSG, rutas API",
        scaffold: "Create Ryunix App (`npx @unsetsoft/cra`)",
        devtools: "Extensión de navegador (Chromium, cargar sin empaquetar desde el repo)",
        editor: "Extensión VS Code (Marketplace)",
      },
      devtoolsDistribution: "Se distribuye desde el monorepo; cargar sin empaquetar en Chrome.",
      vscodeDistribution: "Instalar desde Visual Studio Marketplace, no desde npm.",
    },
    tech: {
      heading: "Toolchain en apps generadas",
      intro: "Las apps creadas con CRA suelen usar:",
      area: {
        bundler: "Bundler",
        transpile: "Transpilación",
        mdx: "MDX",
        styles: "Estilos",
        runtime: "Runtime",
      },
    },
    mdx: {
      i18nHeading: "Documentación bilingüe sin lógica duplicada",
      i18nIntro:
        "Este sitio usa un único árbol de rutas en `src/app/[locale]/` con la prosa por idioma en `src/content/docs/{locale}/`, y centraliza datos y fragmentos compartidos para que el contenido EN/ES no se desincronice:",
      i18nItems: [
        "`src/i18n/packages.js` — nombres npm, versiones `latest` / `canary`, generadores de comandos de instalación",
        "`src/i18n/config.js` — rutas del sidebar por locale",
        "`src/i18n/docPageRegistry.js` — imports estáticos de MDX y `getDocPage(locale, slug)`",
        "`src/i18n/locale.js` — `pickLocale()` para registros por locale",
        "`src/i18n/docUiCopy.js` — etiquetas de la UI de docs y secciones de instalación",
        "`src/features/docs/DocLocaleContext.tsx` — `useDocLocale()` / `useDocCopy()` en componentes MDX",
        "`src/components/docs/*` — bloques MDX (`CraQuickStart`, `ManualInstallTabs`, `NpmPackagesTable`)",
      ],
      i18nNote:
        "Las URLs siguen usando `/en/docs/...` y `/es/docs/...` por SEO; la ruta catch-all `src/app/[locale]/docs/[...slug]/` renderiza el MDX correspondiente en `src/content/docs/`.",
    },
  },
};
