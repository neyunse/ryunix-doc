/** @type {import('@unsetsoft/ryunix-webpack/config').Setting} */

const RyunixSettings = {
  experimental: {
    ssg: {
      baseURL: "https://ryunixjs.unsetsoft.com",
      sitemap: true,
      sitemap_settings:{
        priority: 0.9,
        changefreq: "always"
      },
      prerender: [
        {
          path: "/", // just for the sitemap
          meta:{
            priority: 1.0
          }
        },
        {
          path: "/doc/introduction",
          meta: {
            title: "Introduction | Ryunix Doc",
            description:
              "Get started with RyunixJS, a alternative to ReactJS, Preact & NextJS.",
            keywords:
              "RyunixJS, ReactJS alternative, JS Framework, Introduction | Ryunix Doc",
            "og:title": "Introduction | RyunixJS",
            "og:description":
              "Get started with RyunixJS, a alternative to ReactJS, Preact & NextJS.",
            "og:url": "https://ryunixjs.unsetsoft.com/doc/introduction",
            "og:type": "article",
          },
        },
        {
          path: "/doc/components",
          meta: {
            title: "Components | Ryunix Doc",
            description: "Learn how components work in RyunixJS.",
            keywords:
              "RyunixJS, ReactJS alternative, JS Framework, Components | Ryunix Doc",
            "og:title": "Components | RyunixJS",
            "og:description": "Learn how components work in RyunixJS.",
            "og:url": "https://ryunixjs.unsetsoft.com/doc/components",
            "og:type": "article",
          },
        },
        {
          path: "/doc/styles",
          meta: {
            title: "Style & CSS | Ryunix Doc",
            description: "Learn how to apply styles in RyunixJS",
            keywords:
              "RyunixJS, ReactJS alternative, JS Framework, Style & CSS | Ryunix Doc",
            "og:title": "Style & CSS | RyunixJS",
            "og:description": "Learn how to apply styles in RyunixJS",
            "og:url": "https://ryunixjs.unsetsoft.com/doc/styles",
            "og:type": "article",
          },
        },
        {
          path: "/doc/components/built-in/image",
          meta: {
            title: "Image Component | Ryunix Doc",
            description:
              "Learn how to use the custom component Image in RyunixJS",
            keywords:
              "RyunixJS, ReactJS alternative, JS Framework, Image Component | Ryunix Doc",
            "og:title": "Image Component | RyunixJS",
            "og:description":
              "Learn how to use the custom component Image in RyunixJS",
            "og:url":
              "https://ryunixjs.unsetsoft.com/doc/components/built-in/image",
            "og:type": "article",
          },
        },
        {
          path: "/doc/components/built-in/navigation",
          meta: {
            title: "Navigation | Ryunix Doc",
            description: "Learn how to include Dynamic routing in RyunixJS",
            keywords:
              "RyunixJS, ReactJS alternative, JS Framework, Navigation | Ryunix Doc",
            "og:title": "Navigation | RyunixJS",
            "og:description":
              "Learn how to include Dynamic routing in RyunixJS",
            "og:url":
              "https://ryunixjs.unsetsoft.com/doc/components/built-in/navigation",
            "og:type": "article",
          },
        },
        {
          path: "/doc/api/hooks",
          meta: {
            title: "Hooks | Ryunix Doc",
            description:
              "Explore available hooks in RyunixJS like useStore, useEffect, and useRouter.",
            keywords:
              "RyunixJS, Hooks, Framework, ReactJS alternative, JS Framework",
            "og:title": "Hooks API | RyunixJS",
            "og:description":
              "Explore available hooks in RyunixJS like useStore, useEffect, and useRouter.",
            "og:url": "https://ryunixjs.unsetsoft.com/doc/api/hooks",
            "og:type": "article",
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
          "ReactJS, react, Next.js, nextjs, next, RyunixJS, ryunix, ryunix.js, Ryunix.JS, JS Framework, JavaScript Framework",
      },
    },
  },
  webpack: {
    production: true, // use 'false' for dev mode
  },
};

export default RyunixSettings;
