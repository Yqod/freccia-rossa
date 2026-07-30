import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LAT = siteConfig.geo.latitude;
const LNG = siteConfig.geo.longitude;

const serviceLinks = [
  { label: "Leasingrückgabe", href: "/#spezial" },
  { label: "Oldtimer", href: "/#spezial" },
  { label: "Wohnmobil", href: "/#spezial" },
  { label: "Motorrad", href: "/#spezial" },
];

const siteLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Spezial", href: "/#spezial" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 px-4 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="-ml-3 w-fit" aria-label="Freccia Rossa – Startseite">
              <Image
                src="/video/bilder/logo-weiss.png"
                alt="Freccia Rossa"
                width={1536}
                height={1024}
                className="h-20 w-auto sm:h-24"
              />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Premium Autoaufbereitung in Magdeburg – von Hand, mit Sorgfalt
              und für jedes Fahrzeug.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Leistungen
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Kontakt
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-brand">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-brand">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 transition-colors hover:text-brand">
                  Route berechnen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {year} Freccia Rossa. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="text-xs text-neutral-500 transition-colors hover:text-white">
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-xs text-neutral-500 transition-colors hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
