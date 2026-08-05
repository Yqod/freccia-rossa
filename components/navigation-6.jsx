"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Phone } from "lucide-react";

export function Navigation6() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topNavItems = [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Preise", href: "/#preise" },
    { label: "Spezial", href: "/#spezial" },
    { label: "Bewertungen", href: "/#bewertungen" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{ y: scrolled ? 0 : "-100%", opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ pointerEvents: scrolled ? "auto" : "none" }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center outline-none"
            aria-label="Home">
            <Image
              src="/video/bilder/logo-schwarz-cropped.png"
              alt="Freccia Rossa"
              width={293}
              height={72}
              className="h-7 w-auto sm:h-9"
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8" role="list">
            {topNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors outline-none">
                {item.label}
              </a>
            ))}
          </div>

          {/* Kontakt CTA */}
          <a
            href="/#kontakt"
            className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full bg-brand text-white text-base font-medium hover:bg-brand/90 transition-colors outline-none">
            <Phone className="w-4 h-4" />
            Kontakt
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
