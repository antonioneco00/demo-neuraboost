import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";
import * as motion from "motion/react-client";

const sponsors = [
  {
    id: 1,
    spanClasses: "lg:col-span-1",
  },
  {
    id: 2,
    spanClasses: "lg:col-span-1",
  },
  {
    id: 3,
    spanClasses: "sm:col-span-2 lg:col-span-1",
  },
] as const;

export default async function LogoClouds() {
  const title = await (await getTypedMessages()).home.sections.logo_clouds;

  return (
    <div className="bg-linear-120 from-background to-blue-50 dark:to-blue-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl p-6 rounded-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg/8 font-semibold"
        >
          {title}
        </motion.h2>
        <div
          className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.1 * sponsor.id }}
            >
              <Image
                alt="Sponsor"
                src={`/sponsor-${sponsor.id}.svg`}
                width={0}
                height={0}
                className={`h-12 w-auto mx-auto object-contain ${sponsor.spanClasses} block dark:hidden`}
              />
              <Image
                alt="Sponsor"
                src={`/sponsor-${sponsor.id}-white.svg`}
                width={0}
                height={0}
                className={`h-12 w-auto mx-auto object-contain ${sponsor.spanClasses} hidden dark:block`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
