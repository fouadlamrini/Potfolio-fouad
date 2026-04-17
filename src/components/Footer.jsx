import React from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const { contact } = portfolioData;

  const roleText = {
    en: "Full Stack Web Developer",
    fr: "Développeur Web Full Stack",
  };
  const copyrightLocation = {
    en: "NADOR / MOROCCO",
    fr: "NADOR / MAROC",
  };

  return (
    <footer
      id="contact"
      className="bg-dark pt-32 pb-12 px-6 border-t border-theme relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section: Have a project in mind? */}
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-10">
            {t("footer.contact")}
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            {/* BIG TITLE */}
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-[var(--text-heading)] uppercase">
              {t("footer.haveProjectTitle")}
            </h3>
            
            {/* NORMAL DESCRIPTION */}
            <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-light">
              {t("footer.haveProjectDesc")}
            </p>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold border-b-2 border-primary pb-2 hover:text-primary transition-all group"
          >
            {t("footer.letsTalk")}{" "}
            <ArrowUpRight
              size={40}
              className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Info Grid: Email, WhatsApp, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="backdrop-blur-sm p-10 rounded-[32px] border border-theme hover:border-primary/30 transition-all group bg-glass">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-bold">{t("footer.emailMe")}</h4>
            <p className="text-lg font-bold text-[var(--text-heading)] break-words">{contact.email}</p>
          </div>

          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="backdrop-blur-sm p-10 rounded-[32px] border border-theme hover:border-secondary/30 transition-all group bg-glass"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <MessageCircle className="text-secondary" size={24} />
            </div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-bold">{t("footer.whatsapp")}</h4>
            <p className="text-lg font-bold text-[var(--text-heading)]">{contact.whatsapp}</p>
          </a>

          <div className="backdrop-blur-sm p-10 rounded-[32px] border border-theme hover:border-primary/25 transition-all group bg-glass">
            <div className="w-12 h-12 bg-glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-glass-hover transition-colors">
              <Phone className="text-[var(--text-muted)]" size={24} />
            </div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-bold">{t("footer.callMe")}</h4>
            <p className="text-lg font-bold text-[var(--text-heading)]">{contact.phone}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grid md:grid-cols-3 gap-10 pt-12 border-t border-theme items-center">
          <div className="text-left text-[10px] text-[var(--text-subtle)] tracking-[0.2em] uppercase font-medium">
            © 2026 F.L — {copyrightLocation[language] || copyrightLocation.en}
          </div>

          <div className="flex justify-center gap-10">
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-[var(--text-subtle)] hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-subtle)] hover:text-secondary transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>

          <div className="text-right text-[10px] text-[var(--text-subtle)] tracking-[0.2em] uppercase italic font-serif">
            {roleText[language] || roleText.en}
          </div>
        </div>
      </div>
    </footer>
  );
}