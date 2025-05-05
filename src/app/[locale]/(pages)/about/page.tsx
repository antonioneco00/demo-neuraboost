import { Metadata } from "next";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = (await getTypedMessages()).about.metadata;

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

export default async function About() {
  const { h1_title, description, mission, mission_description, team } = (
    await getTypedMessages()
  ).about;

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 -z-10 size-full bg-[url(/abstract-svg/grid.svg)] dark:bg-[url(/abstract-svg/grid-dark.svg)]" />
      <div className="absolute top-0 left-0 size-full -z-5 bg-radial from-background from-80% sm:from-75% md:from-70% lg:from-65% xl:from-60% to-transparent" />
      <div className="flex flex-col mx-auto max-w-7xl text-center px-6 lg:px-8">
        <div className="lg:pr-8 mx-auto mb-16">
          <div className="lg:max-w-lg">
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              {h1_title}
            </h1>
            <p className="mt-6 text-2xl text-gray-500">{description}</p>
          </div>
        </div>
        <Image
          src="/about-image.png"
          alt="about image"
          width={1024}
          height={1024}
          className="w-auto h-auto object-contain drop-shadow-three rounded-2xl my-auto z-10"
        />
        <div className="lg:pr-8 mx-auto mb-16">
          <div className="lg:max-w-lg">
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              {mission}
            </h2>
            <p className="mt-6 text-2xl text-gray-500">{mission_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
