import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Globe, Building2 } from 'lucide-react';
import { experienceItems } from '../data/portfolioData';
import { CompanyLogo } from './CompanyLogo';

interface ExperienceProps {
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            05. Work History
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="text-sky-400">Experience</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Internship milestones and freelance analytics client work.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className={`absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 hidden sm:block ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          <div className="space-y-12">
            {experienceItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  id={`experience-item-${item.id}`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-10 w-9 h-9 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/20 hidden sm:flex">
                    <Briefcase className="w-4 h-4 text-sky-400" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:border-sky-500/40 ${
                    isDark
                      ? 'bg-[#0f172a] border-slate-800/90 shadow-xl'
                      : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
                  }`}>
                    
                    {/* Header info with Logo */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <CompanyLogo company={item.company} className="w-14 h-11 sm:w-16 sm:h-12" />
                        <div>
                          <h3 className={`text-lg sm:text-xl font-extrabold leading-snug ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-sky-400 mt-0.5">
                            <span>{item.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Period & Badge Tag Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>

                      {item.badge && (
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                      {item.skills.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                            isDark
                              ? 'bg-slate-800 text-slate-300 border border-slate-700/60'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
