export type StatItem = {
  label: string;
  value: string;
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectEntry = {
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
};

export type ArchiveEntry = {
  year: string;
  title: string;
  description: string;
};

export type NoteItem = {
  id: string;
  title: string;
  detail: string;
};

export type CategoryItem = {
  id: string;
  name: string;
  description?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  stats: StatItem[];
  education: EducationEntry[];
  experience: CareerEntry[];
  skills: SkillGroup[];
  projects: ProjectEntry[];
  milestones: ArchiveEntry[];
  interests: string[];
  notes: NoteItem[];
  goals: string[];
};
