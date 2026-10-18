import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { SkillGroup } from "@/types";
export function SkillsGrid({ items }: { items: SkillGroup[] }) { return <Section className="bg-mist/35"><Container><div className="grid gap-4 md:grid-cols-3">{items.map((group) => <Card className="p-6" key={group.label}><p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{group.label}</p><ul className="mt-5 space-y-2 text-sm text-ink/75">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></Card>)}</div></Container></Section>; }
