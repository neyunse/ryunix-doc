/** @type {import('@unsetsoft/ryunix-presets/config').Setting} */

const RyunixSettings = {
  rootDir: "src",
  static: {
    favicon: true, // if is false the favicon is not mandatory
    customTemplate: "./public/index.html",
  },
  experimental: {
    mdx: true,
    ssr: true,
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
