import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Sparkles, Stars } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import JourneyIntro from './JourneyIntro';

const cores = ['Fire', 'Water', 'Wind', 'Earth', 'Shadow', 'Light', 'Star'];

function Hero() {
  const [showJourney, setShowJourney] = useState(false);
  const navigate = useNavigate();

  const onJourneyComplete = useCallback(() => {
    setShowJourney(false);
    navigate('/story');
  }, [navigate]);
  return (
    <section className="relative isolate overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,241,192,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,200,120,0.08),transparent_18%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-18" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,235,190,0.08),transparent_55%)] opacity-26" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.24)_100%)]" />

        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200/30"
            initial={{ opacity: 0.2, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
            animate={{
              opacity: [0.2, 0.55, 0.2],
              y: [0, -10, 0],
              x: [0, 6, 0],
            }}
            transition={{
              duration: 9 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <Stars size={16} />
            Rise of the Seven Guardians
          </div>

          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-[5.5rem] tracking-tight">
            ELARION awakens the forgotten power of the <span className="text-amber-300">Seven</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-amber-100/90">
            Explore an aged realm of parchment kingdoms, celestial sigils, and elemental relics that pulse with destiny beneath an ancient sky.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setShowJourney(true)}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-300/15 to-amber-200/10 px-5 py-3 font-medium text-amber-100 transition hover:scale-[1.02] hover:bg-amber-300/20"
            >
              Begin the Journey <ArrowRight size={18} />
            </button>
            <a
              href="#guardians"
              className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-amber-100/10 px-5 py-3 font-medium text-amber-100 transition hover:scale-[1.02] hover:bg-amber-100/20"
            >
              <Shield size={18} /> Meet the Guardians
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Ancient Covenant', 'Celestial Oaths', 'Elemental Balance'].map((label) => (
              <span key={label} className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-sm text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.12)]">
                {label}
              </span>
            ))}
          </div>
        </motion.div>
        {showJourney && <JourneyIntro onComplete={onJourneyComplete} />}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="absolute inset-0 rounded-[2.3rem] bg-gradient-to-br from-cyan-400/30 via-violet-500/15 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.3rem] border border-amber-300/20 bg-[#120f07]/80 p-4 shadow-[0_20px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6" style={{ clipPath: 'polygon(0 0,100% 4%,100% 96%,96% 100%,4% 100%,0 96%)' }}>
            <div className="pointer-events-none absolute inset-0 rounded-[2.3rem] border border-dashed border-amber-200/15" style={{ clipPath: 'polygon(0 0,100% 4%,100% 96%,96% 100%,4% 100%,0 96%)' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,210,140,0.1),transparent_15%)] opacity-60" />
            <div className="absolute left-0 top-0 h-16 w-16 rounded-br-[2.3rem] bg-[radial-gradient(circle,_rgba(255,239,186,0.18),transparent_65%)]" />
            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-tl-[2.3rem] bg-[radial-gradient(circle,_rgba(255,239,186,0.16),transparent_65%)]" />
            <div className="relative rounded-[2rem] border border-amber-200/15 bg-[#0b0910]/95 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Aether Vault</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Seven Cores, One Destiny</h2>
                </div>
                <div className="rounded-full border border-amber-300/30 bg-amber-300/10 p-3 text-amber-100">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="relative flex h-36 w-36 items-center justify-center rounded-full border border-amber-300/40 bg-gradient-to-br from-amber-400/15 to-violet-500/20 shadow-[0_0_45px_rgba(251,191,36,0.18)]"
                >
                  <div className="absolute inset-3 rounded-full border border-amber-200/20" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/15 bg-[#050816]/80 text-center text-sm font-semibold text-amber-100">
                    The
                    <br />
                    Covenant
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {cores.map((core) => (
                  <div key={core} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Elemental Core</p>
                    <p className="mt-1 font-semibold text-slate-100">{core}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
