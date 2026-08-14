import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry regarding Data Analyst / Software Engineer position',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link as requested by user instructions
    const mailtoSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            07. Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Connect & <span className="text-sky-400">Collaborate</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            I am actively open to full-time roles in Data Analytics, Business Intelligence, and Software Engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className={`p-5 rounded-2xl border transition-all hover:border-sky-500/40 flex items-center justify-between ${
              isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
            }`} id="contact-email-card">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">Email Address</div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono font-bold text-sky-400 hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className={`p-2 rounded-lg border text-xs transition-colors ${
                  isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                }`}
                title="Copy Email"
                id="copy-email-btn"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`p-5 rounded-2xl border transition-all hover:border-sky-500/40 flex items-center justify-between ${
              isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
            }`} id="contact-phone-card">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">Phone / WhatsApp</div>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-mono font-bold text-cyan-400 hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className={`p-2 rounded-lg border text-xs transition-colors ${
                  isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                }`}
                title="Copy Phone"
                id="copy-phone-btn"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl border transition-all hover:border-sky-500/40 flex items-center justify-between group ${
                isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
              }`}
              id="contact-linkedin-card"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">LinkedIn Profile</div>
                  <div className="text-sm font-mono font-bold group-hover:text-sky-400 transition-colors">
                    linkedin.com/in/zishan-khan
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl border transition-all hover:border-sky-500/40 flex items-center justify-between group ${
                isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
              }`}
              id="contact-github-card"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">GitHub Profile</div>
                  <div className="text-sm font-mono font-bold group-hover:text-sky-400 transition-colors">
                    github.com/Zishan9309
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* Fiverr Card */}
            <a
              href={personalInfo.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl border transition-all hover:border-emerald-500/40 flex items-center justify-between group ${
                isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
              }`}
              id="contact-fiverr-card"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-emerald-400 uppercase">Fiverr Freelance Profile</div>
                  <div className="text-sm font-mono font-bold group-hover:text-emerald-400 transition-colors">
                    fiverr.com/zishankhan8080
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border shadow-xl ${
              isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
            }`} id="contact-form-container">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Send Me a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill in your details below to compose an email directly to Zishan.
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Email Composer Launched!</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    Your default email client should open with your message pre-filled for zishankhan9284@gmail.com. You can also send an email directly anytime!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                          isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                        id="contact-name-input"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                          isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                        id="contact-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      id="contact-subject-input"
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Zishan, I reviewed your portfolio and would like to discuss a Data Analyst opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50 resize-none ${
                        isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      id="contact-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.01]"
                    id="contact-submit-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (via Mailto)</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
