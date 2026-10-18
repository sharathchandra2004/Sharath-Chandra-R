export type PortfolioMode = "professional" | "creative";

export type ExternalLink = { label: string; href: string; kind?: "github" | "demo" | "linkedin" | "email" };
export type MediaAsset = { src: string; alt: string; tone?: "warm" | "cool" | "ink" | "creative" };

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
  links: ExternalLink[];
};

export type Experience = { organization: string; role: string; period: string; summary: string; highlights: string[] };
export type SkillGroup = { label: string; skills: string[] };
export type Achievement = { title: string; period?: string; description: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  outcome: string;
  technologies: string[];
  highlights: string[];
  links: ExternalLink[];
  image: MediaAsset;
};

export type CreativePreview = {
  id: "poetry" | "photography" | "cinema" | "workshops";
  eyebrow: string;
  title: string;
  description: string;
  status: "coming-soon";
  image: MediaAsset;
};
