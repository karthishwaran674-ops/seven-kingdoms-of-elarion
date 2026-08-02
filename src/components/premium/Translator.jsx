import { useMemo, useState } from 'react';

const symbols = [
  { symbol: 'ᚠ', meaning: 'Welcome', pronunciation: 'WEL-come' },
  { symbol: 'ᚢ', meaning: 'Warrior', pronunciation: 'WAR-ree-or' },
  { symbol: 'ᚦ', meaning: 'Storm', pronunciation: 'STORM' },
  { symbol: 'ᚨ', meaning: 'Light', pronunciation: 'LITE' },
  { symbol: 'ᚱ', meaning: 'Path', pronunciation: 'PAHTH' },
  { symbol: 'ᚲ', meaning: 'King', pronunciation: 'KING' },
  { symbol: 'ᚷ', meaning: 'Glory', pronunciation: 'GLOR-ee' },
  { symbol: 'ᚹ', meaning: 'Water', pronunciation: 'WAW-ter' },
  { symbol: 'ᚺ', meaning: 'Heart', pronunciation: 'HART' },
  { symbol: 'ᚾ', meaning: 'Night', pronunciation: 'NITE' },
  { symbol: 'ᛁ', meaning: 'I', pronunciation: 'ee' },
  { symbol: 'ᛃ', meaning: 'Journey', pronunciation: 'JUR-nee' },
  { symbol: 'ᛇ', meaning: 'Fire', pronunciation: 'FYR' },
  { symbol: 'ᛈ', meaning: 'Power', pronunciation: 'POW-er' },
  { symbol: 'ᛉ', meaning: 'Rune', pronunciation: 'ROON' },
  { symbol: 'ᛊ', meaning: 'Sky', pronunciation: 'SKY' },
  { symbol: 'ᛏ', meaning: 'Truth', pronunciation: 'TRUTH' },
  { symbol: 'ᛒ', meaning: 'Birth', pronunciation: 'BERTH' },
  { symbol: 'ᛖ', meaning: 'Elder', pronunciation: 'EL-der' },
  { symbol: 'ᛗ', meaning: 'Moon', pronunciation: 'MOON' },
  { symbol: 'ᛚ', meaning: 'Lore', pronunciation: 'LORE' },
  { symbol: 'ᛝ', meaning: 'Guardian', pronunciation: 'GAR-dee-an' },
  { symbol: 'ᛟ', meaning: 'Echo', pronunciation: 'EK-oh' },
  { symbol: 'ᛡ', meaning: 'Spirit', pronunciation: 'SPIR-it' },
  { symbol: 'ᛢ', meaning: 'Stone', pronunciation: 'STOHN' },
  { symbol: 'ᛣ', meaning: 'Crown', pronunciation: 'KROWN' },
  { symbol: 'ᛤ', meaning: 'Vow', pronunciation: 'VOW' },
  { symbol: 'ᛥ', meaning: 'Vale', pronunciation: 'VAYL' },
  { symbol: 'ᛦ', meaning: 'Star', pronunciation: 'STAR' },
  { symbol: 'ᛧ', meaning: 'Shadow', pronunciation: 'SHAH-doh' },
];

export default function Translator() {
  const [input, setInput] = useState('Welcome Warrior');

  const translation = useMemo(() => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];

    return words.map((word, index) => {
      const cleaned = word.toLowerCase();
      const match = symbols.find((entry) => entry.meaning.toLowerCase() === cleaned || entry.meaning.toLowerCase().includes(cleaned));
      return {
        word,
        symbol: match?.symbol ?? 'ᛉ',
        pronunciation: match?.pronunciation ?? 'unknown',
        meaning: match?.meaning ?? word,
      };
    });
  }, [input]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">Ancient Language</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Elaric Translator</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Type a phrase and receive a rune-stitched translation inspired by the old tongue of Elarion.</p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            className="mt-6 w-full rounded-[1.2rem] border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-100 outline-none"
            placeholder="Enter a phrase"
          />
        </div>

        <div className="rounded-[1.5rem] border border-amber-400/20 bg-gradient-to-br from-slate-950/80 to-slate-900/80 p-5">
          <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Ancient Language Name</p>
            <p className="mt-2 text-2xl font-semibold text-white">Elaric</p>
          </div>
          <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-slate-900/70 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Translation</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {translation.map((entry, index) => (
                <div key={`${entry.word}-${index}`} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                  <div className="text-3xl text-amber-300">{entry.symbol}</div>
                  <p className="mt-2 text-sm font-medium text-white">{entry.word}</p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{entry.pronunciation}</p>
                  <p className="mt-1 text-xs text-slate-300">{entry.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
