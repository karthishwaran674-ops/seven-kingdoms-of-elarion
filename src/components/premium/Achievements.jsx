import { motion } from 'framer-motion';

const achievements = [
  { id: 'first-visit', title: 'First Visit', description: 'Entered the realm for the first time.', progress: 100, unlocked: true, icon: '✨' },
  { id: 'explorer', title: 'Explorer', description: 'Visited every major chapter of Elarion.', progress: 100, unlocked: true, icon: '🗺️' },
  { id: 'read-every-kingdom', title: 'Read Every Kingdom', description: 'Studied every kingdom lore card.', progress: 100, unlocked: true, icon: '📜' },
  { id: 'master-of-lore', title: 'Master Of Lore', description: 'Completed the grand chronicle overview.', progress: 82, unlocked: false, icon: '📚' },
  { id: 'dragon-hunter', title: 'Dragon Hunter', description: 'Defeated the legendary dragon trail.', progress: 56, unlocked: false, icon: '🐉' },
  { id: 'timeline-completed', title: 'Timeline Completed', description: 'Finished the full journey through time.', progress: 24, unlocked: false, icon: '⏳' },
];

export default function Achievements() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300">Achievements</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Unlock the legends</h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Progress is tracked in a modular, removable panel.</div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((achievement) => (
          <motion.article
            key={achievement.id}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`rounded-[1.4rem] border p-4 ${achievement.unlocked ? 'border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-violet-500/10' : 'border-white/10 bg-slate-900/70'}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-4xl">{achievement.icon}</div>
              <div className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${achievement.unlocked ? 'bg-amber-400/20 text-amber-200' : 'bg-white/10 text-slate-300'}`}>
                {achievement.unlocked ? 'Unlocked' : 'Locked'}
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-white">{achievement.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{achievement.description}</p>
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Progress</span>
                <span>{achievement.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.progress}%` }}
                  transition={{ duration: 0.8 }}
                  className={`h-full rounded-full ${achievement.unlocked ? 'bg-gradient-to-r from-amber-400 to-violet-500' : 'bg-gradient-to-r from-cyan-400 to-violet-500'}`}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
