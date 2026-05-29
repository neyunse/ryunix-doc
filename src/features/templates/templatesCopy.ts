export const templatesCopy = {
  en: {
    meta: {
      title: "Templates",
      description:
        "Browse official Create Ryunix App templates — scaffold commands, ryunix.config.js defaults, and project structure.",
    },
    hero: {
      eyebrow: "Create Ryunix App",
      title: "Official project templates",
      body:
        "Pick a starting point for your app. Each template is copied verbatim from the CRA package; combine CLI flags for Tailwind, ESLint, VS Code settings, and compiler choice.",
      docsLink: "Create app guide",
    },
    overview: {
      title: "Choose a template",
      body: "The CLI selects the folder based on --tailwind and --eslint. Default with no flags is ryunix-base. Open a template to see commands, config defaults, and project structure.",
    },
    gallery: {
      viewDetails: "View template",
    },
    detail: {
      breadcrumbGallery: "Templates",
      workflowTitle: "Quick start",
      workflowBody: "Scaffold the project, enter the folder, and start the dev server.",
      relatedTitle: "Other templates",
    },
    card: {
      scaffoldLabel: "Scaffold",
      configLabel: "ryunix.config.js",
      structureLabel: "Included paths",
      scriptsLabel: "package.json scripts",
      extraFilesLabel: "Also ships",
      copyConfig: "Copy config",
      noFlags: "Default (no flags)",
    },
    flags: {
      title: "CLI flags",
      body: "Pass these to @unsetsoft/cra to skip prompts or add tooling on top of any template.",
      flag: "Flag",
      description: "Description",
    },
    flagDescriptions: {
      canary: "Resolve @unsetsoft/ryunixjs and ryunix-presets from the canary dist-tag",
      latest: "Use the latest stable channel (default)",
      tailwind: "Use ryunix-tailwind or ryunix-all (PostCSS + Tailwind 4)",
      eslint: "Use ryunix-eslint or ryunix-all (ESLint + lint scripts)",
      vscode: "Write .vscode/ with Ryunix + ESLint recommendations (optional on any template)",
      compiler: "Set compiler in ryunix.config.js (swc default, babel optional)",
    },
    templates: {
      "ryunix-base": {
        title: "ryunix-base",
        description:
          "Minimal App Router app with bilingual routing (en/es), sample API route, and i18n wired in ryunix.config.js.",
        longDescription:
          "The default starter when you run Create Ryunix App without flags. Includes locale-aware routes under app/[locale], a sample API handler, global styles, and i18n defaults in ryunix.config.js — ideal for learning the framework or building content sites.",
      },
      "ryunix-tailwind": {
        title: "ryunix-tailwind",
        description:
          "Base app plus Tailwind CSS 4, PostCSS, and style: false so utility classes own the design system.",
        longDescription:
          "Same App Router foundation as ryunix-base, extended with Tailwind CSS 4 and PostCSS. Ryunix semantic styles are disabled (style: false) so your utility-first setup stays predictable. Ships tailwind.config.js scoped to .ryx and MDX files.",
      },
      "ryunix-eslint": {
        title: "ryunix-eslint",
        description:
          "Base layout with ESLint (React + hooks plugins) and ryunix lint / lint:fix scripts in package.json.",
        longDescription:
          "Production-oriented layout with ESLint (React + hooks), .eslintrc.json, and package.json scripts wired to ryunix lint. Use this when code quality gates matter from day one without adding Tailwind.",
      },
      "ryunix-all": {
        title: "ryunix-all",
        description:
          "Full starter: App Router, Tailwind 4, ESLint, and lint scripts — best when you want both styling and quality gates.",
        longDescription:
          "Combines ryunix-tailwind and ryunix-eslint: Tailwind 4, PostCSS, ESLint, and lint scripts in one scaffold. Best default for teams that want styling utilities and linting without composing flags manually.",
      },
    },
    badges: {
      default: "Default",
      styling: "Styling",
      quality: "Linting",
      fullStack: "Full stack",
    },
    features: {
      appRouter: "App Router",
      apiRoutes: "API routes",
      i18n: "i18n (en / es)",
      ssg: "SSG-ready",
      tailwind: "Tailwind CSS 4",
      postcss: "PostCSS",
      eslint: "ESLint",
      lintScripts: "lint scripts",
    },
    scripts: {
      dev: "ryunix dev",
      start: "ryunix start",
      build: "ryunix build",
      lint: "ryunix lint",
      lintFix: "ryunix lint --fix",
    },
    structure: {
      appIndex: "app/index",
      appLayout: "app/layout",
      appLocale: "app/[locale]/ (index + layout)",
      appError: "app/error",
      apiHello: "app/api/hello/router.js",
      styles: "styles/global.css",
      i18nFiles: "i18n.js, messages/",
      tailwindConfig: "tailwind.config.js",
      postcssConfig: "postcss.config.js",
      eslintrc: ".eslintrc.json",
      ryunixConfig: "ryunix.config.js",
    },
  },
  es: {
    meta: {
      title: "Plantillas",
      description:
        "Plantillas oficiales de Create Ryunix App — comandos de scaffolding, ryunix.config.js por defecto y estructura del proyecto.",
    },
    hero: {
      eyebrow: "Create Ryunix App",
      title: "Plantillas oficiales de proyecto",
      body:
        "Elige un punto de partida. Cada plantilla se copia tal cual desde el paquete CRA; combina flags de CLI para Tailwind, ESLint, ajustes de VS Code y el compilador.",
      docsLink: "Guía create app",
    },
    overview: {
      title: "Elige una plantilla",
      body: "El CLI elige la carpeta según --tailwind y --eslint. Sin flags, se usa ryunix-base. Abre una plantilla para ver comandos, config por defecto y estructura del proyecto.",
    },
    gallery: {
      viewDetails: "Ver plantilla",
    },
    detail: {
      breadcrumbGallery: "Plantillas",
      workflowTitle: "Inicio rápido",
      workflowBody: "Genera el proyecto, entra en la carpeta y arranca el servidor de desarrollo.",
      relatedTitle: "Otras plantillas",
    },
    card: {
      scaffoldLabel: "Scaffold",
      configLabel: "ryunix.config.js",
      structureLabel: "Rutas incluidas",
      scriptsLabel: "Scripts en package.json",
      extraFilesLabel: "También incluye",
      copyConfig: "Copiar config",
      noFlags: "Por defecto (sin flags)",
    },
    flags: {
      title: "Flags del CLI",
      body: "Pásalos a @unsetsoft/cra para omitir prompts o añadir herramientas sobre cualquier plantilla.",
      flag: "Flag",
      description: "Descripción",
    },
    flagDescriptions: {
      canary: "Resuelve @unsetsoft/ryunixjs y ryunix-presets desde el dist-tag canary",
      latest: "Usa el canal estable latest (por defecto)",
      tailwind: "Usa ryunix-tailwind o ryunix-all (PostCSS + Tailwind 4)",
      eslint: "Usa ryunix-eslint o ryunix-all (ESLint + scripts lint)",
      vscode: "Escribe .vscode/ con extensiones recomendadas (opcional en cualquier plantilla)",
      compiler: "Define compiler en ryunix.config.js (swc por defecto, babel opcional)",
    },
    templates: {
      "ryunix-base": {
        title: "ryunix-base",
        description:
          "App Router mínima con rutas bilingües (en/es), ruta API de ejemplo e i18n en ryunix.config.js.",
        longDescription:
          "Starter por defecto al ejecutar Create Ryunix App sin flags. Incluye rutas con locale en app/[locale], un handler API de ejemplo, estilos globales e i18n en ryunix.config.js — ideal para aprender el framework o sitios con contenido.",
      },
      "ryunix-eslint": {
        title: "ryunix-eslint",
        description:
          "Layout base con ESLint (plugins React y hooks) y scripts ryunix lint / lint:fix en package.json.",
        longDescription:
          "Layout orientado a producción con ESLint (React + hooks), .eslintrc.json y scripts en package.json conectados a ryunix lint. Úsalo cuando quieras calidad de código desde el primer día sin añadir Tailwind.",
      },
      "ryunix-tailwind": {
        title: "ryunix-tailwind",
        description:
          "App base con Tailwind CSS 4, PostCSS y style: false para que las utilidades dominen el diseño.",
        longDescription:
          "La misma base App Router que ryunix-base, con Tailwind CSS 4 y PostCSS. Los estilos semánticos de Ryunix están desactivados (style: false). Incluye tailwind.config.js con scope para .ryx y MDX.",
      },
      "ryunix-all": {
        title: "ryunix-all",
        description:
          "Starter completo: App Router, Tailwind 4, ESLint y scripts lint — ideal si quieres estilos y calidad de código.",
        longDescription:
          "Combina ryunix-tailwind y ryunix-eslint: Tailwind 4, PostCSS, ESLint y scripts lint en un solo scaffold. Mejor opción para equipos que quieren utilidades de estilo y linting sin combinar flags a mano.",
      },
    },
    badges: {
      default: "Por defecto",
      styling: "Estilos",
      quality: "Linting",
      fullStack: "Completa",
    },
    features: {
      appRouter: "App Router",
      apiRoutes: "Rutas API",
      i18n: "i18n (en / es)",
      ssg: "Listo para SSG",
      tailwind: "Tailwind CSS 4",
      postcss: "PostCSS",
      eslint: "ESLint",
      lintScripts: "scripts lint",
    },
    scripts: {
      dev: "ryunix dev",
      start: "ryunix start",
      build: "ryunix build",
      lint: "ryunix lint",
      lintFix: "ryunix lint --fix",
    },
    structure: {
      appIndex: "app/index",
      appLayout: "app/layout",
      appLocale: "app/[locale]/ (index + layout)",
      appError: "app/error",
      apiHello: "app/api/hello/router.js",
      styles: "styles/global.css",
      i18nFiles: "i18n.js, messages/",
      tailwindConfig: "tailwind.config.js",
      postcssConfig: "postcss.config.js",
      eslintrc: ".eslintrc.json",
      ryunixConfig: "ryunix.config.js",
    },
  },
};
