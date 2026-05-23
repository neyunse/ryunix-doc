
export default function robots() {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ryunixjs.unsetsoft.com/sitemap.xml",
  };
}