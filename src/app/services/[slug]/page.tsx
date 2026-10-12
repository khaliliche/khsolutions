import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";

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
  return {
    title: `${service.en.title} in Morocco`,
    description: service.en.long.slice(0, 155),
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      title: `${service.en.title} in Morocco | KH Solutions`,
      description: service.en.long.slice(0, 155),
    },
  };
}

export default async function ServiceDetailPage({
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
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-primary mb-6">
            <Icon size={26} className="text-white" strokeWidth={2} />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            {service.en.title}
          </h1>
          <p className="text-muted leading-relaxed text-lg mb-10">{service.en.long}</p>
          <a href="https://wa.me/212713805656?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20this%20service" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity">
            Get a Free Consultation
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}