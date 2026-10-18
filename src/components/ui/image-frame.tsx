import Image from "next/image";
import type { MediaAsset } from "@/types";
import { cn } from "@/lib/utils";

export function ImageFrame({ image, className }: { image: MediaAsset; className?: string }) { return <div className={cn("relative aspect-[4/3] overflow-hidden bg-mist", className)}><Image fill sizes="(max-width: 768px) 100vw, 50vw" src={image.src} alt={image.alt} className="object-cover" /></div>; }
