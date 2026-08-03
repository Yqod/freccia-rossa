"use client";

import { StarIcon } from "lucide-react";
import { motion } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Markus Weber",
    initials: "MW",
    role: "BMW 3er Fahrer",
    quote:
      "Der Lack sieht aus wie am Tag der Erstzulassung. Man merkt sofort, dass hier von Hand und mit Sorgfalt gearbeitet wird.",
  },
  {
    id: "t2",
    name: "Sandra Hoffmann",
    initials: "SH",
    role: "Privatkundin",
    quote:
      "Selbst die Felgen und Türfalze waren blitzsauber. Ich bin mit keinem anderen Aufbereiter mehr zufrieden, seit ich hier war.",
  },
  {
    id: "t3",
    name: "Thomas Krüger",
    initials: "TK",
    role: "Leasingrückgabe",
    quote:
      "Dank der Aufbereitung vor der Rückgabe kam ich ohne eine einzige Beanstandung durch die Abnahme. Hat sich sofort ausgezahlt.",
  },
  {
    id: "t4",
    name: "Michael Schulz",
    initials: "MS",
    role: "Oldtimer-Besitzer",
    quote:
      "Endlich jemand, der weiß, wie man mit historischem Lack umgeht. Mein Oldtimer wurde mit einem Fingerspitzengefühl behandelt, das man selten findet.",
  },
  {
    id: "t5",
    name: "Anna Richter",
    initials: "AR",
    role: "Wohnmobil-Besitzerin",
    quote:
      "Vom Dach bis zum Unterboden alles gründlich gereinigt. Nach der Saison sieht unser Wohnmobil wieder aus wie neu.",
  },
  {
    id: "t6",
    name: "Julia Bergmann",
    initials: "JB",
    role: "Stammkundin seit 2020",
    quote:
      "Termin wird immer eingehalten, keine Wartezeit, und das Ergebnis stimmt jedes Mal. Genau deshalb komme ich seit Jahren wieder.",
  },
];

export default function TestimonialsSearch() {
  return (
    <section
      id="bewertungen"
      className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4">
          <Eyebrow>Kundenstimmen</Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}>
          <Heading
            as="h2"
            thin="Das sagen unsere"
            thick="Kunden"
            className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Echte Erfahrungen von Kundinnen und Kunden, die uns ihr Fahrzeug
          anvertraut haben.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div
                role="img"
                aria-label="5 von 5 Sternen"
                className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon
                    key={s}
                    aria-hidden="true"
                    className="size-3.5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800">
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                    {t.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="#kontakt" className="w-full sm:w-auto">
            <Button className="h-auto w-full px-8 py-3 text-base sm:w-[220px]">
              Termin buchen
            </Button>
          </a>
          <a href="#preise" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="h-auto w-full px-8 py-3 text-base sm:w-[220px]">
              Preise ansehen
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
