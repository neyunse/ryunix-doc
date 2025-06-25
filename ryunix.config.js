/** @type {import('@unsetsoft/ryunix-webpack/config').Setting} */

const RyunixSettings = {
  experimental: {
    ssg: {
      prerender: [
        {
          path: "/doc/introduction",
          meta: {
            title: "Introduction | Ryunix Doc"
          },
        },
        {
          path: "/doc/components",
          meta: {
            title: "Components | Ryunix Doc",
          },
        },
        {
          path: "/doc/styles",
          meta: {
            title: "Style & CSS | Ryunix Doc",
          },
        },
        {
          path: "/doc/components/built-in/image",
          meta: {
            title: "Image Component | Ryunix Doc",
          },
        },
        {
          path: "/doc/components/built-in/navigation",
          meta: {
            title: "Navigation | Ryunix Doc",
          },
        },
        {
          path: "/doc/api/hooks",
          meta: {
            title: "Hooks | Ryunix Doc",
          },
        },
      ],
    },
  },
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
