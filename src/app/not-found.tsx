import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
export default function NotFound() { return <Container className="py-32 text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">404</p><h1 className="mt-4 font-display text-5xl">This page has wandered off.</h1><LinkButton className="mt-8" href="/">Return home</LinkButton></Container>; }
