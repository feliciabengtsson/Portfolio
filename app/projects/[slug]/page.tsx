import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  getNextProject,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt hittades inte | Felicia Bengtsson",
    };
  }

  return {
    title: `${project.title} | Felicia Bengtsson`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const overviewFacts = [
    { label: "Roll", value: project.role },
    { label: "Tidsram", value: project.timeframe },
    { label: "Team", value: project.team },
  ];

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
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Alla projekt
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <section className="container px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Tillbaka till case studies
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                {project.eyebrow}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <span className="rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-(--soft-shadow)">
                  {project.status}
                </span>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm text-muted-foreground shadow-(--soft-shadow)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
                {overviewFacts.map((fact) => (
                  <Card
                    key={fact.label}
                    className="border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm"
                  >
                    <CardContent className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {fact.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-white/60 bg-white/80 shadow-(--glow-shadow) backdrop-blur-sm">
              <div className="relative aspect-16/11 overflow-hidden bg-linear-to-br from-primary/15 via-secondary/30 to-accent/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-7xl font-bold text-primary/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.ctaNote ??
                    "Det hÃ¤r projektet fortsÃ¤tter att utvecklas med fler insikter och detaljer."}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {project.metrics.map((metric) => (
              <Card
                key={metric.label}
                className="border-white/60 bg-white/75 shadow-(--soft-shadow) backdrop-blur-sm"
              >
                <CardContent className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-bold text-foreground">
                    {metric.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              {project.sections.map((section) => (
                <Card
                  key={section.title}
                  className="border-white/60 bg-white/75 shadow-(--soft-shadow) backdrop-blur-sm"
                >
                  <CardContent className="p-5 sm:p-7">
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm">
                <CardContent className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    I projektet
                  </p>
                  <div className="mt-4 space-y-3">
                    {project.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-[20px] border border-border/70 bg-white/75 p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm">
                <CardContent className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Leveranser
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {project.deliverables.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm">
                <CardContent className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Fortsatt utveckling
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {project.nextSteps.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {project.links?.length ? (
                <Card className="border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm">
                  <CardContent className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                      LÃ¤nkar
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.links.map((link) =>
                        link.external ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                          >
                            {link.label}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                          >
                            {link.label}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>
        </section>

        <section className="container px-4 pt-12 sm:px-6 sm:pt-16">
          <Card className="border-white/60 bg-linear-to-br from-white/85 via-white/80 to-secondary/55 shadow-(--glow-shadow) backdrop-blur-sm">
            <CardContent className="flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                  Vidare i portfoliot
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {nextProject
                    ? `NÃ¤sta case study: ${nextProject.title}`
                    : "Se fler projekt"}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Portfoliot blir starkare ju tydligare varje projekt visar
                  tankeprocess, prioriteringar och resultat. DÃ¤rfÃ¶r fortsÃ¤tter
                  jag bygga ut varje case study steg fÃ¶r steg.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {nextProject ? (
                  <Button
                    asChild
                    size="lg"
                    className="w-full justify-center shadow-(--glow-shadow) sm:w-auto"
                  >
                    <Link href={`/projects/${nextProject.slug}`}>
                      NÃ¤sta projekt
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                ) : null}

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full justify-center border-primary/20 bg-white/70 text-foreground shadow-(--soft-shadow) sm:w-auto"
                >
                  <Link href="/projects">
                    Alla case studies
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
