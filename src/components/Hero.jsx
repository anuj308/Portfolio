"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-6">
          Available for Opportunities
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-primary">Your Name</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
          Full Stack Developer &amp; Tech Enthusiast
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          I build beautiful, responsive web applications and love exploring new
          technologies. Passionate about creating impactful digital experiences.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#about">About Me</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
