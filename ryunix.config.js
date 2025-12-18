/** @type {import('@unsetsoft/ryunix-presets/config').Setting} */

const RyunixSettings = {
  experimental:{
    mdx: true,
    ssg: {
      sitemap: {
        enable: true, // active sitemap
        baseURL: "https://ryunixjs.unsetsoft.com",
        settings: {
          changefreq: "always",
          priority: 0.9,
        },
      },
    },
  },
  static: {
    favicon: true, // if is false the favicon is not mandatory
    customTemplate: true,
   
  },
  eslint:{
    rules: {
      "no-unused-vars": "off",
      "indent": "off"
    }
  },
  webpack: {
    production: true, // use 'false' for dev mode
    resolve: {
      alias: {
        "@/styles": "./src/styles",
        "@/components": "./src/components",
        "@/pages": "./src/pages"
      }
    },
    
  },
};

export default RyunixSettings;
