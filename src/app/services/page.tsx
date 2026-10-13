import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services: Web Development, AI & Automation in Morocco",
  description:
    "Websites, business automation, AI chatbots, CRMs, dashboards and e-commerce built for Moroccan businesses. See all KHSolutions services.",
  alternates: {
    canonical: "/services",
    languages: { en: "/services", fr: "/fr/services", "x-default": "/services" },
  },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Services: Web Development, AI & Automation in Morocco | KH Solutions",
    description:
      "Websites, business automation, AI chatbots, CRMs, dashboards and e-commerce built for Moroccan businesses.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-light">
              What We Build
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Services engineered for growth
            </h1>
            <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
              From websites to AI chatbots to full business automation, every service is built
              for how real Moroccan businesses actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-border-hover hover:bg-surface-hover transition-colors"
                >
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-primary mb-5">
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <h2 className="font-display text-base font-medium mb-2">{service.en.title}</h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">{service.en.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary-light">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
