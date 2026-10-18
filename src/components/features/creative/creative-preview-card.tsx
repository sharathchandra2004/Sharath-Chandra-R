import { Card } from "@/components/ui/card";
import { ImageFrame } from "@/components/ui/image-frame";
import { CreativePlaceholder } from "./creative-placeholder";
import type { CreativePreview } from "@/types";
export function CreativePreviewCard({ item }: { item: CreativePreview }) { return <Card tone="creative" className="group h-full"><ImageFrame image={item.image} className="transition duration-500 group-hover:scale-[1.02]" /><div className="p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9d5144]">{item.eyebrow}</p><h3 className="mt-3 font-display text-3xl text-[#2d2434]">{item.title}</h3><p className="mt-3 leading-6 text-[#493044]/70">{item.description}</p><CreativePlaceholder /></div></Card>; }
