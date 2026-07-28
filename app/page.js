import Heading from "./components/Heading";
import { Features5 } from "@/components/features-5";
import Pricing3 from "@/components/pricing-3";
import Features7 from "@/components/features-7";
import { Features13 } from "@/components/features-13";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/Autoaufbereitung-Video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <Heading
          as="h1"
          thin="Premium Autoaufbereitung"
          thick="in Magdeburg"
          className="relative z-10 max-w-5xl text-center text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <div className="relative z-10 mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#preise"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Pakete
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center rounded-lg border border-white/70 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Mehr erfahren
          </a>
        </div>
      </main>

      <Features5 />
      <Pricing3 />
      <Features7 />
      <Features13 />
      <Contact />
    </>
  );
}
