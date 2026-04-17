import React from "react";
import { portfolioData } from "../data";
import { useLanguage } from "../LanguageContext";
// FontAwesome icons
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function About() {
  const { language, t } = useLanguage();

  const location = {
    en: "Nador, Morocco",
    fr: "Nador, Maroc",
  };

  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-theme transition-colors duration-300"
    >
      {/* Title Section */}
      <div className="text-center mb-20 relative">
        <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">
          {t("about.discovery")}
        </h2>
        <h3 className="text-4xl md:text-7xl font-black uppercase">
          {t("about.whoIAm")}
        </h3>
      </div>

      {/* Profile Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition duration-500"></div>
          <img
            src="/DSC_6865.jpg"
            alt="Fouad Lamrini"
            className="relative w-full h-[500px] object-cover rounded-[32px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-theme"
          />
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] leading-tight">
            Passionné par le développement{" "}
            <span className="text-primary italic font-serif">Full Stack</span>{" "}
            et l'innovation digitale.
          </h4>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light">
            {t("about.aboutDesc")}
          </p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-secondary font-bold">
            {t("about.getInTouch")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Email */}
          <div className="flex flex-col items-center justify-center text-center backdrop-blur-md p-6 rounded-[32px] border border-theme hover:border-primary/40 transition-all group bg-glass">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <FaEnvelope className="text-xl text-primary" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-black">
              {t("about.email")}
            </p>
            <h4 className="text-[12px] font-bold text-[var(--text-heading)] break-all leading-tight">
              {portfolioData.contact.email}
            </h4>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center text-center backdrop-blur-md p-6 rounded-[32px] border border-theme hover:border-primary/40 transition-all group bg-glass">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <FaPhoneAlt className="text-xl text-primary" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-black">
              {t("about.phone")}
            </p>
            <h4 className="text-sm font-black text-[var(--text-heading)]">
              +212 6 22 46 19 37
            </h4>
          </div>

          {/* LinkedIn */}
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center text-center backdrop-blur-md p-6 rounded-[32px] border border-theme hover:border-[#0077b5]/60 transition-all group bg-glass"
          >
            <div className="w-14 h-14 bg-[#0077b5]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <FaLinkedin className="text-xl text-[#0077b5]" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-black">
              LinkedIn
            </p>
            <h4 className="text-sm font-black text-[var(--text-heading)]">Fouad Lamrini</h4>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center text-center backdrop-blur-md p-6 rounded-[32px] border border-theme hover:border-primary/40 transition-all group bg-glass"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <FaGithub className="text-xl text-primary" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-black">
              {t("about.github")}
            </p>
            <h4 className="text-sm font-black text-[var(--text-heading)] tracking-tight">
              @{portfolioData.contact.github.split("/").pop()}
            </h4>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center justify-center text-center backdrop-blur-md p-6 rounded-[32px] border border-theme hover:border-primary/40 transition-all group bg-glass">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <FaMapMarkerAlt className="text-xl text-primary" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-subtle)] mb-2 font-black">
              {t("about.location")}
            </p>
            <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase">
              {location[language] || location.en}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
