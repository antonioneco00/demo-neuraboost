import { Link } from "@/i18n/navigation";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function ProductsSection() {
  const { optional_text, title, description, cards } = (
    await getTypedMessages()
  ).home.sections.products;

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="products">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-500">
          {optional_text}
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {description}
      </p>
      <div className="w-fit mx-auto mt-16 grid sm:max-w-2xl grid-cols-1 items-center gap-y-8 sm:mt-20 lg:max-w-7xl sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
        {cards.map((card, key) => (
          <div
            key={key}
            className="relative flex max-w-[500] h-full flex-col shadow-2xl rounded-2xl ring-1 ring-gray-900/10 dark:ring-indigo-400/40"
          >
            <Image
              src="/about-image.svg"
              alt="about image"
              width={500}
              height={500}
              className="drop-shadow-three rounded-t-2xl"
            />
            <div className="p-6">
              <Link href={`/products/${key + 1}`} className="text-indigo-400 text-xl font-semibold">
                {card.name}
              </Link>
              <p className="mt-2 text-base/7">{card.description}</p>
              <p className="mt-2 flex items-baseline gap-x-2 text-lg font-semibold">{card.price}</p>
            </div>

            {/* <a
              href="#"
              className="mt-auto bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started today
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
