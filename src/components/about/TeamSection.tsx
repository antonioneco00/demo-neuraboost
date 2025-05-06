import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function TeamSection() {
  const { title, cards } = (await getTypedMessages()).about.team;

  return (
    <div className="relative isolate px-6 py-12 lg:px-8" id="team">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </h2>
      </div>
      <div className="w-fit mx-auto mt-16 grid sm:max-w-2xl grid-cols-1 items-center gap-y-8 sm:mt-20 lg:max-w-7xl lg:grid-cols-3 gap-x-8">
        {cards.map((card, key) => (
          <div
            key={key}
            className="relative bg-background h-full text-left flex max-w-[500] flex-col rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-blue-400/40 overflow-hidden"
          >
            <Image
              src={`/member-${key}.png`}
              alt="about image"
              width={500}
              height={500}
              className="drop-shadow-three"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
              <h4 className="text-base text-gray-500">{card.profession}</h4>
              <p className="mt-2 text-base/7">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
