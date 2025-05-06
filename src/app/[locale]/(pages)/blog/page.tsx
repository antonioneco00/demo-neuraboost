import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = (await getTypedMessages()).blog.metadata;

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

export default async function Blog() {
  const { optional_text, h1_title, description, cards } = (
    await getTypedMessages()
  ).blog;

  return (
    <div className="relative bg-linear-0 from-background to-blue-50 dark:to-gray-950 isolate px-6 py-24 sm:py-32 lg:px-8" id="blog">
      <Image
        src="/abstract-svg/blog-corner-left.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-40 sm:size-60 lg:size-auto top-0 left-0 -z-10"
      />
      <Image
        src="/abstract-svg/blog-corner.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-40 sm:size-60 lg:size-auto top-0 right-0 -z-10"
      />
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-blue-500">
          {optional_text}
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {h1_title}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {description}
      </p>
      <div className="w-fit mx-auto mt-16 grid sm:max-w-2xl grid-cols-1 items-center gap-y-8 sm:mt-20 lg:max-w-7xl lg:grid-cols-3 gap-x-8">
        {cards.map((card, key) => (
          <div
            key={key}
            className="relative bg-background h-full flex max-w-[500] flex-col shadow-2xl ring-1 ring-gray-900/10 dark:ring-blue-400/40 overflow-hidden"
          >
            <Image
              src="/abstract-svg/blog-card.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto bottom-0 right-0"
            />
            <a href="#">
              <Image
                src={`/blog-${key + 1}.png`}
                alt="about image"
                width={500}
                height={500}
                className="drop-shadow-three"
              />
            </a>
            <div className="h-full flex flex-col p-6 pt-4">
              <p className="mb-2 flex items-baseline gap-x-2 text-sm text-gray-500">
                <span>{card.date}</span>
                <a
                  href="#"
                  className="relative rounded-full bg-blue-50 dark:bg-blue-950 px-3 py-1.5 ml-auto font-medium text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  {card.slug}
                </a>
              </p>
              <a
                href="#"
                className="text-blue-400 text-xl font-semibold"
              >
                {card.name}
              </a>
              <p className="mt-2 text-base/7">{card.description}</p>
              <p className="mt-auto flex items-baseline gap-x-2 text-gray-500">{card.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
