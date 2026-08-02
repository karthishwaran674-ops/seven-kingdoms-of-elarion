import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const flashes = [
  { label: 'Aureth', icon: '🐅' },
  { label: 'Nerath', icon: '🐟' },
  { label: 'Vhalor', icon: '🐺' },
  { label: 'Sylvaris', icon: '🦅' },
  { label: 'Frostmere', icon: '🦌' },
  { label: 'Zephyria', icon: '🦁' },
  { label: 'Verdantis', icon: '🐉' },
];

function JourneyIntro({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [flashIndex, setFlashIndex] = useState(0);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timeouts = [
      setTimeout(() => setStage(1), 5000),
      setTimeout(() => setStage(2), 10000),
      setTimeout(() => setStage(3), 15000),
      setTimeout(() => setStage(4), 20000),
      setTimeout(() => onComplete(), 25000),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  useEffect(() => {
    if (stage !== 3) {
      setFlashIndex(0);
      return undefined;
    }

    const interval = setInterval(() => {
      setFlashIndex((current) => {
        if (current >= flashes.length - 1) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [stage]);

  const stars = useMemo(
    () => [...Array(30)].map((_, index) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      id: index,
    })),
    []
  );

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-black/95" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {stars.map((star) => (
            <motion.span
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: 0.7,
              }}
              animate={{ opacity: [0.2, 0.95, 0.2], y: [0, -6, 0] }}
              transition={{ duration: 4 + star.delay, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:px-12">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative h-0 w-full overflow-hidden rounded-full bg-white/5 px-8 py-6 shadow-[0_0_70px_rgba(255,255,255,0.08)] backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/90">Journey Mode</p>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">The Chronicles of Elarion</h1>
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div
              key="map"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative flex h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-6 shadow-[0_0_80px_rgba(41,37,60,0.45)]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.02, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,210,249,0.05),transparent_35%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,146,255,0.12),transparent_28%)]" />
                  <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                  <div className="absolute left-1/3 top-1/4 h-full w-px bg-white/10" />
                  <div className="absolute left-[60%] top-[18%] h-full w-px bg-white/10" />
                  <div className="absolute left-[22%] top-[65%] h-px w-3/4 bg-white/10" />
                  <div className="absolute left-[70%] top-[55%] h-px w-2/5 bg-white/10" />
                  <div className="absolute left-[40%] top-[80%] h-px w-1/2 bg-white/10" />
                </motion.div>
                <div className="relative z-10 text-left">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Ancient map</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Seven kingdoms bound by fate</h2>
                </div>
              </div>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="quote"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">The call to adventure</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Seven Kingdoms await their chosen guardian.
              </h2>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div
              key="flashes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full w-full items-center justify-center"
            >
              <div className="flex h-56 w-full max-w-2xl items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_70px_rgba(255,255,255,0.08)] backdrop-blur-md">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">Kingdom vision</p>
                  <div className="mt-6 text-7xl leading-none sm:text-8xl">{flashes[flashIndex].icon}</div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{flashes[flashIndex].label}</h3>
                </div>
              </div>
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div
              key="portal"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex h-72 w-72 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 shadow-[0_0_100px_rgba(34,211,238,0.2)] backdrop-blur-xl">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 via-slate-900/40 to-violet-500/20">
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.28),transparent_58%)] blur-xl" />
                  <span className="absolute inset-12 rounded-full border border-cyan-200/20" />
                  <span className="relative text-6xl">✨</span>
                </div>
              </div>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">Your journey begins...</h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default JourneyIntro;
