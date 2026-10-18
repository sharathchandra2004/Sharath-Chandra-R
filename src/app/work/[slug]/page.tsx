import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/features/professional/project-detail";
import { projects } from "@/content/projects";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <ProjectDetail project={project} />; }
