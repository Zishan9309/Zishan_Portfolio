import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, FolderGit2, X, ArrowUpRight, BarChart2, CheckCircle2, Layers } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Data Analytics', 'Machine Learning & AI', 'Web & Mobile Apps'];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className={`py-20 relative transition-colors ${
      isDark ? 'bg-[#020617]' : 'bg-slate-50/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            04. Portfolio Showcase
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="text-sky-400">Projects</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore end-to-end data analytics dashboards, ML volatility analyzers, and full-stack applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="project-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : isDark
                  ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (3 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                isDark
                  ? 'bg-[#0f172a] border-slate-800/90 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5'
                  : 'bg-white border-slate-200 hover:border-sky-400 hover:shadow-lg'
              }`}
              id={`project-card-${project.id}`}
            >
              {/* Project Cover Image */}
              {project.image && (
                <div 
                  className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-800/80 group/img select-none shrink-0"
                  onClick={() => setActiveProjectModal(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const attempt = Number(target.dataset.attempt || '0');
                      const rawGithubMap: Record<string, { publicFile: string; githubRaw: string }> = {
                        'ola-ride-analytics': {
                          publicFile: '/images/ola-overview.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Ola_Ride_Bookings_Analysis/main/Screenshots/Overview.png'
                        },
                        'weather-powerbi-dashboard': {
                          publicFile: '/images/weather-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Weather_Analysis_Dashboard/main/Screenshots/Weather%20Dashboard.png'
                        },
                        'e-commerce-sales-analytics': {
                          publicFile: '/images/mobile-sales-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Mobile_Sales_Analysis/main/Screenshots/Mobile%20Sale%20Dashboard.png'
                        },
                        'crypto-volatility': {
                          publicFile: '/images/crypto-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Crypto_Volatility_Zishan_Khan/main/Screenshots/Dashboard.png'
                        }
                      };

                      const config = rawGithubMap[project.id];
                      if (config) {
                        if (attempt === 0) {
                          target.dataset.attempt = '1';
                          target.src = config.publicFile;
                        } else if (attempt === 1) {
                          target.dataset.attempt = '2';
                          target.src = config.githubRaw;
                        }
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-sky-500/30 shadow-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-bold text-amber-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Featured
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6">
                
                {/* Category Badge & Featured Tag (when no image) */}
                {!project.image && (
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                )}

                {/* Project Title */}
                <h3 className={`text-lg font-bold mb-2 group-hover:text-sky-400 transition-colors line-clamp-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium ${
                        isDark 
                          ? 'bg-slate-800 text-slate-300 border border-slate-700/60' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Quick Key Metrics Preview */}
                {project.keyMetrics && project.keyMetrics.length > 0 && (
                  <div className={`p-2.5 rounded-xl text-[11px] font-medium border mb-4 ${
                    isDark ? 'bg-slate-950/50 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-semibold text-sky-400 block mb-1 flex items-center gap-1">
                      <BarChart2 className="w-3 h-3" /> Key Highlight:
                    </span>
                    <span>{project.keyMetrics[0]}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className={`px-6 py-4 border-t flex items-center justify-between gap-2 ${
                isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
              }`}>
                {/* Details Button */}
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className={`text-xs font-semibold hover:text-sky-400 flex items-center gap-1 transition-colors ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                  id={`project-details-btn-${project.id}`}
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>View Details</span>
                </button>

                {/* GitHub and Live Demo Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                    }`}
                    title="View GitHub Repository"
                    id={`project-github-btn-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={project.demoUrl || '#'}
                    onClick={(e) => {
                      if (!project.demoUrl || project.demoUrl === '#') {
                        e.preventDefault();
                        setActiveProjectModal(project);
                      }
                    }}
                    target={project.demoUrl && project.demoUrl !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sm transition-all"
                    id={`project-demo-btn-${project.id}`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects on GitHub Button */}
        <div className="mt-14 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all transform hover:-translate-y-0.5"
            id="view-all-github-btn"
          >
            <Github className="w-5 h-5 text-sky-400" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveProjectModal(null)}
          id="project-detail-modal-backdrop"
        >
          <div
            className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 max-h-[90vh] flex flex-col ${
              isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
            }`}
            onClick={(e) => e.stopPropagation()}
            id="project-detail-modal-card"
          >
            {/* Modal Header */}
            <div className={`p-6 border-b flex items-start justify-between gap-4 ${
              isDark ? 'border-slate-800 bg-slate-950/50' : 'border-slate-100 bg-slate-50'
            }`}>
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20 mb-2 inline-block">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-xl font-extrabold">{activeProjectModal.title}</h3>
                {activeProjectModal.role && (
                  <p className="text-xs text-slate-400 mt-1">Role: {activeProjectModal.role}</p>
                )}
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-500'
                }`}
                aria-label="Close modal"
                id="close-project-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto">
              {/* Optional Cover Image Preview in Modal */}
              {activeProjectModal.image && (
                <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-md">
                  <img
                    src={activeProjectModal.image}
                    alt={`${activeProjectModal.title} Dashboard Overview`}
                    loading="eager"
                    className="w-full max-h-96 object-contain bg-slate-950/90 mx-auto"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const attempt = Number(target.dataset.attempt || '0');
                      const rawGithubMap: Record<string, { publicFile: string; githubRaw: string }> = {
                        'ola-ride-analytics': {
                          publicFile: '/images/ola-overview.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Ola_Ride_Bookings_Analysis/main/Screenshots/Overview.png'
                        },
                        'weather-powerbi-dashboard': {
                          publicFile: '/images/weather-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Weather_Analysis_Dashboard/main/Screenshots/Weather%20Dashboard.png'
                        },
                        'e-commerce-sales-analytics': {
                          publicFile: '/images/mobile-sales-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Mobile_Sales_Analysis/main/Screenshots/Mobile%20Sale%20Dashboard.png'
                        },
                        'crypto-volatility': {
                          publicFile: '/images/crypto-dashboard.png',
                          githubRaw: 'https://raw.githubusercontent.com/Zishan9309/Crypto_Volatility_Zishan_Khan/main/Screenshots/Dashboard.png'
                        }
                      };

                      const config = rawGithubMap[activeProjectModal.id];
                      if (config) {
                        if (attempt === 0) {
                          target.dataset.attempt = '1';
                          target.src = config.publicFile;
                        } else if (attempt === 1) {
                          target.dataset.attempt = '2';
                          target.src = config.githubRaw;
                        }
                      }
                    }}
                  />
                </div>
              )}

              {/* Tech Badges */}
              <div>
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extended Details */}
              <div>
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">Overview & Architecture</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                  {activeProjectModal.fullDetails || activeProjectModal.description}
                </p>
              </div>

              {/* Key Highlights / Metrics */}
              {activeProjectModal.keyMetrics && (
                <div>
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">Key Highlights & Business Metrics</h4>
                  <div className={`p-4 rounded-xl border ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <ul className="space-y-2 text-xs">
                      {activeProjectModal.keyMetrics.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Links */}
            <div className={`p-6 border-t flex flex-col sm:flex-row items-center justify-end gap-3 ${
              isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-100 bg-slate-50'
            }`}>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs border ${
                  isDark ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Github className="w-4 h-4" /> View Code on GitHub
              </a>
              {activeProjectModal.demoUrl && activeProjectModal.demoUrl !== '#' && (
                <a
                  href={activeProjectModal.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
