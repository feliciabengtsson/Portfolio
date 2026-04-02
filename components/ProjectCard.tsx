import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tags: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
  ctaNote?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  role,
  tags,
  highlights,
  image,
  imageAlt,
  liveUrl,
  githubUrl,
  status,
  ctaNote,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden border border-white/60 bg-white/80 shadow-(--soft-shadow) backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-(--glow-shadow)">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-linear-to-br from-primary/20 via-secondary/30 to-accent/25">
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-linear-to-br from-primary/10 via-white to-accent/10">
              <span className="text-6xl font-bold text-primary/25">{title.charAt(0)}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

          {status && (
            <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {status}
            </span>
          )}
        </div>

        <CardContent className="flex h-full flex-col gap-5 p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              {role}
            </p>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Visa projekt
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Kod
                <Github className="h-4 w-4" />
              </a>
            ) : null}

            {ctaNote ? <p className="text-sm text-muted-foreground">{ctaNote}</p> : null}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
