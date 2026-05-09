import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tighter">
              GROKHUB
            </h1>
            <p className="text-zinc-400 text-lg">Charles&apos; Personal Command Center • Powered by Grok &amp; xAI</p>
          </div>
          <nav className="flex gap-8 text-sm font-medium">
            <a href="#finance" className="hover:text-cyan-400 transition-colors">FINANCE</a>
            <a href="#wedding" className="hover:text-purple-400 transition-colors">WEDDING</a>
            <a href="#rpg" className="hover:text-pink-400 transition-colors">RPG TOOLS</a>
            <a href="#playground" className="hover:text-emerald-400 transition-colors">PLAYGROUND</a>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Finance */}
          <div id="finance" className="lg:col-span-4 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/30 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-3">
                <span>💰</span> Finance
              </h2>
              <span className="text-xs bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full">LIVE</span>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-zinc-400 text-sm">Total Portfolio</p>
                <p className="text-5xl font-mono font-semibold text-white">$391.88</p>
                <p className="flex items-center gap-2 text-emerald-400">
                  <span className="text-sm">+ $0.22</span> <span className="text-xs">(+0.06%)</span>
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Quick Links</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="text-xs bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-2xl">M1 Finance</Link>
                  <Link href="#" className="text-xs bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-2xl">CoinTracker</Link>
                  <Link href="#" className="text-xs bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-2xl">Bitcoin ETF</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Wedding */}
          <div id="wedding" className="lg:col-span-4 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all group">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span>💍</span> Wedding 2026
            </h2>
            <div className="space-y-5 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Guest List</span>
                <span className="font-mono text-emerald-400">142 / 150</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Budget Used</span>
                <span className="font-mono text-amber-400">68%</span>
              </div>
              <div className="h-2.5 bg-zinc-800 rounded-full">
                <div className="h-2.5 w-[68%] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Days until wedding</span>
                <span className="font-semibold text-purple-400">~320 days</span>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-white text-black font-semibold rounded-2xl hover:scale-105 transition-all">Open Full Planner →</button>
          </div>

          {/* RPG */}
          <div id="rpg" className="lg:col-span-4 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-pink-500/30 transition-all group">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span>⚔️</span> Warded Realms
            </h2>
            <p className="text-zinc-400 mb-6">Your game dev playground</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800/80 p-5 rounded-2xl hover:bg-zinc-700 transition-colors cursor-pointer">
                Character Sheet
              </div>
              <div className="bg-zinc-800/80 p-5 rounded-2xl hover:bg-zinc-700 transition-colors cursor-pointer">
                Lore Builder
              </div>
            </div>
          </div>
        </div>

        {/* AI Playground */}
        <div id="playground" className="mt-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            🚀 Grok AI Playground
          </h2>
          <p className="text-zinc-400 mb-8">Experiment with prompts right here</p>
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 min-h-[280px] flex flex-col">
            <textarea 
              className="flex-1 bg-transparent outline-none resize-none text-sm"
              placeholder="Ask Grok anything... (e.g. Help me plan my wedding budget better)"
            ></textarea>
            <button className="mt-4 self-end px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-2xl hover:brightness-110 transition-all">
              Send Prompt
            </button>
          </div>
        </div>

        <footer className="mt-20 text-center text-xs text-zinc-500 flex flex-col items-center gap-2">
          <p>Built live with Grok • Real-time collaboration with Charles</p>
          <a href="https://github.com/cajub311/groks-playground" target="_blank" className="underline hover:text-white">github.com/cajub311/groks-playground</a>
        </footer>
      </div>
    </main>
  );
}
