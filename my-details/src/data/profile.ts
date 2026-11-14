import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Nattapong Srisawat",
  title: "Product-minded developer and lifelong learner",
  location: "Bangkok, Thailand",
  email: "hello@portfolioweb.dev",
  summary:
    "I enjoy turning complex ideas into structured systems that are useful, maintainable, and genuinely enjoyable to use. My work blends product thinking, software craftsmanship, and a habit of documenting what I learn so it can scale over time.",
  stats: [
    { label: "Years exploring software", value: "6+" },
    { label: "Projects shipped", value: "18" },
    { label: "Focus areas", value: "5" },
  ],
  education: [
    {
      id: "edu-bsc-cs",
      degree: "B.Sc. in Computer Science",
      institution: "King Mongkut's University of Technology Thonburi",
      period: "2017 — 2021",
      detail:
        "Built a strong foundation in software engineering, algorithms, systems thinking, and user-centered problem solving.",
    },
    {
      id: "edu-self-growth",
      degree: "Self-Directed Growth Track",
      institution: "Independent learning & community workshops",
      period: "2021 — Present",
      detail:
        "Continued learning through product design practice, engineering deep dives, and hands-on prototyping projects.",
    },
  ],
  experience: [
    {
      id: "exp-northstar",
      role: "Frontend Engineer",
      company: "Northstar Studio",
      period: "2022 — Present",
      summary:
        "Design and build customer-facing web experiences with performance, accessibility, and maintainability in focus.",
      highlights: [
        "Improved page load speed by 35% through component optimization and better asset strategy.",
        "Collaborated across product, design, and QA to ship polished features with a consistent UI system.",
        "Created reusable patterns that reduced duplicate code across multiple internal tools.",
      ],
    },
    {
      id: "exp-nova",
      role: "Product Analyst",
      company: "Nova Labs",
      period: "2020 — 2022",
      summary:
        "Translated research and customer data into small product experiments and clear technical requirements.",
      highlights: [
        "Mapped user journeys and prioritized features based on usability and business impact.",
        "Built lightweight dashboards to help teams evaluate product decisions based on real metrics.",
        "Helped align engineering delivery with customer needs and measurable outcomes.",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI systems"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "Authentication"],
    },
    {
      category: "Workflow",
      items: ["Git", "Testing", "Agile", "Documentation", "Design review"],
    },
  ],
  projects: [
    {
      title: "Life Archive Dashboard",
      summary:
        "A personal archive app for organizing life milestones, goals, and learning notes into a structured digital memory.",
      stack: ["Next.js", "Tailwind", "TypeScript"],
      outcome: "Designed a scalable foundation that can later connect to a real database and authentication layer.",
    },
    {
      title: "Study Companion Platform",
      summary:
        "A learning tracker that combines progress, knowledge maps, and review routines for deeper retention.",
      stack: ["React", "Node.js", "PostgreSQL"],
      outcome: "Helped create a more consistent study workflow and reduced the friction of revisiting old notes.",
    },
    {
      title: "Portfolio Redesign",
      summary:
        "A cleaner personal branding site focused on content clarity, storytelling, and modular sections.",
      stack: ["Next.js", "Tailwind", "Content design"],
      outcome: "Presented a polished narrative of experience, projects, and personal values in a single snapshot.",
    },
  ],
  milestones: [
    {
      year: "2017",
      title: "Started software engineering studies",
      description: "Laid down the fundamentals of logic, algorithms, and problem solving.",
    },
    {
      year: "2019",
      title: "Built first product prototype",
      description: "Turned an idea into a working demo and learned how iteration changes product quality.",
    },
    {
      year: "2022",
      title: "Worked with product and design teams",
      description: "Saw how well-structured collaboration leads to stronger outcomes and clearer execution.",
    },
    {
      year: "2025",
      title: "Started a knowledge archive practice",
      description: "Began organizing goals, learnings, and personal notes into a sustainable library of ideas.",
    },
  ],
  interests: ["Photography", "Reading", "Travel", "Fitness", "Systems design", "Writing"],
  notes: [
    {
      id: "note-current-learning-goal",
      title: "Current learning goal",
      detail: "Deepen my understanding of product analytics, thoughtful UI architecture, and evidence-based product decisions.",
    },
    {
      id: "note-archive",
      title: "Keeping a useful archive",
      detail: "I like capturing concepts, experiments, and observations in a structured way so ideas remain actionable over time.",
    },
    {
      id: "note-work-style",
      title: "Work style",
      detail: "I prefer clear requirements, useful feedback loops, and small iterations that steadily improve a system.",
    },
  ],
  goals: [
    "Build a complete personal knowledge workspace that combines notes, projects, and career milestones.",
    "Keep improving my craft through deliberate learning, practical building, and regular reflection.",
    "Create products and systems that are useful, elegant, and easy to extend in the future.",
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/notes", label: "Notes" },
];
