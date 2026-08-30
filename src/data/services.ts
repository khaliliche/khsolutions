import {
  Globe, Workflow, Bot, CalendarCheck, LayoutDashboard,
  QrCode, Hotel, Package, Users, ShoppingCart, ServerCog,
} from "lucide-react";

export const services = [
  {
    slug: "website-development",
    icon: Globe,
    en: { title: "Website Development", desc: "Fast, modern websites built to convert visitors into clients.", long: "We design and build fast, modern websites for Moroccan businesses that need to look credible online and turn visitors into paying customers. Every site is built with Next.js for speed, mobile-first layouts, and clear calls to action - whether you are a local shop, a service business, or a growing brand. We handle everything from design to deployment, so you get a live, working website, not just a template." },
    fr: { title: "Developpement Web", desc: "Des sites modernes et rapides, concus pour convertir.", long: "Nous concevons des sites web rapides et modernes pour les entreprises marocaines qui veulent une presence en ligne credible et convertir leurs visiteurs en clients. Chaque site est developpe avec Next.js pour la vitesse, une conception mobile-first et des appels a l'action clairs - que vous soyez un commerce local, une entreprise de services ou une marque en croissance. Nous gerons tout, du design au deploiement." },
  },
  {
    slug: "business-automation",
    icon: Workflow,
    en: { title: "Business Automation", desc: "Automate repetitive tasks and free up your team's time.", long: "We build custom automation systems that remove the repetitive manual work slowing your business down - order processing, follow-up messages, internal notifications, data entry between tools. For Moroccan SMEs juggling WhatsApp, email, and spreadsheets, we connect these into one automated flow so your team spends less time on admin and more time on customers." },
    fr: { title: "Automatisation", desc: "Automatisez les taches repetitives de votre entreprise.", long: "Nous developpons des systemes d'automatisation sur mesure qui eliminent les taches manuelles repetitives qui ralentissent votre entreprise - traitement des commandes, relances, notifications internes, saisie de donnees entre outils. Pour les PME marocaines jonglant entre WhatsApp, email et tableurs, nous connectons tout cela en un flux automatise unique." },
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    en: { title: "AI Chatbots", desc: "Custom AI assistants that handle support and sales 24/7.", long: "We build custom AI chatbots trained on your business - your products, pricing, and FAQs - so customers get instant answers on your website or WhatsApp at any hour. This is especially valuable for Moroccan businesses selling on Instagram or WhatsApp, where quick replies to pricing and availability questions directly translate into sales." },
    fr: { title: "Chatbots IA", desc: "Assistants IA sur mesure, disponibles 24h/24.", long: "Nous creons des chatbots IA personnalises, formes sur les donnees de votre entreprise - produits, tarifs, questions frequentes - pour repondre instantanement a vos clients sur votre site ou WhatsApp, a toute heure. C'est particulierement utile pour les entreprises marocaines qui vendent sur Instagram ou WhatsApp, ou une reponse rapide se traduit directement en ventes." },
  },
  {
    slug: "booking-systems",
    icon: CalendarCheck,
    en: { title: "Booking Systems", desc: "Seamless scheduling and reservation systems.", long: "We build online booking and reservation systems for salons, spas, event venues, and service businesses - letting clients pick a slot, get confirmation automatically, and reducing no-shows with reminders. No more managing appointments by phone or DM." },
    fr: { title: "Systemes de Reservation", desc: "Des reservations fluides et sans friction.", long: "Nous developpons des systemes de reservation en ligne pour salons, spas, salles d'evenements et entreprises de services - permettant aux clients de choisir un creneau et de recevoir une confirmation automatique, tout en reduisant les rendez-vous manques grace a des rappels." },
  },
  {
    slug: "dashboard-development",
    icon: LayoutDashboard,
    en: { title: "Dashboard Development", desc: "Real-time dashboards that turn data into decisions.", long: "We build custom dashboards that pull your business data - sales, stock, tickets, leads - into one real-time view, so you can make decisions without digging through spreadsheets. Built for owners and managers who need clarity, not more raw data." },
    fr: { title: "Tableaux de Bord", desc: "Des donnees en temps reel, pretes a decider.", long: "Nous creons des tableaux de bord sur mesure qui regroupent vos donnees - ventes, stock, tickets, prospects - dans une vue en temps reel, pour decider sans fouiller dans des tableurs. Concu pour les dirigeants qui ont besoin de clarte, pas de donnees brutes supplementaires." },
  },
  {
    slug: "qr-menu-systems",
    icon: QrCode,
    en: { title: "QR Menu Systems", desc: "Digital menus that update instantly, no reprints.", long: "We build digital QR-code menus for restaurants and cafes in Morocco - update prices or dishes instantly without reprinting a single page, with a clean mobile-friendly menu customers can browse on their own phone." },
    fr: { title: "Menus QR", desc: "Menus numeriques mis a jour instantanement.", long: "Nous creons des menus digitaux a code QR pour les restaurants et cafes au Maroc - modifiez les prix ou les plats instantanement sans jamais reimprimer, avec un menu mobile clair que les clients consultent sur leur propre telephone." },
  },
  {
    slug: "hotel-checkin-systems",
    icon: Hotel,
    en: { title: "Hotel Check-in Systems", desc: "Streamlined check-in for modern hospitality.", long: "We build digital check-in systems for riads, guesthouses, and hotels - collecting guest details ahead of arrival, reducing front-desk wait times, and giving a more modern first impression to international travelers." },
    fr: { title: "Check-in Hotelier", desc: "Un enregistrement fluide pour l'hotellerie moderne.", long: "Nous developpons des systemes d'enregistrement digital pour riads, maisons d'hotes et hotels - recueillant les informations des clients avant leur arrivee, reduisant l'attente a la reception et offrant une premiere impression plus moderne aux voyageurs internationaux." },
  },
  {
    slug: "inventory-management",
    icon: Package,
    en: { title: "Inventory Management", desc: "Track stock across locations in real time.", long: "We build inventory management systems for retailers and workshops tracking stock across one or several locations - knowing what's in stock, what's low, and what's selling, in real time instead of a manual count." },
    fr: { title: "Gestion de Stock", desc: "Suivez votre inventaire en temps reel.", long: "Nous developpons des systemes de gestion de stock pour commercants et ateliers suivant leurs stocks sur un ou plusieurs sites - savoir ce qui est disponible, ce qui manque, et ce qui se vend, en temps reel plutot qu'a travers un inventaire manuel." },
  },
  {
    slug: "crm-systems",
    icon: Users,
    en: { title: "CRM Systems", desc: "Manage leads and clients in one clean pipeline.", long: "We build CRM systems that organize your leads and clients into one clear pipeline - who to follow up with, what stage they're at, and what was discussed - replacing scattered notes across WhatsApp and notebooks." },
    fr: { title: "Systemes CRM", desc: "Gerez vos clients dans un pipeline unique.", long: "Nous developpons des systemes CRM qui organisent vos prospects et clients dans un pipeline clair - qui relancer, a quelle etape, et ce qui a ete discute - remplacant les notes eparpillees entre WhatsApp et carnets." },
  },
  {
    slug: "ecommerce-solutions",
    icon: ShoppingCart,
    en: { title: "E-commerce Solutions", desc: "Online stores built to scale with your business.", long: "We build online stores for Moroccan brands ready to sell beyond Instagram DMs - full product catalogs, cart-to-WhatsApp or card checkout, and an admin panel to manage orders and stock yourself, no monthly platform fees." },
    fr: { title: "Solutions E-commerce", desc: "Des boutiques en ligne pensees pour grandir.", long: "Nous creons des boutiques en ligne pour les marques marocaines pretes a vendre au-dela des DM Instagram - catalogue complet, commande vers WhatsApp ou paiement par carte, et un panneau d'administration pour gerer vous-meme commandes et stock, sans frais mensuels de plateforme." },
  },
  {
    slug: "hosting-maintenance",
    icon: ServerCog,
    en: { title: "Hosting & Maintenance", desc: "Reliable hosting and ongoing support, always on.", long: "We handle hosting, uptime, and ongoing maintenance for every site we build - so you never have to think about servers, security updates, or downtime. Just a website that stays online and up to date." },
    fr: { title: "Hebergement & Maintenance", desc: "Un hebergement fiable et un support continu.", long: "Nous prenons en charge l'hebergement, la disponibilite et la maintenance de chaque site que nous developpons - pour que vous n'ayez jamais a vous soucier des serveurs, des mises a jour de securite ou des pannes." },
  },
];
