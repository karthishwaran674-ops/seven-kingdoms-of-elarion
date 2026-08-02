import Card from '../components/Card';

const cores = [
  { name: 'Fire', description: 'The core of will, heat, and forging spirit.' },
  { name: 'Water', description: 'The core of memory, healing, and ancient tides.' },
  { name: 'Wind', description: 'The core of freedom, movement, and change.' },
  { name: 'Earth', description: 'The core of endurance, roots, and permanence.' },
  { name: 'Shadow', description: 'The core of secrecy, strategy, and twilight power.' },
  { name: 'Light', description: 'The core of mercy, truth, and radiant protection.' },
  { name: 'Star', description: 'The core of destiny, prophecy, and cosmic alignment.' },
];

function PowerSystem() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Elemental Balance</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">The power system of Elarion</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cores.map((core, index) => (
          <Card key={core.name} delay={index * 0.05}>
            <div className="rounded-[1.25rem] border border-white/10 bg-[#060b1e]/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Elemental Core</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{core.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{core.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default PowerSystem;
