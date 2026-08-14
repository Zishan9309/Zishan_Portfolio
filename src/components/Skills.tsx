import React, { useState } from 'react';
import { Code, BarChart3, Layout, Sparkles, Wrench, CheckCircle, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SkillLogo } from './SkillLogo';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'languages': return <Code className="w-5 h-5 text-sky-400" />;
      case 'analytics': return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'web': return <Layout className="w-5 h-5 text-teal-400" />;
      case 'ai': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'tools': return <Wrench className="w-5 h-5 text-purple-400" />;
      default: return <Code className="w-5 h-5 text-sky-400" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.category !== selectedCategory) return false;
    
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    const hasMatchingSkill = cat.skills.some(skill => skill.name.toLowerCase().includes(query));
    const hasMatchingTitle = cat.title.toLowerCase().includes(query);
    
    return hasMatchingSkill || hasMatchingTitle;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            03. Technical Stack
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="text-sky-400">Expertise</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Tools, languages, and frameworks I leverage to build data pipelines, analytics dashboards, and web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2" id="skill-category-filters">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : isDark
                  ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.category
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : isDark
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`} />
            <input
              type="text"
              placeholder="Filter skill e.g. SQL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-200 placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
              }`}
              id="skill-search-input"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:border-sky-500/40 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#0f172a] border-slate-800/80 shadow-lg'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
              id={`skill-category-card-${cat.category}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/50">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-sky-400 font-mono font-medium">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges / Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills
                    .filter(s => !searchQuery.trim() || s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`group relative px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-2 ${
                          skill.highlighted
                            ? isDark
                              ? 'bg-sky-950/40 border-sky-500/40 text-sky-300 hover:bg-sky-900/50 hover:border-sky-400'
                              : 'bg-sky-50 border-sky-300 text-sky-700 hover:bg-sky-100'
                            : isDark
                            ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white'
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                        id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <SkillLogo name={skill.name} className="w-3.5 h-3.5 shrink-0" />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className={`text-[9px] opacity-80 font-normal px-1.5 py-0.5 rounded ${
                            isDark ? 'bg-slate-800/80 text-slate-300' : 'bg-white/80 text-slate-600 border border-slate-200/60'
                          }`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
