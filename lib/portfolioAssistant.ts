import { projects, type ProjectCaseStudy } from "@/lib/projects";

function formatProject(project: ProjectCaseStudy) {
  const facts = project.facts.map((fact) => `${fact.label}: ${fact.value}`).join(" | ");

  return [
    `Projekt: ${project.title}`,
    `Slug: ${project.slug}`,
    `Typ: ${project.eyebrow}`,
    `Roll: ${project.role}`,
    `Tidsram: ${project.timeframe}`,
    `Team: ${project.team}`,
    `Status: ${project.status}`,
    `Beskrivning: ${project.description}`,
    `Taggar: ${project.tags.join(", ")}`,
    `Styrkor: ${project.highlights.join(" | ")}`,
    `Fakta: ${facts}`,
    `Leveranser: ${project.deliverables.join(" | ")}`,
    `Nasta steg: ${project.nextSteps.join(" | ")}`,
  ].join("\n");
}

const portfolioSummary = [
  "Namn: Felicia Bengtsson",
  "Roll: Frontendutvecklare med UX-fokus",
  "Bas: Sverige",
  "Fokus: React, Next.js och TypeScript",
  "Styrkor: UX/UI, komponenttank och tydlig struktur",
  "Arbetssatt: Kombinerar frontendutveckling, UX-tank och kreativ design for att skapa genomarbetade digitala produkter.",
  "Process: Forstar behovet, formar en tydlig riktning och bygger for vidareutveckling.",
].join("\n");

export const portfolioAssistantInstructions = [
  "Du ar en varm, professionell AI-assistent for Felicia Bengtssons portfolio.",
  "Svara pa svenska om besokaren inte uttryckligen skriver pa ett annat sprak.",
  "Bygg bara pa informationen i kontexten nedan.",
  "Om nagot inte finns i underlaget ska du saga det tydligt i stallet for att gissa.",
  "Hall svaren korta, konkreta och anvandbara, vanligtvis 2 till 5 meningar.",
  "Om fragan galler vilket projekt som passar bast ska du kort motivera jamforelsen.",
  "Hitta inte pa arbetsgivare, ar, siffror, lankar eller tekniker som inte redan namns i materialet.",
  "",
  "Portfoliooversikt:",
  portfolioSummary,
  "",
  "Projekt i portfolion:",
  projects.map(formatProject).join("\n\n"),
].join("\n");
