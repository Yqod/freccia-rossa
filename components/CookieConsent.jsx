"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const handler = () => setVisible(false);
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  const handle = (value) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Einstellungen"
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-relaxed text-neutral-300">
              Wir nutzen keine Analyse- oder Marketing-Cookies. Für die
              Standortkarte (Google Maps) werden bei Zustimmung Daten an
              Google in die USA übertragen. Mehr dazu in unserer{" "}
              <a
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-white">
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => handle("declined")}
                className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-900">
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => handle("accepted")}
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200">
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
