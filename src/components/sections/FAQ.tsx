"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { faqs } from "@/data/faq";

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