import { getTypedMessages } from "@/lib/messages";
import HeroVideo from "@/components/video/HeroVideo";

export default async function HeroSection() {
  const { welcome, introduction, button } = (await getTypedMessages()).home;

  return (
    <div className="flex overflow-hidden py-10 sm:py-14 lg:py-44">
      {/* <Image
        src="/hero-wave-top.svg"
        alt=""
        width={0}
        height={0}
        className="absolute top-0 size-auto -z-10"
      />
      <Image
        src="/hero-wave-bottom.svg"
        alt=""
        width={0}
        height={0}
        className="absolute bottom-0 right-0 size-auto -z-10"
      /> */}
      <div className="absolute top-0 -z-10 size-full bg-[url(/circuit-board.svg)]" />
      <div className="absolute top-0 left-0 size-full -z-5 bg-radial from-background from-80% sm:from-75% md:from-70% lg:from-65% xl:from-60% to-transparent"/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
          <div className="lg:pr-8 max-w-xl lg:max-w-none px-4 mx-auto lg:mx-0 rounded-sm flex flex-col justify-center">
            <h2 className="mt-2 text-4xl font-roboto font-semibold tracking-tight text-pretty sm:text-5xl">
              {welcome}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-500">
              {introduction}
            </p>
            <div className="mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {button}
              </a>
            </div>
          </div>
          <div className="max-w-xl lg:max-w-2xl">
            {/* <video
              width="592"
              height="333"
              controls
              poster="/hero-image.jpg"
              preload="auto"
              className="rounded-xl shadow-lg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
