"use client";

import { useLanguage } from "@/i18n/context";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1 text-xs font-mono">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors cursor-pointer ${
            lang === l
              ? "bg-primary text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}