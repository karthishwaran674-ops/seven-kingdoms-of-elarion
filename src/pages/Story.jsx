import TimelineAccordion from '../components/TimelineAccordion';

const timeline = [
  {
    year: 'The First Dawn',
    title: 'The First Dawn',
    description:
      'Long before kingdoms existed, the world of Elarion was nothing but endless darkness. From the Celestial Core, the Seven Primordial Elements awakened and gave birth to light, oceans, mountains, forests, and life itself. The first guardians emerged to protect the balance, and the Seven Kingdoms were founded to preserve the sacred power of the elements.',
  },
  {
    year: 'The Shattering',
    title: 'The Shattering',
    description:
      'Centuries of peace ended when greed and ambition corrupted several rulers. A devastating war erupted between the kingdoms, breaking the Celestial Core into powerful fragments. Entire cities vanished, mountains split apart, and ancient dragons disappeared. The balance of magic was lost, leaving Elarion divided and scarred forever.',
  },
  {
    year: 'The Return',
    title: 'The Return',
    description:
      'Ancient prophecies speak of a forgotten guardian who will reunite the Seven Kingdoms. As strange celestial signs begin to appear once again, long-lost relics awaken and the elemental powers grow stronger. The fate of Elarion now rests in the hands of a new generation destined to restore the world\'s balance.',
  },
];

function Story() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Lore</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">The story of Elarion</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Long before the modern kingdoms rose, the sky itself was split into seven radiant dominions. Their power still pulses beneath the earth.
        </p>
      </div>

      <TimelineAccordion items={timeline} />
    </main>
  );
}

export default Story;
