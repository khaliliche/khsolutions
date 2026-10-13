import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const FR_TITLE = "KH Solutions | Développement Web, IA et Automatisation au Maroc";
const FR_DESCRIPTION =
  "KH Solutions (KHSolutions), agence logicielle à Rabat : sites web, automatisation, chatbots IA, CRM et e-commerce pour les entreprises marocaines.";

export const metadata: Metadata = {
  title: { absolute: FR_TITLE },
  description: FR_DESCRIPTION,
  alternates: {
    canonical: "/fr",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "KHSolutions",
    url: "/fr",
    title: FR_TITLE,
    description: FR_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: FR_TITLE,
    description: FR_DESCRIPTION,
  },
};

export default function HomeFr() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "fr",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.fr.q,
      acceptedAnswer: { "@type": "Answer", text: item.fr.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Technologies />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}