"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const faqs = [
  { en: { q: "How long does a project take?", a: "Most websites take 2-4 weeks. Larger systems like CRMs or dashboards can take 6-10 weeks depending on complexity." }, fr: { q: "Combien de temps prend un projet ?", a: "La plupart des sites prennent 2 à 4 semaines. Les systèmes plus complexes prennent 6 à 10 semaines." } },
  { en: { q: "Do you offer ongoing support?", a: "Yes. Every project includes a support period, and we offer maintenance packages after launch." }, fr: { q: "Proposez-vous un support continu ?", a: "Oui. Chaque projet inclut une période de support, et nous proposons des forfaits de maintenance." } },
  { en: { q: "Can you work with an existing system?", a: "Absolutely. We regularly integrate with existing tools, databases, and third-party APIs." }, fr: { q: "Pouvez-vous travailler avec un système existant ?", a: "Absolument. Nous intégrons régulièrement des outils et API existants." } },
  { en: { q: "How much does a project cost?", a: "It depends on scope. Reach out for a free consultation and we'll give you a custom quote." }, fr: { q: "Combien coûte un projet ?", a: "Cela dépend du périmètre. Contactez-nous pour un devis personnalisé." } },
  { en: { q: "Do you host the website too?", a: "Yes, we deploy on Vercel and can handle hosting, domains, and ongoing maintenance for you." }, fr: { q: "Hébergez-vous aussi le site ?", a: "Oui, nous déployons sur Vercel et gérons l'hébergement et la maintenance." } },
];

export default function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "Questions? Answers." : "Des Questions ? Des Réponses."}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const content = lang === "en" ? item.en : item.fr;
            const isOpen = openIndex === i;
            return (
              <div key={content.q} className="rounded-xl border border-border bg-surface overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-sm sm:text-base font-medium">{content.q}</span>
                  <ChevronDown size={18} className={"flex-shrink-0 text-muted transition-transform " + (isOpen ? "rotate-180" : "")} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{content.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}