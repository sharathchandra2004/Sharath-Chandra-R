import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Text } from "@/components/ui/text";
import type { Profile } from "@/types";

export function ProfessionalHero({ profile }: { profile: Profile }) { 
    return <section className="relative overflow-hidden border-b border-ink/10">
        <Container className="grid min-h-[65svh] items-end gap-10 py-20 sm:py-28 lg:grid-cols-[1.4fr_0.6fr]">
            <div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {profile.location}</p>
                <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-8xl">
                    Building useful systems with 
                    <span className="text-accent">curiosity</span> at their core.</h1>
                    <Text className="mt-8 max-w-2xl">
                        {profile.summary}</Text><div className="mt-9 flex flex-wrap gap-3">
                            <LinkButton href="#work">Explore selected work <ArrowDown size={16} />
                            </LinkButton><LinkButton href="#connect" variant="secondary">
                            Start a conversation
                            </LinkButton>
            </div>
            </div>
            <aside className="rounded-[var(--radius-lg)] border border-ink/10 bg-mist/45 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-ink/55">
            Currently
            </p>
            <p className="mt-4 font-display text-2xl leading-tight">{profile.role}</p>
            <p className="mt-6 text-sm leading-6 text-ink/65">
            A professional portrait will live here when you are ready to add one.
            </p>
            </aside>
            </Container>
            </section>
            ; }
