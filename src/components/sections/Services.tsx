"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/context";
import { services } from "@/data/services";

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">
            {lang === "en" ? "What We Build" : "Ce Que Nous Créons"}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            {lang === "en" ? "Services engineered for growth" : "Des services pensés pour la croissance"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const content = lang === "en" ? service.en : service.fr;
            return (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-border-hover hover:bg-surface-hover transition-colors"
              >
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-primary mb-5">
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-display text-base font-medium mb-2">{content.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{content.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}