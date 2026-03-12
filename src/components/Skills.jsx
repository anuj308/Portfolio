import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiC,
  SiLinux,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 85, category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 80, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 70, category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", level: 65, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor", level: 60, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 75, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 60, category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 75, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 55, category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 65, category: "Database" },
  { name: "C", icon: SiC, color: "#A8B9CC", level: 70, category: "Languages" },
  { name: "Git", icon: SiGit, color: "#F05032", level: 75, category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "currentColor", level: 75, category: "Tools" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", level: 60, category: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 50, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Database", "Languages", "Tools"];

function getLevelLabel(level) {
  if (level >= 75) return "Intermediate";
  if (level >= 55) return "Basic+";
  return "Basic";
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills &amp; Technologies</h2>
          <p className="text-muted-foreground">Tools and technologies I work with</p>
        </div>

        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <div key={cat} className="mb-10">
              <h3 className="text-base font-semibold mb-4 text-foreground/60 uppercase tracking-wider">
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catSkills.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <skill.icon
                          size={26}
                          style={{ color: skill.color }}
                          className="shrink-0"
                        />
                        <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge
                            variant={
                              getLevelLabel(skill.level) === "Intermediate"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs shrink-0"
                          >
                            {getLevelLabel(skill.level)}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-1.5" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
