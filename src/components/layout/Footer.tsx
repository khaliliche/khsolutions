"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/context";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";

export default function Footer() {
  const { t, lang } = useLanguage();
  const pages = [
    { href: "/#home", label: t.nav.home }, { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio }, { href: "/#process", label: t.nav.process },
    { href: "/#pricing", label: t.nav.pricing }, { href: "/#contact", label: t.nav.contact },
  ];
  const socials = [
    { Icon: MessageCircle, href: "https://wa.me/212713805656", label: "WhatsApp" },
    { Icon: GithubIcon, href: "https://github.com/khaliliche", label: "GitHub" },
    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/khalil-iche-32688a358/", label: "LinkedIn" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/k4alil5/", label: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
              KH<span className="text-primary">Solutions</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {lang === "en" ? "Smart software for everyday business. Websites, automation and AI systems built for Moroccan businesses." : "Des logiciels intelligents pour votre entreprise. Sites web, automatisation et IA pour les entreprises marocaines."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors duration-300 hover:border-primary hover:text-primary-light">
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer pages">
            <p className="tech-label">{lang === "en" ? "Pages" : "Pages"}</p>
            <ul className="mt-5 space-y-3">
              {pages.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer services">
            <p className="tech-label">{lang === "en" ? "Services" : "Services"}</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted transition-colors hover:text-foreground">
                    {lang === "en" ? s.en.title : s.fr.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="tech-label">{lang === "en" ? "Contact" : "Contact"}</p>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-center gap-3"><Phone size={14} className="text-primary-light" aria-hidden="true" /> +212 713 805 656</li>
              <li className="flex items-center gap-3"><MapPin size={14} className="text-primary-light" aria-hidden="true" /> Rabat, Morocco</li>
            </ul>
            <a href="https://wa.me/212713805656" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-[13px] font-medium text-white">
              {lang === "en" ? "Book a free consultation" : "Consultation gratuite"}
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} KHSolutions. {lang === "en" ? "All rights reserved." : "Tous droits réservés."}</span>
          <span>{lang === "en" ? "Built with Next.js" : "Développé avec Next.js"}</span>
        </div>
      </div>
    </footer>
  );
}