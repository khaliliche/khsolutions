"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Handshake } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function WhyUs() {
  const { lang } = useLanguage();

  const points = [
    {
      icon: GraduationCap,
      en: { title: "Engineering-first approach", desc: "Every project is built on solid technical fundamentals, not shortcuts — the same rigor you'd expect from a full engineering team." },
      fr: { title: "Approche d'ingénieur", desc: "Chaque projet repose sur des fondations techniques solides, sans raccourcis — la même rigueur qu'une équipe d'ingénierie complète." },
    },
    {
      icon: Rocket,
      en: { title: "Built for real businesses", desc: "From AC retailers to artisan workshops to IT support teams, every system we ship is shaped around how a real business actually works." },
      fr: { title: "Conçu pour de vraies entreprises", desc: "Des revendeurs de climatiseurs aux ateliers artisanaux en passant par le support IT, chaque système est pensé pour l'usage réel." },
    },
    {
      icon: Handshake,
      en: { title: "Direct, personal collaboration", desc: "You're working directly with the person building your software — clear communication, fast iteration, no account managers in between." },
      fr: { title: "Collaboration directe et personnelle", desc: "Vous travaillez directement avec la personne qui développe votre logiciel — communication claire, itération rapide, sans intermédiaire." },
    },
  ];

  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Why KHSolutions" : "Pourquoi KHSolutions"}</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              {lang === "en" ? "Software built by someone who cares about getting it right." : "Un logiciel conçu par quelqu'un qui tient à bien faire les choses."}
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              {lang === "en"
                ? "KHSolutions is led by Khalil Iche, an engineering student specializing in Web Development and AI, freelancing alongside his studies. That means every project gets the full attention of someone actively pushing to stay current with modern tools and best practices — not a templated process handed off between departments."
                : "KHSolutions est dirigée par Khalil Iche, étudiant ingénieur spécialisé en développement web et IA, freelance en parallèle de ses études. Chaque projet bénéficie ainsi de toute l'attention d'une personne qui reste activement à jour sur les outils et bonnes pratiques modernes — pas d'un processus standardisé réparti entre plusieurs services."}
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {points.map((p, i) => {
              const content = lang === "en" ? p.en : p.fr;
              const Icon = p.icon;
              return (
                <motion.div key={content.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-4">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-surface border border-border flex items-center justify-center">
                    <Icon size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium mb-1">{content.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{content.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}