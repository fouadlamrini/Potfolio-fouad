import React from "react";
import { portfolioData } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Journey() {
  const { language, t } = useLanguage();

  return (
    <section
      id="journey"
      className="py-32 px-6 max-w-6xl mx-auto border-t border-theme transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-12">
            {t("journey.experience")}
          </h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="group border-b border-theme pb-8">
                <span className="text-xs font-mono text-[var(--text-subtle)]">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors text-[var(--text-heading)]">
                  {exp.title[language] || exp.title.en || exp.title}
                </h3>
                <p className="text-[var(--text-muted)] mt-1">{exp.company}</p>
                <p className="text-[var(--text-subtle)] text-sm">
                  {exp.location[language] || exp.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-secondary font-bold mb-12">
            {t("journey.education")}
          </h2>
          <div className="space-y-12">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="border-b border-theme pb-8">
                <span className="text-xs font-mono text-[var(--text-subtle)]">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold mt-2 text-[var(--text-heading)]">
                  {edu.degree[language] || edu.degree.en || edu.degree}
                </h3>
                <p className="text-[var(--text-muted)] mt-1">
                  {edu.school[language] || edu.school.en || edu.school}
                </p>
                <p className="text-[var(--text-subtle)] text-sm">
                  {edu.location[language] || edu.location.en || edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
