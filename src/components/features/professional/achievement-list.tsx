import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import type { Achievement } from "@/types";
export function AchievementList({ items }: { items: Achievement[] }) { return <Section><Container><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Leadership & learning</p><Heading className="mt-3">Things built with others.</Heading><div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-ink/10 bg-ink/10 md:grid-cols-2">{items.map((item) => <article className="bg-paper p-6" key={item.title}><p className="text-sm text-ink/55">{item.period}</p><h3 className="mt-3 font-display text-2xl">{item.title}</h3><p className="mt-3 leading-6 text-ink/70">{item.description}</p></article>)}</div></Container></Section>; }
