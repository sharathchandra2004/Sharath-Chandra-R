import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Stack({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}
