import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.journey"), href: "#journey" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const langText = language === "fr" ? "FR / EN" : "EN / FR";
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md border-b border-theme transition-[background-color,border-color,color] duration-300 ease-out bg-[var(--header-bg)]">
      <div className="text-2xl font-black tracking-tighter text-[var(--text-heading)]">
        F<span className="text-primary">.</span>L
      </div>
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-2 text-[10px] border border-theme px-3 py-1 rounded-full text-[var(--text-muted)] cursor-pointer bg-glass hover:bg-glass-hover transition-all duration-300 select-none"
          onClick={toggleLanguage}
          onKeyDown={(e) => e.key === "Enter" && toggleLanguage()}
          role="button"
          tabIndex={0}
        >
          <span
            className="w-3 h-3 rounded-full border-2 border-current"
            style={{
              backgroundColor: language === "fr" ? "#8b5cf6" : "#06b6d4",
            }}
          />
          {langText}
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-theme text-[var(--text-muted)] bg-glass hover:bg-glass-hover transition-all duration-300"
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          title={isDark ? "Light mode" : "Dark mode"}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {!mounted ? (
            <Sun className="h-4 w-4 opacity-40" aria-hidden />
          ) : isDark ? (
            <Sun className="h-4 w-4" aria-hidden />
          ) : (
            <Moon className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
    </header>
  );
}
