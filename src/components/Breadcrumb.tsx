"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Messages } from "@/types";
import { useMessages } from "next-intl";

// Define recursive type for nested messages
type NestedMessages = {
  title?: string;
  [key: string]: string | NestedMessages | undefined;
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  type BreadcrumbMessages = Omit<Messages, "components">;
  const messages = useMessages() as BreadcrumbMessages;
  const firstSegment = segments[0] as keyof typeof messages;

  const breadcrumbItems: { label: string; path: string }[] = [];
  let currentLevel = messages as unknown as NestedMessages;
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;

    if (
      currentLevel?.[segment] &&
      typeof currentLevel[segment] === "object" &&
      "title" in currentLevel[segment]!
    ) {
      // Si el segmento tiene title en el nivel actual (traducido)
      const level = currentLevel[segment] as NestedMessages;
      breadcrumbItems.push({
        label: level.title!,
        path: currentPath,
      });
      currentLevel = level;
    } else {
      // Si no tiene traducción (ID, slug, etc.)
      breadcrumbItems.push({
        label: segment,
        path: currentPath,
      });
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        {messages[firstSegment].title}
      </h1>
      <div className="inline-flex mt-8 text-lg font-medium font-sans text-pretty text-gray-500">
        <Link href="/" className="text-blue-400">
          {messages.home.title}
        </Link>
        {breadcrumbItems.map((item, index) => (
          <div key={index}>
            <span className="mx-2">&gt;</span>
            {index === breadcrumbItems.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.path} className="text-blue-400">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
