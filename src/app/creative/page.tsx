import { CreativeHero } from "@/components/features/creative/creative-hero";
import { CreativeGrid } from "@/components/features/creative/creative-grid";
import { InquiryCta } from "@/components/features/inquiry-cta";
import { profile } from "@/content/profile";
import { creativePreviews } from "@/content/creative";
export default function CreativePage() { return <><CreativeHero profile={profile} /><CreativeGrid items={creativePreviews} /><InquiryCta profile={profile} /></>; }
