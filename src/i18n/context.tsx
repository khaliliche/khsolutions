"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} 
from "react";
import { en } from "./en";
import { fr } from "./fr";
import { Dict } from "./types";

type Lang = "en" | "fr";

const dictionaries: Record<Lang, Dict> = { en, fr };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("khs-lang") as Lang | null;
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("khs-lang", newLang);
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