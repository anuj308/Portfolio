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
      "A brief description of what this project does and the problem it solves. Replace with your actual project details.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/",
    live: "https://your-project.vercel.app",
    emoji: "🚀",
    featured: true,
  },
  {
    title: "Project Name 2",
    description:
      "Another project description showcasing your skills and what you built.",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    github: "https://github.com/",
    live: "",
    emoji: "🌐",
    featured: false,
  },
  {
    title: "Project Name 3",
    description:
      "Description of the third project with the tech stack used.",
    tags: ["Python", "Flask", "MySQL"],
    github: "https://github.com/",
    live: "https://your-project.vercel.app",
    emoji: "🤖",
    featured: false,
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
