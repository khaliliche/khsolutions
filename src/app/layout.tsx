import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import Loader from "@/components/ui/Loader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL, SITE_NAME, SITE_ALT_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_ALT_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "VEl7Oamv0fgnHHnrDhL2b7XvtOJM5iBIr3rp0hZ7-DU",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [SITE_ALT_NAME],
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: "+212713805656",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rabat",
        addressCountry: "MA",
      },
      areaServed: { "@type": "Country", name: "Morocco" },
      sameAs: [
        "https://github.com/khaliliche",
        "https://www.linkedin.com/in/khalil-iche-32688a358/",
        "https://www.instagram.com/k4alil5/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: [SITE_ALT_NAME],
      inLanguage: ["en", "fr"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
       <LanguageProvider>
          <Loader />
          <ScrollProgress />
          {children}
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}