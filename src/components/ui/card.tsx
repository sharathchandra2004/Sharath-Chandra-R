import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("overflow-hidden rounded-[var(--radius-md)] border", { variants: { tone: { default: "border-ink/10 bg-white/70 shadow-[var(--shadow-card)]", creative: "border-[#493044]/15 bg-[#fffaf4] shadow-[var(--shadow-card)]", muted: "border-ink/10 bg-mist/45" } }, defaultVariants: { tone: "default" } });
export type CardProps = ComponentProps<"article"> & VariantProps<typeof styles>;
export function Card({ className, tone, ...props }: CardProps) { return <article className={cn(styles({ tone }), className)} {...props} />; }
