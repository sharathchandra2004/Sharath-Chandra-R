import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { CreativePreviewCard } from "./creative-preview-card";
import type { CreativePreview } from "@/types";
export function CreativeGrid({ items }: { items: CreativePreview[] }) { return <Section id="creative-collection" className="bg-[#fff8ef]"><Container><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9d5144]">Selected beginnings</p><Heading className="mt-3 text-[#2d2434]">A collection in the making.</Heading><p className="mt-4 max-w-xl leading-7 text-[#493044]/70">These rooms are intentionally unfinished. They will fill up with work as it becomes ready to share.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{items.map((item) => <CreativePreviewCard item={item} key={item.id} />)}</div></Container></Section>; }
