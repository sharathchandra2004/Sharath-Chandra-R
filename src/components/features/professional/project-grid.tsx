import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types";
export function ProjectGrid({ projects }: { projects: Project[] }) { return <Section id="work"><Container><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Selected work</p><Heading className="mt-3">From models to products.</Heading></div><p className="max-w-md text-ink/65">A selection of practical systems for understanding information, improving decisions, and making technology easier to use.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></Container></Section>; }
