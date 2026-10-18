import type { CreativePreview, Project } from "@/types";

export function validatePortfolioContent(projects: Project[], creative: CreativePreview[]) {
  const slugs = new Set<string>();
  for (const project of projects) {
    if (!project.slug || slugs.has(project.slug)) throw new Error(`Project slug must be unique: ${project.slug}`);
    if (!project.title || !project.summary || !project.image.src) throw new Error(`Project content is incomplete: ${project.slug}`);
    slugs.add(project.slug);
  }
  for (const item of creative) if (!item.title || !item.image.src) throw new Error(`Creative preview is incomplete: ${item.id}`);
}
