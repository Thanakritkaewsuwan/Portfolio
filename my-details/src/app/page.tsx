import Link from "next/link";

import { SectionCard } from "@/components/SectionCard";
import { WelcomeGate } from "@/components/SplashScreen";
import { getProfileData } from "@/services/profile.service";

export default async function HomePage() {
  const profile = await getProfileData();
  return (
    <WelcomeGate>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] bg-linear-to-br from-slate-900 via-slate-800 to-cyan-700 p-8 text-white shadow-xl shadow-slate-300/30 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Personal profile</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-lg text-cyan-100">{profile.title}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200/90">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/archive"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              View archive
            </Link>
            <Link
              href="/notes"
              className="rounded-full border border-white/40 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read notes
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-left">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-200/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            Current focus
          </p>
          <div className="mt-5 space-y-4">
            {profile.notes.map((note) => (
              <div key={note.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{note.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard eyebrow="Overview" title="About me">
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Location" title="Quick info">
          <dl className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Location</dt>
              <dd className="mt-1 font-medium text-slate-800 dark:text-slate-100">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Email</dt>
              <dd className="mt-1 font-medium text-slate-800 dark:text-slate-100">{profile.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Approach</dt>
              <dd className="mt-1 font-medium text-slate-800 dark:text-slate-100">Simple systems, thoughtful UX, lasting structure</dd>
            </div>
          </dl>
        </SectionCard>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <SectionCard eyebrow="Capabilities" title="Skills & technologies">
          <div className="space-y-5">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Selected work" title="Recent projects">
          <div className="space-y-5">
            {profile.projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{project.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
      </main>
    </WelcomeGate>
  );
}
