import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies | Felicia Bengtsson",
  description: "Utvalda projekt och case studies inom frontend, UX/UI och digital design.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Felicia Bengtsson
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow)"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Till startsidan
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-24 pt-16">
        <section className="container px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              Alla case studies
            </p>
            <h1 className="mt-3 text-5xl font-bold text-foreground sm:text-6xl">
              Projekt som visar hur jag jobbar med struktur, känsla och frontend.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Här finns en samlad översikt över projekt som jag använder för att visa min
              process, mina prioriteringar och hur jag omsätter idéer till användbara upplevelser.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                projectUrl={`/projects/${project.slug}`}
                projectUrlLabel="Läs case study"
                delay={index * 0.08}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="shadow-(--glow-shadow)">
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
                Tillbaka till portfoliot
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow)"
            >
              <Link href="/#contact">
                Nästa steg
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
