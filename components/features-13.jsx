"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ClipboardCheck,
  Car,
  Caravan,
  Bike,
  Check,
} from "lucide-react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const features = [
  {
    id: "leasing",
    icon: ClipboardCheck,
    title: "Leasingrückgabe",
    body: "Wir bereiten dein Fahrzeug fachgerecht auf die Rückgabe vor – damit unnötige Nachzahlungen wegen Gebrauchsspuren der Vergangenheit angehören.",
    price: "ab 349€",
    caption: "Rückgabefertig ohne Überraschungen",
    points: [
      "Zustandsprüfung nach Leasingvorgaben",
      "Lack- und Innenraumaufbereitung",
      "Beseitigung kleiner Gebrauchsspuren",
    ],
  },
  {
    id: "oldtimer",
    icon: Car,
    title: "Oldtimer",
    body: "Historische Lacke und empfindliche Materialien brauchen besondere Pflege – wir behandeln deinen Oldtimer mit dem nötigen Fingerspitzengefühl.",
    price: "ab 199€",
    caption: "Mit Gefühl für historischen Lack",
    points: [
      "Schonende, lackverträgliche Produkte",
      "Handarbeit statt Maschinenwäsche",
      "Sorgfältige Innenraumpflege",
    ],
  },
  {
    id: "wohnmobil",
    icon: Caravan,
    title: "Wohnmobil",
    body: "Vom Fahrerhaus bis zum Heck: Wir reinigen und pflegen dein Wohnmobil gründlich, innen wie außen.",
    price: "ab 299€",
    caption: "Gründlich bis in den letzten Winkel",
    points: [
      "Außenreinigung inklusive Dach",
      "Gründliche Innenreinigung",
      "Fenster und Felgen im Detail",
    ],
  },
  {
    id: "motorrad",
    icon: Bike,
    title: "Motorrad",
    body: "Kette, Chrom und Lack blitzblank – wir bringen dein Motorrad wieder zum Glänzen.",
    price: "ab 35€",
    caption: "Glanz für Kette, Chrom und Lack",
    points: ["Kette und Antrieb gereinigt", "Chrom- und Lackpflege", "Felgen im Detail"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function FeaturePanel({ feature }) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
        <feature.icon
          className="h-10 w-10 text-neutral-900 dark:text-white"
          strokeWidth={1.5}
        />
      </div>
      <h4 className="mt-6 text-2xl font-semibold text-neutral-900 dark:text-white">
        {feature.title}
      </h4>
      <span className="font-heading mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
        {feature.price}
      </span>

      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
        {feature.caption}
      </p>

      <div className="mt-8 w-full max-w-xs">
        {feature.points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3 border-t border-neutral-200 py-3 text-left first:pt-0 dark:border-neutral-800">
            <Check className="h-4 w-4 shrink-0 text-brand" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features13() {
  const [activeId, setActiveId] = useState("leasing");
  const active =
    features.find((feature) => feature.id === activeId) ?? features[0];

  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-4">
            <Eyebrow>Für jedes Fahrzeug</Eyebrow>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Heading
              as="h2"
              thin="Wir sind"
              thick="Spezialisten"
              className="text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Ob Leasingrückgabe oder Oldtimer – für jedes Problem haben wir die
            passende Lösung.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 items-start gap-10 sm:mt-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <motion.div
            variants={container}
            className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
            {features.map((feature, index) => {
              const isOpen = feature.id === activeId;
              return (
                <motion.div key={feature.id} variants={fadeUp}>
                  <h3>
                    <button
                      type="button"
                      id={`spezialisten-trigger-${feature.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`spezialisten-panel-${feature.id}`}
                      onClick={() => setActiveId(feature.id)}
                      className="group flex w-full cursor-pointer items-baseline gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 sm:py-6">
                      <span className="w-7 shrink-0 text-xs font-medium tabular-nums text-neutral-400 dark:text-neutral-600">
                        {index + 1}
                      </span>
                      <span
                        className={`flex-1 text-lg font-medium tracking-tight transition-colors duration-200 sm:text-xl ${
                          isOpen
                            ? "text-neutral-900 dark:text-white"
                            : "text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"
                        }`}>
                        {feature.title}
                      </span>
                      <span className="shrink-0 text-sm font-medium text-neutral-400 dark:text-neutral-600">
                        {feature.price}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`self-center transition-colors duration-200 ${
                          isOpen
                            ? "text-neutral-900 dark:text-white"
                            : "text-neutral-400 dark:text-neutral-600"
                        }`}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`spezialisten-panel-${feature.id}`}
                        role="region"
                        aria-labelledby={`spezialisten-trigger-${feature.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden">
                        <div className="pb-6 sm:pb-7">
                          <p className="max-w-md pl-11 pr-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {feature.body}
                          </p>
                          <div className="mt-8 flex justify-center lg:hidden">
                            <FeaturePanel feature={feature} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden min-h-[480px] flex-col items-center justify-center lg:flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <FeaturePanel feature={active} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
