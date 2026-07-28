"use client";

import { motion } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const sections = [
  {
    title: "Schutz und Werterhalt",
    body: [
      "Wir schützen Lack und Karosserie nachhaltig und erhalten so den Wert deines Fahrzeugs.",
    ],
  },
  {
    title: "Strahlender Glanz",
    body: ["Von der Felge bis zum Dach: dein Auto glänzt wie am ersten Tag."],
  },
  {
    title: "Zuverlässig und pünktlich",
    body: [
      "Auf uns ist Verlass – dein Termin wird eingehalten, ganz ohne Wartezeit.",
    ],
  },
  {
    title: "Zufriedenheit garantiert",
    body: [
      "Wir arbeiten erst dann fertig, wenn du mit dem Ergebnis rundum zufrieden bist.",
    ],
  },
];

export default function Features7() {
  return (
    <section className="w-full flex items-start py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16 sm:gap-20">
        {/* Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4">
            <Eyebrow>Deine Vorteile</Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}>
            <Heading
              as="h2"
              thin="Darauf kannst du dich"
              thick="verlassen"
              className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>
        </div>

        {/* Benefit Rows */}
        <div className="flex flex-col gap-24 sm:gap-28">
          {sections.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div
                  className={`rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden aspect-4/3 flex items-center justify-center ${
                    flipped ? "md:order-2" : ""
                  }`}>
                  <img
                    src="/svg/placeholder.svg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`flex flex-col gap-3 ${
                    flipped ? "md:order-1" : ""
                  }`}>
                  <h3 className="text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  {s.body.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
