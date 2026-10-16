import React from 'react';
import { Code2 } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Learning Path', href: '#learning-path' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = 2025;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg text-white">
                Dev<span className="text-purple-400">Path</span>
              </span>
              <p className="text-xs text-slate-400 font-mono">
                {portfolioInfo.tagline}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer Navigation">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Dynamic Copyright */}
          <div className="text-xs font-mono text-slate-500">
            © {currentYear} Dev Path • All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
