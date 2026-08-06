import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import Loader from "@/components/ui/Loader";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Loader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}