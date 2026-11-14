import type { ReactNode } from "react";

type SectionCardProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function SectionCard({
  eyebrow,
  title,
  children,
  action,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 ${className}`}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            {title}
          </h2>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
