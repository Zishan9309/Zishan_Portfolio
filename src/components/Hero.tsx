import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, MapPin, Award, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  openResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, openResumeModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 backdrop-blur-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>Seeking Full-Time Roles • B.Tech CSE 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className={`text-lg sm:text-xl font-bold tracking-tight leading-snug ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {personalInfo.title}
              </p>
            </div>

            {/* Short Intro */}
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {personalInfo.shortBio}
            </p>

            {/* Key Tags / Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                ⚡ SQL & MySQL
              </span>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                📊 Power BI & DAX
              </span>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                🐍 Python & Scikit-learn
              </span>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                🤖 Generative AI & RAG
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={openResumeModal}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border transition-all ${
                  isDark
                    ? 'border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 hover:text-white hover:bg-slate-800/80'
                    : 'border-slate-300 hover:border-slate-400 bg-white text-slate-800 hover:bg-slate-50'
                }`}
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Connect with me:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300'
                  }`}
                  title="GitHub Profile"
                  aria-label="GitHub"
                  id="hero-social-github"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300'
                  }`}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                  id="hero-social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300'
                  }`}
                  title="Send Email"
                  aria-label="Email"
                  id="hero-social-email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Picture / Tech Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Animated Outer Ring / Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Circular Image Container */}
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 ${
                isDark ? 'border-slate-900 bg-slate-900' : 'border-white bg-slate-100'
              } shadow-2xl flex items-center justify-center`}>
                
                {/* 
                  ===================================================================
                  PROFILE PHOTO PLACEHOLDER
                  To use your real photo:
                  1. Save photo in '/public/profile.jpg'
                  2. Update the 'src' below to '/profile.jpg'
                  ===================================================================
                */}
                <img
                  src={personalInfo.profilePhoto}
                  alt="Zishan Khan - Data Analyst & Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual if external image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* SVG High-tech Fallback Avatar inside container if image fails or loading */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center pointer-events-none opacity-0 group-hover:opacity-0 focus:opacity-0">
                  <div className="w-20 h-20 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center mb-3">
                    <Terminal className="w-10 h-10 text-sky-400" />
                  </div>
                  <span className="text-sm font-bold text-slate-200">Zishan Khan</span>
                  <span className="text-xs text-sky-400 font-mono">Data Analyst</span>
                </div>
              </div>

              {/* Floating Quick Feature Cards around picture */}
              <div className={`absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl border shadow-xl flex items-center gap-2.5 backdrop-blur-md ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Infosys Intern</div>
                  <div className="text-[10px] text-slate-400">Python & ML Dev</div>
                </div>
              </div>

              <div className={`absolute -top-2 -right-2 px-4 py-2.5 rounded-2xl border shadow-xl flex items-center gap-2.5 backdrop-blur-md ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Fiverr Freelancer</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">5★ Analytics</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
