import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name} – Autoaufbereitung Magdeburg.`,
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900">
        <ArrowLeft className="h-4 w-4" />
        Zurück zur Startseite
      </a>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-neutral-700 sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-3">
            {siteConfig.ownerName}
            <br />
            {siteConfig.name}
            <br />
            {siteConfig.street}
            <br />
            {siteConfig.postalCode} {siteConfig.locality}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">Kontakt</h2>
          <p className="mt-3">
            Telefon: {siteConfig.phoneDisplay}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            {siteConfig.ownerName}
            <br />
            {siteConfig.street}
            <br />
            {siteConfig.postalCode} {siteConfig.locality}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            EU-Streitschlichtung
          </h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse findest du oben unter Kontakt. Wir sind
            nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
}
