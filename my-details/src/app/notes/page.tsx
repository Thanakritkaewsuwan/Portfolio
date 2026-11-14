import { SectionCard } from "@/components/SectionCard";
import { getProfileData } from "@/services/profile.service";

export default async function NotesPage() {
  const profile = await getProfileData();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard eyebrow="Goals" title="Future direction">
          <ul className="space-y-4">
            {profile.goals.map((goal) => (
              <li key={goal} className="flex gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                  ✓
                </span>
                <span className="text-sm leading-7 text-slate-600 dark:text-slate-300">{goal}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard eyebrow="Ideas" title="Things to learn next">
          <div className="space-y-4">
            {profile.notes.map((note) => (
              <div key={note.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{note.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{note.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard eyebrow="Interests" title="Hobbies & personal rhythm" className="mt-8">
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm text-cyan-700 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
