"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const testimonials = [
  {
    en: { quote: "It's been a wonderful week working with you.", name: "Tarik", role: "AC Store" },
    fr: { quote: "Ça a été une semaine formidable de travailler avec vous.", name: "Tarik", role: "AC Store" },
  },
];

export default function Testimonials() {
  const { lang } = useLanguage();
  const isSingle = testimonials.length === 1;

  return (
    <section className="relative py-28 px-6">
      <div className={"mx-auto " + (isSingle ? "max-w-2xl" : "max-w-3xl")}>
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Client Feedback" : "Avis Clients"}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "What clients are saying" : "Ce que disent nos clients"}</h2>
        </div>

        {isSingle ? (
          (() => {
            const content = lang === "en" ? testimonials[0].en : testimonials[0].fr;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative text-center rounded-3xl border border-border bg-surface px-8 py-14 sm:px-14"
              >
                <Quote size={36} className="mx-auto text-primary-light mb-6" />
                <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground">
                  &ldquo;{content.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-mono text-sm text-white">
                    {content.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">{content.name}</p>
                    <p className="text-xs text-muted font-mono">{content.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })()
        ) : (
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => {
              const content = lang === "en" ? t.en : t.fr;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} className="rounded-2xl border border-border bg-surface p-8">
                  <Quote size={22} className="text-primary-light mb-4" />
                  <p className="text-lg text-foreground leading-relaxed mb-5">&ldquo;{content.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center font-mono text-xs text-white">
                      {content.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{content.name}</p>
                      <p className="text-xs text-muted font-mono">{content.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}