import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aakaar",
    description:
      "Full-stack Canva-like design editor with an interactive canvas supporting shapes, text, drawings, and images. Built with a Node.js microservices architecture, Auth.js auth, AI image generation, and export options for PNG, SVG, PDF & JSON.",
    tags: ["Next.js", "React.js", "Node.js", "Fabric.js", "MongoDB", "Cloudinary", "Auth.js"],
    github: "https://github.com/anuj308/canvaclone",
    live: "https://aakaar-alpha.vercel.app/",
    emoji: "🎨",
    featured: true,
    date: "Feb 2026 – Mar 2026",
  },
  {
    title: "ChefAssist",
    description:
      "AI-powered recipe generator that creates meal ideas from ingredients and dietary preferences. Features streaming GenAI responses, JWT auth, Google OAuth, and Cloudinary image uploads for a production-grade cooking assistant.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/Savant261/Flames-2025-Project-ChefAssist",
    live: "https://chef-assist-frontend.vercel.app/",
    emoji: "👨‍🍳",
    featured: true,
    date: "Jun 2025 – Aug 2025",
  },
  {
    title: "Feedback Form Builder",
    description:
      "Full-stack SaaS platform for creating, sharing, and analyzing custom feedback forms. Implemented 30+ REST APIs, JWT + HTTP-only auth, Google OAuth, RBAC, analytics dashboards, filtering, CSV/JSON export, and Docker-based deployment with frontend on Vercel and backend on Render.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "JWT Auth", "Google OAuth", "Cloudinary", "Tailwind CSS"],
    github: "https://github.com/anuj308/feedback",
    live: "https://formsmadesimple.vercel.app/",
    emoji: "📝",
    featured: true,
    date: "Jul 2024 – Sep 2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">Things I&apos;ve built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="h-40 bg-muted flex items-center justify-center text-5xl">
                {project.emoji}
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="text-xs shrink-0">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                {project.date && (
                  <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                )}
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3.5 w-3.5 mr-1.5" /> GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
