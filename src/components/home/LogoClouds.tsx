import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function LogoClouds() {
  const title = await (await getTypedMessages()).home.sections.logo_clouds;
  
  return (
    <div className="py-24 sm:py-32 mx-8">
      <div className="bg-indigo-100 dark:bg-gray-900 mx-auto max-w-7xl p-6 rounded-2xl">
        <h2 className="text-center text-lg/8 font-semibold">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Sponsor"
            src="/sponsor.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 block dark:hidden"
          />
          <Image
            alt="Sponsor"
            src="/sponsor-white.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 hidden dark:block"
          />
          <Image
            alt="Sponsor"
            src="/sponsor.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 block dark:hidden"
          />
          <Image
            alt="Sponsor"
            src="/sponsor-white.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 hidden dark:block"
          />
          <Image
            alt="Sponsor"
            src="/sponsor.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 block dark:hidden"
          />
          <Image
            alt="Sponsor"
            src="/sponsor-white.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain lg:col-span-1 hidden dark:block"
          />
          <Image
            alt="Sponsor"
            src="/sponsor.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain sm:col-start-2 lg:col-span-1 block dark:hidden"
          />
          <Image
            alt="Sponsor"
            src="/sponsor-white.svg"
            width={158}
            height={48}
            className="col-span-2 h-12 w-auto mx-auto object-contain sm:col-start-2 lg:col-span-1 hidden dark:block"
          />
          <Image
            alt="Sponsor"
            src="/sponsor.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 h-12 w-auto mx-auto object-contain sm:col-start-auto lg:col-span-1 block dark:hidden"
          />
          <Image
            alt="Sponsor"
            src="/sponsor-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 h-12 w-auto mx-auto object-contain sm:col-start-auto lg:col-span-1 hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}
