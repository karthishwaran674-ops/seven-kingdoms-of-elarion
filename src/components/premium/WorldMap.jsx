import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const kingdoms = [
  {
    id: 'aether',
    name: 'Aethera',
    animal: 'Phoenix',
    element: 'Storm',
    capital: 'Starspire',
    ruler: 'Queen Seraphine',
    description: 'A cloud-wrapped realm of prophecy, radiant winds, and ancient sky temples.',
    position: 'left-[16%] top-[24%]',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    id: 'thorn',
    name: 'Thornmere',
    animal: 'Wolf',
    element: 'Nature',
    capital: 'Roothaven',
    ruler: 'King Aldren',
    description: 'Emerald forests bloom with living roots and silver rivers that sing at dusk.',
    position: 'left-[32%] top-[55%]',
    accent: 'from-emerald-400 to-lime-500',
  },
  {
    id: 'ember',
    name: 'Emberfall',
    animal: 'Dragon',
    element: 'Fire',
    capital: 'Cinder Keep',
    ruler: 'Lord Vaelor',
    description: 'Volcanic cliffs and brass citadels guard the forge of forbidden light.',
    position: 'left-[53%] top-[24%]',
    accent: 'from-orange-400 to-red-500',
  },
  {
    id: 'mist',
    name: 'Mistwake',
    animal: 'Owl',
    element: 'Shadow',
    capital: 'Moonveil',
    ruler: 'Lady Nyra',
    description: 'A moonlit land where whispered spells drift through pale marshes and ruins.',
    position: 'left-[61%] top-[46%]',
    accent: 'from-indigo-400 to-fuchsia-500',
  },
  {
    id: 'marrow',
    name: 'Marrowfen',
    animal: 'Stag',
    element: 'Earth',
    capital: 'Stonewatch',
    ruler: 'Duke Halvorn',
    description: 'Ancient stone moors cradle old relics and deep-seated runic power.',
    position: 'left-[39%] top-[74%]',
    accent: 'from-amber-400 to-stone-500',
  },
  {
    id: 'tide',
    name: 'Tideglass',
    animal: 'Sea Serpent',
    element: 'Water',
    capital: 'Coralspire',
    ruler: 'High Regent Mira',
    description: 'Crystal coasts and luminous reefs hide the memory of drowned empires.',
    position: 'left-[76%] top-[64%]',
    accent: 'from-sky-400 to-cyan-500',
  },
  {
    id: 'sol',
    name: 'Solstice',
    animal: 'Griffin',
    element: 'Light',
    capital: 'Sunharbor',
    ruler: 'Princess Elara',
    description: 'Golden plains and sacred gardens gleam with celestial harmony and dawnfire.',
    position: 'left-[84%] top-[30%]',
    accent: 'from-yellow-300 to-amber-500',
  },
];

export default function WorldMap() {
  const [selected, setSelected] = useState(kingdoms[0]);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.2),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent)]" />
        <div className="fog absolute -top-10 left-0 h-40 w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_transparent_70%)] blur-3xl" />
        <div className="fog absolute bottom-0 right-0 h-40 w-2/3 bg-[radial-gradient(circle,_rgba(129,140,248,0.18),_transparent_70%)] blur-3xl" />
        <div className="absolute left-[-5%] top-8 h-20 w-36 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-3%] top-20 h-24 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-4 sm:min-h-[500px]">
          <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_25%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(60,30,82,0.85))]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
          >
            <div className="cloud absolute left-10 top-10 h-14 w-24 rounded-full bg-white/10 blur-2xl" />
            <div className="cloud absolute right-16 top-16 h-12 w-20 rounded-full bg-slate-200/10 blur-2xl" />
            <div className="cloud absolute bottom-16 left-1/3 h-16 w-28 rounded-full bg-blue-200/10 blur-2xl" />
          </motion.div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.75)_70%)]" />

          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_50%)]" />
            <motion.div
              className="absolute inset-0 scale-[1.03]"
              initial={{ scale: 0.98, opacity: 0.9 }}
              animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 1000 700" className="h-full w-full">
                <path d="M110 540c70-70 146-119 230-130 110-15 166 52 250 53 102 2 169-47 289-136 29-21 77-18 120 20v140H110Z" fill="rgba(12,18,38,0.8)" />
                <path d="M154 419c80-39 166-49 257-26 76 19 123 41 196 44 80 3 126-34 218-93" stroke="rgba(255,255,255,0.16)" strokeWidth="2" fill="none" />
                <path d="M302 200c72 38 111 73 141 147" stroke="rgba(255,255,255,0.14)" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {kingdoms.map((kingdom) => (
              <motion.button
                key={kingdom.id}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className={`absolute ${kingdom.position} group flex flex-col items-center`}
                onClick={() => setSelected(kingdom)}
                aria-label={`View ${kingdom.name}`}
              >
                <span className={`mb-2 h-3.5 w-3.5 rounded-full bg-gradient-to-r ${kingdom.accent} shadow-[0_0_20px_rgba(255,255,255,0.55)]`} />
                <span className="rounded-full border border-white/20 bg-slate-950/60 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-200 backdrop-blur-sm">
                  {kingdom.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="rounded-[1.5rem] border border-amber-400/20 bg-gradient-to-br from-slate-950/85 to-slate-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">Kingdom Lore</p>
              <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${selected.accent}`} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{selected.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{selected.description}</p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Animal</p>
                <p className="mt-1 font-medium text-white">{selected.animal}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Element</p>
                <p className="mt-1 font-medium text-white">{selected.element}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Capital</p>
                <p className="mt-1 font-medium text-white">{selected.capital}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Ruler</p>
                <p className="mt-1 font-medium text-white">{selected.ruler}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
