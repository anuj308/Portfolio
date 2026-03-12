import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar, Trophy, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    label: "LeetCode Rating",
    value: "1,524",
    sub: "400+ problems · Top 37%",
    link: "https://leetcode.com/",
  },
  {
    icon: Star,
    label: "HackerRank",
    value: "4★ Badges",
    sub: "Problem Solving, C++, Python, JS",
    link: "https://www.hackerrank.com/profile/anuj308",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          {/* Profile image placeholder */}
          <div className="flex justify-center">
            <div className="w-60 h-60 rounded-full bg-muted flex items-center justify-center text-7xl border-4 border-border shadow-inner">
              👤
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m a Full Stack Developer and CSE undergrad at Lovely Professional
              University, passionate about building scalable web apps and integrating AI.
              I&apos;ve shipped production-grade projects with MERN, Next.js, and GenAI
              APIs, and I love competitive programming — solving 400+ problems on LeetCode
              with a contest rating of 1,524.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Phagwara, Punjab (Rourkela, Odisha — hometown)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <span>B.Tech CSE, Lovely Professional University · CGPA 7.69 (Aug 2023 – Present)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0 text-primary" />
                <span>Open to internships &amp; full-time roles</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Problem Solver", "Team Player", "Quick Learner", "Curious Mind", "Adaptable"].map(
                (tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((a) => (
            <a
              key={a.label}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="hover:shadow-md transition-shadow group-hover:border-primary/40">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{a.value}</p>
                    <p className="text-xs text-muted-foreground">{a.label} · {a.sub}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
