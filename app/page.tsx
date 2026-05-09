import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">GrokHub</h1>
            <p className="text-zinc-400">Charles&apos; Personal Playground • Powered by Grok</p>
          </div>
          <nav className="flex gap-6 text-sm uppercase tracking-widest">
            <Link href="#finance" className="hover:text-blue-400">Finance</Link>
            <Link href="#wedding" className="hover:text-blue-400">Wedding</Link>
            <Link href="#games" className="hover:text-blue-400">Games</Link>
            <Link href="#playground" className="hover:text-blue-400">AI Playground</Link>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Finance Card */}
          <div id="finance" className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💰 Finance Snapshot</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-zinc-500">Portfolio Value</p>
                <p className="text-4xl font-mono">$391.88</p>
                <p className="text-emerald-400 text-sm">+0.06% today</p>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-2 w-3/4 bg-emerald-400 rounded-full"></div>
              </div>
              <p className="text-xs text-zinc-400">M1 Finance • CoinTracker • Bitcoin ETF</p>
            </div>
          </div>

          {/* Wedding Card */}
          <div id="wedding" className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💍 Wedding Hub</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>✅ Guest List</span><span className="text-emerald-400">142/150</span></li>
              <li className="flex justify-between"><span>✅ Budget Tracker</span><span className="text-emerald-400">68%</span></li>
              <li className="flex justify-between"><span>📅 Timeline</span><span className="text-amber-400">4 weeks out</span></li>
            </ul>
            <Link href="#" className="mt-6 block text-center bg-white text-black py-3 rounded-2xl font-medium">Open Planner →</Link>
          </div>

          {/* Games Card */}
          <div id="games" className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🎲 Warded Realms</h2>
            <p className="text-zinc-400 mb-6">RPG tools from your game repos</p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-zinc-800 p-4 rounded-2xl">Character Builder</div>
              <div className="bg-zinc-800 p-4 rounded-2xl">World Map</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-zinc-900 rounded-3xl p-8">
          <h2 id="playground" className="text-xl font-semibold mb-6">🚀 AI Playground</h2>
          <div className="bg-black rounded-2xl p-6 font-mono text-sm text-lime-400 h-64 flex items-center justify-center border border-dashed border-lime-400/30">
            <div className="text-center">
              <p>Try a prompt here...</p>
              <p className="text-xs text-zinc-500 mt-4">(Grok-powered experiments coming soon)</p>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-xs text-zinc-500">
          Built live with Grok • <a href="https://github.com/cajub311/groks-playground" target="_blank" className="underline">GitHub</a>
        </footer>
      </div>
    </main>
  );
}