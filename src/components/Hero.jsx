import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { useLanguage } from "../LanguageContext";
// React Icons imports
import { FiChevronRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  const { language, t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const roles = portfolioData.roles[language] || portfolioData.roles.en;
  const currentRole = roles[index];
  const typingSpeed = isDeleting ? 50 : 100;

  // Scroll to projects function
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, currentRole, typingSpeed, roles]);

  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-dark pt-20 transition-[background-color,color] duration-300 ease-out">
      {/* Status: Available */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 flex items-center gap-2 text-[10px] tracking-[0.3em] text-secondary font-bold uppercase"
      >
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        {t("hero.status")}
      </motion.div>

      {/* Name */}
      <h1 className="text-7xl md:text-[140px] font-black leading-[0.8] text-center mb-6 select-none text-[var(--text-heading)] transition-colors duration-300">
        {portfolioData.firstName} <br />
        <span className="hero-name-gradient text-transparent bg-clip-text italic font-serif transition-[background-image] duration-300">
          {portfolioData.lastName}
        </span>
      </h1>

      {/* Typewriter - FIXED SECTION */}
      <div className="h-10 text-xl md:text-2xl font-mono text-[var(--text-muted)] mb-12 flex items-center">
        {/* We use standard characters inside strings to avoid HTML entity issues */}
        <span className="text-primary">{"<"}</span>
        <span className="text-[var(--text-heading)] mx-2">{displayText}</span>
        <span className="w-[2px] h-6 bg-primary animate-pulse inline-block"></span>
        <span className="text-primary">{">"}</span>
      </div>

      {/* Separator line */}
      <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent mb-12" />

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 items-center z-20">
        <button
          onClick={scrollToProjects}
          className="group font-black px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 shadow-2xl bg-[var(--hero-btn-bg)] text-[var(--hero-btn-text)] hover:bg-primary hover:text-white"
        >
          {t("hero.viewProjects")}
          <FiChevronRight
            size={22}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowCV(!showCV)}
            className="text-[var(--text-heading)] border border-[var(--hero-btn-outline)] px-10 py-5 rounded-full bg-glass hover:bg-glass-hover transition-all uppercase text-sm font-bold tracking-widest flex items-center gap-2"
          >
            <FiDownload size={18} /> {t("hero.downloadCV")}
          </button>

          <AnimatePresence>
            {showCV && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-4 backdrop-blur-xl border border-theme rounded-2xl p-2 w-56 z-50 shadow-2xl bg-[var(--modal-bg)]/95"
              >
                {portfolioData.cvs.map((cv, i) => (
                  <a
                    key={i}
                    href={cv.file}
                    download
                    className="flex items-center gap-3 p-3 hover:bg-primary/20 rounded-xl text-xs text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {cv.label[language] || cv.label.en || cv.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}