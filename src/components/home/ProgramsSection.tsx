import { Link } from "@/i18n/navigation";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

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
        className="absolute size-auto top-0 left-0"
      />
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-blue-500">
          {optional_text}
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {description}
      </p>
      <div className="w-fit mx-auto mt-16 grid sm:max-w-2xl grid-cols-1 items-center gap-y-8 sm:mt-20 lg:max-w-7xl sm:grid-cols-3 gap-x-8">
        {cards.map((card, key) => (
          <div
            key={key}
            className="relative flex max-w-[500] flex-col shadow-2xl ring-1 ring-gray-900/10 dark:ring-blue-400/40 overflow-hidden"
          >
            <Image
              src="/abstract-svg/program-card.svg"
              alt="abstract corner image"
              width={0}
              height={0}
              className="absolute size-auto bottom-0 right-0"
            />
            <Image
              src={`/program-${key + 1}.png`}
              alt="about image"
              width={500}
              height={500}
              className="drop-shadow-three"
            />
            <div className="p-6">
              <Link
                href={`/programs/${key + 1}`}
                className="text-blue-400 text-xl font-semibold"
              >
                {card.name}
              </Link>
              <p className="mt-2 text-base/7">{card.description}</p>
              <p className="mt-2 flex items-baseline gap-x-2 text-lg font-semibold">
                {card.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
