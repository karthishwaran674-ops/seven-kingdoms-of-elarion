import Card from '../components/Card';

const dragons = [
  {
    name: 'Veyrath',
    type: 'Ember Wyrm',
    description: 'A molten dragon with scales that glow like a sunrise over volcanic plains.',
    habitat: 'Vhalor Crags',
  },
  {
    name: 'Neris',
    type: 'Tide Serpent',
    description: 'A luminous sea dragon whose wings create currents visible beneath moonlight.',
    habitat: 'Tideglass Shoals',
  },
  {
    name: 'Aethra',
    type: 'Sky Drake',
    description: 'A celestial dragon that glides above the clouds and carries stormlight in its mane.',
    habitat: 'Skyhaven Cliffs',
  },
];

function Dragons() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Ancient Beasts</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">The dragons of Elarion</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dragons.map((dragon, index) => (
          <Card key={dragon.name} delay={index * 0.08}>
            <div className="rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{dragon.type}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{dragon.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{dragon.description}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                Habitat: {dragon.habitat}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Dragons;
