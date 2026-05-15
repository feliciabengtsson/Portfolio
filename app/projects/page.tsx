import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects, siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: siteContent.metadata.projectsTitle,
  description: siteContent.metadata.projectsDescription,
};

export default function ProjectsPage() {
  const { buttons, name, navigation, projectsPage } = siteContent;

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
          >
            {name}
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
                {navigation.home}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <section className="container px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              {projectsPage.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              {projectsPage.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {projectsPage.body}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                projectUrl={`/projects/${project.slug}`}
                projectUrlLabel={buttons.readCaseStudy}
                delay={Math.min(index * 0.06, 0.24)}
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
                {navigation.backToPortfolio}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto"
            >
              <Link href="/#contact">
                {navigation.nextStep}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
