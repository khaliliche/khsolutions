import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import Loader from "@/components/ui/Loader";
import { Analytics } from "@vercel/analytics/next";

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
  title: "KHSolutions — Smart software for everyday business.",
  description: "Premium software agency building websites, business automation, AI chatbots, dashboards, CRMs and more.",
  verification: {
    google: "VEl7Oamv0fgnHHnrDhL2b7XvtOJM5iBIr3rp0hZ7-DU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
       <LanguageProvider>
          <Loader />
          {children}
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "KHSolutions",
              description: "Premium software agency building websites, business automation, AI chatbots, dashboards, CRMs and more.",
              url: "https://www.khsolutions.it.com",
              telephone: "+212713805656",
              areaServed: "Morocco",
              sameAs: [
                "https://github.com/khaliliche",
                "https://www.linkedin.com/in/khalil-iche-32688a358/",
                "https://www.instagram.com/k4alil5/",
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}