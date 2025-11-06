import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Insights from './components/Insights';
import CommandBar from './components/CommandBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <Insights />
      <CommandBar />
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} AutoMind. Built for a smarter workday.
        </div>
      </footer>
    </div>
  );
}

export default App;
