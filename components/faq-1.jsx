"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

export const faqs = [
  {
    question: "Was kostet eine Autoaufbereitung bei Freccia Rossa in Magdeburg?",
    answer:
      "Unsere Pakete starten bei 20€ (Express) und reichen bis 199€ (High End) für die intensive Fahrzeugaufbereitung inklusive Politur. Dazwischen liegen Classic (ab 40€) und Premium (ab 129€).",
  },
  {
    question: "Brauche ich einen Termin für die Autoaufbereitung?",
    answer:
      "Für die Pakete Express und Classic kannst du einfach vorbeikommen, ein Termin ist nicht nötig. Für Premium und High End empfehlen wir, vorher kurz anzurufen.",
  },
  {
    question: "Wie sind die Öffnungszeiten von Freccia Rossa?",
    answer: "Montag bis Samstag von 8 bis 17 Uhr, sonntags geschlossen.",
  },
  {
    question: "Wo befindet sich Freccia Rossa?",
    answer:
      "In Magdeburg. Die genaue Anfahrt und eine Karte findest du im Kontaktbereich dieser Website.",
  },
  {
    question:
      "Bietet ihr auch Aufbereitung für Oldtimer, Wohnmobile und Motorräder an?",
    answer:
      "Ja. Neben der klassischen Fahrzeugaufbereitung sind wir spezialisiert auf Leasingrückgabe (ab 349€), Oldtimer (ab 199€), Wohnmobile (ab 299€) und Motorräder (ab 35€).",
  },
  {
    question: "Wird mein Auto von Hand gewaschen?",
    answer:
      "Ja, jedes Fahrzeug wird zu 100% von Hand gewaschen und getrocknet – keine Waschstraße, keine Bürstenschäden.",
  },
];

export default function FAQ1() {
  const [openIndex, setOpenIndex] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full flex items-start py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1400px] mx-auto w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Header */}
          <div className="flex flex-col space-y-4 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}>
              <Eyebrow>Häufige Fragen</Eyebrow>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <Heading
                as="h2"
                thin="Noch Fragen zur"
                thick="Autoaufbereitung?"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 dark:text-white"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch]">
              Alles Wichtige zu Preisen, Terminen und unseren Leistungen.
            </motion.p>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`border-b border-neutral-200 dark:border-neutral-800 ${
                  index === 0 ? "border-t" : ""
                }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 sm:py-8 flex items-start justify-between gap-4 text-left group">
                  <span
                    className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 mt-1">
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeInOut" },
                      }}
                      className="overflow-hidden">
                      <div className="pb-6 sm:pb-8 pr-8">
                        <p
                          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
