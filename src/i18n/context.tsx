"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { en } from "./en";
import { fr } from "./fr";
import { Dict } from "./types";
import { Lang, langFromPath, alternatePath } from "./routes";

const dictionaries: Record<Lang, Dict> = { en, fr };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const lang: Lang = initialLang ?? langFromPath(pathname);

  // Keep <html lang> in sync after load (the server-rendered root layout is static "en").
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    router.push(alternatePath(pathname, next) ?? (next === "fr" ? "/fr" : "/"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}