import React from 'react';
import { Brain, BarChart3, Bot, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Learning engine',
    desc: 'Understands your habits with ML, NLP, and reinforcement learning to tailor automation to you.',
  },
  {
    icon: BarChart3,
    title: 'Predictive insights',
    desc: 'LSTM time-series models forecast workload peaks and bottlenecks before they slow you down.',
  },
  {
    icon: Bot,
    title: 'Hands-free automation',
    desc: 'Automate recurring tasks across Gmail, Sheets, and Notion without manual setup.',
  },
  {
    icon: Clock,
    title: 'Continuous improvement',
    desc: 'Learns from your feedback to increase accuracy and time saved over time.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    desc: 'Granular controls and transparent logs keep your workspace secure and compliant.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">What makes AutoMind different</h2>
          <p className="mt-3 text-white/70">A unified intelligence layer that observes, predicts, and automates.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07] transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
