import { motion } from 'framer-motion';

const details = [
  {
    title: 'World',
    icon: '🌍',
    description: 'The entire continent where all Seven Kingdoms exist.',
  },
  {
    title: 'Origin',
    icon: '✨',
    description: 'Born from the Celestial Core and the Seven Primordial Elements.',
  },
  {
    title: 'Kingdoms',
    icon: '👑',
    description: 'Seven unique kingdoms united by destiny but divided by history.',
  },
  {
    title: 'Legacy',
    icon: '📜',
    description: 'A world filled with ancient magic, legendary guardians, dragons, and forgotten prophecies.',
  },
];

function ElarionInfo() {
  return (
    <motion.section
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-white/10 p-8 shadow-[0_40px_110px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 rounded-full border border-amber-200/20 bg-amber-100/10 blur-sm" />
          <div className="pointer-events-none absolute right-6 bottom-6 h-16 w-16 rounded-full border border-cyan-200/20 bg-cyan-100/10 blur-sm" />
          <div className="pointer-events-none absolute left-6 bottom-6 h-24 w-24 rounded-full border border-amber-200/20 bg-amber-100/10 opacity-80" />
          <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full border border-cyan-200/20 bg-cyan-100/10 opacity-80" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">What is Elarion?</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">The Ancient World of the Seven Kingdoms</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Elarion is the name of the entire fantasy world where the Seven Kingdoms exist. It is not a single kingdom but a vast continent filled with ancient civilizations, magical creatures, powerful guardians, dragons, and forgotten legends.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                According to ancient lore, Elarion was created when the Celestial Core released seven primordial elemental powers. These powers shaped the land, giving birth to seven unique kingdoms, each with its own culture, ruler, animal emblem, and magical element.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                For thousands of years, the kingdoms lived in balance until a great war known as The Shattering changed the fate of the world forever. Today, the destiny of Elarion depends on restoring harmony among the Seven Kingdoms.
              </p>
            </div>

            <div className="rounded-[2rem] border border-amber-200/25 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-300/20 bg-white/10 p-6 text-slate-100 shadow-[0_0_40px_rgba(245,158,11,0.14)]">
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_30%)]" />
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Name</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Elarion</h3>
                  <p className="mt-4 text-lg leading-7 text-amber-100">"The Land of Eternal Light and Destiny"</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {details.map((detail) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                  >
                    <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-amber-300/70 shadow-[0_0_20px_rgba(245,158,11,0.35)]" />
                    <div className="absolute right-4 bottom-4 h-3 w-3 rounded-full bg-cyan-300/50 shadow-[0_0_18px_rgba(34,211,238,0.25)]" />
                    <div className="relative z-10">
                      <div className="text-2xl">{detail.icon}</div>
                      <h4 className="mt-4 text-xl font-semibold text-white">{detail.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ElarionInfo;
