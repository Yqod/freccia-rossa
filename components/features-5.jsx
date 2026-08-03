"use client";

import { motion } from "motion/react";
import { Hand, Droplets, Sparkles, ShieldCheck, Clock, Star } from "lucide-react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

export function Features5() {
  const features = [
    {
      icon: Hand,
      title: "100% Handwäsche",
      description:
        "Kein Waschstraßen-Bürstenschaden: Jedes Fahrzeug wird komplett von Hand gewaschen und getrocknet.",
    },
    {
      icon: Droplets,
      title: "Schonende Produkte",
      description:
        "Lackschonende Reinigungsmittel für ein makelloses Ergebnis ganz ohne Kratzer.",
    },
    {
      icon: Sparkles,
      title: "Sichtbarer Glanz",
      description:
        "Von der Felge bis zum Lack – jedes Detail wird poliert, bis dein Auto wie neu glänzt.",
    },
    {
      icon: ShieldCheck,
      title: "Lackversiegelung",
      description:
        "Optionale Versiegelung schützt den Lack nachhaltig vor Witterung, Schmutz und UV-Strahlung.",
    },
    {
      icon: Clock,
      title: "Flexible Termine",
      description:
        "Per Telefon buchen, Auto bringen, entspannen – wir richten uns nach deinem Zeitplan.",
    },
    {
      icon: Star,
      title: "Premium-Qualität",
      description:
        "Jahrelange Erfahrung und höchste Ansprüche an jedes einzelne Fahrzeug.",
    },
  ];

  return (
    <section
      id="leistungen"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative">
      {/* Dashed Top Right Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229, 229, 229, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229, 229, 229, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 20%, transparent 80%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 20%, transparent 80%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }} />
      <div
        className="absolute inset-0 z-0 opacity-0 dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(64, 64, 64, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(64, 64, 64, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 20%, transparent 80%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 100% at 100% 0%, #000 20%, transparent 80%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4">
            <Eyebrow>Unsere Leistungen</Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}>
            <Heading
              as="h2"
              thin="Premium Handwäsche"
              thick="für dein Auto"
              className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 mb-8 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Handarbeit statt Waschstraße – wir behandeln jedes Fahrzeug mit der Sorgfalt, die es verdient.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="tracking-tight inline-flex items-center justify-center px-8 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-base hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 w-full sm:w-auto">
              Termin buchen
            </a>
            <a
              href="#preise"
              className="tracking-tight inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200 w-full sm:w-auto">
              Preise ansehen
            </a>
          </motion.div>
        </div>

        {/* Features Grid - 3 columns, no gap, with borders */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 md:p-10 bg-white dark:bg-neutral-950
                  ${index !== 5 ? "border-b border-neutral-200 dark:border-neutral-800" : ""}
                  ${index % 2 === 0 && index !== 4 ? "md:border-r" : ""}
                  ${(index + 1) % 3 !== 0 ? "lg:border-r" : ""}
                  ${index < 3 ? "lg:border-b" : ""}
                `}>
                {/* Icon - Centered */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <Icon
                      className="w-full h-full text-neutral-900 dark:text-white"
                      strokeWidth={0.5} />
                  </div>
                </div>
                {/* Title - Left Aligned */}
                <h3
                  className="text-lg tracking-tight sm:text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                {/* Description - Left Aligned */}
                <p
                  className="text-sm tracking-tight sm:text-base text-neutral-600 dark:text-neutral-400 leading-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
