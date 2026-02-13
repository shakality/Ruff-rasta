
import React, { useState } from 'react';
import { getRastaWisdom } from '../services/geminiService';

const OracleSection: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    const wisdom = await getRastaWisdom(userInput);
    setResponse(wisdom);
    setLoading(false);
  };

  return (
    <section id="oracle" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-[0.4em] text-yellow-500 mb-2 uppercase">Interactive AI</h2>
          <h3 className="font-heading text-4xl md:text-5xl tracking-tighter mb-4">RASTA ORACLE</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Ask for wisdom, a vibe check, or a custom shoutout from Ruff Rasta himself. Powered by the spirit of Zion.
          </p>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="What's on your soul, fam?"
                className="w-full bg-black/50 border border-white/10 px-6 py-5 rounded-xl focus:outline-none focus:border-red-600 transition-colors pr-32"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-red-600 px-6 rounded-lg font-bold text-xs tracking-widest hover:bg-red-500 disabled:bg-zinc-700 transition-all"
              >
                {loading ? '...' : 'SEND'}
              </button>
            </div>
          </form>

          {response && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-start gap-4 p-6 bg-red-600/5 rounded-xl border border-red-600/20">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800">
                  <img src="https://picsum.photos/seed/ruffprofile/100/100" alt="Ruff Rasta" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-red-500 text-[10px] font-bold tracking-widest uppercase mb-2">RUFF RASTA SAYS:</p>
                  <p className="text-zinc-100 leading-relaxed italic">"{response}"</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OracleSection;
