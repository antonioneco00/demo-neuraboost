import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

export default function mysites(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/programs", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path === "/" ? "" : route.path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${baseUrl}/${altLocale}${route.path === "/" ? "" : route.path}`,
          ])
        ),
      },
    }))
  );
}
