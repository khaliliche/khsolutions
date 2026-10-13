import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/context";
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

export const metadata: Metadata = {
  title: "KHSolutions — Des logiciels intelligents pour votre entreprise.",
  description: "Agence logicielle premium : sites web, automatisation, chatbots IA, tableaux de bord, CRM et plus, pour les entreprises marocaines.",
  alternates: {
    canonical: "/fr",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "KHSolutions",
    title: "KHSolutions — Des logiciels intelligents pour votre entreprise.",
    description: "Agence logicielle premium : sites web, automatisation, chatbots IA, tableaux de bord, CRM et plus.",
    url: "https://www.khsolutions.it.com/fr",
  },
};

export default function HomeFr() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.fr.q,
      acceptedAnswer: { "@type": "Answer", text: item.fr.a },
    })),
  };

  return (
    <LanguageProvider initialLang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
    </LanguageProvider>
  );
}