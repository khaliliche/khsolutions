import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import { truncate } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const description = truncate(service.fr.long, 155);
  return {
    title: `${service.fr.title} au Maroc`,
    description,
    alternates: {
      canonical: `/fr/services/${service.slug}`,
      languages: {
        en: `/services/${service.slug}`,
        fr: `/fr/services/${service.slug}`,
        "x-default": `/services/${service.slug}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: `/fr/services/${service.slug}`,
      title: `${service.fr.title} au Maroc | KH Solutions`,
      description,
    },
  };
}

export default async function ServiceDetailPageFr({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link href="/fr/services" className="text-sm text-primary-light hover:underline">
            ← Tous les services
          </Link>
          <div className="mt-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-primary mb-6">
            <Icon size={26} className="text-white" strokeWidth={2} />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            {service.fr.title}
          </h1>
          <p className="text-muted leading-relaxed text-lg mb-10">{service.fr.long}</p>
          <a
            href="https://wa.me/212713805656?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20ce%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Demander une consultation gratuite
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}