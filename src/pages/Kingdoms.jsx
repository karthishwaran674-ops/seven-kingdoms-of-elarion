import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { kingdomApi } from '../services/api';

const fallbackKingdoms = [
  {
    name: 'Aureth',
    capital: 'Sunspire',
    description: 'A golden highland realm where crystal orchards bloom in the light of the dawn core.',
    population: '2.8M',
    climate: 'Temperate and bright',
    signaturePower: 'Solar Bloom',
    reference: 'Inspired by Chola (tiger emblem)',
  },
  {
    name: 'Nerath',
    capital: 'Tideglass',
    description: 'Moonlit coastlines and floating citadels that rise from the sea with every tide.',
    population: '3.1M',
    climate: 'Coastal and misty',
    signaturePower: 'Tide Veil',
    reference: 'Inspired by Pandya (fish emblem)',
  },
  {
    name: 'Vhalor',
    capital: 'Obsidian Keep',
    description: 'A volcanic kingdom alive with ember forests and iron cliffs guarded by ancient forges.',
    population: '1.6M',
    climate: 'Volcanic and warm',
    signaturePower: 'Ember Forge',
  },
  {
    name: 'Thalor',
    capital: 'Mosshaven',
    description: 'An emerald kingdom woven with living vines and hidden river sanctuaries.',
    population: '2.3M',
    climate: 'Lush and humid',
    signaturePower: 'Rootwake',
    reference: 'Inspired by Chera (elephant emblem)',
  },
  {
    name: 'Nyxmar',
    capital: 'Starfall Hollow',
    description: 'A shadowy kingdom where lantern forests glow with ghostfire and silver mist.',
    population: '900K',
    climate: 'Cool and nocturnal',
    signaturePower: 'Shadow Lattice',
  },
  {
    name: 'Lunara',
    capital: 'Auric Vale',
    description: 'A luminous realm of floating gardens and crystal rivers that shimmer at sunrise.',
    population: '1.4M',
    climate: 'Mild and alpine',
    signaturePower: 'Halo Rain',
  },
  {
    name: 'Celestis',
    capital: 'Skyhaven',
    description: 'A highland citadel suspended above the clouds, home to observatories and wind towers.',
    population: '650K',
    climate: 'High-altitude and windy',
    signaturePower: 'Aether Current',
  },
];

function Kingdoms() {
  const [kingdoms, setKingdoms] = useState(fallbackKingdoms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    kingdomApi
      .getAll()
      .then((response) => {
        if (mounted) {
          const data = response?.data;
          if (Array.isArray(data) && data.length) {
            setKingdoms(data);
          } else {
            setKingdoms(fallbackKingdoms);
          }
        }
      })
      .catch(() => {
        if (mounted) setKingdoms(fallbackKingdoms);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Realms</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Seven kingdoms of Elarion</h1>
      </div>

      {loading ? (
        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-sm text-slate-300">
          Syncing kingdom data from the backend...
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {kingdoms.map((kingdom, index) => (
          <Card key={kingdom.name} delay={index * 0.05} className="overflow-hidden p-0">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">{kingdom.name}</h2>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {kingdom.capital}
                </span>
              </div>
              {kingdom.reference && (
                <p className="mt-2 text-xs italic text-amber-200/80">{kingdom.reference}</p>
              )}
              <p className="mt-4 text-sm leading-7 text-slate-400">{kingdom.description}</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <div><span className="text-slate-500">Population</span><p>{kingdom.population}</p></div>
                <div><span className="text-slate-500">Climate</span><p>{kingdom.climate}</p></div>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                <span className="text-slate-500">Signature Power</span>
                <p className="mt-1 font-medium text-cyan-200">{kingdom.signaturePower}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Kingdoms;
