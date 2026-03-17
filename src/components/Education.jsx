import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.69",
    location: "Phagwara, Punjab",
    duration: "Aug 2023 - Present",
  },
  {
    school: "Dr. A.N.K DAV Public School",
    degree: "Intermediate",
    score: "Percentage: 85.6%",
    location: "Rourkela, Odisha",
    duration: "Apr 2022 - Mar 2023",
  },
  {
    school: "St. Arnold’s School",
    degree: "Matriculation",
    score: "Percentage: 91.6%",
    location: "Rourkela, Odisha",
    duration: "Apr 2020 - Mar 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <p className="text-muted-foreground">Academic background</p>
        </div>

        <div className="space-y-4">
          {educationData.map((item) => (
            <Card key={item.school} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{item.school}</h3>
                    <p className="text-sm text-foreground/80 mt-1">{item.degree}</p>
                    <p className="text-sm text-primary mt-1">{item.score}</p>
                  </div>

                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
