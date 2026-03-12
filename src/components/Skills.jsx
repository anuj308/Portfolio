import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiCloudinary,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  // Languages
  { name: "C++", icon: SiCplusplus, color: "#00599C", level: 80, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 80, category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 75, category: "Languages" },
  { name: "Java", icon: FaJava, color: "#ED8B00", level: 65, category: "Languages" },
  // Frameworks
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 75, category: "Frameworks" },
  { name: "Express.js", icon: SiExpress, color: "currentColor", level: 75, category: "Frameworks" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", level: 80, category: "Frameworks" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor", level: 70, category: "Frameworks" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", level: 65, category: "Frameworks" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85, category: "Frameworks" },
  { name: "Vite", icon: SiVite, color: "#646CFF", level: 75, category: "Frameworks" },
  // Tools / Platforms
  { name: "Git", icon: SiGit, color: "#F05032", level: 80, category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "currentColor", level: 80, category: "Tools" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", level: 60, category: "Tools" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75, category: "Tools" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 65, category: "Tools" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 70, category: "Tools" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5", level: 70, category: "Tools" },
];

const categories = ["Languages", "Frameworks", "Tools"];

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
