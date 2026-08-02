import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const kingdoms = ['Aethera', 'Thornmere', 'Emberfall', 'Mistwake', 'Tideglass', 'Solstice'];
const genderOptions = ['Male', 'Female', 'Other'];
const hairOptions = ['Crown Braids', 'Silver Fringe', 'Storm Cut', 'Rune Locks'];
const armorOptions = ['Moonplate', 'Dragonscale', 'Runebound', 'Starweave'];
const weaponOptions = ['Moonblade', 'Runic Spear', 'Sunbow', 'Ashstaff'];
const elementOptions = ['Storm', 'Nature', 'Fire', 'Shadow', 'Water', 'Light'];

const names = {
  Aethera: ['Auriel', 'Nyxen', 'Selis'],
  Thornmere: ['Rowan', 'Eira', 'Bracken'],
  Emberfall: ['Vael', 'Rhos', 'Kestrel'],
  Mistwake: ['Liora', 'Veyra', 'Morrow'],
  Tideglass: ['Neris', 'Caelan', 'Thalor'],
  Solstice: ['Aureon', 'Lyra', 'Solen'],
};

const companions = {
  Storm: 'Stormwing',
  Nature: 'Forest Lynx',
  Fire: 'Cinder Hound',
  Shadow: 'Nightfox',
  Water: 'Tide Drake',
  Light: 'Sun Hare',
};

const abilities = {
  Storm: 'Calls lightning to shield allies',
  Nature: 'Grows enchanted vines beneath their feet',
  Fire: 'Ignites the air with a blazing aura',
  Shadow: 'Bends darkness into a veil of stealth',
  Water: 'Summons a wave barrier in battle',
  Light: 'Releases radiant healing beams',
};

export default function CharacterCreator() {
  const [form, setForm] = useState({
    gender: 'Female',
    hair: 'Crown Braids',
    armor: 'Moonplate',
    weapon: 'Moonblade',
    kingdom: 'Aethera',
    element: 'Storm',
  });
  const [character, setCharacter] = useState(null);

  const generated = useMemo(() => {
    if (!character) return null;
    return character;
  }, [character]);

  const handleGenerate = () => {
    const namePool = names[form.kingdom] ?? names.Aethera;
    const chosenName = namePool[Math.floor(Math.random() * namePool.length)];
    const powerLevel = 72 + Math.floor(Math.random() * 28);
    setCharacter({
      name: chosenName,
      kingdom: form.kingdom,
      element: form.element,
      companion: companions[form.element],
      ability: abilities[form.element],
      powerLevel,
      gender: form.gender,
      hair: form.hair,
      armor: form.armor,
      weapon: form.weapon,
    });
  };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-violet-300">Character Creator</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Forge a legend</h3>
            </div>
            <div className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">Premium</div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['Gender', genderOptions, 'gender'],
              ['Hair Style', hairOptions, 'hair'],
              ['Armor', armorOptions, 'armor'],
              ['Weapon', weaponOptions, 'weapon'],
              ['Kingdom', kingdoms, 'kingdom'],
              ['Magic Element', elementOptions, 'element'],
            ].map(([label, options, key]) => (
              <label key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</span>
                <select
                  value={form[key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm outline-none"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-4 py-3 font-semibold text-white shadow-[0_0_30px_rgba(129,140,248,0.25)]"
          >
            Generate Character
          </motion.button>
        </div>

        <div className="rounded-[1.5rem] border border-amber-400/20 bg-gradient-to-br from-slate-950/80 to-slate-900/80 p-5">
          {!generated ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-white/15 bg-white/5 p-6 text-center text-slate-300">
              <div className="mb-4 text-5xl">🛡️</div>
              <p className="text-lg text-white">Your hero will appear here</p>
              <p className="mt-2 max-w-xs text-sm text-slate-400">Choose your fate and reveal the character that binds to your chosen kingdom.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[1.25rem] border border-white/10 bg-slate-900/70 p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">Legendary Hero</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{generated.name}</h3>
                </div>
                <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">{generated.powerLevel} PWR</div>
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-900/70 to-cyan-500/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-violet-500 text-2xl text-white">⚔️</div>
                  <div>
                    <p className="text-sm text-slate-300">{generated.gender} • {generated.hair}</p>
                    <p className="text-sm text-slate-400">{generated.armor} • {generated.weapon}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Kingdom</p>
                    <p className="mt-1 font-medium text-white">{generated.kingdom}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Magic</p>
                    <p className="mt-1 font-medium text-white">{generated.element}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Animal Companion</p>
                    <p className="mt-1 font-medium text-white">{generated.companion}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Special Ability</p>
                    <p className="mt-1 font-medium text-white">{generated.ability}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
