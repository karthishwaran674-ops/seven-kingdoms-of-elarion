import { motion } from 'framer-motion';

function Card({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}

export default Card;
