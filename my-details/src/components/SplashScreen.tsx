"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { IntroAnimation } from "@/components/IntroAnimation";
import { WelcomeScreen } from "@/components/WelcomeScreen";

const STORAGE_KEY = "personal-profile-welcome-seen";
const SPLASH_DELAY_MS = 1200;

function isStorageAvailable() {
  try {
    const testKey = "__storage_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

function LoadingSplash() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_28%)]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <IntroAnimation />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
          Loading
        </p>
        <h2 className="mt-3 text-lg font-medium text-slate-100">Preparing your personal archive</h2>
      </div>
    </div>
  );
}

export function WelcomeGate({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "welcome" | "content">("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const hasSeenWelcome = isStorageAvailable()
          ? window.localStorage.getItem(STORAGE_KEY) === "true"
          : false;

        setPhase(hasSeenWelcome ? "content" : "welcome");
      } catch {
        setPhase("welcome");
      }
    }, SPLASH_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    if (isStorageAvailable()) {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setPhase("content");
  };

  if (phase === "loading") {
    return <LoadingSplash />;
  }

  if (phase === "welcome") {
    return <WelcomeScreen onContinue={handleContinue} />;
  }

  return <>{children}</>;
}

export function resetWelcomeState() {
  if (isStorageAvailable()) {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}
