export function SparkBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Primary ember glow — scales down on mobile */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-ember/10 blur-3xl sm:-top-40 sm:h-[600px] sm:w-[800px]" />
      {/* Secondary amber accent */}
      <div className="absolute right-0 top-16 h-[250px] w-[300px] rounded-full bg-amber/8 blur-3xl sm:right-1/4 sm:h-[400px] sm:w-[400px]" />
      {/* Bottom spark hint */}
      <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-spark/5 blur-3xl sm:h-[300px] sm:w-[300px]" />
    </div>
  );
}
