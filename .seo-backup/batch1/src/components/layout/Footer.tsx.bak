
"use client";

import { useLanguage } from "@/i18n/context";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  const socials = [
    { Icon: MessageCircle, href: "https://wa.me/212713805656" },
    { Icon: GithubIcon, href: "https://github.com/khaliliche" },
    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/khalil-iche-32688a358/" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/k4alil5/" },
  ];

  return (
    <footer className="relative border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <a href="#home" className="font-display font-semibold text-lg tracking-tight">
            KH<span className="text-primary">Solutions</span>
          </a>
          <p className="mt-2 text-sm text-muted max-w-xs">{lang === "en" ? "Smart software for everyday business." : "Des logiciels intelligents pour votre entreprise."}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.href.includes("wa.me") ? "WhatsApp" : s.href.includes("github") ? "GitHub" : s.href.includes("linkedin") ? "LinkedIn" : "Instagram"} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary-light transition-colors">
              <s.Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
        <span>© {new Date().getFullYear()} KHSolutions. {lang === "en" ? "All rights reserved." : "Tous droits réservés."}</span>
        <span>{lang === "en" ? "Built with Next.js" : "Développé avec Next.js"}</span>
      </div>
    </footer>
  );
}