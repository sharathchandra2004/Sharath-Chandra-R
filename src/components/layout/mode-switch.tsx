"use client";
import Link from "next/link";
import { usePortfolioMode } from "@/hooks/use-portfolio-mode";
import { cn } from "@/lib/utils";

const modes = [{ label: "Professional", href: "/", mode: "professional" }, { label: "Creative", href: "/creative", mode: "creative" }] as const;
export function ModeSwitch() { const mode = usePortfolioMode(); return <nav aria-label="Portfolio mode" className="flex rounded-full border border-ink/15 p-1">{modes.map((item) => <Link key={item.mode} href={item.href} className={cn("rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4", mode === item.mode ? "bg-ink text-paper" : "text-ink/60 hover:text-ink")}>{item.label}</Link>)}</nav>; }
