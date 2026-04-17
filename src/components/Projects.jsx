import React, { useState, useEffect, useMemo } from "react";
import { FaGithub, FaEye, FaArrowLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { portfolioData } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";

function dedupeSlidesInOrder(cover, gallery) {
  const list = [cover, ...(gallery || [])];
  return list.filter((url, i) => list.indexOf(url) === i);
}

export default function Projects() {
  const { language, t } = useLanguage();
  const [tab, setTab] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const projectSlides = useMemo(() => {
    if (!activeProject) return [];
    return dedupeSlidesInOrder(
      activeProject.coverImage,
      activeProject.gallery,
    );
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) setLightboxIndex(null);
  }, [activeProject]);

  useEffect(() => {
    if (lightboxIndex === null || projectSlides.length === 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i === null ? 0 : (i + 1) % projectSlides.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null
            ? 0
            : (i - 1 + projectSlides.length) % projectSlides.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, projectSlides.length]);

  /* Un seul scroll : on bloque le body ; le scroll se fait sur l’overlay (modal ou lightbox). */
  useEffect(() => {
    const lockScroll = activeProject !== null || lightboxIndex !== null;
    if (!lockScroll) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeProject, lightboxIndex]);

  const goPrev = () => {
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + projectSlides.length) % projectSlides.length,
    );
  };

  const goNext = () => {
    setLightboxIndex((i) =>
      i === null ? 0 : (i + 1) % projectSlides.length,
    );
  };

  const stacks = [
    {
      key: "mern",
      label: "MERN Stack",
      image: "/stack/mern.jpg",
      desc: "MongoDB, Express, React, Node.js",
    },
    {
      key: "laravel",
      label: "PHP & Laravel Stack",
      image: "/stack/php.jpg",
      desc: "Laravel, MySQL, Blade",
    },
  ];

  const getProjectText = (project) => {
    if (!project) return { title: "", desc: "", features: [] };
    return {
      title: project.title?.[language] || project.title?.en || "No Title",
      desc: project.desc?.[language] || project.desc?.en || "No Description",
      features: project.features?.map((f) => f[language] || f.en) || [],
    };
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto min-h-screen relative transition-colors duration-300">
      {/* --- HEADER --- */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl text-[var(--text-heading)] font-black uppercase mb-4 tracking-tighter">
          {t("projects.title")}
        </h2>
        <p className="text-secondary tracking-widest uppercase text-sm font-bold flex items-center justify-center gap-2">
          <AiOutlineProject size={18} />
          {tab ? `${t("projects.exploreStack")} ${tab}` : t("projects.chooseStack")}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!tab ? (
          <motion.div
            key="stack-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {stacks.map((stack) => (
              <div
                key={stack.key}
                onClick={() => setTab(stack.key)}
                className="relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer group border border-theme shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${stack.image})` }}
                />
                <div className="absolute inset-0 bg-[var(--stack-scrim)] group-hover:bg-[var(--stack-scrim-hover)] transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-4xl md:text-5xl font-black text-[var(--text-heading)] uppercase mb-4 group-hover:text-secondary transition-colors">
                    {stack.label}
                  </h3>
                  <p className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-widest text-xs uppercase font-bold font-mono">
                    {stack.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="projects-list"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <button
              onClick={() => setTab(null)}
              className="flex items-center gap-3 text-[var(--text-muted)] hover:text-secondary mb-10 group transition-colors uppercase font-black tracking-widest text-sm"
            >
              <div className="bg-glass p-3 rounded-full group-hover:bg-secondary/10 transition-all">
                <FaArrowLeft size={18} />
              </div>
              {t("projects.backToStacks")}
            </button>

            <div className="grid md:grid-cols-2 gap-10">
              {portfolioData.projects[tab]?.map((p) => {
                const text = getProjectText(p);
                return (
                  <motion.div
                    layout
                    key={p.id}
                    onClick={() => setActiveProject(p)}
                    className="group relative rounded-[35px] h-[400px] overflow-hidden cursor-pointer border border-theme hover:border-secondary/50 transition-all shadow-xl bg-[var(--card-tile)]"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.coverImage})` }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 backdrop-blur-[2px] bg-[var(--overlay-backdrop)]/50">
                      <div className="bg-secondary p-5 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_24px_color-mix(in_srgb,var(--accent-secondary)_45%,transparent)]">
                        <FaEye size={35} className="text-white" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-gradient-from)] via-[color-mix(in_srgb,var(--bg-page)_35%,transparent)] to-transparent z-[5]">
                      <div className="absolute bottom-10 left-10">
                        <h3 className="text-4xl font-black mb-3 uppercase text-[var(--text-heading)] leading-none tracking-tight">
                          {text.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] bg-secondary/10 border border-secondary/25 px-3 py-1 rounded-full text-secondary uppercase font-bold tracking-widest"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL (DEMO & DETAILS) --- */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain px-4 py-8 md:px-8 md:py-10 backdrop-blur-xl bg-[var(--overlay-backdrop)]"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="border border-theme mx-auto w-full max-w-6xl rounded-[50px] relative my-4 bg-[var(--modal-bg)] transition-colors duration-300 px-5 pb-8 pt-6 pr-14 sm:px-8 md:px-10 md:pb-10 md:pt-8 md:my-8"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-[var(--text-subtle)] hover:text-[var(--text-heading)] transition-all hover:rotate-90 z-50 rounded-full p-1 hover:bg-[var(--surface-glass)]"
                type="button"
                aria-label="Close"
              >
                <IoCloseOutline size={40} />
              </button>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-start">
                <div className="lg:col-span-7 space-y-6">
                  <button
                    type="button"
                    className="w-full rounded-[30px] overflow-hidden border border-theme shadow-2xl text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    onClick={() => setLightboxIndex(0)}
                  >
                    <img
                      src={activeProject.coverImage}
                      alt=""
                      className="w-full object-cover aspect-video hover:opacity-95 transition-opacity"
                    />
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    {activeProject.gallery?.map((img, idx) => (
                      <button
                        key={`${img}-${idx}`}
                        type="button"
                        className="rounded-2xl overflow-hidden border border-theme hover:border-secondary/35 transition-all cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                        onClick={() =>
                          setLightboxIndex(
                            Math.max(0, projectSlides.indexOf(img)),
                          )
                        }
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full object-cover aspect-video hover:scale-105 transition-transform duration-500"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-start lg:pt-1">
                  <h3 className="text-5xl md:text-6xl font-black mb-6 uppercase leading-none text-[var(--text-heading)] tracking-tighter">
                    {getProjectText(activeProject).title}
                  </h3>
                  <div className="h-1 w-20 bg-secondary mb-8" />

                  <p className="text-[var(--text-muted)] text-lg font-medium mb-8 leading-relaxed">
                    {getProjectText(activeProject).desc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-secondary font-black text-xs mb-6 uppercase tracking-[0.3em]">
                      {t("projects.keyFeatures")}
                    </h4>
                    <ul className="space-y-4">
                      {getProjectText(activeProject).features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-[var(--text-muted)] flex items-start gap-4 group"
                        >
                          <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full shadow-[0_0_12px_color-mix(in_srgb,var(--accent-secondary)_55%,transparent)]" />
                          <span className="group-hover:text-[var(--text-heading)] transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-4 bg-transparent border-2 border-theme text-[var(--text-heading)] font-black px-10 py-5 rounded-2xl hover:bg-[var(--hero-btn-bg)] hover:text-[var(--hero-btn-text)] transition-all group w-fit"
                  >
                    <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="tracking-widest uppercase">{t("projects.viewOnGithub")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LIGHTBOX (fullscreen image + prev/next) --- */}
      <AnimatePresence>
        {lightboxIndex !== null &&
          activeProject &&
          projectSlides.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto overscroll-contain bg-[var(--overlay-backdrop)] px-4 py-6 md:px-16"
              onClick={() => setLightboxIndex(null)}
              role="presentation"
            >
              <button
                type="button"
                className="absolute top-4 right-4 z-[210] rounded-full p-2 text-[var(--text-heading)] hover:bg-[var(--surface-glass)] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                aria-label="Close gallery"
              >
                <IoCloseOutline size={36} />
              </button>

              {projectSlides.length > 1 && (
                <>
                  <button
                    type="button"
                    className="absolute left-2 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-theme bg-[var(--modal-bg)]/90 p-3 text-[var(--text-heading)] shadow-lg hover:bg-[var(--surface-glass)] transition-colors md:left-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-theme bg-[var(--modal-bg)]/90 p-3 text-[var(--text-heading)] shadow-lg hover:bg-[var(--surface-glass)] transition-colors md:right-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      goNext();
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} />
                  </button>
                </>
              )}

              <motion.img
                key={projectSlides[lightboxIndex]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={projectSlides[lightboxIndex]}
                alt=""
                className="max-h-[88vh] max-w-[min(100%,1200px)] w-auto object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {projectSlides.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--modal-bg)]/85 px-4 py-1.5 text-xs font-mono text-[var(--text-muted)] border border-theme">
                  {lightboxIndex + 1} / {projectSlides.length}
                </div>
              )}
            </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
}
