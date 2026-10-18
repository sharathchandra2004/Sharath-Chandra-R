"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export function useMobileNavigation() { const [isOpen, setOpen] = useState(false); const pathname = usePathname(); const close = () => setOpen(false); useEffect(() => { close(); }, [pathname]); useEffect(() => { const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close(); window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, []); return { isOpen, close, toggle: () => setOpen((value) => !value) }; }
