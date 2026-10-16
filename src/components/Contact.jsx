import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';
import { contactData } from '../data/portfolioData';

// Custom SVG Icons for GitHub & LinkedIn
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98z" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (contactData.placeholders.email) {
      navigator.clipboard.writeText(contactData.placeholders.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1322] to-slate-900/90 dark:from-slate-900/90 dark:via-[#0d1322] dark:to-slate-900/90 light:from-white light:via-purple-50/30 light:to-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl relative overflow-hidden text-center max-w-4xl mx-auto">

          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 dark:bg-purple-600/10 light:bg-purple-300/20 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 text-xs font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700 mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400 dark:text-cyan-400 light:text-purple-600" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            {contactData.title}
          </h2>

          <p className="text-base text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {contactData.description}
          </p>

          {/* Social Links & Email Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">

            {/* Email Field with Interactive Copy Button */}
            <div className="flex items-center rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 p-1.5 pl-4 max-w-md w-full sm:w-auto">
              <Mail className="w-4 h-4 text-purple-400 dark:text-purple-400 light:text-purple-600 mr-2 shrink-0" />
              <span className="text-xs sm:text-sm font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 truncate mr-3">
                {contactData.placeholders.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Placeholder Link */}
            <a
              href={contactData.placeholders.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-xs font-semibold transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            {/* LinkedIn Placeholder Link */}
            <a
              href={contactData.placeholders.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-xs font-semibold transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
            </a>

          </div>

          <p className="text-xs font-mono text-slate-500">
            {contactData.note}
          </p>

        </div>

      </div>
    </section>
  );
}
