import type { RyunixUserConfig } from "@unsetsoft/ryunix-presets";
import { docI18nSettings } from "./src/i18n/settings";

const RyunixSettings: RyunixUserConfig = {
  rootDir: "src",
  i18n: docI18nSettings,
  ssr: true,
  mdx: true,
  favicon: true,
  buildDir: ".ryunix",
  hydration: {
    recover: "boundary",
    boundaries: "route",
    strict: false,
  },
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
    production: false,
    resolve: {
      alias: {
        "@": "./src",
        "@/styles": "./src/styles",
        "@/components": "./src/components",
        "@/features": "./src/features",
        "@/i18n": "./src/i18n",
        "@/resources": "./src/resources",
        "@/lib": "./src/lib",
      },
    },
  },
};

export default RyunixSettings;
