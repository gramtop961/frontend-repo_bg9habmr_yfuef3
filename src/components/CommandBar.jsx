import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function CommandBar() {
  const [prompt, setPrompt] = useState('Automate my weekly report');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log; backend wiring can be added later
    console.log('Command submitted:', prompt);
  };

  return (
    <section id="get-started" className="bg-slate-950 text-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Sparkles size={16} />
            <span>Natural language commands powered by GPT + LangChain</span>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 rounded-md bg-slate-900/70 border border-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-indigo-400"
              placeholder="e.g. Show which project is delayed"
            />
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 px-5 py-3 text-sm font-medium text-white transition">
              <Send size={16} />
              Run
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
