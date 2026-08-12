export function AmbientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-drift rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 animate-drift rounded-full bg-terracotta-500/20 blur-[100px] [animation-delay:-8s]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-drift rounded-full bg-sky-600/10 blur-[100px] [animation-delay:-14s]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
