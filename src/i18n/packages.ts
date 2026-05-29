/**
 * Fuente única de versiones y metadatos de paquetes @unsetsoft en npm.
 * Actualizar aquí al publicar; los MDX importan estos valores vía componentes en src/components/docs/.
 */
export const npmPackages = {
  ryunixjs: {
    name: "@unsetsoft/ryunixjs",
    roleKey: "runtime",
    latest: "1.2.4",
    canary: "1.2.5-canary.12",
    npm: "https://www.npmjs.com/package/@unsetsoft/ryunixjs",
  },
  presets: {
    name: "@unsetsoft/ryunix-presets",
    roleKey: "tooling",
    latest: "1.0.25",
    canary: "1.0.26-canary.43",
    npm: "https://www.npmjs.com/package/@unsetsoft/ryunix-presets",
  },
  cra: {
    name: "@unsetsoft/cra",
    roleKey: "scaffold",
    latest: "1.1.19",
    canary: "1.1.20-canary.14",
    npm: "https://www.npmjs.com/package/@unsetsoft/cra",
  },
  devtools: {
    name: "@unsetsoft/ryunix-devtools",
    roleKey: "devtools",
    latest: "1.3.1",
    canary: null,
    npm: null,
    noteKey: "devtoolsDistribution",
  },
  vscode: {
    name: "unsetsoft.ryunixjs",
    roleKey: "editor",
    latest: "1.1.3",
    canary: null,
    marketplace: "https://marketplace.visualstudio.com/items?itemName=unsetsoft.ryunixjs",
    noteKey: "vscodeDistribution",
  },
};

export const techStack = [
  { areaKey: "bundler", items: ["Webpack 5", "webpack-dev-server"] },
  { areaKey: "transpile", items: ["SWC (default)", "Babel 7"] },
  { areaKey: "mdx", items: ["@mdx-js/loader", "remark / rehype"] },
  { areaKey: "styles", items: ["PostCSS", "Sass", "Tailwind 4 (plantillas opcionales)"] },
  { areaKey: "runtime", items: ["JavaScript plano", "JSX runtime propio", "sin dependencias de producción en el core"] },
];

export function craInstallCommand(pkgManager: string, channel = "canary") {
  const tag = channel === "canary" ? "@canary" : "";
  const devScript =
    pkgManager === "yarn" ? "yarn dev" : pkgManager === "bun" ? "bun run dev" : `${pkgManager} run dev`;
  switch (pkgManager) {
    case "npm":
      return `npx @unsetsoft/cra${tag} my-app\ncd my-app\nnpm run dev`;
    case "yarn":
      return `yarn create @unsetsoft/cra${tag ? "@canary" : ""} my-app\ncd my-app\n${devScript}`;
    case "bun":
      return `bun create @unsetsoft/cra${tag ? "@canary" : ""} my-app\ncd my-app\n${devScript}`;
    case "pnpm":
    default:
      return `pnpm create @unsetsoft/cra${tag ? "@canary" : ""} my-app\ncd my-app\n${devScript}`;
  }
}

export function manualInstallCommand(pkgManager: string, channel = "canary") {
  const tag = channel === "canary" ? "@canary" : "";
  const pkgs = `@unsetsoft/ryunixjs${tag} @unsetsoft/ryunix-presets${tag}`;
  switch (pkgManager) {
    case "npm":
      return `npm install ${pkgs}`;
    case "yarn":
      return `yarn add ${pkgs}`;
    case "bun":
      return `bun add ${pkgs}`;
    case "pnpm":
    default:
      return `pnpm add ${pkgs}`;
  }
}
