import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies | Felicia Bengtsson",
  description:
    "Utvalda projekt och case studies inom frontend, UX/UI och digital design.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
          >
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

      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <section className="container px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              Alla case studies
            </p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Projekt som visar hur jag jobbar med struktur, kÃ¤nsla och
              frontend.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              HÃ¤r finns en samlad Ã¶versikt Ã¶ver projekt som jag anvÃ¤nder fÃ¶r
              att visa min process, mina prioriteringar och hur jag omsÃ¤tter
              idÃ©er till anvÃ¤ndbara upplevelser.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                projectUrl={`/projects/${project.slug}`}
                projectUrlLabel="LÃ¤s case study"
                delay={index * 0.08}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full justify-center shadow-(--glow-shadow) sm:w-auto"
            >
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
                Tillbaka till portfoliot
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto"
            >
              <Link href="/#contact">
                NÃ¤sta steg
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
