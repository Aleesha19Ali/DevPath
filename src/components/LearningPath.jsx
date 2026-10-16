import React from 'react';
import { Globe, Layout, Server, Database, Cpu, Rocket, Sparkles } from 'lucide-react';
import { learningPathStages } from '../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  Rocket: Rocket,
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Explored':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'Practicing':
      return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    case 'In Progress':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

export default function LearningPath() {
  return (
    <section id="learning-path" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Developer Learning Path
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A comprehensive, step-by-step roadmap detailing the core milestones in my web development journey from foundational markup to AI-driven full-stack development.
          </p>
        </div>

        {/* Timeline Desktop & Vertical Mobile Layout */}
        <div className="relative">

          {/* Vertical central line for desktop layout */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-indigo-500/50 to-cyan-500/20" />

          <div className="space-y-8 lg:space-y-12 relative">
            {learningPathStages.map((stageItem, index) => {
              const IconComponent = iconMap[stageItem.icon] || Globe;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stageItem.stage}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >

                  {/* Center stage indicator node for desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0b0f19] border-2 border-purple-500/60 shadow-lg shadow-purple-950/80 items-center justify-center z-10">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      0{stageItem.stage}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl backdrop-blur-md group relative">

                      {/* Top Header Row inside stage card */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stageItem.color} p-[1px]`}>
                            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div>
                            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                              Stage 0{stageItem.stage}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                              {stageItem.title}
                            </h3>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeClass(stageItem.status)}`}>
                          {stageItem.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {stageItem.description}
                      </p>

                      {/* Technology Topic Tags */}
                      <div className="flex flex-wrap gap-2">
                        {stageItem.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-mono"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty side for layout symmetry on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
