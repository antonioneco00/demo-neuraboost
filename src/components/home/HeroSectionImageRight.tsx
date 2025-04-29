import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function HeroSectionImageRight() {
  const { welcome, introduction, button } = (await getTypedMessages()).home;

  return (
    <div className="flex overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
          <div className="lg:pr-8 max-w-xl lg:max-w-none flex flex-col justify-center">
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              {welcome}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-500">
              {introduction} Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
              veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {button}
              </a>
            </div>
          </div>
          <Image
            src="/about-image.svg"
            alt="about image"
            width={450}
            height={450}
            className="drop-shadow-three mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
