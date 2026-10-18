import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none", { variants: { variant: { primary: "bg-ink text-paper hover:bg-ink/85", secondary: "border border-ink/20 bg-transparent hover:bg-ink/5", creative: "bg-[#493044] text-[#fff8ef] hover:bg-[#493044]/90" } }, defaultVariants: { variant: "primary" } });
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof styles>;
export function Button({ className, variant, ...props }: ButtonProps) { return <button className={cn(styles({ variant }), className)} {...props} />; }
