import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles size={14} />
              <span>AI-powered workflow intelligence</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              AutoMind automates your day by learning how you work
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
              An adaptive platform that watches, learns, and optimizes your digital routines. Predict workload peaks, reduce repetitive tasks, and let automation evolve with your feedback.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 px-5 py-3 text-sm font-medium text-white transition">
                <Rocket size={18} />
                Start free
              </a>
              <a href="#insights" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 px-5 py-3 text-sm font-medium text-white transition">
                View insights
              </a>
            </div>
          </div>

          <div className="relative h-[440px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-400/10 to-amber-300/10 mix-blend-screen" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),rgba(2,6,23,0))]" />
    </section>
  );
}
