import Card from '../components/Card';

const guardians = [
  {
    name: 'Aurelion',
    biography: 'The ember-hearted guardian who carries the flame of dawn and shields the northern passes.',
    weapon: 'Sunforged Halberd',
    skills: ['Solar Burst', 'Ember Ward', 'Radiant Charge'],
    powerCore: 'Fire Core',
    level: 'Level 99',
  },
  {
    name: 'Nyra',
    biography: 'A tide-born guardian who commands the waters of the moonlit coasts and restores fallen spirits.',
    weapon: 'Moonglass Spear',
    skills: ['Tidal Surge', 'Aqua Veil', 'Current Bind'],
    powerCore: 'Water Core',
    level: 'Level 97',
  },
  {
    name: 'Veyr',
    biography: 'The wind-rider who moves between stormwalls and sky temples with unmatched agility.',
    weapon: 'Stormwhisper Bow',
    skills: ['Zephyr Step', 'Tempest Arrow', 'Sky Dive'],
    powerCore: 'Wind Core',
    level: 'Level 95',
  },
  {
    name: 'Caelan',
    biography: 'A mountain guardian rooted in ancient stone and sworn to protect the forgotten roads.',
    weapon: 'Stonewake Maul',
    skills: ['Earthen Wall', 'Seismic Pulse', 'Rootbind'],
    powerCore: 'Earth Core',
    level: 'Level 98',
  },
  {
    name: 'Morrow',
    biography: 'The shadow-blooded sentinel who walks between dawn and dusk, guarding forbidden relics.',
    weapon: 'Nightreign Dagger',
    skills: ['Void Step', 'Shade Veil', 'Nightfall'],
    powerCore: 'Shadow Core',
    level: 'Level 96',
  },
  {
    name: 'Ilys',
    biography: 'A radiant guardian of mercy who channels light through shattered ruins and broken banners.',
    weapon: 'Lumen Blade',
    skills: ['Halo Burst', 'Sanctuary', 'Radiant Pulse'],
    powerCore: 'Light Core',
    level: 'Level 94',
  },
  {
    name: 'Oris',
    biography: 'The star-keeper who seals cosmic fractures and brings clarity to the heavens above Elarion.',
    weapon: 'Astral Prism',
    skills: ['Starfall', 'Constellation Map', 'Celestial Link'],
    powerCore: 'Star Core',
    level: 'Level 100',
  },
];

function Guardians() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Legends</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">The seven guardians</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {guardians.map((guardian, index) => (
          <Card key={guardian.name} delay={index * 0.05} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">{guardian.name}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-cyan-300">{guardian.level}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {guardian.powerCore}
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400">{guardian.biography}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-500">Weapon</p>
                <p className="mt-1 font-medium text-slate-100">{guardian.weapon}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-500">Skills</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {guardian.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Guardians;
