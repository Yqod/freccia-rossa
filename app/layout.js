import "./globals.css";
import { stackSans, openSans } from "./fonts";
import { Navigation6 } from "@/components/navigation-6";
import CookieConsent from "@/components/CookieConsent";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Autoaufbereitung Magdeburg",
    "Fahrzeugaufbereitung Magdeburg",
    "Auto Handwäsche Magdeburg",
    "Lackversiegelung Magdeburg",
    "Innenraumaufbereitung Magdeburg",
    "Autopflege Magdeburg",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: "Freccia Rossa – Autoaufbereitung Magdeburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${stackSans.variable} ${openSans.variable}`}>
      <body className="bg-white text-black font-sans antialiased">
        <LocalBusinessSchema />
        <Navigation6 />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
