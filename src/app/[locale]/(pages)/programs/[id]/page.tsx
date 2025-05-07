import { getTypedMessages } from "@/lib/messages";
import { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";

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
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const {
    description,
    duration: duration_title,
    price: price_title,
  } = (await getTypedMessages()).programs.details;
  const product = (await getTypedMessages()).home.sections.programs.cards[
    id - 1
  ];
  const { name, full_description, duration, price } = product;

  return (
    <div className="relative overflow-hidden py-8 md:py-12 sm:py-24">
      <div className="absolute top-0 -z-10 size-full bg-[url(/polka-dot.svg)]" />
      <div className="relative mx-auto max-w-7xl p-6 lg:p-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <motion.h2
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mt-2 mb-6 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl"
              >
                {name}
              </motion.h2>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3">{description}</h3>
                <p className="text-lg text-gray-500 mb-4">{full_description}</p>
              </motion.div>
              <motion.div initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}>
                <h3 className="text-2xl font-semibold mb-3">
                  {duration_title}
                </h3>
                <p className="text-lg text-gray-500 mb-4">{duration}</p>
              </motion.div>
              <motion.div initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}>
                <h3 className="text-2xl font-semibold mb-3">{price_title}</h3>
                <p className="text-lg text-gray-500 mb-4">{price}</p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-fit my-auto"
          >
            <Image
              src="/abstract-svg/circles.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto -top-8 -right-8 -z-5"
            />
            <Image
              src={`/program-${id}.png`}
              alt="about image"
              width={500}
              height={500}
              priority
              className="size-full object-contain shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
