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
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { projects, siteContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Sparkles,
};

export default function HomePage() {
  const year = new Date().getFullYear();
  const { buttons, cvUrl, home, name, navigation } = siteContent;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {name}
            </Link>

            <Button
              asChild
              size="sm"
              className="shrink-0 shadow-(--soft-shadow)"
            >
              <a href={cvUrl} target="_blank" rel="noreferrer">
                {buttons.cvShort}
              </a>
            </Button>
          </div>

          <nav className="flex w-full gap-4 overflow-x-auto pb-1 text-sm text-muted-foreground md:w-auto md:flex-wrap md:items-center md:justify-end md:overflow-visible md:pb-0">
            <Link
              href="#about"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {navigation.about}
            </Link>
            <Link
              href="#projects"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {navigation.projects}
            </Link>
            <Link
              href="#process"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {navigation.process}
            </Link>
            <Link
              href="#contact"
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {navigation.contact}
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
                  {home.hero.eyebrow}
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-[0.98] text-foreground sm:text-5xl lg:text-7xl">
                  {home.hero.title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
                  {home.hero.body}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full justify-center shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                  >
                    <Link href="#projects">
                      {buttons.selectedProjects}
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
                      {buttons.downloadCv}
                    </a>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {home.hero.tags.map((item) => (
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
                        alt={home.profile.imageAlt}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                        {home.profile.location}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                        {name}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {home.profile.body}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {home.profile.facts.map((fact) => (
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
                        {home.creative.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                        {home.creative.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {home.creative.body}
                      </p>
                    </div>

                    <span className="rounded-full border border-primary/20 bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {home.creative.status}
                    </span>
                  </div>

                  <div className="h-60 sm:h-[280px] lg:h-80">
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
                {home.about.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                {home.about.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.about.body}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {home.about.strengths.map((strength, index) => {
                const StrengthIcon = iconMap[strength.icon] ?? Sparkles;

                return (
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
                          <StrengthIcon className="h-6 w-6" />
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
                );
              })}
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
                {home.projects.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                {home.projects.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.projects.body}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  projectUrl={`/projects/${project.slug}`}
                  projectUrlLabel={buttons.readCaseStudy}
                  delay={Math.min(index * 0.08, 0.24)}
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
                  {buttons.allCaseStudies}
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
                {home.process.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                {home.process.title}
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {home.process.steps.map((step, index) => (
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
                        {home.process.stepPrefix} {step.step}
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
                    {home.contact.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                    {home.contact.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {home.contact.body}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-center shadow-(--glow-shadow) transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                    >
                      <Link href="/projects">
                        {buttons.allCaseStudies}
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
                        {buttons.downloadCv}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border/70 bg-white/75 p-5 shadow-(--soft-shadow) sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    {home.contact.priorityTitle}
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    {home.contact.priorities.map((priority) => (
                      <p key={priority}>{priority}</p>
                    ))}
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
            {year} {home.footer.text}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              {navigation.about}
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground"
            >
              {navigation.caseStudies}
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              {navigation.nextStep}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
