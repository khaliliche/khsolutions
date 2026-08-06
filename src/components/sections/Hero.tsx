"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import StatCounter from "@/components/ui/StatCounter";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(229,40,63,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-mono text-muted mb-7">
          <span className="h-1.5 w-1.5 bg-primary animate-pulse" />
          {t.hero.eyebrow}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-foreground">
          {t.hero.headline}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto">
          {t.hero.subheadline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/212713805656?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity">
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-border-hover hover:bg-surface transition-colors">
            <Play size={14} />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          <StatCounter value={30} suffix="+" label={lang === "en" ? "Projects" : "Projets"} />
          <StatCounter value={98} suffix="%" label={lang === "en" ? "Satisfaction" : "Satisfaction"} />
          <StatCounter value={24} suffix="h" label={lang === "en" ? "Response" : "Réponse"} />
        </motion.div>
      </div>
    </section>
  );
}