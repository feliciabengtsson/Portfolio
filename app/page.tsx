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

const cvUrl = "/assets/images/CV_FEU.pdf";

const strengths: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Frontend med riktning",
    description:
      "Jag bygger grÃ¤nssnitt som kÃ¤nns tydliga, moderna och genomtÃ¤nkta hela vÃ¤gen frÃ¥n struktur till detaljer.",
    icon: Code2,
  },
  {
    title: "UX som mÃ¤rks i flÃ¶det",
    description:
      "Navigation, hierarki och innehÃ¥ll ska hjÃ¤lpa anvÃ¤ndaren framÃ¥t, inte bara se snygga ut i en mockup.",
    icon: Palette,
  },
  {
    title: "Kreativitet med funktion",
    description:
      "Animationer, fÃ¤rg och 3D fÃ¥r gÃ¤rna sticka ut, men de ska alltid fÃ¶rstÃ¤rka upplevelsen och berÃ¤ttelsen.",
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
    value: "UX/UI, komponenttÃ¤nk och tydlig struktur",
  },
  {
    label: "NÃ¤sta steg",
    value: "Djupare case studies och fler liveprojekt",
  },
];

const processSteps = [
  {
    step: "01",
    title: "FÃ¶rstÃ¥ behovet",
    description:
      "Jag bÃ¶rjar med flÃ¶den, innehÃ¥ll och vad anvÃ¤ndaren faktiskt behÃ¶ver kunna gÃ¶ra utan friktion.",
  },
  {
    step: "02",
    title: "Forma en tydlig riktning",
    description:
      "Typografi, hierarki och komponenter behÃ¶ver kÃ¤nnas konsekventa sÃ¥ att sidan fÃ¥r en stark identitet.",
  },
  {
    step: "03",
    title: "Bygga fÃ¶r vidareutveckling",
    description:
      "Jag tÃ¤nker i Ã¥teranvÃ¤ndbara delar, lÃ¤sbar kod och animationer som gÃ¥r att utveckla vidare Ã¶ver tid.",
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              Felicia Bengtsson
            </Link>

            <Button asChild size="sm" className="shrink-0 shadow-(--soft-shadow)">
              <a href={cvUrl} target="_blank" rel="noreferrer">
                CV
              </a>
            </Button>
          </div>

          <nav className="flex w-full gap-4 overflow-x-auto pb-1 text-sm text-muted-foreground md:w-auto md:flex-wrap md:items-center md:justify-end md:overflow-visible md:pb-0">
            <Link
              href="#about"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              Om mig
            </Link>
            <Link
              href="#projects"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              Projekt
            </Link>
            <Link
              href="#process"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_38%)]" />

          <div className="container px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <div className="inline-flex max-w-full rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-(--soft-shadow) sm:text-xs sm:tracking-[0.24em]">
                  Frontendutvecklare med UX-fokus
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-[0.98] text-foreground sm:text-5xl lg:text-7xl">
                  Jag bygger varma, tydliga och visuellt starka webbupplevelser.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
                  Portfolio fÃ¶r Felicia Bengtsson. Jag kombinerar
                  frontendutveckling, UX-tÃ¤nk och kreativ design fÃ¶r att skapa
                  digitala produkter som kÃ¤nns genomarbetade frÃ¥n fÃ¶rsta
                  klicket.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full justify-center shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
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
                    className="w-full justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto"
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
                  className="overflow-hidden rounded-4xl border border-white/60 bg-white/80 p-5 shadow-(--soft-shadow) backdrop-blur-sm sm:p-6"
                >
                  <div className="grid gap-5 sm:grid-cols-[112px_1fr]">
                    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-3xl border border-white/60 bg-secondary shadow-(--soft-shadow) sm:mx-0 sm:h-28 sm:w-28">
                      <Image
                        src="/assets/images/profile.jpg"
                        alt="PortrÃ¤tt pÃ¥ Felicia Bengtsson"
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Bas i Sverige
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                        Felicia Bengtsson
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        Frontendutvecklare med Ã¶ga fÃ¶r UX, visuellt uttryck och
                        tydlig kommunikation. Jag trivs bÃ¤st i projekt dÃ¤r form
                        och funktion fÃ¥r stÃ¤rka varandra.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {profileFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-3xl border border-border/70 bg-secondary/35 p-4"
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
                  className="overflow-hidden rounded-4xl border border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm"
                >
                  <div className="flex flex-col items-start gap-4 px-5 pt-5 sm:px-6 sm:pt-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Creative Frontend
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                        Motion och 3D med mening
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Jag vill att interaktioner ska ge energi och
                        personlighet, men alltid stÃ¶tta innehÃ¥llet i stÃ¤llet fÃ¶r
                        att distrahera frÃ¥n det.
                      </p>
                    </div>

                    <span className="rounded-full border border-primary/20 bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Under utveckling
                    </span>
                  </div>

                  <div className="h-[240px] sm:h-[280px] lg:h-80">
                    <Hero3D />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-24">
          <div className="container px-4 sm:px-6">
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
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Jag vill bygga digitala upplevelser som kÃ¤nns genomarbetade,
                inte generiska.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                FÃ¶r mig handlar bra frontend inte bara om att fÃ¥ saker att
                fungera. Det handlar om att skapa tydlighet, fÃ¶rtroende och en
                kÃ¤nsla av att varje detalj Ã¤r dÃ¤r av en anledning.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                      <h3 className="mt-5 text-xl font-bold text-foreground sm:text-2xl">
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

        <section id="projects" className="py-20 sm:py-24">
          <div className="container px-4 sm:px-6">
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
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Projekt som visar hur jag kombinerar innehÃ¥ll, UX och frontend.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                HÃ¤r lyfter jag fram arbeten som visar bÃ¥de visuell kÃ¤nsla och
                hur jag strukturerar upplevelser fÃ¶r riktiga anvÃ¤ndarbehov.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  projectUrl={`/projects/${project.slug}`}
                  projectUrlLabel="LÃ¤s case study"
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full max-w-sm justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto sm:max-w-none"
              >
                <Link href="/projects">
                  Alla case studies
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 sm:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                SÃ¥ jobbar jag
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                FrÃ¥n idÃ© till fÃ¤rdig upplevelse med fokus pÃ¥ tydlighet.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                      <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
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

        <section id="contact" className="pb-20 pt-8 sm:pb-24 sm:pt-10">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[36px] border border-white/60 bg-linear-to-br from-white/85 via-white/80 to-secondary/55 p-5 shadow-(--glow-shadow) backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                    NÃ¤sta steg
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                    Jag vill att portfoliot ska visa bÃ¥de personlighet och
                    process.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Fas 2 ger projekten egna sidor sÃ¥ att du snabbt kan se bÃ¥de
                    sammanfattning och djup. HÃ¤rifrÃ¥n kan sidan vÃ¤xa vidare med
                    riktiga lÃ¤nkar, fler resultat och skarpare bevis pÃ¥ hur jag
                    arbetar.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-center shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
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
                      className="w-full justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto"
                    >
                      <a href={cvUrl} target="_blank" rel="noreferrer">
                        <Download className="h-5 w-5" />
                        Ladda ner CV
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border/70 bg-white/75 p-5 shadow-(--soft-shadow) sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Prioriterat hÃ¤rnÃ¤st
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Fylla varje case study med fler riktiga resultat,
                      processbilder och beslut.
                    </p>
                    <p>
                      LÃ¤gga till riktiga lÃ¤nkar till GitHub, LinkedIn, e-post
                      och liveprojekt.
                    </p>
                    <p>
                      Verifiera hela projektet med TypeScript och fortsÃ¤tta
                      fÃ¶rbÃ¤ttra SEO.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="container flex flex-col gap-3 px-4 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            {year} Felicia Bengtsson. Portfolio byggd i Next.js, TypeScript och
            Framer Motion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              Om mig
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              Case studies
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              NÃ¤sta steg
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
