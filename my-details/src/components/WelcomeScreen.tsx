import { GetStartedButton } from "@/components/GetStartedButton";
import { IntroAnimation } from "@/components/IntroAnimation";

type WelcomeScreenProps = {
  onContinue: () => void;
};

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_28%)]" />
      <div className="absolute -left-16 top-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-slate-900/40 backdrop-blur-xl sm:p-10">
        <div className="flex justify-center">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <IntroAnimation />
          </div>
        </div>

        <div className="mt-8 animate-[fadeIn_0.9s_ease-out]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-bold shadow-lg shadow-cyan-950/30">
            NS
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Personal profile
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Nattapong Srisawat
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
            Building thoughtful systems, useful ideas, and a life archive that grows with every chapter.
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <GetStartedButton onClick={onContinue}>Get started</GetStartedButton>
          <GetStartedButton onClick={onContinue} variant="secondary">
            Skip
          </GetStartedButton>
        </div>
      </div>
    </div>
  );
}
