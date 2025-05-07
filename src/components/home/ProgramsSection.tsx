import { Link } from "@/i18n/navigation";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function ProgramsSection() {
  const { optional_text, title, description, cards } = (
    await getTypedMessages()
  ).home.sections.programs;

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="programs">
      <Image
        src="/abstract-svg/programs-wave-top.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-auto top-0 left-0 -z-10"
      />
      <Image
        src="/abstract-svg/programs-wave-bottom.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-auto bottom-0 right-0 -z-10"
      />
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base/7 font-semibold text-blue-500"
        >
          {optional_text}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          {title}
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
      >
        {description}
      </motion.p>
      <div className="w-fit mx-auto mt-16 grid sm:max-w-2xl grid-cols-1 items-center gap-y-8 sm:mt-20 lg:max-w-7xl lg:grid-cols-3 gap-x-8">
        {cards.map((card, key) => (
          <motion.div
            key={key}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * key }}
            className="relative bg-background h-full flex max-w-[500] flex-col shadow-2xl ring-1 ring-gray-900/10 dark:ring-blue-400/40 overflow-hidden"
          >
            <Image
              src="/abstract-svg/program-card.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto bottom-0 right-0"
            />
            <Link href={`/programs/${key + 1}`}>
              <Image
                src={`/program-${key + 1}.png`}
                alt="about image"
                width={500}
                height={500}
                className="drop-shadow-three"
              />
            </Link>
            <div className="p-6">
              <Link
                href={`/programs/${key + 1}`}
                className="text-blue-400 text-xl font-semibold"
              >
                {card.name}
              </Link>
              <p className="mt-2 text-base/7">{card.description}</p>
              <p className="mt-2 flex items-baseline gap-x-2 text-lg font-semibold">
                {card.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
