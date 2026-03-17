import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Development with GenAI",
    company: "W3Grads",
    duration: "Jun 2025 – Aug 2025",
    type: "Summer Training",
    responsibilities: [
      "Completed an Agile-based industrial training with daily Scrum meetings and rotating team leadership roles.",
      "Worked with Git/GitHub, stand-ups, sprint planning, retrospectives, and full Agile workflows.",
      "Built and deployed a full-stack MERN project with GenAI integration (ChefAssist).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Summer Training</h2>
          <p className="text-muted-foreground">Hands-on industrial learning experience</p>
        </div>

        <div className="relative pl-6 border-l-2 border-border space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-7 top-5 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
                <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
              </div>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{exp.role}</CardTitle>
                      <p className="text-primary font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm font-medium text-foreground/60 mb-3 uppercase tracking-wide">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
