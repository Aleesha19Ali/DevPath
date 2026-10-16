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
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden group">

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[1px] mb-6 shadow-xl shadow-purple-950/50">
                <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center">
                  <User className="w-10 h-10 text-cyan-400" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                  {aboutMeData.personalPlaceholders.role}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {aboutMeData.subheading}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {aboutMeData.personalPlaceholders.location}
                </p>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <UserCheck className="w-4 h-4" />
                <span>{aboutMeData.personalPlaceholders.availability}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative and Values */}
          <div className="lg:col-span-7">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Developer Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              {aboutMeData.heading}
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
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
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/20 flex items-center justify-center text-cyan-400 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{val.description}</p>
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
