import React from 'react';

export function Gauge({ value = 0 }) {
  const angle = Math.max(0, Math.min(100, value)) * 1.8; // 0..180
  return (
    <div className="relative w-28 h-14">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="url(#g)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4" fill="#cbd5e1" />
        <g transform={`rotate(${angle} 50 50)`}>
          <rect x="49" y="22" width="2" height="28" rx="1" fill="#e5e7eb" />
        </g>
      </svg>
      <div className="absolute inset-x-0 -bottom-1 text-center text-xs text-white/70">{value}%</div>
    </div>
  );
}
