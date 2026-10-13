import {
  SITE_URL,
  SITE_NAME,
  SITE_ALT_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_TITLE_FR,
  SITE_DESCRIPTION_FR,
  PHONE,
  SOCIAL_LINKS,
  FOUNDER,
} from "@/lib/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import type { Lang } from "@/i18n/routes";

type Node = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#founder`;

const urlFor = (path: string) => (path === "/" || path === "" ? SITE_URL : `${SITE_URL}${path}`);

export function graph(nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/* ---------- site-wide entities (rendered in the root layout) ---------- */

export function organizationNode(): Node {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: [SITE_ALT_NAME],
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE,
    address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
    areaServed: { "@type": "Country", name: "Morocco" },
    founder: { "@id": PERSON_ID },
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: [SITE_ALT_NAME],
    inLanguage: ["en", "fr"],
    publisher: { "@id": ORG_ID },
  };
}

export function founderNode(): Node {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER.name,
    url: SITE_URL,
    knowsAbout: ["Web development", "Artificial intelligence"],
    worksFor: { "@id": ORG_ID },
    sameAs: FOUNDER.sameAs,
  };
}

export function siteGraph() {
  return graph([organizationNode(), websiteNode(), founderNode()]);
}

/* ---------- page-level pieces ---------- */

function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
  lang: Lang;
  type?: "WebPage" | "CollectionPage";
  breadcrumb?: boolean;
}): Node {
  const url = urlFor(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(opts.breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

function breadcrumbNode(path: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${urlFor(path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: urlFor(it.path),
    })),
  };
}

function faqNode(lang: Lang, path: string): Node {
  return {
    "@type": "FAQPage",
    "@id": `${urlFor(path)}#faq`,
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f[lang].q,
      acceptedAnswer: { "@type": "Answer", text: f[lang].a },
    })),
  };
}

const homeLabel = (lang: Lang) => (lang === "fr" ? "Accueil" : "Home");
const homePath = (lang: Lang) => (lang === "fr" ? "/fr" : "/");
const servicesPath = (lang: Lang) => (lang === "fr" ? "/fr/services" : "/services");

/* ---------- page graphs ---------- */

export function homeGraph(lang: Lang) {
  const path = homePath(lang);
  return graph([
    webPageNode({
      path,
      lang,
      name: lang === "fr" ? SITE_TITLE_FR : SITE_TITLE,
      description: lang === "fr" ? SITE_DESCRIPTION_FR : SITE_DESCRIPTION,
    }),
    faqNode(lang, path),
  ]);
}

export function servicesIndexGraph(lang: Lang) {
  const path = servicesPath(lang);
  return graph([
    webPageNode({
      path,
      lang,
      type: "CollectionPage",
      breadcrumb: true,
      name:
        lang === "fr"
          ? "Services : développement web, IA et automatisation au Maroc"
          : "Services: Web Development, AI & Automation in Morocco",
      description:
        lang === "fr"
          ? "Sites web, automatisation, chatbots IA, CRM, tableaux de bord et e-commerce pour les entreprises marocaines."
          : "Websites, business automation, AI chatbots, CRMs, dashboards and e-commerce built for Moroccan businesses.",
    }),
    breadcrumbNode(path, [
      { name: homeLabel(lang), path: homePath(lang) },
      { name: "Services", path },
    ]),
  ]);
}

export function serviceGraph(slug: string, lang: Lang) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  const c = service[lang];
  const path = `${lang === "fr" ? "/fr" : ""}/services/${slug}`;
  const url = urlFor(path);
  const pageName = lang === "fr" ? `${c.title} au Maroc` : `${c.title} in Morocco`;

  return graph([
    webPageNode({ path, lang, name: pageName, description: c.desc, breadcrumb: true }),
    breadcrumbNode(path, [
      { name: homeLabel(lang), path: homePath(lang) },
      { name: "Services", path: servicesPath(lang) },
      { name: c.title, path },
    ]),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: c.title,
      serviceType: c.title,
      description: c.long,
      url,
      inLanguage: lang,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Morocco" },
    },
  ]);
}