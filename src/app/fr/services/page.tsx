import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { servicesIndexGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services : développement web, IA et automatisation au Maroc",
  description:
    "Sites web, automatisation, chatbots IA, CRM, tableaux de bord et e-commerce pour les entreprises marocaines. Découvrez tous les services de KH Solutions.",
  alternates: {
    canonical: "/fr/services",
    languages: { en: "/services", fr: "/fr/services", "x-default": "/services" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/fr/services",
    title: "Services : développement web, IA et automatisation au Maroc | KH Solutions",
    description:
      "Sites web, automatisation, chatbots IA, CRM, tableaux de bord et e-commerce pour les entreprises marocaines.",
  },
};

export default function ServicesPageFr() {
  return (
    <>
      <JsonLd data={servicesIndexGraph("fr")} />
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-light">
              Ce Que Nous Créons
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Des services pensés pour votre croissance
            </h1>
            <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
              Des sites web aux chatbots IA en passant par l&apos;automatisation complète, chaque service est
              pensé pour les entreprises marocaines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/fr/services/${service.slug}`}
                  className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-border-hover hover:bg-surface-hover transition-colors"
                >
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-primary mb-5">
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <h2 className="font-display text-base font-medium mb-2">{service.fr.title}</h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">{service.fr.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary-light">
                    En savoir plus <ArrowRight size={14} />
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