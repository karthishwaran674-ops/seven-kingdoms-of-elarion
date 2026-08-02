import { forwardRef } from 'react';

const ChoiceCard = forwardRef(function ChoiceCard(
  { title, description, selected = false, onClick, className = '' },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={`group flex flex-col gap-3 rounded-[1.75rem] border px-6 py-6 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan-300/60 ${
        selected
          ? 'border-cyan-400/40 bg-cyan-400/15 text-cyan-100 shadow-[0_18px_50px_rgba(14,165,233,0.14)]'
          : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/20 hover:bg-white/10'
      } ${className}`.trim()}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-semibold text-white">{title}</span>
        {selected && <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">Selected</span>}
      </div>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </button>
  );
});

export default ChoiceCard;
