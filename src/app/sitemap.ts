import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return [
    // Página principal
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/about`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    // Programs
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/programs`,
          en: `${baseUrl}/en/programs`,
        },
      },
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    // Contact
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    },
  ];
}
