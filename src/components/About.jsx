import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar, Trophy, Star } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: Trophy,
    label: "LeetCode Rating",
    value: "1,524",
    sub: "400+ problems · Top 37%",
    link: "https://leetcode.com/u/anuj308/",
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

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          {/* Profile image placeholder */}
          <div className="flex justify-center">
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-border shadow-inner bg-muted">
              <Image
                src="/photo.jpeg"
                alt="Anuj Kumar Sharma"
                width={208}
                height={208}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <div className="space-y-2 text-foreground/80 leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m a Full Stack Developer and CSE undergraduate at Lovely Professional University,
                building scalable web applications and AI-powered systems.
              </p>
              <p>
                I&apos;ve built production-grade projects with MERN, Next.js, and GenAI APIs,
                with hands-on experience in authentication, REST APIs, and cloud deployment.
                Currently open to internship and full-time opportunities.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Phagwara, Punjab · Originally from Rourkela, Odisha</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <span>B.Tech CSE, Lovely Professional University · CGPA: 7.69 · Aug 2023 – Present</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0 text-primary" />
                <span>Open to internships &amp; full-time roles</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Backend Systems", "API Design", "AI Integration"].map(
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
        <div className="grid sm:grid-cols-2 gap-2.5">
          {achievements.map((a) => (
            <a
              key={a.label}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="hover:shadow-md transition-all duration-200 group-hover:border-primary/40 group-hover:scale-[1.01]">
                <CardContent className="px-3 py-2.5 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{a.value}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{a.label} · {a.sub}</p>
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
