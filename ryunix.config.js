/** @type {import('@unsetsoft/ryunix-presets').RyunixUserConfig} */

const RyunixSettings = {
  rootDir: "src",
  ssr: true,
  mdx: true,
  favicon: true,
  buildDir: ".ryunix",
  legacy: {
    ssg: {
      sitemap: {
        enable: true,
        baseURL: "https://ryunixjs.vercel.app",
        settings: {
          changefreq: "weekly",
          priority: "0.7",
        },
      },
    },
  },
  eslint: {
    rules: {
      "no-unused-vars": "off",
      indent: "off",
    },
  },
  webpack: {
    production: false, // false = dev; set true before pnpm build / deploy (see README)
    resolve: {
      alias: {
        "@": "./src",
        "@/styles": "./src/styles",
        "@/components": "./src/components",
        "@/features": "./src/features",
        "@/i18n": "./src/i18n",
        "@/resources": "./src/resources",
      },
    },
  },
};

export default RyunixSettings;
