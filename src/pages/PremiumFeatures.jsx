import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const WorldMap = lazy(() => import('../components/premium/WorldMap'));
const CharacterCreator = lazy(() => import('../components/premium/CharacterCreator'));
const Bestiary = lazy(() => import('../components/premium/Bestiary'));
const Translator = lazy(() => import('../components/premium/Translator'));
const Achievements = lazy(() => import('../components/premium/Achievements'));

function PremiumFeatures() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">Premium Features</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">The Living World of Elarion</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          Discover the kingdoms, forge a champion, study legendary creatures, decode ancient runes, and unlock the chronicles of this fantasy realm.
        </p>
      </div>

      <div className="space-y-6">
        <Suspense fallback={<Loader />}>
          <WorldMap />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <CharacterCreator />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Bestiary />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Translator />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Achievements />
        </Suspense>
      </div>
    </div>
  );
}

export default PremiumFeatures;
