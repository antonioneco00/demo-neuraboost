import FeatureSection from "@/components/home/FeatureSection";
import FactsSection from "@/components/home/FactsSection";
import GridSection from "@/components/home/GridSection";
import CarouselSection from "@/components/home/CarouselSection";
import PricingSection from "@/components/home/PricingSection";
import ProductsSection from "@/components/home/ProductsSection";
import HeroSection from "@/components/home/HeroSection";
import LogoClouds from "@/components/home/LogoClouds";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";
// import HeroSectionImageRight from "@/components/home/HeroSectionImageRight";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = (await getTypedMessages()).home.metadata;

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

export default async function Home() {
  return (
    <main>
      <HeroSection />
      {/* <HeroSectionImageRight /> */}
      <FeatureSection />
      <FactsSection />
      <LogoClouds />
      <GridSection />
      <CarouselSection />
      <PricingSection />
      <ProductsSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
