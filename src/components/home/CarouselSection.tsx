import { getTypedMessages } from "@/lib/messages";
import { CheckIcon } from "@heroicons/react/24/outline";
import SwiperImage from "@/components/swiper/SwiperImage";

export default async function CarouselSection() {
  const { title, description, items } = (await getTypedMessages()).home.sections
    .carousel;

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container lg:max-w-7xl mx-auto px-4">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
                {title}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">{description}</p>
              <div
                className="mt-8 mb-12 lg:max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="grid grid-cols-2 gap-5">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-lg font-medium"
                    >
                      <span className="mr-4 flex h-[30px] w-[30px] min-w-[30px] bg-blue-100 dark:bg-blue-950 items-center justify-center rounded-md">
                        <CheckIcon
                          aria-hidden="true"
                          className="size-6 text-blue-600 dark:text-blue-400"
                        />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <SwiperImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
