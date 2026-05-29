/**
 * Official CRA templates — metadata for the templates gallery.
 * Keep in sync with Ryunixjs/packages/cra/templates/ and create-app.ts flag logic.
 */

export const templateIds = [
  "ryunix-base",
  "ryunix-tailwind",
  "ryunix-eslint",
  "ryunix-all",
];

const PKG_MANAGERS = ["npm", "yarn", "bun", "pnpm"];

function craFlagsForTemplate(templateId) {
  switch (templateId) {
    case "ryunix-tailwind":
      return ["--tailwind"];
    case "ryunix-eslint":
      return ["--eslint"];
    case "ryunix-all":
      return ["--tailwind", "--eslint"];
    default:
      return [];
  }
}

function craTag(channel) {
  return channel === "canary" ? "@canary" : "";
}

/** Install command for a specific template (no cd/dev — card shows scaffold only). */
export function craTemplateScaffoldCommand(pkgManager, templateId, channel = "canary") {
  const flags = craFlagsForTemplate(templateId);
  const flagStr = flags.length ? ` ${flags.join(" ")}` : "";
  const tag = craTag(channel);
  const appName = "my-app";

  switch (pkgManager) {
    case "npm":
      return `npx @unsetsoft/cra${tag} ${appName}${flagStr}`;
    case "yarn":
      return `yarn create @unsetsoft/cra${tag ? "@canary" : ""} ${appName}${flagStr}`;
    case "bun":
      return `bun create @unsetsoft/cra${tag ? "@canary" : ""} ${appName}${flagStr}`;
    case "pnpm":
    default:
      return `pnpm create @unsetsoft/cra${tag ? "@canary" : ""} ${appName}${flagStr}`;
  }
}

export function craTemplateCommandTabs(templateId, channel = "canary") {
  return PKG_MANAGERS.map((name) => ({
    name,
    code: craTemplateScaffoldCommand(name, templateId, channel),
  }));
}

function devCommand(pkgManager) {
  switch (pkgManager) {
    case "npm":
      return "npm run dev";
    case "yarn":
      return "yarn dev";
    case "bun":
      return "bun run dev";
    case "pnpm":
    default:
      return "pnpm dev";
  }
}

/** Scaffold + cd + dev — one tab per package manager (detail pages). */
export function craTemplateWorkflowTabs(templateId, channel = "canary") {
  return PKG_MANAGERS.map((name) => ({
    name,
    code: [
      craTemplateScaffoldCommand(name, templateId, channel),
      "cd my-app",
      devCommand(name),
    ].join("\n"),
  }));
}

export const templatesCatalog = [
  {
    id: "ryunix-base",
    cliFlags: [],
    badgeKey: "default",
    accent: "blue",
    featureKeys: ["appRouter", "apiRoutes", "i18n", "ssg"],
    scriptKeys: ["dev", "start", "build"],
    structureKeys: [
      "appIndex",
      "appLocale",
      "appError",
      "apiHello",
      "styles",
      "i18nFiles",
      "ryunixConfig",
    ],
    ryunixConfig: `/** @type {import('@unsetsoft/ryunix-presets').RyunixUserConfig} */
const RyunixSettings = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeLabels: { en: 'English', es: 'Español' },
  },
}

export default RyunixSettings`,
    extraFiles: [],
  },
  {
    id: "ryunix-tailwind",
    cliFlags: ["--tailwind"],
    badgeKey: "styling",
    accent: "cyan",
    featureKeys: ["appRouter", "apiRoutes", "tailwind", "postcss", "ssg"],
    scriptKeys: ["dev", "start", "build"],
    structureKeys: [
      "appIndex",
      "appLayout",
      "appError",
      "apiHello",
      "styles",
      "tailwindConfig",
      "postcssConfig",
      "ryunixConfig",
    ],
    ryunixConfig: `/** @type {import('@unsetsoft/ryunix-presets').RyunixUserConfig} */
const RyunixSettings = {
  /** Tailwind owns base styles; enable \`style: true\` only if you want Ryunix semantic defaults too. */
  style: false,
}

export default RyunixSettings`,
    extraFiles: [
      {
        name: "tailwind.config.js",
        preview: `module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx,ryx}',
    './src/**/*.{js,jsx,ts,tsx,mdx,ryx}',
  ],
  theme: { extend: {} },
  plugins: [],
}`,
      },
    ],
  },
  {
    id: "ryunix-eslint",
    cliFlags: ["--eslint"],
    badgeKey: "quality",
    accent: "amber",
    featureKeys: ["appRouter", "apiRoutes", "eslint", "lintScripts", "ssg"],
    scriptKeys: ["dev", "start", "build", "lint", "lintFix"],
    structureKeys: [
      "appIndex",
      "appLayout",
      "appError",
      "apiHello",
      "styles",
      "eslintrc",
      "ryunixConfig",
    ],
    ryunixConfig: `/** @type {import('@unsetsoft/ryunix-presets').RyunixUserConfig} */
const RyunixSettings = {}

export default RyunixSettings`,
    extraFiles: [
      {
        name: ".eslintrc.json",
        preview: `{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}`,
      },
    ],
  },
  {
    id: "ryunix-all",
    cliFlags: ["--tailwind", "--eslint"],
    badgeKey: "fullStack",
    accent: "purple",
    featureKeys: [
      "appRouter",
      "apiRoutes",
      "tailwind",
      "postcss",
      "eslint",
      "lintScripts",
      "ssg",
    ],
    scriptKeys: ["dev", "start", "build", "lint", "lintFix"],
    structureKeys: [
      "appIndex",
      "appLayout",
      "appError",
      "apiHello",
      "styles",
      "tailwindConfig",
      "postcssConfig",
      "eslintrc",
      "ryunixConfig",
    ],
    ryunixConfig: `/** @type {import('@unsetsoft/ryunix-presets').RyunixUserConfig} */
const RyunixSettings = {
  style: false,
}

export default RyunixSettings`,
    extraFiles: [
      {
        name: "tailwind.config.js",
        preview: `module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx,ryx}', './src/**/*.{js,jsx,ts,tsx,mdx,ryx}'],
  theme: { extend: {} },
  plugins: [],
}`,
      },
      {
        name: ".eslintrc.json",
        preview: `{ "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"] }`,
      },
    ],
  },
];

export const templatesById = Object.fromEntries(
  templatesCatalog.map((t) => [t.id, t]),
);

export const craCliFlags = [
  { flag: "--canary", key: "canary" },
  { flag: "--latest", key: "latest" },
  { flag: "--tailwind", key: "tailwind" },
  { flag: "--eslint", key: "eslint" },
  { flag: "--vscode", key: "vscode" },
  { flag: "--compiler <swc|babel>", key: "compiler" },
];
