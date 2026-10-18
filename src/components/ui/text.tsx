import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Text({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-base leading-7 text-ink/70 sm:text-lg", className)} {...props} />;
}
