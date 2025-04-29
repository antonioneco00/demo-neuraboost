import { getFeatures } from "@/lib/features";
import { getTypedMessages } from "@/lib/messages";
import Image from "next/image";

export default async function FeatureSection() {
  const { title, description } = (await getTypedMessages()).home.sections
    .features;

  const features = await getFeatures();

  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/product-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            priority
          />
        </div>
      </div>
    </div>
  );
}
