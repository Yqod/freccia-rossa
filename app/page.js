import Heading from "./components/Heading";
import { Features5 } from "@/components/features-5";

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
          thin="Deine Autoaufbereitung"
          thick="in Magdeburg"
          className="relative z-10 max-w-5xl text-center text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl"
        />
      </main>

      <Features5 />
    </>
  );
}
