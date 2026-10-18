import type { Project } from "@/types";

const art = (name: string, tone: "warm" | "cool" | "ink" = "warm") => ({ src: `/images/professional/projects/${name}.svg`, alt: `${name.replaceAll("-", " ")} project illustration`, tone });

export const projects: Project[] = [
  {
    slug: "vidbrain", title: "VidBrain", category: "AI video intelligence", period: "Sep 2025 - Dec 2025",
    summary: "An AI-driven multilingual video summarization pipeline for long-form video.", outcome: "Processed 200+ videos and reduced manual review time by 70%.",
    technologies: ["Python", "Whisper", "HDBSCAN", "FFmpeg", "FAISS", "Llama 3.1"], image: art("vidbrain", "cool"),
    highlights: ["Semantic search across 1.5+ hours of transcripts.", "Context-aware summaries and text-to-speech in 10 languages.", "An 8-step synchronization workflow for concise summary videos."], links: [],
  },
  {
    slug: "oral-cancer-detection", title: "Oral Cancer Detection", category: "Deep learning", period: "Dec 2024 - Feb 2025",
    summary: "A CNN-based prototype for early detection of malignant tissue from medical images.", outcome: "Reached 92% accuracy across 5,000+ images.",
    technologies: ["Python", "CNN", "Deep Learning", "Medical Imaging"], image: art("oral-cancer", "warm"),
    highlights: ["Reduced error rates by 15% through preprocessing and augmentation.", "Reduced training time by 20% and inference latency by 35 ms.", "Delivered a prototype supporting 25% faster diagnosis."],
    links: [{ label: "View demo", href: "https://huggingface.co/spaces/groot2160/oral_cancer_detection", kind: "demo" }],
  },
  {
    slug: "idiom-insight", title: "Idiom Insight", category: "Natural language processing", period: "2024",
    summary: "A web app that detects idioms and figurative expressions in text using NLP and fuzzy matching.", outcome: "Makes figurative language easier to understand for learners and teachers.",
    technologies: ["Python", "NLP", "Fuzzy Matching", "Streamlit"], image: art("idiom-insight", "ink"),
    highlights: ["Detects idioms in complex paragraphs.", "Highlights the relevant sentence and explains meaning.", "Designed for learners, teachers, and writers."],
    links: [{ label: "GitHub", href: "https://github.com/sharathchandra2004/Idiom-Insight-A-Detector-for-Figurative-Expressions", kind: "github" }, { label: "View app", href: "https://idiom-insight.streamlit.app/", kind: "demo" }],
  },
  {
    slug: "api-projects", title: "API Projects", category: "Developer learning", period: "2024",
    summary: "A hands-on Python collection that demonstrates practical API integration patterns.", outcome: "Turns API fundamentals into adaptable real-world examples.",
    technologies: ["Python", "HTTP", "APIs", "Examples"], image: art("api-projects", "cool"),
    highlights: ["Covers requests, authentication, errors, and API best practices.", "Uses weather and currency conversion scenarios.", "Structured for learners developing confidence with APIs."],
    links: [{ label: "GitHub", href: "https://github.com/sharathchandra2004/APIprojects-", kind: "github" }],
  },
  {
    slug: "textile-risk", title: "Textile Dye Supplier Risk", category: "Data analysis & ML", period: "2023 - 2024",
    summary: "A Streamlit dashboard for monitoring and classifying risk signals across textile dye suppliers.", outcome: "Combines filtering, sentiment analysis, and AI recommendations in one decision-support tool.",
    technologies: ["Streamlit", "Pandas", "Plotly", "VADER", "Cohere"], image: art("textile-risk", "warm"),
    highlights: ["Classifies geopolitical, environmental, financial, supply chain, and market risks.", "Uses VADER for risk-direction sentiment analysis.", "Provides interactive monthly risk and sentiment visualizations."],
    links: [{ label: "GitHub", href: "https://github.com/sharathchandra2004/jk-internships", kind: "github" }, { label: "View app", href: "https://jk-internships-dwquglnvbmsgb4aouqjfzz.streamlit.app/", kind: "demo" }],
  },
];
