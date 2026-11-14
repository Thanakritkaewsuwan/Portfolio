import { SectionCard } from "@/components/SectionCard";
import { getProfileData } from "@/services/profile.service";

export default async function AboutPage() {
  const profile = await getProfileData();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionCard eyebrow="Who I am" title="About me">
        <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>{profile.summary}</p>
          <p>
            I care about building software that feels thoughtful and useful in real life. That means
            checking the user journey, writing maintainable code, and keeping documentation clear enough
            that future ideas can grow without confusion.
          </p>
        </div>
      </SectionCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <SectionCard eyebrow="Education" title="Academic path">
          <div className="space-y-5">
            {profile.education.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{item.degree}</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-cyan-700 dark:text-cyan-300">{item.institution}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core strengths" title="Skills & technologies">
          <div className="space-y-5">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-3 font-semibold text-slate-800 dark:text-slate-100">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
