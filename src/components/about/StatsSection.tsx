import { getTypedMessages } from "@/lib/messages";

export default async function StatsSection() {
  const { stats } = (await getTypedMessages()).about;
  return (
    <div className="w-full bg-blue-50 dark:bg-blue-950 py-24 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, id) => (
            <div
              key={id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
