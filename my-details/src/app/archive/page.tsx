import { SectionCard } from "@/components/SectionCard";
import { getProfileData } from "@/services/profile.service";

export default async function ArchivePage() {
  const profile = await getProfileData();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionCard eyebrow="Life archive" title="Milestones & experiences">
        <div className="space-y-6">
          {profile.milestones.map((milestone) => (
            <div key={milestone.year} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <SectionCard eyebrow="Work history" title="Career timeline">
          <div className="space-y-5">
            {profile.experience.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{item.role}</p>
                    <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">{item.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Featured work" title="Projects & outcomes">
          <div className="space-y-5">
            {profile.projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{project.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{project.outcome}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
