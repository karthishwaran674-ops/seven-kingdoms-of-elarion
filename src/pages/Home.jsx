import Hero from '../components/Hero';
import ElarionInfo from '../components/ElarionInfo';

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-slate-100 home-pattern">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,241,192,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,200,120,0.08),transparent_18%)] opacity-65" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      <div className="relative z-10">
        <Hero />
        <ElarionInfo />
      </div>
    </main>
  );
}

export default Home;
