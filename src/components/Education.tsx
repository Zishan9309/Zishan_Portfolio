import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationInfo } from '../data/portfolioData';

interface EducationProps {
  isDark: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDark }) => {
  return (
    <section id="education" className={`py-20 relative transition-colors ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            06. Academic Qualification
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="text-sky-400">Background</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Education Details Card */}
        <div className="max-w-3xl mx-auto">
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:border-sky-500/50 shadow-2xl ${
            isDark
              ? 'bg-[#0f172a] border-slate-800'
              : 'bg-white border-slate-200'
          }`} id="education-card">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800/60">
              
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className={`text-2xl font-extrabold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {educationInfo.degree}
                  </h3>
                  
                  <p className="text-sm font-bold text-sky-400 mb-1">
                    {educationInfo.institution}
                  </p>
                  
                  <div className={`flex flex-wrap items-center gap-3 text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {educationInfo.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {educationInfo.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA Score Badge */}
              <div className="flex md:flex-col items-center md:items-end justify-between gap-2 p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-teal-500/10 border border-sky-500/30">
                <span className="text-xs font-semibold text-sky-400">Academic Score</span>
                <span className="text-xl font-black text-white bg-sky-500 px-3 py-1 rounded-xl text-slate-950 shadow-sm">
                  {educationInfo.score}
                </span>
              </div>
            </div>

            {/* Coursework & Focus Areas */}
            <div>
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Core Technical Coursework & Foundations
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationInfo.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2.5 ${
                      isDark
                        ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
