import Link from "next/link";
import { ModeSwitch } from "./mode-switch";
import { MobileNavigation } from "./mobile-navigation";
import type { NavigationItem } from "@/types";

const items: NavigationItem[] = [{ label: "Work", href: "/#work" }, { label: "About", href: "/#about" }, { label: "Connect", href: "/#connect" }];
export function SiteHeader() { return <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur"><div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"><Link href="/" className="font-display text-lg font-bold tracking-tight">SC<span className="text-accent">.</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium md:flex">{items.map((item) => <Link key={item.href} href={item.href} className="text-ink/70 hover:text-ink">{item.label}</Link>)}</nav><div className="hidden md:block"><ModeSwitch /></div><MobileNavigation items={items} /></div></header>; }
