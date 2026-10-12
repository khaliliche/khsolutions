import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
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