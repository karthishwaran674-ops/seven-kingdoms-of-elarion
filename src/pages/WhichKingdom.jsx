import { useMemo, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import ChoiceCard from '../components/ChoiceCard';

const kingdoms = [
  {
    name: 'Aureth',
    description: 'A luminous realm of scholars and sky-templed sages, drawn to wisdom and cosmic truth.',
    traits: ['Insightful', 'Visionary', 'Calm'],
  },
  {
    name: 'Tideglass',
    description: 'A coastal stronghold where courage and loyalty rule the tides of destiny.',
    traits: ['Brave', 'Trustworthy', 'Steady'],
  },
  {
    name: 'Shadowfen',
    description: 'A mysterious land of clever tacticians who thrive in shadows and secrets.',
    traits: ['Resourceful', 'Quiet', 'Strategic'],
  },
  {
    name: 'Emberhold',
    description: 'A volcanic bastion fueled by passion, strength, and heart-forged resolve.',
    traits: ['Fierce', 'Driven', 'Bold'],
  },
];

const results = {
  Aureth: {
    title: 'Aureth — The Starbound Court',
    summary: 'You belong to Aureth, where wisdom and harmony guide every step. Your spirit reflects a calm seeker of the hidden cosmic order.',
  },
  Tideglass: {
    title: 'Tideglass — The Ocean Vanguard',
    summary: 'You belong to Tideglass, where loyalty and courage swell like the tide. You are a steadfast guardian at the heart of every storm.',
  },
  Shadowfen: {
    title: 'Shadowfen — The Veiled Council',
    summary: 'You belong to Shadowfen, where subtlety and strategy define your path. You are the quiet mind shaping fate from the edge of shadow.',
  },
  Emberhold: {
    title: 'Emberhold — The Flame Bastion',
    summary: 'You belong to Emberhold, where passion and will are forged into power. Your spirit burns bright with bold determination.',
  },
};

function WhichKingdom() {
  const [selection, setSelection] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedKingdom = useMemo(() => (submitted ? results[selection] : null), [selection, submitted]);

  const handleSubmit = () => {
    if (!selection) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelection(null);
    setSubmitted(false);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Which Kingdom Are You?</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Discover your realm</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Select the kingdom that best matches your style, then reveal the realm that mirrors your spirit.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
          <Button onClick={handleSubmit} disabled={!selection} className="disabled:cursor-not-allowed disabled:opacity-50">
            Reveal kingdom
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {kingdoms.map((kingdom) => (
          <ChoiceCard
            key={kingdom.name}
            title={kingdom.name}
            description={kingdom.description}
            selected={selection === kingdom.name}
            onClick={() => {
              setSelection(kingdom.name);
              setSubmitted(false);
            }}
          />
        ))}
      </div>

      {submitted && selectedKingdom && (
        <Card className="mt-10 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Kingdom revealed</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{selectedKingdom.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">{selectedKingdom.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-400">
            {kingdoms.find((kingdom) => kingdom.name === selection).traits.map((trait) => (
              <span key={trait} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {trait}
              </span>
            ))}
          </div>
        </Card>
      )}
    </main>
  );
}

export default WhichKingdom;
