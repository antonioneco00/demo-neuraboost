import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function Testimonials() {
  const { title, description, clients } = (await getTypedMessages()).home
    .sections.testimonials;

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="/abstract-svg/testimonials-rays-left.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-auto top-40 left-0 -z-10"
      />
      <Image
        src="/abstract-svg/testimonials-rays-right.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-auto top-40 right-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 lg:max-w-6xl lg:grid-cols-3 gap-x-8"
      >
        {clients.map((client, id) => (
          <div
            key={client.name}
            className="relative flex h-full bg-background flex-col shadow-2xl p-8 ring-1 ring-gray-900/10 dark:ring-blue-400/40 sm:p-10"
          >
            <Image
              src="/abstract-svg/testimonial-card-tr.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto top-0 right-0"
            />
            <Image
              src="/abstract-svg/testimonial-card-br.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto bottom-0 right-0"
            />
            <Image
              src="/abstract-svg/testimonial-card-bl.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto bottom-0 left-0"
            />
            <p className="text-lg text-gray-500 font-sans mb-3">
              “{client.quote}”
            </p>
            <div className="flex pt-3 mt-auto border-t border-gray-900/10 dark:border-gray-100/30">
              <div className="relative self-center h-[50px] w-full max-w-[50px] mr-4 overflow-hidden rounded-full">
                <Image
                  src={`/testimonial-${id}.png`}
                  alt="Testimonio"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-blue-400 text-base/7 font-semibold">
                  {client.name}
                </h3>
                <p className="mt-0.5 text-base/7">{client.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
