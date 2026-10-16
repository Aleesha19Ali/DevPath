import React from 'react';
import { Target, TrendingUp, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { progressDashboardData } from '../data/portfolioData';

export default function ProgressDashboard() {
  const { currentFocus, categoryMetrics, recentlyExploredTopics } = progressDashboardData;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Learning Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Progress Metrics & Active Focus
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Real-time track of domain progress metrics, recent topics explored, and active software learning focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Category Progress Bars & Current Focus Card */}
          <div className="lg:col-span-7 space-y-8">

            {/* Current Focus Highlight Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 border border-purple-500/30 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      Active Development Target
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {currentFocus.title}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                  {currentFocus.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {currentFocus.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Phase: {currentFocus.startDate}</span>
              </div>
            </div>

            {/* Domain Metrics Progress Bars */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Domain Exploration Percentage</span>
              </h3>

              <div className="space-y-6">
                {categoryMetrics.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-2">
                      <span>{item.category}</span>
                      <span className="font-mono text-cyan-400">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Recently Explored Topics Feed */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-md h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Recently Explored Topics</span>
                </h3>

                <div className="space-y-4">
                  {recentlyExploredTopics.map((topicItem, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <div>
                          <h4 className="text-xs font-medium text-slate-200 leading-snug">
                            {topicItem.topic}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {topicItem.date}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0">
                        {topicItem.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
                Editable via portfolioData.js
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
