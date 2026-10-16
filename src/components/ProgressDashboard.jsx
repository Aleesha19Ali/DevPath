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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 dark:border-cyan-500/30 light:border-cyan-200 text-xs font-semibold text-cyan-300 dark:text-cyan-300 light:text-cyan-700 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400 dark:text-cyan-400 light:text-cyan-600" />
            <span>Learning Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Progress Metrics & Active Focus
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            Real-time track of domain progress metrics, recent topics explored, and active software learning focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Category Progress Bars & Current Focus Card */}
          <div className="lg:col-span-7 space-y-8">

            {/* Current Focus Highlight Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 dark:from-purple-950/50 dark:via-slate-900 dark:to-indigo-950/50 light:from-purple-50 light:via-white light:to-indigo-50 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 dark:bg-purple-600/20 light:bg-purple-100 border border-purple-500/40 dark:border-purple-500/40 light:border-purple-200 flex items-center justify-center text-purple-300 dark:text-purple-300 light:text-purple-600">
                    <Target className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-purple-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 dark:text-cyan-400 light:text-purple-600 uppercase tracking-wider block">
                      Active Development Target
                    </span>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {currentFocus.title}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 text-purple-200 dark:text-purple-200 light:text-purple-700 border border-purple-400/30 dark:border-purple-400/30 light:border-purple-200">
                  {currentFocus.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                {currentFocus.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                <Clock className="w-3.5 h-3.5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                <span>Phase: {currentFocus.startDate}</span>
              </div>
            </div>

            {/* Domain Metrics Progress Bars */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                <span>Domain Exploration Percentage</span>
              </h3>

              <div className="space-y-6">
                {categoryMetrics.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-2">
                      <span>{item.category}</span>
                      <span className="font-mono text-cyan-400 dark:text-cyan-400 light:text-purple-600">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden p-[1px]">
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
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                  <span>Recently Explored Topics</span>
                </h3>

                <div className="space-y-4">
                  {recentlyExploredTopics.map((topicItem, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-slate-700 dark:hover:border-slate-700 light:hover:border-slate-300 transition-colors flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 dark:bg-cyan-400 light:bg-purple-600 mt-1.5 shrink-0" />
                        <div>
                          <h4 className="text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 leading-snug">
                            {topicItem.topic}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {topicItem.date}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 shrink-0">
                        {topicItem.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-[11px] font-mono text-slate-500 text-center">
                Editable via portfolioData.js
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
