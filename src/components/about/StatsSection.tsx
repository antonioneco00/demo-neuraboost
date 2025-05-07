import { getTypedMessages } from "@/lib/messages";
import * as motion from "motion/react-client";

export default async function StatsSection() {
  const { stats } = (await getTypedMessages()).about;
  return (
    <div className="w-full bg-blue-50 dark:bg-blue-950 py-24 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, id) => (
            <motion.div
              key={id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.1 * id }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
