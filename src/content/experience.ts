import type { Experience, SkillGroup } from "@/types";

export const experience: Experience[] = [{
  organization: "Aptean",
  role: "Associate Engineer - Development Intern",
  period: "Sep 2025 - Mar 2026",
  summary: "Built reliable product workflows with full-stack engineering and an eye for practical automation.",
  highlights: [
    "Developed scalable features with Next.js, TypeScript, and REST APIs.",
    "Built reusable UI components and improved frontend performance.",
    "Designed modules for project tracking, documentation, and resource management.",
    "Contributed across requirements, delivery, code review, and Agile development.",
  ],
}];

export const skills: SkillGroup[] = [
  { label: "Engineering", skills: ["Next.js", "TypeScript", "JavaScript", "Python", "REST APIs", "Git/GitHub"] },
  { label: "AI & Data", skills: ["Machine Learning", "NLP", "Sentence Transformers", "FAISS", "Pandas", "NumPy"] },
  { label: "Product", skills: ["UI Components", "Performance", "Documentation", "Agile Delivery", "Collaboration"] },
];
