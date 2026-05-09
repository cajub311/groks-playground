import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, RefreshCw, Send, Calendar, Sword, TrendingUp } from 'lucide-react';

interface Message {
  role: 'user' | 'grok';
  content: string;
}

export default function GrokHub() {
  const [aiInput, setAiInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'grok', content: "Hey Charles! I'm Grok, your personal AI sidekick. What are we building today?" }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(391.88);
  const [portfolioChange, setPortfolioChange] = useState(0.22);

  // Wedding countdown (target: April 25, 2026)
  const [daysLeft, setDaysLeft] = useState(0);

  React.useEffect(() => {
    const targetDate = new Date('2026-04-25').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDaysLeft(Math.max(0, days));
    }, 1000 * 60 * 60); // update hourly
    return () => clearInterval(interval);
  }, []);

  const sendPrompt = async () => {
    if (!aiInput.trim()) return;

    const userMessage: Message = { role: 'user', content: aiInput };
    setMessages(prev => [...prev, userMessage]);
    setAiInput('');
    setIsThinking(true);

    // Simulate Grok thinking
    setTimeout(() => {
      let response = '';
      const inputLower = aiInput.toLowerCase();

      if (inputLower.includes('wedding') || inputLower.includes('budget')) {
        response = "Great question! Your wedding budget is at 68% used with 142 guests confirmed. I recommend prioritizing the venue and catering — want me to pull up a detailed breakdown or suggest cost-saving ideas?";
      } else if (inputLower.includes('crypto') || inputLower.includes('portfolio') || inputLower.includes('finance')) {
        response = `Your crypto portfolio is sitting pretty at $${portfolioValue.toFixed(2)} (+$${portfolioChange}). Bitcoin ETF news looks bullish — shall I simulate some trade scenarios for you?`;
      } else if (inputLower.includes('game') || inputLower.includes('rpg') || inputLower.includes('character')) {
        response = "Ah, the Warded Realms! Your Demon Cycle project is coming along nicely. Want a fresh character concept? Here's one: A shadow-weaving rogue who can phase through walls but risks losing memories each time. Ready to flesh it out?";
      } else if (inputLower.includes('hello') || inputLower.includes('hi')) {
        response = "Hello Charles! Ready to conquer the day? Finance, wedding, or epic RPG session first?";
      } else {
        const funResponses = [
          "Fascinating idea! Let's make it even cooler — what's the first step you're thinking?",
          "I love where your head's at. Want me to generate a quick prototype plan or some code snippets?",
          "Epic! This ties perfectly into your other projects. Should we brainstorm a full roadmap?",
          "Noted! I've logged that in your personal knowledge base. Anything else on your mind?"
        ];
        response = funResponses[Math.floor(Math.random() * funResponses.length)];
      }

      const grokMessage: Message = { role: 'grok', content: response };
      setMessages(prev => [...prev, grokMessage]);
      setIsThinking(false);
    }, 1200);
  };

  const refreshPortfolio = () => {
    const newValue = parseFloat((portfolioValue + (Math.random() - 0.5) * 15).toFixed(2));
    const newChange = parseFloat(((Math.random() - 0.4) * 2).toFixed(2));
    setPortfolioValue(Math.max(350, newValue));
    setPortfolioChange(newChange);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-3xl">🌀</span>
              </div>
              <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                GROKHUB
              </h1>
            </div>
            <p className="text-xl text-zinc-400 max-w-md">
              Charles&apos; Personal Command Center • Powered by Grok &amp; xAI
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium">
            <a href="#finance" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><TrendingUp className="w-4 h-4" /> FINANCE</a>
            <a href="#wedding" className="hover:text-purple-400 transition-colors flex items-center gap-2"><Calendar className="w-4 h-4" /> WEDDING</a>
            <a href="#rpg" className="hover:text-pink-400 transition-colors flex items-center gap-2"><Sword className="w-4 h-4" /> RPG TOOLS</a>
            <a href="#playground" className="hover:text-emerald-400 transition-colors flex items-center gap-2">🚀 PLAYGROUND</a>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Finance Snapshot */}
          <div id="finance" className="lg:col-span-5 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 group hover:border-cyan-500/40 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-2xl">
                  <TrendingUp className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Finance</h2>
                  <p className="text-xs text-emerald-400 tracking-[3px] font-mono">M1 + CRYPTO • LIVE</p>
                </div>
              </div>
              <button 
                onClick={refreshPortfolio}
                className="flex items-center gap-2 text-xs px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-all active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" /> REFRESH
              </button>
            </div>

            <div className="mb-10">
              <div className="text-sm text-zinc-500 mb-1">TOTAL PORTFOLIO VALUE</div>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl font-mono font-semibold tabular-nums tracking-tighter">${portfolioValue}</span>
                <span className={`text-2xl font-medium ${portfolioChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {portfolioChange >= 0 ? '+' : ''}${portfolioChange}
                </span>
              </div>
              <div className="text-emerald-400 text-sm flex items-center gap-1 mt-1">
                <span>▲</span> <span>+0.06% today</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="text-zinc-500 text-xs mb-2">M1 FINANCE</div>
                <div className="font-mono text-xl">$2,847.12</div>
                <div className="text-emerald-400 text-xs">+1.8% this week</div>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="text-zinc-500 text-xs mb-2">CRYPTO (BTC/ETH)</div>
                <div className="font-mono text-xl">$391.88</div>
                <div className="text-emerald-400 text-xs">Synced moments ago</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800 flex gap-3">
              <Link href="#" className="flex-1 text-center py-3.5 bg-white text-black font-semibold rounded-2xl text-sm hover:bg-zinc-100 transition-all">Open M1</Link>
              <Link href="#" className="flex-1 text-center py-3.5 border border-zinc-700 hover:bg-zinc-800 rounded-2xl text-sm transition-all">View CoinTracker</Link>
            </div>
          </div>

          {/* Wedding Hub */}
          <div id="wedding" className="lg:col-span-4 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 hover:border-purple-500/40 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-2xl">
                <Calendar className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Wedding 2026</h2>
                <p className="text-xs text-purple-400 tracking-[3px] font-mono">APRIL 25 • 320 DAYS</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">GUESTS CONFIRMED</span>
                  <span className="font-mono text-emerald-400">142 / 150</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-1.5 w-[94.7%] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">BUDGET USED</span>
                  <span className="font-mono text-amber-400">68%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-1.5 w-[68%] bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="text-6xl font-mono font-semibold tabular-nums text-purple-400 tracking-tighter">{daysLeft}</div>
                <div className="text-sm text-zinc-500 -mt-1">DAYS UNTIL THE BIG DAY</div>
              </div>
            </div>

            <button 
              onClick={() => alert("Full Wedding Planner opening soon! (Connect your Google Drive for real-time sync)")}
              className="mt-10 w-full py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black font-semibold rounded-2xl flex items-center justify-center gap-3 transition-all group"
            >
              OPEN FULL PLANNER <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
          </div>

          {/* RPG Tools */}
          <div id="rpg" className="lg:col-span-3 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 hover:border-pink-500/40 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-500/10 rounded-2xl">
                <Sword className="w-7 h-7 text-pink-400" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Warded Realms</h2>
                <p className="text-xs text-pink-400 tracking-[3px] font-mono">YOUR RPG LAB</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="bg-zinc-950/60 border border-zinc-800 hover:border-pink-500/50 p-6 rounded-2xl cursor-pointer transition-all active:scale-[0.985]" onClick={() => alert("Character sheet builder coming in v2!")}>
                <div className="font-semibold mb-1">Character Builder</div>
                <div className="text-xs text-zinc-500">Create &amp; manage heroes</div>
              </div>
              <div className="bg-zinc-950/60 border border-zinc-800 hover:border-pink-500/50 p-6 rounded-2xl cursor-pointer transition-all active:scale-[0.985]" onClick={() => alert("Lore &amp; world builder activated!")}>
                <div className="font-semibold mb-1">Lore Engine</div>
                <div className="text-xs text-zinc-500">World &amp; quest generator</div>
              </div>
            </div>

            <div className="text-[10px] text-center text-zinc-500 mt-auto pt-6 border-t border-zinc-800">Inspired by your Warded Man &amp; Demon Cycle projects</div>
          </div>
        </div>

        {/* AI Playground */}
        <div id="playground" className="mt-8 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-700 rounded-3xl p-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl">
                <span className="text-3xl">🧠</span>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Grok AI Playground</h2>
                <p className="text-sm text-emerald-400">Real-time chat with me • Powered by xAI</p>
              </div>
            </div>
            <div className="text-xs px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full font-mono tracking-widest">LIVE</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl h-[420px] flex flex-col overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 text-sm custom-scroll">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-6 py-4 rounded-3xl ${msg.role === 'user' 
                    ? 'bg-white text-black' 
                    : 'bg-zinc-900 border border-zinc-700'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-3xl flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                    <span className="text-emerald-400 text-xs">Grok is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-zinc-800 p-4 flex gap-3 bg-zinc-950/80">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Grok about your wedding budget, crypto moves, game ideas..."
                className="flex-1 bg-transparent border border-zinc-700 focus:border-emerald-500 rounded-2xl px-6 py-4 text-sm placeholder:text-zinc-500 outline-none"
              />
              <button
                onClick={sendPrompt}
                disabled={!aiInput.trim() || isThinking}
                className="px-8 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" /> SEND
              </button>
            </div>
          </div>

          <p className="text-center text-[10px] text-zinc-500 mt-4">This is a simulated Grok experience. Real Grok API coming soon to your hub.</p>
        </div>

        <footer className="mt-24 text-center text-xs text-zinc-500">
          <p>Built live with ❤️ by Grok for Charles • <a href="https://github.com/cajub311/groks-playground" target="_blank" className="underline hover:text-white">View on GitHub</a></p>
          <p className="mt-1">Deployed on Vercel • Ready for your custom domain</p>
        </footer>
      </div>
    </main>
  );
}
