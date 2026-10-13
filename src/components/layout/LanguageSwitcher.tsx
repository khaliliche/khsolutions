"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/context";
import { alternatePath, type Lang } from "@/i18n/routes";

const LANGS: Lang[] = ["en", "fr"];

export default function LanguageSwitcher() {
  const { lang } = useLanguage();
  const pathname = usePathname() ?? "/";

  const targets = LANGS.map((l) => ({ l, href: alternatePath(pathname, l) }));
  // This page has no version in the other language: don't show a switcher that cannot work.
  if (targets.some((tg) => tg.href === null)) return null;

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1 text-xs font-mono">
      {targets.map(({ l, href }) =>
        l === lang ? (
          <span
            key={l}
            aria-current="true"
            className="px-2.5 py-1 rounded-full uppercase tracking-wide bg-primary text-white"
          >
            {l}
          </span>
        ) : (
          <Link
            key={l}
            href={href as string}
            hrefLang={l}
            lang={l}
            className="px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors text-muted hover:text-foreground"
          >
            {l}
          </Link>
        )
      )}
    </div>
  );
}