"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

const WHATSAPP_NUMBER = "212713805656";
const GITHUB_URL = "https://github.com/khaliliche";
const LINKEDIN_URL = "https://www.linkedin.com/in/khalil-iche-32688a358/";
const INSTAGRAM_URL = "https://www.instagram.com/k4alil5/";

export default function Contact() {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const socials = [
    { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" + WHATSAPP_NUMBER },
    { Icon: GithubIcon, label: "GitHub", href: GITHUB_URL },
    { Icon: LinkedinIcon, label: "LinkedIn", href: LINKEDIN_URL },
    { Icon: InstagramIcon, label: "Instagram", href: INSTAGRAM_URL },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = "New inquiry from KHSolutions website:%0A" +
      "Name: " + encodeURIComponent(name) + "%0A" +
      "Phone: " + encodeURIComponent(phone) + "%0A" +
      "Message: " + encodeURIComponent(message);
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank");
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-primary-light">{lang === "en" ? "Let's Talk" : "Discutons"}</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{lang === "en" ? "Ready to build something great?" : "Prêt à créer quelque chose de grand ?"}</h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">{lang === "en" ? "Tell us about your project and we'll get back to you within 24 hours." : "Parlez-nous de votre projet, nous vous répondrons sous 24h."}</p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-10 rounded-2xl border border-border bg-surface p-8 text-left">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === "en" ? "Your name" : "Votre nom"} className="rounded-lg bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
            <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={lang === "en" ? "Your phone number" : "Votre numéro"} className="rounded-lg bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder={lang === "en" ? "Tell us about your project..." : "Parlez-nous de votre projet..."} rows={4} className="sm:col-span-2 rounded-lg bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none" />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity">
              <Send size={16} />
              {lang === "en" ? "Send Message" : "Envoyer"}
            </button>
          </form>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border bg-surface hover:border-primary hover:text-primary-light transition-colors">
              <s.Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}