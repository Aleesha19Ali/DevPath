import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import LearningPath from './components/LearningPath';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ProgressDashboard from './components/ProgressDashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] dark:bg-[#0b0f19] light:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-800 font-['Inter',sans-serif] selection:bg-purple-500/30 selection:text-purple-200">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Stats />
        <LearningPath />
        <Technologies />
        <Projects />
        <AboutMe />
        <ProgressDashboard />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
      <BackToTop />
    </div>
  );
}
