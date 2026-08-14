import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-10 border-t transition-colors ${
      isDark ? 'bg-[#020617] border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`} id="portfolio-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright text */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-bold">
              © {new Date().getFullYear()} <span className="text-sky-400 font-mono">Zishan Khan</span>. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              High-Density Analytics & Software Engineering Portfolio
            </p>
          </div>

          {/* Social Icons Repeated & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isDark ? 'bg-[#0f172a] border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50' : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600'
              }`}
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isDark ? 'bg-[#0f172a] border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50' : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600'
              }`}
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 rounded-lg border transition-all ${
                isDark ? 'bg-[#0f172a] border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50' : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600'
              }`}
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
              title="Back to top"
              aria-label="Scroll back to top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
