"use client";

import { motion } from "motion/react";
import { RotateCw, Warehouse, CircleDot } from "lucide-react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const services = [
  {
    icon: RotateCw,
    title: "Räderwechsel",
    description:
      "Ob Sommer- oder Winterreifen – wir wechseln deine Räder schnell, sauber und fachgerecht.",
  },
  {
    icon: Warehouse,
    title: "Einlagerung der Räder",
    description:
      "Platzsparend und sicher verwahrt: wir lagern deine Räder professionell zwischen den Saisons ein.",
  },
  {
    icon: CircleDot,
    title: "Steinschläge entfernen",
    description:
      "Kleine Lackschäden durch Steinschlag beseitigen wir zuverlässig, bevor daraus Rost entstehen kann.",
  },
];

export default function WheelService() {
  return (
    <section
      id="raederservice"
      className="w-full bg-white px-4 py-12 dark:bg-neutral-950 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4">
          <Eyebrow>Rund ums Rad</Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}>
          <Heading
            as="h2"
            thin=" Weiterer Service für"
            thick="dein Fahrzeug"
            className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Vom Räderwechsel über die Einlagerung bis zur Steinschlagreparatur – wir
          kümmern uns rundum um dein Fahrzeug.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 sm:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
                <service.icon
                  className="h-6 w-6 text-neutral-900 dark:text-white"
                  strokeWidth={1.5}
                />
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
