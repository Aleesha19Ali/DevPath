import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  X,
  FileCode,
  Palette,
  Code2,
  Wind,
  Atom,
  Terminal,
  Server,
  Database,
  Zap,
  Flame,
  Sparkles,
  Bot,
  ChevronRight
} from 'lucide-react';
import { technologies } from '../data/portfolioData';
import TechDetailModal from './TechDetailModal';

const iconMap = {
  FileCode: FileCode,
  Palette: Palette,
  Code2: Code2,
  Wind: Wind,
  Atom: Atom,
  Terminal: Terminal,
  Server: Server,
  Database: Database,
  Zap: Zap,
  Flame: Flame,
  Sparkles: Sparkles,
  Bot: Bot,
};

const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI Tools'];
const statuses = ['All Statuses', 'Explored', 'Practicing', 'In Progress'];

export default function Technologies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [activeModalTech, setActiveModalTech] = useState(null);

  // Filter tech cards based on search query, category, and status filters
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesSearch =
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || tech.category === selectedCategory;

      const matchesStatus =
        selectedStatus === 'All Statuses' || tech.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedStatus('All Statuses');
  };

  return (
    <section id="technologies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technologies Explored
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A breakdown of technologies, frameworks, databases, and AI tooling studied throughout my development journey.
          </p>
        </div>

        {/* Search & Filtering Controls Bar */}
        <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search technologies or topics (e.g., React, Flexbox, CRUD)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-4 flex flex-wrap gap-1.5 justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status Dropdown Filter */}
            <div className="md:col-span-3 flex items-center justify-between gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-xs font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                {statuses.map((status) => (
                  <option key={status} value={status} className="bg-slate-900 text-slate-200">
                    {status}
                  </option>
                ))}
              </select>

              {(searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All Statuses') && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-3 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold whitespace-nowrap transition-colors"
                  title="Clear all active filters"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Technology Cards Grid */}
        {filteredTechnologies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech) => {
              const IconComponent = iconMap[tech.icon] || Code2;
              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-950/40 backdrop-blur-md group hover:-translate-y-1"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                            {tech.name}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {tech.category}
                          </span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
                        {tech.status}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {tech.description}
                    </p>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tech.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Progress Bar & Explore Topics Button */}
                  <div>
                    {tech.progress !== undefined && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>Exploration Progress</span>
                          <span className="text-cyan-400 font-bold">{tech.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-500"
                            style={{ width: `${tech.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveModalTech(tech)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-purple-600 hover:text-white border border-slate-700/80 hover:border-purple-500 transition-all duration-200 group-hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                      <span>Explore Topics</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No matching technologies found</h3>
            <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
              We couldn't find any technology matching "{searchQuery}" with the selected filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Tech Topic Detail Modal Dialog */}
      <TechDetailModal
        tech={activeModalTech}
        isOpen={!!activeModalTech}
        onClose={() => setActiveModalTech(null)}
      />
    </section>
  );
}
