import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Freccia Rossa – Autoaufbereitung Magdeburg.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-neutral-700 sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            {siteConfig.ownerName}
            <br />
            {siteConfig.name}
            <br />
            {siteConfig.street}
            <br />
            {siteConfig.postalCode} {siteConfig.locality}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            <br />
            Telefon: {siteConfig.phoneDisplay}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            2. Hosting und Domain
          </h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA gehostet. Beim Aufruf der Website
            verarbeitet Vercel technisch notwendige Server-Logdaten (u. a.
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
            verwendeter Browser), um die Website sicher und stabil
            auszuliefern. Dies erfolgt auf Grundlage unseres berechtigten
            Interesses an einem funktionsfähigen und sicheren
            Internetauftritt (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel besteht
            ein Auftragsverarbeitungsvertrag inkl. EU-Standardvertragsklauseln
            für die Datenübermittlung in die USA.
          </p>
          <p className="mt-3">
            Die Domain ist bei der STRATO AG, Pascalstraße 10, 10587 Berlin,
            registriert. Über die Domainverwaltung werden keine
            personenbezogenen Daten von Besucher:innen dieser Website
            verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            3. Keine Analyse- oder Marketing-Cookies
          </h2>
          <p className="mt-3">
            Wir setzen auf dieser Website keine Analyse-, Tracking- oder
            Marketing-Cookies ein. Es findet keine Auswertung deines
            Nutzungsverhaltens statt und es werden keine Profile gebildet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            4. Cookie-Hinweis (Consent-Banner)
          </h2>
          <p className="mt-3">
            Beim ersten Besuch der Website weisen wir dich über einen Banner
            auf die Einbindung der Google-Maps-Karte hin (siehe Punkt 5).
            Deine Auswahl speichern wir ausschließlich lokal in deinem
            Browser (localStorage), um dich nicht bei jedem Seitenaufruf
            erneut zu fragen. Es wird dabei keine Kennung an uns oder Dritte
            übermittelt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            5. Google Maps
          </h2>
          <p className="mt-3">
            Im Kontaktbereich binden wir eine Karte des Kartendienstes Google
            Maps ein, Anbieter: Google Ireland Limited, Gordon House, Barrow
            Street, Dublin 4, Irland ("Google"). Die Karte wird erst geladen,
            nachdem du im Cookie-Banner oder direkt im Kartenfeld
            zugestimmt hast. Mit dem Laden der Karte übermittelt dein
            Browser deine IP-Adresse an Google-Server, auch außerhalb der
            EU/des EWR; Google kann dabei Cookies auf deinem Endgerät setzen.
            Auf Inhalt und Umfang dieser Datenverarbeitung haben wir keinen
            Einfluss. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO, § 25 Abs. 1 TTDSG). Du kannst deine Einwilligung
            jederzeit für die Zukunft widerrufen, indem du deine
            Browserdaten (localStorage) für diese Website löschst. Weitere
            Informationen findest du in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              Datenschutzerklärung von Google
            </a>
            .
          </p>
          <p className="mt-3">
            Alternativ kannst du die Anfahrt auch ohne eingebettete Karte
            über den Link "Route berechnen" direkt bei Google Maps öffnen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            6. Schriftarten
          </h2>
          <p className="mt-3">
            Alle auf dieser Website verwendeten Schriftarten sind lokal
            eingebunden (self-hosted). Es findet keine Verbindung zu
            externen Font-Anbietern statt, es werden keine Daten an Dritte
            übermittelt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            7. Deine Rechte
          </h2>
          <p className="mt-3">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung deiner personenbezogenen Daten
            sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Zudem
            hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde
            zu beschweren.
          </p>
        </section>
      </div>
    </main>
  );
}
