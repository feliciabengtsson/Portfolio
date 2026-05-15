import contentData from "@/data/content.json";

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  timeframe: string;
  sortDate: string;
  team: string;
  status: string;
  description: string;
  tags: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  ctaNote?: string;
  facts: ProjectFact[];
  metrics: ProjectFact[];
  sections: ProjectSection[];
  deliverables: string[];
  nextSteps: string[];
  links?: ProjectLink[];
}

export type SiteContent = typeof contentData.site;

export const siteContent: SiteContent = contentData.site;

const projectData = contentData.projects satisfies ProjectCaseStudy[];

export const projects: ProjectCaseStudy[] = [...projectData].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return projects[(currentIndex + 1) % projects.length];
}
