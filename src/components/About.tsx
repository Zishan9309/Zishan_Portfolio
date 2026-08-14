import React from 'react';
import { FolderGit2, Award, Globe, GraduationCap, CheckCircle2, Database, BrainCircuit, BarChart2 } from 'lucide-react';
import { aboutParagraphs, stats } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2': return <FolderGit2 className="w-6 h-6 text-sky-400" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      default: return <FolderGit2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="about" className={`py-20 relative transition-colors ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            02. Get To Know Me
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#0f172a] border-slate-800 shadow-xl' 
                : 'bg-white border-slate-200/80 shadow-md'
            }`}>
              <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
                <span>Data-Driven Engineering & Business Intelligence</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Strengths Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2 text-sky-400 font-mono">
                  <Database className="w-4 h-4 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>SQL & Database Modeling</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono">
                  <BarChart2 className="w-4 h-4 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>Power BI & DAX Dashboards</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <BrainCircuit className="w-4 h-4 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>Scikit-learn ML & Python EDA</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>Generative AI & RAG Exploration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Cards Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0f172a] border-slate-800/90 hover:bg-slate-900'
                    : 'bg-white border-slate-200 hover:shadow-lg'
                }`}
                id={`stat-card-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      {getIcon(stat.iconName)}
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <h4 className={`text-base font-bold mb-1 ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}>
                    {stat.label}
                  </h4>
                  <p className={`text-xs leading-snug ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
