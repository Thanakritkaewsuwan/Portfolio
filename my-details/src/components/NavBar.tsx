"use client";

import Link from "next/link";
import { useState } from "react";

import { resetWelcomeState } from "@/components/SplashScreen";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, profile } from "@/data/profile";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReplayIntro = () => {
    resetWelcomeState();
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-700/80 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-md">
              {profile.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
            <div>
              <p className="text-base font-semibold text-slate-900 dark:text-white">{profile.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Archive & profile</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <button
              type="button"
              onClick={handleReplayIntro}
              className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:inline-flex"
            >
              Replay intro
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 space-y-2 border-t border-slate-200 pt-4 md:hidden dark:border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
