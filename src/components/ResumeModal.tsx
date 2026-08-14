import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Printer, 
  Copy, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages, 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin,
  Code2,
  Database,
  BarChart3,
  Layers,
  Clock
} from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDark }) => {
  const [activeTab, setActiveTab] = useState<'data-analyst' | 'software-engineer'>('data-analyst');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const dataAnalystPlainText = `ZISHAN KHAN
Data Analyst
Nanded, Maharashtra, India | zishankhan9284@gmail.com | LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github} | +91-9309448080

SUMMARY
Results-oriented Data Analyst proficient in SQL, Python, Power BI, Tableau, and Advanced Excel. Experienced in constructing ETL pipelines, developing interactive dashboards, and applying machine learning models to solve business challenges. Strong expertise in data quality governance, statistical modeling, and executive stakeholder reporting.

TECHNICAL SKILLS
• Languages & Querying: Python (Pandas, NumPy, Scikit-learn), SQL (MySQL, PostgreSQL), DAX, REST APIs
• BI & Visualization: Power BI, Tableau, Advanced Excel (Pivot Tables, Power Query, XLOOKUP), Streamlit, Plotly
• Databases & Modeling: MySQL, MongoDB, Data Modeling, ETL Pipelines, Data Quality Governance, Schema Design
• Analytics & ML: Exploratory Data Analysis (EDA), Statistical Modeling, Predictive Analytics, Root Cause Analysis
• Tools & Practices: Git, GitHub, Jupyter Notebook, VS Code, Postman, Agile/Scrum, Stakeholder Reporting

EXPERIENCE
Infosys Springboard — Data Analyst Intern (Remote) | Jan 2026 – Apr 2026
• Engineered an end-to-end data pipeline to ingest, standardize, and validate live market metrics from a cryptocurrency REST API across 50+ digital assets, accelerating data preparation efficiency by 45 percent.
• Executed statistical analysis and predictive modeling using Python, SQL, Pandas, and Scikit-learn across 50 financial datasets, surfacing volatility patterns to cut manual assessment time by 60 percent.
• Deployed dynamic Power BI visual portals to deliver real-time risk scores to stakeholders, shrinking insight turnaround cycles from 5 hours to under 30 minutes.

PROJECTS
Ola Ride Booking Data Analysis Dashboard — SQL, Power BI, Excel, DAX (Mar 2026)
• Processed over 100,000 ride booking records using SQL to evaluate booking success rates, cancellation drivers, revenue trends, and customer metrics across 5 operational zones.
• Constructed Power BI reporting suites with KPI cards, drill-through reports, interactive slicers, and DAX measures to track operational performance for leadership.
• Identified peak demand windows and regional revenue drivers, uncovering growth opportunities that optimized fleet allocation strategy.

Weather Forecast Analytics Dashboard — Power BI, DAX, REST API, Weather API (Jan 2026)
• Integrated a live weather REST API directly into Power BI without intermediate database storage, establishing a streamlined BI workflow from API ingestion to production-ready reporting.
• Designed real-time visual interfaces displaying temperature, humidity, precipitation, and wind metrics utilizing dynamic DAX calculations and customized forecast cards.
• Configured automated scheduled refresh triggers for continuous monitoring and documented end-to-end data modeling workflows for team reproducibility.

E-Commerce Data Analysis and BI Dashboard — Python, SQL, Power BI, Tableau, Excel (Jun 2025)
• Consolidated operational data from multiple sources spanning 90 days using SQL, Python, and Excel, achieving 98 percent data accuracy across analytical layers.
• Audited user behavior patterns through exploratory data analysis, uncovering a 43 percent higher bounce rate on mobile versus desktop that prompted a strategic UX redesign.
• Built self-service Power BI and Tableau analytics platforms enabling automated KPI tracking, accelerating reporting turnaround by 60 percent across 4 departments.

EDUCATION
MGM’s College of Engineering, Nanded — B.Tech in Computer Science and Engineering | CGPA: 7.5 / 10 | 2022 – 2026

CERTIFICATIONS AND ACHIEVEMENTS
• Data Analyst Certification — Infosys Springboard — SQL, Data Analysis, Visualization, Statistical Modeling (May 2026)
• Python Foundation Certification — Infosys Springboard — Data Structures, Data Cleansing, Analytical Programming (Sep 2025)
• Machine Learning Model Achievement — Achieved 84% accuracy on 7,000+ records using Logistic Regression and Random Forest (2025)

ADDITIONAL INFORMATION
• Languages: English, Hindi, Urdu
• Freelance: Fiverr (Data Analytics Services)
• Interests: Data Storytelling, Business Intelligence, Financial Analytics`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(dataAnalystPlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      id="resume-modal-backdrop"
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 ${
          isDark 
            ? 'bg-[#0f172a] border-slate-700/80 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
        id="resume-modal-card"
      >
        {/* Modal Header */}
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b gap-3 ${
          isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FileText className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Zishan Khan — Resume</h3>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified ATS Format
                </span>
              </div>
              <p className="text-xs text-sky-400 font-medium">B.Tech CSE (2026) • Data Analyst & Software Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Quick Copy Text */}
            <button
              onClick={handleCopyText}
              className={`p-2 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' 
                  : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
              title="Copy Plain Text Resume"
              id="copy-resume-text-btn"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-sky-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className={`p-2 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' 
                  : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
              title="Print / Save as PDF"
              id="print-resume-btn"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-500'
              }`}
              aria-label="Close modal"
              id="close-resume-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual Resume Tabs Switcher */}
        <div className={`px-6 py-2.5 border-b flex items-center gap-2 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100/70 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('data-analyst')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'data-analyst'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                : isDark
                ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                : 'text-slate-700 hover:bg-white'
            }`}
            id="tab-data-analyst-resume"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Data Analyst Resume</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
              activeTab === 'data-analyst' ? 'bg-slate-950/20 text-slate-950' : 'bg-sky-500/20 text-sky-400'
            }`}>Active</span>
          </button>

          <button
            onClick={() => setActiveTab('software-engineer')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'software-engineer'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                : isDark
                ? 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                : 'text-slate-600 hover:bg-white'
            }`}
            id="tab-software-engineer-resume"
          >
            <Code2 className="w-4 h-4" />
            <span>Software Engineer Resume</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-semibold">
              <Clock className="w-2.5 h-2.5" /> Uploading Later
            </span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: DATA ANALYST RESUME (ACTIVE) */}
          {activeTab === 'data-analyst' && (
            <div className="space-y-6">
              
              {/* Paper Resume Container with Print-Ready Styling */}
              <div 
                className="bg-white text-slate-900 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border border-slate-200 print:p-0 print:border-none print:shadow-none font-sans"
                id="printable-resume-paper"
              >
                {/* Header */}
                <div className="text-center pb-4 border-b border-slate-300">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase font-serif">
                    Zishan Khan
                  </h1>
                  <h2 className="text-base font-bold text-slate-800 mt-0.5">
                    Data Analyst
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
                    <span>Nanded, Maharashtra, India</span>
                    <span>•</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sky-700 hover:underline">{personalInfo.email}</a>
                    <span>•</span>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">LinkedIn</a>
                    <span>•</span>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">GitHub</a>
                    <span>•</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Summary
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-800 text-justify">
                    Results-oriented Data Analyst proficient in SQL, Python, Power BI, Tableau, and Advanced Excel. Experienced in constructing ETL pipelines, developing interactive dashboards, and applying machine learning models to solve business challenges. Strong expertise in data quality governance, statistical modeling, and executive stakeholder reporting.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Technical Skills
                  </h3>
                  <div className="text-xs space-y-1 text-slate-800">
                    <p><strong>Languages & Querying:</strong> Python (Pandas, NumPy, Scikit-learn), SQL (MySQL, PostgreSQL), DAX, REST APIs</p>
                    <p><strong>BI & Visualization:</strong> Power BI, Tableau, Advanced Excel (Pivot Tables, Power Query, XLOOKUP), Streamlit, Plotly</p>
                    <p><strong>Databases & Modeling:</strong> MySQL, MongoDB, Data Modeling, ETL Pipelines, Data Quality Governance, Schema Design</p>
                    <p><strong>Analytics & ML:</strong> Exploratory Data Analysis (EDA), Statistical Modeling, Predictive Analytics, Root Cause Analysis</p>
                    <p><strong>Tools & Practices:</strong> Git, GitHub, Jupyter Notebook, VS Code, Postman, Agile/Scrum, Stakeholder Reporting</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Experience
                  </h3>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                      <span>Infosys Springboard — Data Analyst Intern</span>
                      <span className="text-slate-700 font-normal">Remote | Jan 2026 – Apr 2026</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-disc list-outside ml-4 leading-relaxed">
                      <li>Engineered an end-to-end data pipeline to ingest, standardize, and validate live market metrics from a cryptocurrency REST API across 50+ digital assets, accelerating data preparation efficiency by 45 percent.</li>
                      <li>Executed statistical analysis and predictive modeling using Python, SQL, Pandas, and Scikit-learn across 50 financial datasets, surfacing volatility patterns to cut manual assessment time by 60 percent.</li>
                      <li>Deployed dynamic Power BI visual portals to deliver real-time risk scores to stakeholders, shrinking insight turnaround cycles from 5 hours to under 30 minutes.</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Projects
                  </h3>
                  <div className="space-y-3 text-xs text-slate-800">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-950">
                        <span>Ola Ride Booking Data Analysis Dashboard — <span className="font-normal italic text-slate-700">SQL, Power BI, Excel, DAX</span></span>
                        <span className="font-normal text-slate-700">Mar 2026</span>
                      </div>
                      <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4 leading-relaxed">
                        <li>Processed over 100,000 ride booking records using SQL to evaluate booking success rates, cancellation drivers, revenue trends, and customer metrics across 5 operational zones.</li>
                        <li>Constructed Power BI reporting suites with KPI cards, drill-through reports, interactive slicers, and DAX measures to track operational performance for leadership.</li>
                        <li>Identified peak demand windows and regional revenue drivers, uncovering growth opportunities that optimized fleet allocation strategy.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-950">
                        <span>Weather Forecast Analytics Dashboard — <span className="font-normal italic text-slate-700">Power BI, DAX, REST API, Weather API</span></span>
                        <span className="font-normal text-slate-700">Jan 2026</span>
                      </div>
                      <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4 leading-relaxed">
                        <li>Integrated a live weather REST API directly into Power BI without intermediate database storage, establishing a streamlined BI workflow from API ingestion to production-ready reporting.</li>
                        <li>Designed real-time visual interfaces displaying temperature, humidity, precipitation, and wind metrics utilizing dynamic DAX calculations and customized forecast cards.</li>
                        <li>Configured automated scheduled refresh triggers for continuous monitoring and documented end-to-end data modeling workflows for team reproducibility.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-950">
                        <span>E-Commerce Data Analysis and BI Dashboard — <span className="font-normal italic text-slate-700">Python, SQL, Power BI, Tableau, Excel</span></span>
                        <span className="font-normal text-slate-700">Jun 2025</span>
                      </div>
                      <ul className="mt-1 space-y-0.5 list-disc list-outside ml-4 leading-relaxed">
                        <li>Consolidated operational data from multiple sources spanning 90 days using SQL, Python, and Excel, achieving 98 percent data accuracy across analytical layers.</li>
                        <li>Audited user behavior patterns through exploratory data analysis, uncovering a 43 percent higher bounce rate on mobile versus desktop that prompted a strategic UX redesign.</li>
                        <li>Built self-service Power BI and Tableau analytics platforms enabling automated KPI tracking, accelerating reporting turnaround by 60 percent across 4 departments.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Education
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <span>MGM’s College of Engineering, Nanded — <span className="font-normal italic text-slate-700">B.Tech in Computer Science and Engineering</span></span>
                    <span className="font-normal text-slate-700">CGPA: 7.5 / 10 | 2022 – 2026</span>
                  </div>
                </div>

                {/* Certifications and Achievements */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Certifications and Achievements
                  </h3>
                  <div className="text-xs space-y-1 text-slate-800">
                    <div className="flex justify-between">
                      <span><strong>Data Analyst Certification</strong> — Infosys Springboard — SQL, Data Analysis, Visualization, Statistical Modeling</span>
                      <span className="text-slate-600">May 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Python Foundation Certification</strong> — Infosys Springboard — Data Structures, Data Cleansing, Analytical Programming</span>
                      <span className="text-slate-600">Sep 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Machine Learning Model Achievement</strong> — Achieved 84% accuracy on 7,000+ records using Logistic Regression and Random Forest</span>
                      <span className="text-slate-600">2025</span>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
                    Additional Information
                  </h3>
                  <div className="text-xs space-y-1 text-slate-800">
                    <p><strong>Languages:</strong> English, Hindi, Urdu</p>
                    <p><strong>Freelance:</strong> Fiverr (Data Analytics Services)</p>
                    <p><strong>Interests:</strong> Data Storytelling, Business Intelligence, Financial Analytics</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: SOFTWARE ENGINEER RESUME (UPLOAD PENDING / COMING SOON) */}
          {activeTab === 'software-engineer' && (
            <div className={`p-8 sm:p-12 rounded-2xl border text-center space-y-6 ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
                <Code2 className="w-8 h-8 text-amber-400" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Software Engineer Resume Ready For Next Upload
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  You indicated that you will upload your <strong>Software Engineer Resume</strong> later. Once uploaded, its full ATS-compliant document and technical highlights will automatically populate this tab!
                </p>
              </div>

              {/* Pre-configured SWE Focus Competencies */}
              <div className={`p-5 rounded-xl border text-left max-w-lg mx-auto ${
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Software Engineering Stack Highlights
                </h4>
                <ul className="text-xs space-y-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Frontend & Mobile:</strong> React, React Native, TypeScript, Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Backend & APIs:</strong> Node.js, Express, REST APIs, PHP, Postman</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Databases & Architecture:</strong> MySQL, MongoDB, System Design, Schema Modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>AI & Full-Stack Projects:</strong> Anganwadi Support App (Groq AI), Task Management System</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('data-analyst')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md"
                >
                  View Active Data Analyst Resume
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className={`flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t gap-3 ${
          isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.email}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.location}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs transition-colors ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
              id="resume-modal-footer-close"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
              id="resume-modal-print-save-btn"
            >
              <Download className="w-3.5 h-3.5" /> Download / Print PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

