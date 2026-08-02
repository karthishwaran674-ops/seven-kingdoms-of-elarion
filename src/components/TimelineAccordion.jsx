import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function TimelineAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const particles = useMemo(
    () =>
      [...Array(6)].map((_, index) => ({
        id: index,
        left: `${10 + index * 14}%`,
        top: `${10 + (index % 3) * 18}%`,
        size: `${4 + (index % 3) * 2}px`,
        delay: index * 0.08,
      })),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const activeElement = itemRefs.current[activeIndex];
    if (!activeElement) return;

    activeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeIndex]);

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={item.year}
            layout
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="relative"
          >
            <Card
              className={`relative overflow-visible border transition-all duration-300 ${
                isActive
                  ? 'border-amber-300/60 bg-white/10 shadow-[0_0_45px_rgba(245,158,11,0.18)]'
                  : 'border-white/10 bg-white/5 hover:border-amber-300/30'
              }`}
            >
              {isActive && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem]">
                  {particles.map((particle) => (
                    <motion.span
                      key={particle.id}
                      className="absolute rounded-full bg-amber-200/80 blur-sm"
                      style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                      }}
                      animate={{ opacity: [0.2, 1, 0.2], y: [0, -6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
                    />
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="relative w-full text-left"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className={`text-sm uppercase tracking-[0.35em] ${isActive ? 'text-amber-200' : 'text-cyan-300'}`}>
                      {item.year}
                    </p>
                    <h2 className={`mt-3 text-2xl font-semibold ${isActive ? 'text-white' : 'text-slate-100'}`}>
                      {item.title}
                    </h2>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${
                      isActive ? 'border-amber-300/40 bg-amber-300/15 text-amber-100' : 'border-white/10 bg-white/10 text-slate-300'
                    }`}
                  >
                    {isActive ? 'Open' : 'View'}
                  </span>
                </div>
              </button>
            </Card>

            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative mt-4 rounded-[2rem] border border-amber-200/20 bg-white/10 p-6 text-slate-200 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-x-6 top-4 flex items-center justify-between opacity-80">
                      <span className="h-2 w-2 rounded-full bg-amber-200/80 shadow-[0_0_20px_rgba(245,158,11,0.4)]" />
                      <span className="h-2 w-2 rounded-full bg-amber-200/80 shadow-[0_0_20px_rgba(245,158,11,0.4)]" />
                    </div>
                    <div className="absolute inset-0 rounded-[2rem] border border-amber-100/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_30%)] opacity-70" />
                    <div className="absolute left-4 top-4 text-2xl text-amber-300/70">✦</div>
                    <div className="absolute right-4 bottom-4 text-2xl text-amber-300/70">✧</div>
                    <div className="relative">
                      <p className="text-sm uppercase tracking-[0.35em] text-amber-100/80">Lore revealed</p>
                      <h3 className="mt-3 text-3xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 leading-7 text-slate-200">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default TimelineAccordion;
