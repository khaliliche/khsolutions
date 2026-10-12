"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#process", label: t.nav.process },
    { href: "#technologies", label: t.nav.technologies },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={"fixed top-0 inset-x-0 z-50 transition-all duration-300 " + (scrolled ? "glass shadow-[0_1px_0_0_var(--border)]" : "bg-transparent")}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight">
          KH<span className="text-primary">Solutions</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 font-mono text-[13px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a href="https://wa.me/212713805656?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity">
            {t.hero.ctaPrimary}
          </a>
        </div>

        <button aria-label={open ? "Close menu" : "Open menu"} className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-sm text-muted hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/212713805656?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-white text-center">
            {t.hero.ctaPrimary}
          </a>
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}