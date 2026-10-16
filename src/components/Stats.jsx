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
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-950/30 backdrop-blur-sm"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 py-1 rounded bg-slate-800/50">
                    Live Metric
                  </span>
                </div>

                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
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
