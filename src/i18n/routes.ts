export type Lang = "en" | "fr";

export function langFromPath(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/**
 * Path of the same page in the other language, or null when that page has no
 * translation yet (e.g. the portfolio). English lives at "/", French under "/fr".
 */
export function alternatePath(pathname: string, target: Lang): string | null {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const current = langFromPath(clean);
  if (current === target) return clean;

  const basePath = current === "fr" ? clean.replace(/^\/fr/, "") || "/" : clean;
  const translatable =
    basePath === "/" || basePath === "/services" || basePath.startsWith("/services/");
  if (!translatable) return null;

  if (target === "fr") return basePath === "/" ? "/fr" : `/fr${basePath}`;
  return basePath;
}