import React from 'react';
import { User, Code, Sparkles, CheckCircle, UserCheck } from 'lucide-react';
import { aboutMeData } from '../data/portfolioData';

const valueIconMap = {
  Code: Code,
  Sparkles: Sparkles,
  CheckCircle: CheckCircle,
};

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 dark:from-slate-900/90 dark:to-slate-900/50 light:from-white light:to-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-md relative overflow-hidden group">

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] mb-6 shadow-xl shadow-purple-950/50 dark:shadow-purple-950/50 light:shadow-purple-100">
                <div className="w-full h-full bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-slate-900 rounded-[15px] flex items-center justify-center">
                  <User className="w-10 h-10 text-cyan-400" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 font-semibold block">
                  {aboutMeData.personalPlaceholders.role}
                </span>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {aboutMeData.subheading}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                  {aboutMeData.personalPlaceholders.location}
                </p>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-2 text-xs font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                <UserCheck className="w-4 h-4" />
                <span>{aboutMeData.personalPlaceholders.availability}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative and Values */}
          <div className="lg:col-span-7">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 text-xs font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 dark:text-cyan-400 light:text-purple-600" />
              <span>Developer Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight mb-6">
              {aboutMeData.heading}
            </h2>

            <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-600 text-base leading-relaxed mb-8">
              {aboutMeData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutMeData.coreValues.map((val) => {
                const IconComponent = valueIconMap[val.icon] || Code;
                return (
                  <div
                    key={val.title}
                    className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-purple-500/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-50 border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-purple-600 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">{val.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
