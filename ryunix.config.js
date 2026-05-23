/** @type {import('@unsetsoft/ryunix-presets/config').Setting} */

const RyunixSettings = {
  experimental:{
    mdx: true,
    ssr: true,
  },
  static: {
    favicon: true, // if is false the favicon is not mandatory
  },
  eslint:{
    rules: {
      "no-unused-vars": "off",
      "indent": "off"
    }
  },
  webpack: {
    production: false, // false = dev; true = prod
    resolve: {
      alias: {
        "@/styles": "./app/styles",
        "@/components": "./app/components",
        "@/resources": "./app/resources"
      }
    },
    
  },
};

export default RyunixSettings;
