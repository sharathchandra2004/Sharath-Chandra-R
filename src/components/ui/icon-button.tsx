import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn("inline-grid size-10 place-items-center rounded-full border border-ink/15 hover:bg-ink/5", className)} {...props} />; }
