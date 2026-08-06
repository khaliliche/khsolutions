"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tiers = [
  {
    en: { name: "Starter", desc: "For small businesses getting online.", features: ["Responsive website", "Up to 5 pages", "Basic SEO setup", "1 month support"] },
    fr: { name: "Starter", desc: "Pour les petites entreprises qui démarrent.", features: ["Site web responsive", "Jusqu'à 5 pages", "SEO de base", "1 mois de support"] },
    highlighted: false,
  },
  {
    en: { name: "Business", desc: "For growing companies that need more.", features: ["Everything in Starter", "Custom features & integrations", "Dashboard or CRM module", "3 months support"] },
    fr: { name: "Business", desc: "Pour les entreprises en croissance.", features: ["Tout ce qui est dans Starter", "Fonctionnalités personnalisées", "Module dashboard ou CRM", "3 mois de support"] },
    highlighted: true,
  },
  {
    en: { name: "Enterprise", desc: "For complex, large-scale systems.", features: ["Everything in Business", "Custom architecture", "Dedicated infrastructure", "Ongoing support & SLA"] },
    fr: { name: "Enterprise", desc: "Pour des systèmes complexes à grande échelle.", features: ["Tout ce qui est dans Business", "Architecture sur mesure", "Infrastructure dédiée", "Support continu & SLA"] },
    highlighted: false,
  },
];

export default function Pricing() {
  const { lang } = useLanguage();

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Pricing" : "Tarifs"}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "Investment that fits your project" : "Un investissement adapté à votre projet"}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const content = lang === "en" ? tier.en : tier.fr;
            return (
              <motion.div
                key={content.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={"relative rounded-2xl p-8 border " + (tier.highlighted ? "border-primary bg-surface" : "border-border bg-surface/50")}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-mono text-white">
                    {lang === "en" ? "Most Popular" : "Le Plus Choisi"}
                  </span>
                )}
                <h3 className="font-display text-xl font-medium mb-2">{content.name}</h3>
                <p className="text-sm text-muted mb-6">{content.desc}</p>
                <p className="font-display text-lg font-medium text-primary-light mb-6">{lang === "en" ? "Contact us for a custom quote" : "Contactez-nous pour un devis"}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {content.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check size={16} className="text-primary-light flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={"block text-center rounded-lg py-3 text-sm font-medium transition-opacity hover:opacity-90 " + (tier.highlighted ? "bg-gradient-primary text-white" : "border border-border text-foreground")}>
                  {lang === "en" ? "Get Started" : "Commencer"}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}