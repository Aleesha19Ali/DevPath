import React from 'react';
import { Layers, BookOpen, Code, Target } from 'lucide-react';
import { statistics } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  BookOpen: BookOpen,
  Code: Code,
  Target: Target,
};

export default function Stats() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Layers;
            return (
              <div
                key={stat.id}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 dark:from-slate-900/80 dark:to-slate-900/40 light:from-white light:to-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-950/30 dark:hover:shadow-purple-950/30 light:hover:shadow-purple-200/50 backdrop-blur-sm"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 dark:bg-purple-950/60 light:bg-purple-100 border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 flex items-center justify-center text-purple-400 dark:text-purple-400 light:text-purple-600 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-purple-700 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-500 light:text-slate-600 px-2 py-1 rounded bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100">
                    Live Metric
                  </span>
                </div>

                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 font-mono tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
