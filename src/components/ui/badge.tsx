import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: ComponentProps<"span">) { return <span className={cn("inline-flex rounded-full border border-ink/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink/70", className)} {...props} />; }
