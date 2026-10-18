import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ImageFrame } from "@/components/ui/image-frame";
import type { Project } from "@/types";
export function ProjectCard({ project }: { project: Project }) { return <Card className="group h-full"><ImageFrame image={project.image} className="transition duration-500 group-hover:scale-[1.02]" /><div className="p-6"><Badge>{project.category}</Badge><h3 className="mt-4 font-display text-3xl tracking-tight">{project.title}</h3><p className="mt-3 leading-6 text-ink/70">{project.summary}</p><Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-accent underline-offset-4" href={`/work/${project.slug}`}>Read case study <ArrowUpRight size={16} /></Link></div></Card>; }
