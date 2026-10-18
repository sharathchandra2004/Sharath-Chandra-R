import { profile } from "@/content/profile";
export function SiteFooter() { return <footer className="border-t border-ink/10 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 text-sm text-ink/60 sm:flex-row sm:px-8"><p>© {new Date().getFullYear()} {profile.name}</p><p>Built with care for work and curiosity.</p></div></footer>; }
