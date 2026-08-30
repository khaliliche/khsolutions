import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | KHSolutions - Case Studies from Morocco",
  description: "See the websites, e-commerce stores, and systems KHSolutions has built for real Moroccan businesses.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-light">Case Studies</span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">Work that speaks for itself</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-border-hover transition-colors">
                <div className="relative h-44 bg-background overflow-hidden">
                  <Image src={project.image} alt={project.en.title + " case study screenshot - KHSolutions"} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-medium mb-2">{project.en.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">{project.en.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
