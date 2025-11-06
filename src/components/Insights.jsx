import React from 'react';
import { Gauge } from './atoms/Gauge';

function MiniLineChart({ values = [] }) {
  const width = 600;
  const height = 200;
  const padding = 20;
  const max = Math.max(...values, 1);
  const stepX = (width - padding * 2) / (values.length - 1 || 1);
  const points = values
    .map((v, i) => {
      const x = padding + i * stepX;
      const y = height - padding - (v / max) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-56">
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`${points} ${width - padding},${height - padding} ${padding},${height - padding}`}
        fill="url(#line)"
      />
    </svg>
  );
}

export default function Insights() {
  const workload = [40, 60, 55, 75, 90, 50, 45];
  return (
    <section id="insights" className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">This week’s forecast</h3>
              <span className="text-xs text-white/60">LSTM prediction</span>
            </div>
            <div className="mt-4">
              <MiniLineChart values={workload} />
              <div className="mt-2 flex justify-between text-xs text-white/50">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                  <span key={d} className="w-8 text-center">{d}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-80 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-white/60">Efficiency score</p>
              <div className="mt-4 flex items-center justify-center">
                <Gauge value={82} />
              </div>
              <p className="mt-4 text-xs text-emerald-400">+6% WoW</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Time saved</p>
              <p className="mt-3 text-3xl font-semibold">7h 45m</p>
              <p className="mt-2 text-xs text-white/60">via automated flows</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Top recommendation</p>
              <p className="mt-3 text-sm">Automate weekly project status report from Notion → Gmail.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Bottleneck</p>
              <p className="mt-3 text-sm">Tuesday afternoon email triage predicted to overflow. Suggest batched processing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
