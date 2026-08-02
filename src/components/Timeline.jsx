import { motion } from 'framer-motion';
import Card from './Card';

function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.year}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">{item.text}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
