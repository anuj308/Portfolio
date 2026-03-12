import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile image placeholder */}
          <div className="flex justify-center">
            <div className="w-60 h-60 rounded-full bg-muted flex items-center justify-center text-7xl border-4 border-border shadow-inner">
              👤
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m a passionate developer currently pursuing my degree in
              Computer Science. I love building web applications, exploring new
              technologies, and solving real-world problems through code.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Your City, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <span>B.Tech Computer Science, Your University (2022–2026)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0 text-primary" />
                <span>Open to internships &amp; full-time roles</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Problem Solver", "Team Player", "Fast Learner", "Open Source"].map(
                (tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
