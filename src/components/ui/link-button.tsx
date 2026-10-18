import Link from "next/link";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none", { variants: { variant: { primary: "bg-ink text-paper hover:bg-ink/85", secondary: "border border-ink/20 hover:bg-ink/5", creative: "bg-[#493044] text-[#fff8ef] hover:bg-[#493044]/90", text: "px-0 underline decoration-accent underline-offset-4" } }, defaultVariants: { variant: "primary" } });
type Props = ComponentProps<typeof Link> & VariantProps<typeof styles>;
export function LinkButton({ className, variant, ...props }: Props) { return <Link className={cn(styles({ variant }), className)} {...props} />; }
