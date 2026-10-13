import {
  Globe, Workflow, Bot, CalendarCheck, LayoutDashboard,
  QrCode, Hotel, Package, Users, ShoppingCart, ServerCog,
} from "lucide-react";

export const services = [
  {
    slug: "website-development",
    icon: Globe,
    en: { title: "Website Development", desc: "Fast, modern websites built to convert visitors into clients.", long: "We design and build fast, modern websites for Moroccan businesses that need to look credible online and turn visitors into paying customers. Every site is built with Next.js for speed, mobile-first layouts, and clear calls to action - whether you are a local shop, a service business, or a growing brand. We handle everything from design to deployment, so you get a live, working website, not just a template." },
    fr: { title: "Développement Web", desc: "Des sites modernes et rapides, conçus pour convertir.", long: "Nous concevons des sites web rapides et modernes pour les entreprises marocaines qui veulent une présence en ligne crédible et convertir leurs visiteurs en clients. Chaque site est développé avec Next.js pour la vitesse, une conception mobile-first et des appels à l'action clairs - que vous soyez un commerce local, une entreprise de services ou une marque en croissance. Nous gérons tout, du design au déploiement." },
  },
  {
    slug: "business-automation",
    icon: Workflow,
    en: { title: "Business Automation", desc: "Automate repetitive tasks and free up your team's time.", long: "We build custom automation systems that remove the repetitive manual work slowing your business down - order processing, follow-up messages, internal notifications, data entry between tools. For Moroccan SMEs juggling WhatsApp, email, and spreadsheets, we connect these into one automated flow so your team spends less time on admin and more time on customers." },
    fr: { title: "Automatisation", desc: "Automatisez les tâches répétitives de votre entreprise.", long: "Nous développons des systèmes d'automatisation sur mesure qui éliminent les tâches manuelles répétitives qui ralentissent votre entreprise - traitement des commandes, relances, notifications internes, saisie de données entre outils. Pour les PME marocaines qui jonglent entre WhatsApp, e-mail et tableurs, nous connectons tout cela en un flux automatisé unique." },
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    en: { title: "AI Chatbots", desc: "Custom AI assistants that handle support and sales 24/7.", long: "We build custom AI chatbots trained on your business - your products, pricing, and FAQs - so customers get instant answers on your website or WhatsApp at any hour. This is especially valuable for Moroccan businesses selling on Instagram or WhatsApp, where quick replies to pricing and availability questions directly translate into sales." },
    fr: { title: "Chatbots IA", desc: "Assistants IA sur mesure, disponibles 24h/24.", long: "Nous créons des chatbots IA personnalisés, formés sur les données de votre entreprise - produits, tarifs, questions fréquentes - pour répondre instantanément à vos clients sur votre site ou WhatsApp, à toute heure. C'est particulièrement utile pour les entreprises marocaines qui vendent sur Instagram ou WhatsApp, où une réponse rapide se traduit directement en ventes." },
  },
  {
    slug: "booking-systems",
    icon: CalendarCheck,
    en: { title: "Booking Systems", desc: "Seamless scheduling and reservation systems.", long: "We build online booking and reservation systems for salons, spas, event venues, and service businesses - letting clients pick a slot, get confirmation automatically, and reducing no-shows with reminders. No more managing appointments by phone or DM." },
    fr: { title: "Systèmes de Réservation", desc: "Des réservations fluides et sans friction.", long: "Nous développons des systèmes de réservation en ligne pour salons, spas, salles d'événements et entreprises de services - permettant aux clients de choisir un créneau et de recevoir une confirmation automatique, tout en réduisant les rendez-vous manqués grâce à des rappels." },
  },
  {
    slug: "dashboard-development",
    icon: LayoutDashboard,
    en: { title: "Dashboard Development", desc: "Real-time dashboards that turn data into decisions.", long: "We build custom dashboards that pull your business data - sales, stock, tickets, leads - into one real-time view, so you can make decisions without digging through spreadsheets. Built for owners and managers who need clarity, not more raw data." },
    fr: { title: "Tableaux de Bord", desc: "Des données en temps réel, prêtes à décider.", long: "Nous créons des tableaux de bord sur mesure qui regroupent vos données - ventes, stock, tickets, prospects - dans une vue en temps réel, pour décider sans fouiller dans des tableurs. Conçu pour les dirigeants qui ont besoin de clarté, pas de données brutes supplémentaires." },
  },
  {
    slug: "qr-menu-systems",
    icon: QrCode,
    en: { title: "QR Menu Systems", desc: "Digital menus that update instantly, no reprints.", long: "We build digital QR-code menus for restaurants and cafes in Morocco - update prices or dishes instantly without reprinting a single page, with a clean mobile-friendly menu customers can browse on their own phone." },
    fr: { title: "Menus QR", desc: "Menus numériques mis à jour instantanément.", long: "Nous créons des menus digitaux à code QR pour les restaurants et cafés au Maroc - modifiez les prix ou les plats instantanément sans jamais réimprimer, avec un menu mobile clair que les clients consultent sur leur propre téléphone." },
  },
  {
    slug: "hotel-checkin-systems",
    icon: Hotel,
    en: { title: "Hotel Check-in Systems", desc: "Streamlined check-in for modern hospitality.", long: "We build digital check-in systems for riads, guesthouses, and hotels - collecting guest details ahead of arrival, reducing front-desk wait times, and giving a more modern first impression to international travelers." },
    fr: { title: "Check-in Hôtelier", desc: "Un enregistrement fluide pour l'hôtellerie moderne.", long: "Nous développons des systèmes d'enregistrement digital pour riads, maisons d'hôtes et hôtels - recueillant les informations des clients avant leur arrivée, réduisant l'attente à la réception et offrant une première impression plus moderne aux voyageurs internationaux." },
  },
  {
    slug: "inventory-management",
    icon: Package,
    en: { title: "Inventory Management", desc: "Track stock across locations in real time.", long: "We build inventory management systems for retailers and workshops tracking stock across one or several locations - knowing what's in stock, what's low, and what's selling, in real time instead of a manual count." },
    fr: { title: "Gestion de Stock", desc: "Suivez votre inventaire en temps réel.", long: "Nous développons des systèmes de gestion de stock pour commerçants et ateliers qui suivent leurs stocks sur un ou plusieurs sites - savoir ce qui est disponible, ce qui manque, et ce qui se vend, en temps réel plutôt qu'à travers un inventaire manuel." },
  },
  {
    slug: "crm-systems",
    icon: Users,
    en: { title: "CRM Systems", desc: "Manage leads and clients in one clean pipeline.", long: "We build CRM systems that organize your leads and clients into one clear pipeline - who to follow up with, what stage they're at, and what was discussed - replacing scattered notes across WhatsApp and notebooks." },
    fr: { title: "Systèmes CRM", desc: "Gérez vos clients dans un pipeline unique.", long: "Nous développons des systèmes CRM qui organisent vos prospects et clients dans un pipeline clair - qui relancer, à quelle étape, et ce qui a été discuté - remplaçant les notes éparpillées entre WhatsApp et carnets." },
  },
  {
    slug: "ecommerce-solutions",
    icon: ShoppingCart,
    en: { title: "E-commerce Solutions", desc: "Online stores built to scale with your business.", long: "We build online stores for Moroccan brands ready to sell beyond Instagram DMs - full product catalogs, cart-to-WhatsApp or card checkout, and an admin panel to manage orders and stock yourself, no monthly platform fees." },
    fr: { title: "Solutions E-commerce", desc: "Des boutiques en ligne pensées pour grandir.", long: "Nous créons des boutiques en ligne pour les marques marocaines prêtes à vendre au-delà des DM Instagram - catalogue complet, commande vers WhatsApp ou paiement par carte, et un panneau d'administration pour gérer vous-même commandes et stock, sans frais mensuels de plateforme." },
  },
  {
    slug: "hosting-maintenance",
    icon: ServerCog,
    en: { title: "Hosting & Maintenance", desc: "Reliable hosting and ongoing support, always on.", long: "We handle hosting, uptime, and ongoing maintenance for every site we build - so you never have to think about servers, security updates, or downtime. Just a website that stays online and up to date." },
    fr: { title: "Hébergement & Maintenance", desc: "Un hébergement fiable et un support continu.", long: "Nous prenons en charge l'hébergement, la disponibilité et la maintenance de chaque site que nous développons - pour que vous n'ayez jamais à vous soucier des serveurs, des mises à jour de sécurité ou des pannes." },
  },
];
