"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { portfolio } from "@/data/portfolio";

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="h-44 bg-gradient-to-br from-surface-hover to-background flex items-center justify-center">
        <span className="font-display text-2xl font-semibold text-border-hover">{title}</span>
      </div>
    );
  }

  return (
    <div className="relative h-44 bg-background overflow-hidden">
      <Image src={src} alt={title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" onError={() => setError(true)} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}

export default function Portfolio() {
  const { lang } = useLanguage();

  return (
    <section id="portfolio" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Case Studies" : "Études de Cas"}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "Work that speaks for itself" : "Des projets qui parlent d'eux-mêmes"}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((project, i) => {
            const content = lang === "en" ? project.en : project.fr;
            return (
              <motion.div key={project.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: (i % 3) * 0.08 }} className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-border-hover transition-colors">
                <ProjectImage src={project.image} title={content.title} />

                <div className="p-6">
                  <h3 className="font-display text-lg font-medium mb-2">{content.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{content.desc}</p>
                  <p className="text-xs text-primary-light font-mono mb-4">{content.results}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-background border border-border text-muted">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary-light transition-colors">
                        <ExternalLink size={14} /> {lang === "en" ? "Live Demo" : "Démo"}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted/60 cursor-not-allowed">
                        <ExternalLink size={14} /> {lang === "en" ? "Live Demo" : "Démo"}
                      </span>
                    )}
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary-light transition-colors">
                        <GithubIcon size={14} /> GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted/60 cursor-not-allowed">
                        <GithubIcon size={14} /> GitHub
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}