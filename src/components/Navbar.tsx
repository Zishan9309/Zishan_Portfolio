import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  openResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, openResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight observer logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-sky-500/30 shadow-xl shadow-black/50 py-0.5'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-0.5'
          : isDark
          ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/80 py-1'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight"
            id="nav-logo"
          >
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-[#020617] font-black text-xs shadow-sm shadow-sky-500/30 group-hover:scale-105 transition-transform">
              ZK
            </div>
            <span className={`font-bold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Zishan Khan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" id="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2 lg:px-2.5 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-150 ${
                    isActive
                      ? isDark
                        ? 'text-sky-400 bg-sky-500/10 font-bold border border-sky-500/30'
                        : 'text-sky-600 bg-sky-50 font-bold border border-sky-200'
                      : isDark
                      ? 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items: Contact/Resume Button & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={openResumeModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-400 text-[#020617] shadow-sm shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              id="desktop-resume-btn"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isDark
                  ? 'border-sky-500/30 text-sky-400 hover:bg-sky-500/10'
                  : 'border-sky-500 text-sky-600 hover:bg-sky-50'
              }`}
              id="desktop-contact-btn"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle mobile navigation menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-6 border-b transition-all duration-300 animate-fade-in ${
            isDark ? 'bg-[#0f172a] border-slate-800 text-slate-200 shadow-2xl' : 'bg-white border-slate-200 text-slate-800 shadow-xl'
          }`}
          id="mobile-menu-drawer"
        >
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? isDark
                        ? 'bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20'
                        : 'bg-sky-50 text-sky-600 font-semibold border border-sky-200'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-800/60'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800/40">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20"
                id="mobile-resume-btn"
              >
                <FileText className="w-4 h-4" />
                <span>View / Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
