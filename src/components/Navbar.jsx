import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation } from '../data/content';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.3em] text-slate-100 uppercase">
          <div className="rounded-full border border-cyan-400/40 bg-cyan-400/10 p-2 shadow-[0_0_20px_rgba(110,231,249,0.25)]">
            <Sparkles size={18} className="text-cyan-300" />
          </div>
          Elarion
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link key={item.path} to={item.path} className="transition hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-full border border-white/15 bg-white/10 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
