import React, { useState } from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('app.jsx');

  const codeSnippets = {
    'app.jsx': `// Dev Path - Learning Journey Component
import { useState } from 'react';

export default function DevPath() {
  const [focus, setFocus] = useState('Full-Stack Web');
  const skills = ['React.js', 'Node.js', 'Tailwind CSS', 'AI Tools'];

  return (
    <div className="portfolio">
      <h1>Learn. Build. Grow.</h1>
      <p>Current Focus: {focus}</p>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}`,
    'server.js': `// Express REST API - Endpoint Setup
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/skills', (req, res) => {
  res.json({
    status: 'success',
    stage: 'Backend Development',
    explored: ['Node.js', 'Express', 'MongoDB']
  });
});

app.listen(5000, () => console.log('Server running...'));`,
    'terminal': `$ git status
On branch main
Your branch is up to date with 'origin/main'.

$ npm run build
> vite build
✓ 20 modules transformed.
dist/index.html   1.2 kB
✓ Built in 240ms successfully!`
  };

  const handleScroll = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-xs font-medium text-purple-300 shadow-md shadow-purple-950/40 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{portfolioInfo.statusLabel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building My Future, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                One Line of Code
              </span>{' '}
              at a Time.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {portfolioInfo.subheading}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScroll('technologies')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-600/40 transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <span>Explore My Skills</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span>View My Projects</span>
              </button>
            </div>

            {/* Quick Feature Highlights */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 w-full max-w-xl">
              <div>
                <span className="block text-2xl font-bold text-white font-mono">12+</span>
                <span className="text-xs text-slate-400">Tech Cards</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-cyan-400 font-mono">6</span>
                <span className="text-xs text-slate-400">Roadmap Stages</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-purple-400 font-mono">100%</span>
                <span className="text-xs text-slate-400">Hands-on Growth</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Editor Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-700/60 bg-[#0d121f]/90 shadow-2xl shadow-purple-950/50 backdrop-blur-xl overflow-hidden group">

              {/* Top Bar with window controls & tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080b13] border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center space-x-1">
                  {['app.jsx', 'server.js', 'terminal'].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === tab
                          ? 'bg-slate-800 text-purple-300 border border-purple-500/30'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center text-slate-500 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>

              {/* Code Snippet Display Body */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[310px] text-slate-300 bg-[#0d121f]/90">
                <pre className="text-left font-mono">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status footer bar inside editor */}
              <div className="px-4 py-2 bg-[#080b13]/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Dev Path Environment Active</span>
                </div>
                <span>UTF-8 • React 19</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
