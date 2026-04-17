import React from "react";
import { LanguageProvider } from "./LanguageContext.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-dark scroll-smooth transition-[background-color,color] duration-300 ease-out text-[var(--text-heading)]">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
