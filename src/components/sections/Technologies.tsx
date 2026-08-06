"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/context";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  const { lang } = useLanguage();
  const loop = [...technologies, ...technologies];

  return (
    <section id="technologies" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Our Stack" : "Notre Stack"}</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "Built on modern technology" : "Construit sur une technologie moderne"}</h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((tech, i) => (
            <div key={tech + i} className="flex-shrink-0 rounded-xl border border-border bg-surface px-6 py-4 font-mono text-sm text-muted hover:text-foreground hover:border-border-hover transition-colors">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}