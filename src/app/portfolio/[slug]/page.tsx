import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { portfolio } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.en.title} Case Study | KHSolutions`,
    description: (project.en.long || project.en.desc).slice(0, 155),
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative h-64 rounded-2xl overflow-hidden mb-10 bg-surface">
            <Image src={project.image} alt={project.en.title} fill className="object-cover object-top" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            {project.en.title}
          </h1>
          <p className="text-muted leading-relaxed text-lg mb-6">
            {project.en.long || project.en.desc}
          </p>
          <p className="text-sm text-primary-light font-mono mb-8">{project.en.results}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-background border border-border text-muted">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary-light transition-colors">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary-light transition-colors">
                <GithubIcon size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}