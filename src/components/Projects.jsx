import React from 'react';
import { ExternalLink, CheckCircle2, Clock, FolderGit2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Custom inline SVG for Github icon to avoid version/brand icon export mismatches
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Practical Software Projects
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Hands-on software projects designed to put theoretical frontend, backend API, and database knowledge into practice.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl backdrop-blur-md group"
            >
              <div>
                {/* Header Badge & Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    {project.tagline}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-mono"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Implemented Features List */}
                <div className="mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Implemented & Tested Features</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.implementedFeatures.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Planned Features List */}
                {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                  <div className="mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>Planned Roadmap Features</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.plannedFeatures.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800/40 text-slate-500 border border-slate-800 cursor-not-allowed">
                    <GithubIcon className="w-4 h-4" />
                    <span>Repo Configured</span>
                  </span>
                )}

                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800/40 text-slate-500 border border-slate-800 cursor-not-allowed">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo Pending</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
