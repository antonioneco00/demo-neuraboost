import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: formatDate(new Date()),
      alternates: {
        languages: {
          es: `${baseUrl}/es/`,
          en: `${baseUrl}/en/`,
        },
      },
      changeFrequency: "monthly",
      priority: parseFloat((1.0).toFixed(1)),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: formatDate(new Date()),
      alternates: {
        languages: {
          es: `${baseUrl}/es/about`,
          en: `${baseUrl}/en/about`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: formatDate(new Date()),
      alternates: {
        languages: {
          es: `${baseUrl}/es/programs`,
          en: `${baseUrl}/en/programs`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: formatDate(new Date()),
      alternates: {
        languages: {
          es: `${baseUrl}/es/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: formatDate(new Date()),
      alternates: {
        languages: {
          es: `${baseUrl}/es/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
