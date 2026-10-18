"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useMobileNavigation } from "@/hooks/use-mobile-navigation";
import { IconButton } from "@/components/ui/icon-button";
import type { NavigationItem } from "@/types";

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const { isOpen, close, toggle } = useMobileNavigation();
  return <div className="md:hidden"><IconButton aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggle}>{isOpen ? <X size={18} /> : <span className="text-lg">☰</span>}</IconButton>{isOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-5 top-20 z-50 rounded-2xl border border-ink/10 bg-paper p-4 shadow-[var(--shadow-soft)]">{items.map((item) => <Link onClick={close} className="block rounded-xl px-4 py-3 font-medium hover:bg-ink/5" href={item.href} key={item.href}>{item.label}</Link>)}</nav>}</div>;
}
