import { ProfessionalHero } from "@/components/features/professional/professional-hero";
import { ExperienceTimeline } from "@/components/features/professional/experience-timeline";
import { SkillsGrid } from "@/components/features/professional/skills-grid";
import { AchievementList } from "@/components/features/professional/achievement-list";
import { ProjectGrid } from "@/components/features/professional/project-grid";
import { InquiryCta } from "@/components/features/inquiry-cta";
import { profile } from "@/content/profile";
import { experience, skills } from "@/content/experience";
import { achievements } from "@/content/achievements";
import { projects } from "@/content/projects";
import { creativePreviews } from "@/content/creative";
import { validatePortfolioContent } from "@/lib/content-validation";
validatePortfolioContent(projects, creativePreviews);
export default function Home() { return <><ProfessionalHero profile={profile} /><ExperienceTimeline items={experience} /><SkillsGrid items={skills} /><ProjectGrid projects={projects} /><AchievementList items={achievements} /><InquiryCta profile={profile} /></>; }
