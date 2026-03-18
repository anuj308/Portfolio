"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, X } from "lucide-react";

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-6">
          Open to Internships & Full-Time Roles
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-primary">Anuj Kumar Sharma</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
          Full Stack Developer | 400+ DSA Problems | MERN + GenAI
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          I build scalable full-stack applications, solve complex DSA problems, and integrate AI into real-world systems.
          Focused on backend systems, scalable APIs, and production-grade applications.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsCvOpen(true)}
            className="transition-transform duration-200 hover:scale-105"
          >
            Open CV
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="transition-transform duration-200 hover:scale-105"
          >
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
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/anuj308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:anujkumarsharma2023@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground" />
        </div>
      </div>

      {isCvOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="relative bg-background border border-border rounded-lg w-full max-w-4xl h-[85vh] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <h3 className="text-sm md:text-base font-semibold">Resume</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCvOpen(false)}
                aria-label="Close CV preview"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <iframe
              src="/cvanujgeneral.pdf"
              title="CV Preview"
              className="w-full h-[calc(85vh-57px)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
