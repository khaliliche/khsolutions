"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/context";

const steps = [
  { en: { title: "Discovery", desc: "We learn your business, goals, and users." }, fr: { title: "Découverte", desc: "Nous étudions votre entreprise et vos objectifs." } },
  { en: { title: "Planning", desc: "We define scope, timeline, and architecture." }, fr: { title: "Planification", desc: "Nous définissons le périmètre et l'architecture." } },
  { en: { title: "Design", desc: "We craft the interface and user experience." }, fr: { title: "Design", desc: "Nous concevons l'interface et l'expérience." } },
  { en: { title: "Development", desc: "We build with clean, production-ready code." }, fr: { title: "Développement", desc: "Nous développons un code propre et robuste." } },
  { en: { title: "Testing", desc: "We test every flow across every device." }, fr: { title: "Tests", desc: "Nous testons chaque parcours sur chaque appareil." } },
  { en: { title: "Launch", desc: "We deploy and go live with confidence." }, fr: { title: "Lancement", desc: "Nous déployons et lançons en toute confiance." } },
  { en: { title: "Support", desc: "We stay on for maintenance and growth." }, fr: { title: "Support", desc: "Nous restons pour la maintenance et l'évolution." } },
];

export default function Process() {
  const { lang } = useLanguage();

  return (
    <section id="process" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "How We Work" : "Notre Méthode"}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "A process built for clarity" : "Un processus pensé pour la clarté"}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const content = lang === "en" ? step.en : step.fr;
              return (
                <motion.div
                  key={content.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex-shrink-0 h-10 w-10 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-xs text-primary-light">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium mb-1">{content.title}</h3>
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