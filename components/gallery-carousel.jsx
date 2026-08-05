"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import Eyebrow from "@/app/components/Eyebrow";
import Heading from "@/app/components/Heading";

const ParallaxCarousel = dynamic(() => import("@/components/parallax-carousel"), {
  ssr: false,
});

const GALLERY_IMAGES = [
  "/caroussel/Autoaufbereitung-Hof.webp",
  "/caroussel/Autoaufbereitung-auto-amg.webp",
  "/caroussel/Autoaufbereitung-werkstatt.webp",
  "/caroussel/Motorradaufbereitung.webp",
  "/caroussel/innenraumaufbereitung.webp",
  "/caroussel/schild-autoaufbereitung.webp",
];

export default function GalleryCarousel() {
  const carouselWrapRef = useRef(null);
  const [loadCarousel, setLoadCarousel] = useState(false);

  useEffect(() => {
    const node = carouselWrapRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setLoadCarousel(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadCarousel(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="galerie"
      className="w-full bg-white py-16 dark:bg-neutral-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4">
          <Eyebrow>Unsere Arbeit</Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}>
          <Heading
            as="h2"
            thin="Ergebnisse, die"
            thick="überzeugen"
            className="max-w-3xl text-3xl text-neutral-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Ein Blick auf frisch aufbereitete Fahrzeuge aus unserer Werkstatt.
        </motion.p>
      </div>

      <motion.div
        ref={carouselWrapRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 h-[420px] w-full sm:h-[480px] lg:h-[560px]">
        {loadCarousel ? (
          <ParallaxCarousel
            images={GALLERY_IMAGES}
            imageWidth={480}
            imageHeight={460}
            gap={24}
            borderRadius={16}
            parallaxIntensity={0.15}
            uvScale={0.5}
            loop
            autoplaySpeed={40}
          />
        ) : (
          <div className="h-full w-full animate-pulse rounded-2xl bg-neutral-100 dark:bg-neutral-900" />
        )}
      </motion.div>
    </section>
  );
}
