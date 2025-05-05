import FeatureSection from "@/components/home/FeatureSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import LogoClouds from "@/components/home/LogoClouds";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

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
      <FeatureSection />
      <LogoClouds />
      <ProgramsSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
