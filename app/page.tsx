"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Hero3D from "@/components/Hero3D";
import PortfolioAssistant from "@/components/PortfolioAssistant";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { projects } from "@/lib/projects";

const cvUrl = "/assets/images/CV%20FEU%20alt.%202.pdf";

const strengths: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Frontend med riktning",
    description:
      "Jag bygger gränssnitt som känns tydliga, moderna och genomtänkta hela vägen från struktur till detaljer.",
    icon: Code2,
  },
  {
    title: "UX som märks i flödet",
    description:
      "Navigation, hierarki och innehåll ska hjälpa användaren framåt, inte bara se snygga ut i en mockup.",
    icon: Palette,
  },
  {
    title: "Kreativitet med funktion",
    description:
      "Animationer, färg och 3D får gärna sticka ut, men de ska alltid förstärka upplevelsen och berättelsen.",
    icon: Sparkles,
  },
];

const profileFacts = [
  {
    label: "Fokus",
    value: "React, Next.js och TypeScript",
  },
  {
    label: "Styrka",
    value: "UX/UI, komponenttänk och tydlig struktur",
  },
  {
    label: "Nästa steg",
    value: "Djupare case studies och fler liveprojekt",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Förstå behovet",
    description:
      "Jag börjar med flöden, innehåll och vad användaren faktiskt behöver kunna göra utan friktion.",
  },
  {
    step: "02",
    title: "Forma en tydlig riktning",
    description:
      "Typografi, hierarki och komponenter behöver kännas konsekventa så att sidan får en stark identitet.",
  },
  {
    step: "03",
    title: "Bygga för vidareutveckling",
    description:
      "Jag tänker i återanvändbara delar, läsbar kod och animationer som går att utveckla vidare över tid.",
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Felicia Bengtsson
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#about" className="transition-colors hover:text-foreground">
              Om mig
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground">
              Projekt
            </Link>
            <Link href="#process" className="transition-colors hover:text-foreground">
              Process
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Kontakt
            </Link>
          </nav>

          <Button asChild size="sm" className="hidden shadow-(--soft-shadow) md:inline-flex">
            <a href={cvUrl} target="_blank" rel="noreferrer">
              CV
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_38%)]" />

          <div className="container px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <div className="inline-flex rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-(--soft-shadow)">
                  Frontendutvecklare med UX-fokus
                </div>

                <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
                  Jag bygger varma, tydliga och visuellt starka webbupplevelser.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  Portfolio för Felicia Bengtsson. Jag kombinerar frontendutveckling,
                  UX-tänk och kreativ design för att skapa digitala produkter som känns
                  genomarbetade från första klicket.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <Link href="#projects">
                      Se utvalda projekt
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow)"
                  >
                    <a href={cvUrl} target="_blank" rel="noreferrer">
                      <Download className="h-5 w-5" />
                      Ladda ner CV
                    </a>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "React & Next.js",
                    "UX/UI med struktur",
                    "Motion och creative frontend",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-white/70 px-4 py-2 text-sm text-muted-foreground shadow-(--soft-shadow)"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-6 lg:pl-8">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-(--soft-shadow) backdrop-blur-sm"
                >
                  <div className="grid gap-5 sm:grid-cols-[112px_1fr]">
                    <div className="relative h-28 w-28 overflow-hidden rounded-[24px] border border-white/60 bg-secondary shadow-(--soft-shadow)">
                      <Image
                        src="/assets/images/profile.jpg"
                        alt="Porträtt på Felicia Bengtsson"
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Bas i Sverige
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-foreground">
                        Felicia Bengtsson
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        Frontendutvecklare med öga för UX, visuellt uttryck och tydlig
                        kommunikation. Jag trivs bäst i projekt där form och funktion får
                        stärka varandra.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {profileFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-[24px] border border-border/70 bg-secondary/35 p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="overflow-hidden rounded-[32px] border border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 px-6 pt-6">
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Creative Frontend
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-foreground">
                        Motion och 3D med mening
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Jag vill att interaktioner ska ge energi och personlighet, men
                        alltid stötta innehållet i stället för att distrahera från det.
                      </p>
                    </div>

                    <span className="rounded-full border border-primary/20 bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Under utveckling
                    </span>
                  </div>

                  <div className="h-[280px] sm:h-[320px]">
                    <Hero3D />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                Vad jag tar med till ett team
              </p>
              <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
                Jag vill bygga digitala upplevelser som känns genomarbetade, inte generiska.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                För mig handlar bra frontend inte bara om att få saker att fungera. Det
                handlar om att skapa tydlighet, förtroende och en känsla av att varje
                detalj är där av en anledning.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-white/60 bg-white/75 shadow-(--soft-shadow) backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-white shadow-(--soft-shadow)">
                        <strength.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-foreground">
                        {strength.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                Utvalda projekt
              </p>
              <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
                Projekt som visar hur jag kombinerar innehåll, UX och frontend.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Här lyfter jag fram arbeten som visar både visuell känsla och hur jag
                strukturerar upplevelser för riktiga användarbehov.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  projectUrl={`/projects/${project.slug}`}
                  projectUrlLabel="Läs case study"
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow)"
              >
                <Link href="/projects">
                  Alla case studies
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="process" className="py-24">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                Så jobbar jag
              </p>
              <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
                Från idé till färdig upplevelse med fokus på tydlighet.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-white/60 bg-white/75 shadow-(--soft-shadow) backdrop-blur-sm">
                    <CardContent className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Steg {step.step}
                      </p>
                      <h3 className="mt-4 text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioAssistant />

        <section id="contact" className="pb-24 pt-10">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[36px] border border-white/60 bg-linear-to-br from-white/85 via-white/80 to-secondary/55 p-8 shadow-(--glow-shadow) backdrop-blur-sm sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Nästa steg
                  </p>
                  <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
                    Jag vill att portfoliot ska visa både personlighet och process.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Fas 2 ger projekten egna sidor så att du snabbt kan se både sammanfattning
                    och djup. Härifrån kan sidan växa vidare med riktiga länkar, fler resultat
                    och skarpare bevis på hur jag arbetar.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <Link href="/projects">
                        Se alla case studies
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow)"
                    >
                      <a href={cvUrl} target="_blank" rel="noreferrer">
                        <Download className="h-5 w-5" />
                        Ladda ner CV
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border/70 bg-white/75 p-6 shadow-(--soft-shadow)">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Prioriterat härnäst
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>Fylla varje case study med fler riktiga resultat, processbilder och beslut.</p>
                    <p>Lägga till riktiga länkar till GitHub, LinkedIn, e-post och liveprojekt.</p>
                    <p>Verifiera hela projektet med TypeScript och fortsätta förbättra SEO.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="container flex flex-col gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{year} Felicia Bengtsson. Portfolio byggd i Next.js, TypeScript och Framer Motion.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#about" className="transition-colors hover:text-foreground">
              Om mig
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Case studies
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Nästa steg
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
