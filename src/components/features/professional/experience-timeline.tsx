import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { Experience } from "@/types";
export function ExperienceTimeline({ items }: { items: Experience[] }) { return <Section id="about"><Container><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Experience</p><Heading className="mt-3">Making ideas dependable.</Heading><div className="mt-10 space-y-8">{items.map((item) => <article className="border-t border-ink/15 pt-6 sm:grid sm:grid-cols-[0.7fr_1.3fr] sm:gap-10" key={item.organization}><div><p className="font-semibold">{item.organization}</p><p className="mt-1 text-sm text-ink/60">{item.period}</p></div><div className="mt-4 sm:mt-0"><h3 className="font-display text-2xl">{item.role}</h3><Text className="mt-3">{item.summary}</Text><ul className="mt-5 space-y-2 text-sm leading-6 text-ink/70">{item.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}</ul></div></article>)}</div></Container></Section>; }
