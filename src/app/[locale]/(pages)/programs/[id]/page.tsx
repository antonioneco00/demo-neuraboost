import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = (await getTypedMessages()).programs.details
    .metadata;

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

export default async function ProgramDetails({
  params,
}: {
  params: Promise<{ locale: string; id: number }>;
}) {
  const { locale, id } = await params;
  const product = (await getTypedMessages()).home.sections.programs.cards[
    id - 1
  ];
  const { name, full_description, duration, price } = product;

  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                {name}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">
                {locale === "en" ? "Description: " : "Descripción: "}
                {full_description}
              </p>
              <p className="mt-6 text-lg/8 text-gray-500">
                {locale === "en" ? "Duration: " : "Duración: "} {duration}
              </p>
              <p className="mt-6 text-lg/8 text-gray-500">
                {locale === "en" ? "Price: " : "Precio: "} {price}
              </p>
            </div>
          </div>
          <Image
            src={`/program-${id}.png`}
            alt="about image"
            width={500}
            height={500}
            className="h-auto w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
