import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import Story from './pages/Story';
import Kingdoms from './pages/Kingdoms';
import Guardians from './pages/Guardians';
import Dragons from './pages/Dragons';
import PowerSystem from './pages/PowerSystem';
import WhichKingdom from './pages/WhichKingdom';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import PremiumFeatures from './pages/PremiumFeatures';

function App() {
  const location = useLocation();
  const routeBackgrounds = {
    '/': 'bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900',
    '/story': 'bg-gradient-to-br from-emerald-900 via-green-800 to-lime-800',
    '/kingdoms': 'bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-700',
    '/guardians': 'bg-gradient-to-br from-slate-900 via-gray-800 to-neutral-900',
    '/dragons': 'bg-gradient-to-br from-red-900 via-orange-800 to-amber-700',
    '/power-system': 'bg-gradient-to-br from-cyan-900 via-teal-800 to-emerald-700',
    '/which-kingdom': 'bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-700',
    '/quiz': 'bg-gradient-to-br from-yellow-800 via-amber-700 to-orange-600',
    '/contact': 'bg-gradient-to-br from-black to-slate-800',
    '/premium-features': 'bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950',
  };

  const bgClass = routeBackgrounds[location.pathname] ?? 'bg-transparent';

  return (
    <div className={`min-h-screen relative ${bgClass} text-slate-100`}>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="min-h-[calc(100vh-8rem)]"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/kingdoms" element={<Kingdoms />} />
              <Route path="/guardians" element={<Guardians />} />
              <Route path="/dragons" element={<Dragons />} />
              <Route path="/power-system" element={<PowerSystem />} />
              <Route path="/which-kingdom" element={<WhichKingdom />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/premium-features" element={<PremiumFeatures />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
