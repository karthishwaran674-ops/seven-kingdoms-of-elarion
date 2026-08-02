import { ArrowUpRight, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040714]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold tracking-[0.25em] text-slate-100 uppercase">
            <Sparkles size={18} className="text-cyan-300" />
            Elarion
          </div>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            The Seven Guardians keep the ancient covenant alive beneath the silver skies of Elarion.
          </p>
        </div>

        <a href="#top" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300">
          Back to top <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
