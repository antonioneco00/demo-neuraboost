import ProductsSection from "@/components/home/ProductsSection";
import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = (await getTypedMessages()).products.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale,
      alternateLocale: ["en", "es"].filter((loc) => loc !== locale),
    },
  };
}

export default async function Products() {
  return <ProductsSection />;
}
