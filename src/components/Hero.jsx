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
          <span className="text-primary">Anuj Kumar Sharma</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
          Full Stack Developer &amp; GenAI Enthusiast
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          I build full-stack web applications, love solving algorithmic problems,
          and explore AI integrations. Currently pursuing B.Tech CSE at LPU.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#about">About Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/cvanujgeneral.pdf" target="_blank" rel="noopener noreferrer">
              Open CV
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="/cvanujgeneral.pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/anuj308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/anuj308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:anujkumarsharma2023@gmail.com"
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
