"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const sections = [
  {
    title: "Schutz und Werterhalt",
    image: "/bilder/Aufbereitung-AMG.webp",
    body: [
      "Wir schützen Lack und Karosserie nachhaltig und erhalten so den Wert deines Fahrzeugs.",
    ],
  },
  {
    title: "Strahlender Glanz",
    image: "/bilder/Aufbereitung-Ford.webp",
    body: ["Von der Felge bis zum Dach: dein Auto glänzt wie am ersten Tag."],
  },
  {
    title: "Zuverlässig und pünktlich",
    image: "/bilder/Aufbereitung-Fiat500.webp",
    body: [
      "Auf uns ist Verlass – dein Termin wird eingehalten, ganz ohne Wartezeit.",
    ],
  },
  {
    title: "Zufriedenheit garantiert",
    image: "/bilder/Innenraum-Aufbereitung.webp",
    body: [
      "Die Arbeit ist erst dann abgeschlossen, wenn du mit dem Ergebnis rundum zufrieden bist.",
    ],
  },
];

export default function Features7() {
  return (
    <section className="relative w-full flex items-start overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-16 sm:gap-20">
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
              className="max-w-3xl text-3xl text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>
        </div>

        {/* Benefit Grid - asymmetric bento */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 sm:auto-rows-[220px] lg:auto-rows-[260px]">
          {sections.map((s, i) => {
            const spanClass = [
              "sm:col-span-2 sm:row-span-2",
              "sm:col-span-1 sm:row-span-1",
              "sm:col-span-1 sm:row-span-1",
              "sm:col-span-3 sm:row-span-1",
            ][i];
            const big = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-auto ${spanClass}`}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes={
                    big
                      ? "(min-width: 1024px) 683px, (min-width: 640px) 66vw, 100vw"
                      : i === 3
                        ? "(min-width: 1024px) 1024px, 100vw"
                        : "(min-width: 1024px) 341px, (min-width: 640px) 33vw, 100vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div
                  className={`relative z-10 flex h-full flex-col justify-end gap-2 p-6 sm:p-8`}>
                  <h3
                    className={`text-white tracking-tight leading-tight ${
                      big ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                    }`}>
                    {s.title}
                  </h3>
                  {s.body.map((p, pi) => (
                    <p
                      key={pi}
                      className={`text-neutral-300 leading-relaxed ${
                        big ? "text-base sm:text-lg max-w-md" : "text-sm sm:text-base"
                      }`}>
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
