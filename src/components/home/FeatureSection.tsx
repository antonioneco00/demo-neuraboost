import { getFeatures } from "@/lib/features";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function FeatureSection() {
  const { title, description } = (await getTypedMessages()).home.sections
    .features;

  const features = await getFeatures();

  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <Image
        src="/abstract-svg/feature-corner.svg"
        alt="abstract corner image"
        width={0}
        height={0}
        className="absolute size-auto bottom-0 right-0"
      />
      <div className="mx-auto max-w-[84rem] px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            src="/about-image.png"
            alt="about image"
            width={500}
            height={500}
            className="w-auto h-auto object-contain drop-shadow-three rounded-tl-3xl my-auto shadow-[-10px_10px_0] shadow-blue-500/60 z-10"
          />
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">{description}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-gray-300 text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
