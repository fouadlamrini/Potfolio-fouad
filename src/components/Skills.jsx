import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 bg-dark overflow-hidden transition-colors duration-300">
      <div className="px-6 max-w-6xl mx-auto mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-secondary font-bold">
          {t("skills.title")}
        </h2>
      </div>
      <div className="flex border-y border-theme py-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap px-10"
        >
          {[...portfolioData.skills, ...portfolioData.skills].map((s, i) => (
            <span
              key={i}
              className="text-7xl font-black uppercase outline-text opacity-50 hover:opacity-100 transition-opacity"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
