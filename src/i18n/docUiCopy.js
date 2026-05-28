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
        "This site keeps **locale-specific prose** under `src/app/en/` and `src/app/es/`, but centralizes shared data and snippets so EN/ES folders do not drift:",
      i18nItems: [
        "`src/i18n/packages.js` — npm names, `latest` / `canary` versions, install command builders",
        "`src/i18n/config.js` — sidebar routes per locale",
        "`src/i18n/docUiCopy.js` — labels for docs UI and install sections",
        "`src/features/marketing/siteCopy.js` — marketing shell strings",
        "`src/components/docs/*` — MDX building blocks (`CraQuickStart`, `ManualInstallTabs`, `NpmPackagesTable`)",
      ],
      i18nNote:
        "URLs still use `/en/docs/...` and `/es/docs/...` for SEO and routing; only duplicated **logic** moves to `src/i18n/` and shared components.",
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
        "Este sitio mantiene la **prosa por idioma** en `src/app/en/` y `src/app/es/`, pero centraliza datos y fragmentos compartidos para que las carpetas EN/ES no se desincronicen:",
      i18nItems: [
        "`src/i18n/packages.js` — nombres npm, versiones `latest` / `canary`, generadores de comandos de instalación",
        "`src/i18n/config.js` — rutas del sidebar por locale",
        "`src/i18n/docUiCopy.js` — etiquetas de la UI de docs y secciones de instalación",
        "`src/features/marketing/siteCopy.js` — textos del shell de marketing",
        "`src/components/docs/*` — bloques MDX (`CraQuickStart`, `ManualInstallTabs`, `NpmPackagesTable`)",
      ],
      i18nNote:
        "Las URLs siguen usando `/en/docs/...` y `/es/docs/...` por SEO y routing; solo la **lógica** duplicada vive en `src/i18n/` y componentes compartidos.",
    },
  },
};
