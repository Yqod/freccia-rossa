"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Navigation, MapPin, Clock } from "lucide-react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

const LAT = siteConfig.geo.latitude;
const LNG = siteConfig.geo.longitude;

export default function Contact() {
  const [mapsAllowed, setMapsAllowed] = useState(false);

  useEffect(() => {
    setMapsAllowed(getConsent() === "accepted");
    const handler = (e) => setMapsAllowed(e.detail === "accepted");
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  return (
    <section
      id="kontakt"
      className="w-full bg-white pt-16 dark:bg-neutral-950 sm:pt-20 lg:pt-24">
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
          className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
                <MapPin className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  Adresse
                </span>
                <span className="font-heading text-lg font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-xl">
                  {siteConfig.street}, {siteConfig.postalCode}{" "}
                  {siteConfig.locality}
                </span>
              </span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
                <Phone className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  Telefon
                </span>
                <span className="font-heading text-lg font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-xl">
                  {siteConfig.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-brand dark:border-neutral-800">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
                <Mail className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  E-Mail
                </span>
                <span className="block break-all font-heading text-lg font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-xl">
                  {siteConfig.email}
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
                <span className="font-heading text-lg font-bold tracking-tight text-neutral-900 group-hover:text-brand dark:text-white sm:text-xl">
                  Route berechnen
                </span>
              </span>
            </a>
          </div>

          {/* Öffnungszeiten */}
          <div className="rounded-2xl border border-neutral-200 px-6 py-5 dark:border-neutral-800">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
                <Clock className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Öffnungszeiten
              </span>
            </div>
            <ul className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
              {siteConfig.openingHoursByDay.map(({ day, hours }) => (
                <li
                  key={day}
                  className="flex items-center justify-between py-2.5 text-sm sm:text-base">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {day}
                  </span>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-12 h-[400px] w-full sm:mt-16 sm:h-[500px]">
        {mapsAllowed ? (
          <>
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
              className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-medium text-neutral-900 shadow-lg transition-colors duration-200 hover:bg-neutral-100">
              <Navigation className="h-4 w-4 text-brand" />
              Route berechnen
            </a>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-neutral-100 px-4 text-center dark:bg-neutral-900">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-neutral-800">
              <MapPin className="h-6 w-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
            </span>
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              Die Karte wird von Google Maps geladen. Dabei werden Daten an
              Google in die USA übertragen.
            </p>
            <button
              type="button"
              onClick={() => {
                setConsent("accepted");
                setMapsAllowed(true);
              }}
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
              Karte laden
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
