const BASE_URL = "https://ryunixjs.unsetsoft.com";

const docRoutes = [
  "/docs/introduction/getting-started",
  "/docs/introduction/installation",
  "/docs/introduction/differences-with-react",
  "/docs/introduction/about",
  "/docs/introduction/project-structure",
  "/docs/introduction/navigation",
  "/docs/introduction/css",
  "/docs/introduction/deploying",
  "/docs/api/configuration",
  "/docs/api/components",
  "/docs/api/functions",
  "/docs/api/special-files",
];

export default async function sitemap() {
  const docs = docRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...docs,
  ];
}