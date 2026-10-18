"use client";
import { usePathname } from "next/navigation";
import type { PortfolioMode } from "@/types";
export function usePortfolioMode(): PortfolioMode { return usePathname().startsWith("/creative") ? "creative" : "professional"; }
