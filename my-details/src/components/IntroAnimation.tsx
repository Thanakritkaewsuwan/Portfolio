type IntroAnimationProps = {
  compact?: boolean;
};

export function IntroAnimation({ compact = false }: IntroAnimationProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${compact ? "h-16 w-16" : "h-20 w-20"}`}
      aria-label="Loading intro animation"
    >
      <div className="absolute inset-0 animate-ping rounded-full border border-cyan-300/60 opacity-80" />
      <div className="absolute inset-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full border-2 border-transparent border-t-cyan-300 border-r-sky-400 border-b-blue-500" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-base font-bold text-white shadow-lg shadow-cyan-900/20">
        NS
      </div>
    </div>
  );
}
