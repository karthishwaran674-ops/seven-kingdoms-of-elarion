function Loader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-cyan-100">
        <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-300" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-300 [animation-delay:120ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-300 [animation-delay:240ms]" />
      </div>
    </div>
  );
}

export default Loader;
