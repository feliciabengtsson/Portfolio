"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Hero3D from "@/components/Hero3D";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const skills = [
    {
      name: "React & Next.js",
      icon: Code2,
      color: "from-primary to-primary/80",
    },
    {
      name: "Three.js & WebGL",
      icon: Sparkles,
      color: "from-accent to-accent/80",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      color: "from-secondary to-secondary/80",
    },
  ];

  const projects = [
    {
      title: "Interactive 3D Portfolio",
      description:
        "A cutting-edge portfolio website featuring immersive 3D experiences and smooth animations.",
      tags: ["React", "Three.js", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Modern shopping experience with real-time inventory and seamless checkout flow.",
      tags: ["Next.js", "TypeScript", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Digital Art Gallery",
      description:
        "Curated showcase of digital artwork with interactive galleries and artist profiles.",
      tags: ["React", "WebGL", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--warm-gradient)] opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                Creative
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Developer
                </span>
                <br /> & Digital Artist
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Crafting beautiful, interactive web experiences that blend code
                and creativity. Specializing in 3D graphics and modern frontend
                development.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-shadow)] transition-all duration-300 hover:scale-105 font-semibold"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[500px] relative"
            >
              <Hero3D />
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About Me
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I&apos;m a frontend developer and digital artist passionate about
              creating immersive web experiences...
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* SKILLS */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-[var(--glow-shadow)] transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8 pb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing my passion for interactive
              design and creative coding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let&apos;s Create Together
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-shadow)] transition-all duration-300 hover:scale-105 font-semibold text-lg px-8"
            >
              <Mail className="mr-2 w-5 h-5" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Creative Developer. Crafted with passion.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
