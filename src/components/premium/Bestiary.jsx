import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const creatures = [
  {
    id: 'dragon',
    name: 'Dragon',
    image: '🐉',
    description: 'Ancient winged guardians whose breath can reshape mountains and ink the sky with flame.',
    power: 'Skyfire',
    habitat: 'Volcanoes, cliffs, high peaks',
    danger: 'Catastrophic',
    weakness: 'Silver runes and moonlight',
    category: 'Mythic',
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    image: '🦅',
    description: 'A radiant bird that rises from ash, carrying rebirth and purification into every age.',
    power: 'Rebirth Flame',
    habitat: 'Sunlit ruins, crystal forests',
    danger: 'High',
    weakness: 'Darkness and despair',
    category: 'Celestial',
  },
  {
    id: 'griffin',
    name: 'Griffin',
    image: '🦁',
    description: 'Noble hybrid beasts of eagle and lion, renowned for unmatched speed and keen vision.',
    power: 'Storm Dive',
    habitat: 'High ridges, ancient watchtowers',
    danger: 'High',
    weakness: 'Traps and feigned weakness',
    category: 'Hybrid',
  },
  {
    id: 'leviathan',
    name: 'Leviathan',
    image: '🐚',
    description: 'A titanic sea serpent whose wake can drown whole fleets and summon towering tides.',
    power: 'Tidal Dominion',
    habitat: 'Ocean trenches, storm-wracked coasts',
    danger: 'Apocalyptic',
    weakness: 'Shattered relics and saltfire',
    category: 'Aquatic',
  },
  {
    id: 'forest-spirit',
    name: 'Forest Spirit',
    image: '🌿',
    description: 'Whispering guardians of the wild, they bind the forest to memory and moonlight.',
    power: 'Verdant Veil',
    habitat: 'Ancient groves, enchanted woods',
    danger: 'Moderate',
    weakness: 'Iron and noise',
    category: 'Mystic',
  },
  {
    id: 'shadow-beast',
    name: 'Shadow Beast',
    image: '🌑',
    description: 'A predator born from forgotten fear, slipping through darkness with impossible grace.',
    power: 'Night Hunger',
    habitat: 'Caves, ruins, moonless plains',
    danger: 'Severe',
    weakness: 'Light and sacred sigils',
    category: 'Dark',
  },
  {
    id: 'stone-golem',
    name: 'Stone Golem',
    image: '🪨',
    description: 'Massive elemental constructs carved by ancient mages and awakened by runic vows.',
    power: 'Earthbound Fortress',
    habitat: 'Ruins, mountain halls, old temples',
    danger: 'High',
    weakness: 'Crystalline resonance',
    category: 'Elemental',
  },
];

const categories = ['All', 'Mythic', 'Celestial', 'Hybrid', 'Aquatic', 'Mystic', 'Dark', 'Elemental'];

export default function Bestiary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return creatures.filter((creature) => {
      const matchQuery = `${creature.name} ${creature.description}`.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === 'All' || creature.category === category;
      return matchQuery && matchCategory;
    });
  }, [query, category]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300">Bestiary</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Legends of Elarion</h3>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or trait"
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 outline-none"
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((creature) => (
          <motion.article
            key={creature.id}
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200">
                {creature.category}
              </span>
              <div className="text-4xl">{creature.image}</div>
            </div>
            <h4 className="mt-4 text-xl font-semibold text-white">{creature.name}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{creature.description}</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Power</p>
                <p className="mt-1 font-medium text-white">{creature.power}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Habitat</p>
                <p className="mt-1 font-medium text-white">{creature.habitat}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Danger Level</p>
                <p className="mt-1 font-medium text-white">{creature.danger}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Weakness</p>
                <p className="mt-1 font-medium text-white">{creature.weakness}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
