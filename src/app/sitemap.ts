import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return [
    // Página principal
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          de: `${baseUrl}/de`,
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
          de: `${baseUrl}/de/about`,
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
          de: `${baseUrl}/de/programs`,
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
          de: `${baseUrl}/de/blog`,
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
          de: `${baseUrl}/de/contact`,
        },
      },
    },
  ];
}
