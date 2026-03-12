import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-5 mb-4">
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
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anuj Kumar Sharma · Built with Next.js &amp; shadcn/ui
        </p>
      </div>
    </footer>
  );
}
