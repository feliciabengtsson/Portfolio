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

export const projects: ProjectCaseStudy[] = [
  {
    slug: "how",
    title: "HOW",
    eyebrow: "UX/UI-koncept",
    role: "UX/UI-koncept och informationsarkitektur",
    timeframe: "Konceptarbete",
    team: "Individuellt projekt",
    status: "Koncept",
    description:
      "Ett koncept for en lugnare larplattform dar amnen, schema och vardagens viktigaste uppgifter blir lattare att hitta.",
    tags: ["UX/UI", "Figma", "Designsystem"],
    highlights: [
      "Tydligare amnesoversikt for elever",
      "Lugn fargpalett och battre visuell hierarki",
      "Fokus pa begriplighet i vardagliga floden",
    ],
    image: "/assets/images/Howl-ux.png",
    imageAlt: "HOW-plattform med amneskort och sidomeny",
    ctaNote: "Case study byggs ut vidare med klickbar prototyp.",
    facts: [
      { label: "Fokus", value: "Informationsarkitektur och tydliga floden" },
      { label: "Primar anvandare", value: "Elever som snabbt behover hitta ratt vy" },
      { label: "Roll", value: "Research, UX-struktur och visuell riktning" },
    ],
    metrics: [
      { label: "Karnfloden", value: "3 centrala ytor" },
      { label: "Ton", value: "Lugn, tydlig och vardagsnara" },
      { label: "Leverans", value: "Dashboard-koncept med amneskort" },
    ],
    sections: [
      {
        title: "Bakgrund och utmaning",
        paragraphs: [
          "Manga skolrelaterade grannsnitt blir snabbt tunga att orientera i. For en elev handlar vardagen ofta om att snabbt kunna hitta schema, amnen och nasta aktivitet utan att behova tolka ett komplext system.",
          "Utmaningen i HOW var att skapa en upplevelse som kandes mer fokuserad och mindre overbelastad, samtidigt som innehallet fortfarande kunde rymma flera olika funktioner.",
        ],
      },
      {
        title: "Min riktning",
        paragraphs: [
          "Jag arbetade med en layout dar sidomenyn ger stabil navigation och huvudytan lyfter fram amneskort med tydlig igenkanning. Till hoger finns stodytor for tid och dagens aktiviteter, sa att anvandaren direkt ser vad som ar viktigast just nu.",
          "Visuellt valde jag en mjukare palett och tydlig kortstruktur for att minska stresskanslan och ge varje del en klar plats i hierarkin.",
        ],
      },
      {
        title: "Resultat och fortsatt utveckling",
        paragraphs: [
          "Projektet visar hur jag tanker nar innehallsstruktur och visuell design maste jobba tillsammans. Det ar ett bra exempel pa hur UX-beslut kan skapa lugn utan att upplevelsen blir anonym.",
          "Nasta steg ar att bygga en klickbar prototyp och validera floden med riktiga anvandare for att se vilka genvagar och vyer som skapar mest nytta i vardagen.",
        ],
      },
    ],
    deliverables: [
      "Startvy med tydlig prioritering av dagens viktigaste information",
      "Amnesoversikt med konsekvent kortstruktur",
      "Visuell riktning med lugnare fargsprak",
      "Grund for vidare komponent- och flodesarbete",
    ],
    nextSteps: [
      "Bygga klickbar prototyp for fler scenarier",
      "Testa navigationen med elever eller larare",
      "Fortsatta definiera designsystem och tillstand",
    ],
  },
  {
    slug: "lalles-vanner",
    title: "Lalles Vanner",
    eyebrow: "Frontendprojekt",
    role: "Frontend, innehallsstruktur och visuell kansla",
    timeframe: "Kundnara projekt",
    team: "Individuellt arbete",
    status: "Kundprojekt",
    description:
      "En webbplats for ett jazzband dar spelningar, galleri och kontakt behovde kannas bade personliga och enkla att hitta.",
    tags: ["HTML", "CSS", "Responsiv design"],
    highlights: [
      "Mer karaktar i uttrycket an en standardmall",
      "Tydligare vagar till kontakt och bokning",
      "Anpassad layout for att lyfta bandets identitet",
    ],
    image: "/assets/images/lalles-vanner.png",
    imageAlt: "Startsida for Lalles Vanner med stark scenbild och orange informationskort",
    ctaNote: "Bra grund for att utveckla vidare med mer innehall och modernare struktur.",
    facts: [
      { label: "Fokus", value: "Landningssida, kontaktvag och personlig ton" },
      { label: "Mal", value: "Lyfta bandets identitet och gora information enkel att hitta" },
      { label: "Roll", value: "Frontend och visuell struktur" },
    ],
    metrics: [
      { label: "Huvudmal", value: "Spelningar, galleri och kontakt" },
      { label: "Visuell riktning", value: "Scennara, varm och tydlig" },
      { label: "Styrka", value: "Personlighet framfor generisk mallkansla" },
    ],
    sections: [
      {
        title: "Bakgrund och behov",
        paragraphs: [
          "For en musikgrupp ar det viktigt att webbplatsen snabbt skapar kansla. Besokaren ska fa en tydlig uppfattning om vilka de ar, vilken typ av musik de spelar och hur man kommer i kontakt med dem.",
          "I det har projektet handlade mycket om att ge bandet en egen ton snarare an att bara presentera information i ett neutralt skal.",
        ],
      },
      {
        title: "Hur jag arbetade",
        paragraphs: [
          "Jag prioriterade en stor hero-bild och ett framtradat textblock som direkt satter scenen. Fargval och layout far ta plats for att matcha bandets uttryck, samtidigt som information om spelningar och kontakt fortfarande ligger nara till hands.",
          "Strukturen fokuserar pa att snabbt leda vidare till det som ar viktigast for besokaren: att forsta erbjudandet, se vilka bandet ar och ta kontakt.",
        ],
      },
      {
        title: "Lardomar och nasta steg",
        paragraphs: [
          "Projektet blev ett bra exempel pa hur frontend kan hjalpa ett varumarke att kannas mer levande. Jag fick ocksa tydligare erfarenhet av hur mycket tonalitet och bildval paverkar helhetsintrycket.",
          "Om jag utvecklar projektet vidare vill jag forbattra informationsstrukturen for spelningar, skapa en tydligare mobilupplevelse och ge kunden ett enklare satt att uppdatera innehallet over tid.",
        ],
      },
    ],
    deliverables: [
      "Startsida med stark visuell introduktion",
      "Sektioner for om oss, bandmedlemmar och kontakt",
      "Layout som stoder den personliga tonen",
      "Responsiv grund som kan byggas vidare pa",
    ],
    nextSteps: [
      "Skapa tydligare struktur for kommande spelningar",
      "Bygga en enklare innehallshantering eller CMS-losning",
      "Forfina mobilupplevelsen och tillgangligheten",
    ],
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio V2",
    eyebrow: "Produktarbete pa egen sida",
    role: "Next.js, motion och innehallsstrategi",
    timeframe: "Pagaende ombyggnad",
    team: "Eget produktarbete",
    status: "Pagaende",
    description:
      "Min egen portfolio byggs om for att visa mer an bara design. Fokus ligger pa att tydliggora hur jag tanker, bygger och forbattrar digitala upplevelser.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    highlights: [
      "Tydligare hero med personlig positionering",
      "Projektsektion byggd for riktiga case studies",
      "Grund lagd for battre SEO och mer trovardig storytelling",
    ],
    ctaNote: "Levande case study som fortsatter utvecklas parallellt med sajten.",
    facts: [
      { label: "Varfor", value: "Visa process, prioritering och kvalitet tydligare" },
      { label: "Fokus", value: "Innehall, struktur och trovardig presentation" },
      { label: "Roll", value: "Produktagare, designer och utvecklare" },
    ],
    metrics: [
      { label: "Fas 1", value: "Ny startsida och designgrund" },
      { label: "Fas 2", value: "Dynamiska case studies" },
      { label: "Nasta fokus", value: "Riktiga lankar, SEO och verifiering" },
    ],
    sections: [
      {
        title: "Varfor jag bygger om portfoliot",
        paragraphs: [
          "Den tidigare versionen hade visuell ambition men saknade den tydlighet som gor ett portfolio overtygande. Det fanns for mycket template-kansla och for lite som forklarade vem jag ar och hur jag arbetar.",
          "Målet med ombyggnaden ar att skapa en sida som kanns mer professionell, mer personlig och mer anvandbar for nagon som snabbt vill bedoma min kompetens.",
        ],
      },
      {
        title: "Vad som ar pa plats nu",
        paragraphs: [
          "Jag har satt en ny struktur for startsidan, byggt starkare projektkort och skapat en mer sammanhallen visuell grund med tydligare typografi, innehallshierarki och design-tokens.",
          "I den har fasen ar varje projekt pa vag att bli en riktig case study i stallet for en kort sammanfattning. Det gor sajten mer skalbar och mer relevant for framtida arbetsprov.",
        ],
      },
      {
        title: "Vad jag vill utveckla vidare",
        paragraphs: [
          "Nasta steg ar att fylla pa med riktiga externa lankar, skarpa SEO-detaljer och fler bevis pa hur jag arbetar i praktiken. Jag vill ocksa kunna visa hur designbeslut, kod och iteration hanger ihop.",
          "Det har projektet ar viktigt for mig eftersom det speglar hur jag vill jobba: med tydlig riktning, egen tonalitet och en bra balans mellan estetik och funktion.",
        ],
      },
    ],
    deliverables: [
      "Ny hero med tydligare positionering",
      "Projektdata som ateranvands mellan oversikt och detaljsidor",
      "Case study-struktur for fortsatt innehallsarbete",
      "Mer sammanhallen metadata och visuell grund",
    ],
    nextSteps: [
      "Lagga till riktiga GitHub- och LinkedIn-lankar",
      "Bygga fler projektsidor och komplettera befintliga case studies",
      "Fa hela projektet att ga rent i TypeScript och build",
    ],
  },
];

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
