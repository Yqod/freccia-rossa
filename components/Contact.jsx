"use client";

import { motion } from "motion/react";
import { Phone, Mail, Navigation } from "lucide-react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const LAT = 52.143243;
const LNG = 11.637635;

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="w-full bg-white py-16 dark:bg-neutral-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4">
          <Eyebrow>Kontakt</Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}>
          <Heading
            as="h2"
            thin="Wie du uns"
            thick="erreichen kannst ? "
            className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="tel:+493911234567"
            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
              <Phone className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                Telefon
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-3xl">
                +49 391 123 456 7
              </span>
            </span>
          </a>

          <a
            href="mailto:info@freccia-rossa.de"
            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
              <Mail className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                E-Mail
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-3xl">
                info@freccia-rossa.de
              </span>
            </span>
          </a>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
              <Navigation className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                Anfahrt
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-3xl">
                Route berechnen
              </span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Full-bleed map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-12 h-[400px] w-full sm:mt-16 sm:h-[500px]">
        <iframe
          title="Standort Freccia Rossa"
          src={`https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-lg bg-white px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-neutral-900 shadow-lg transition-colors duration-200 hover:bg-neutral-100">
          <Navigation className="h-4 w-4 text-brand" />
          Route berechnen
        </a>
      </motion.div>
    </section>
  );
}
