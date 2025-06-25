/** @type {import('@unsetsoft/ryunix-webpack/config').Setting} */

const RyunixSettings = {
  static: {
    favicon: true, // if is false the favicon is not mandatory
    seo: {
      title: "Ryunix Doc", // include a default title
      meta: {
        description:
          "Official RyunixJS documentation an alternative to ReactJs framework",
        keywords:
          "ReactJS, react, Next.js, nextjs, next, RyunixJS, ryunix, ryunix.js, Ryunix.JS",
      },
    },
  },
  webpack: {
    production: true, // use 'false' for dev mode
  },
};

export default RyunixSettings;
