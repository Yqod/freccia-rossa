"use client";

import { motion } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const packages = [
  {
    name: "Express",
    price: "20",
    description:
      "Außenwäsche, Reinigung der Türkanten, Felgenreinigung.",
  },
  {
    name: "Classic",
    price: "40",
    description: "Einfache Handwäsche von innen und außen. Mit höchster Sorgfalt.",
  },
  {
    name: "Premium",
    price: "129",
    description: "Intensive Fahrzeugaufbereitung. Inklusive Express + Classic.",
    featured: true,
    cta: true,
  },
  {
    name: "High End",
    price: "199",
    description: "Premium Fahrzeugaufbereitung inklusive Fahrzeugpolitur.",
    cta: true,
  },
];

export default function Pricing3() {
  return (
    <section
      id="preise"
      className="relative w-full bg-white dark:bg-neutral-950 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4">
            <Eyebrow>Unsere Preise</Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}>
            <Heading
              as="h2"
              thin="Das passende Paket"
              thick="für dein Auto"
              className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Vier Stufen, ein Ziel: dein Auto sieht aus wie neu. Für die Pakete Express und Classic benötigst du keinen Termin. Für die Pakete Premium und High End empfehlen wir dir vorher kurz telefonisch einen Termin zu vereinbaren.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                pkg.featured
                  ? "border-amber-400/60 shadow-2xl shadow-amber-400/30 dark:border-amber-400/50 dark:shadow-amber-400/20"
                  : "border-neutral-200 shadow-lg dark:border-neutral-800"
              } bg-white dark:bg-neutral-900`}>
              {pkg.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-1 text-xs font-semibold text-neutral-900 shadow-md">
                  Am beliebtesten
                </span>
              )}
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
                {pkg.name}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                {pkg.description}
              </p>

              <div className="mb-8 border-t border-neutral-200 dark:border-neutral-800" />

              <div className="mb-8">
                <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
                  ab
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                    {pkg.price}€
                  </span>
                </div>
              </div>

              <div className="flex-1" />

              {pkg.cta && (
                <a
                  href="#kontakt"
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
                  Termin vereinbaren
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
