import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Heading({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl", className)} {...props} />;
}
