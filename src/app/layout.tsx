import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { SiteProvider } from "@/providers/site-provider";

export const metadata: Metadata = { title: "Sharath Chandra R | Portfolio", description: "Software engineering, creative work, and curiosity." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteProvider><SiteShell>{children}</SiteShell></SiteProvider></body></html>; }
