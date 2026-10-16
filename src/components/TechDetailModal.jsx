import React, { useEffect } from 'react';
import { X, CheckCircle, Lightbulb, BookOpen, Target, Sparkles } from 'lucide-react';

export default function TechDetailModal({ tech, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tech) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-900/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tech-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f172a] dark:bg-[#0f172a] light:bg-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-200 rounded-2xl shadow-2xl shadow-purple-950/80 dark:shadow-purple-950/80 light:shadow-purple-200/50 p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-slate-200 dark:text-slate-200 light:text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pr-8">
          <div className="w-12 h-12 rounded-xl bg-purple-950/80 dark:bg-purple-950/80 light:bg-purple-100 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-purple-600 font-bold text-lg">
            {tech.name.substring(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600">
                {tech.category}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200">
                {tech.status}
              </span>
            </div>
            <h3 id="tech-modal-title" className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900">
              {tech.name}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          {tech.description}
        </p>

        {/* Modal Detail Sections */}
        {tech.modalContent && (
          <div className="space-y-6">

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-purple-600 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Overview & Scope</span>
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                {tech.modalContent.overview}
              </p>
            </div>

            {/* Key Concepts Studied */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>Key Concepts Explored</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {tech.modalContent.keyConcepts.map((concept, idx) => (
                  <li key={idx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start gap-2.5 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 p-3 rounded-lg border border-slate-800/50 dark:border-slate-800/50 light:border-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-0.5 shrink-0" />
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Application */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Practical Portfolio Application</span>
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                {tech.modalContent.practicalApplication}
              </p>
            </div>

            {/* Next Learning Goals */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 dark:text-amber-400 light:text-amber-600 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Next Learning Objectives</span>
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 font-mono">
                {tech.modalContent.learningGoals}
              </p>
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white dark:text-white light:text-slate-800 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
