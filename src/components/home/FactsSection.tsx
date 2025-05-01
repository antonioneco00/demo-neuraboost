import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function FactsSection() {
  const { items } = (await getTypedMessages()).home.sections.facts;

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row lg:flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="relative mx-auto aspect-[25/24] max-w-[500px] mb-12 text-center lg:m-0"
            data-wow-delay=".15s"
          >
            {/*  Incluir aspect-[25/24] max-w-[500px] en la clase del div padre */}
            <Image
              src="/about-image.svg"
              alt="about image"
              fill
              className="drop-shadow-three"
            />
            {/*  Eliminar aspect-[25/24] max-w-[500px] en la clase del div padre */}
            {/* <Image
              alt="Program screenshot"
              src="/product-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:-ml-0"
              priority
            /> */}
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[470px] mx-auto mb-8 lg:mx-0 lg:mb-0">
            {items.map(({ fact, desc }, index) => (
              <div key={index} className="mb-9">
                <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">
                  {fact}
                </h3>
                <p className="text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
