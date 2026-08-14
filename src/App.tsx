import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  // Theme state: defaults to dark mode (#0B0F17 background with electric sky/cyan accents)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('zk_portfolio_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default dark mode as preferred in prompt
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('zk_portfolio_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-sky-500 selection:text-slate-950 ${
      isDark
        ? 'bg-[#0b0f17] text-slate-100'
        : 'bg-white text-slate-900'
    }`}>
      {/* Top Navbar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* 1. Hero / Home */}
        <Hero
          isDark={isDark}
          openResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 2. About Me */}
        <About isDark={isDark} />

        {/* 3. Skills */}
        <Skills isDark={isDark} />

        {/* 4. Featured Projects */}
        <Projects isDark={isDark} />

        {/* 5. Experience */}
        <Experience isDark={isDark} />

        {/* 6. Education */}
        <Education isDark={isDark} />

        {/* 7. Contact */}
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Resume Overview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
