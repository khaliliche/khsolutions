import type { Metadata } from "next";
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
import JsonLd from "@/components/seo/JsonLd";
import { homeGraph } from "@/lib/schema";
import { SITE_NAME, SITE_TITLE_FR, SITE_DESCRIPTION_FR } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE_FR },
  description: SITE_DESCRIPTION_FR,
  alternates: {
    canonical: "/fr",
    languages: { en: "/", fr: "/fr", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: "/fr",
    title: SITE_TITLE_FR,
    description: SITE_DESCRIPTION_FR,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_FR,
    description: SITE_DESCRIPTION_FR,
  },
};

export default function HomeFr() {
  return (
    <>
      <JsonLd data={homeGraph("fr")} />
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