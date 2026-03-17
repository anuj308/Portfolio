import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Award } from "lucide-react";

const certifications = [
  {
    title: "Complete Web Development Course",
    issuer: "Hitesh Choudhary · Udemy",
    date: "March 2026",
    credentialLink:
      "https://www.udemy.com/certificate/UC-ecf61219-6c33-4ce3-a5e4-ebe64cdb5ce8/",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "November 2025",
    credentialLink: "https://www.hackerrank.com/certificates/c3ad5669dd61",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "November 2025",
    credentialLink: "https://www.hackerrank.com/certificates/e130acb9cd2d",
  },
];

const courses = [
  {
    title: "Full Stack Web Development with GenAI",
    platform: "W3Grads · Summer Training",
    date: "June 2025 – August 2025",
    link: "https://drive.google.com/file/d/1WtzoWVEsic9THNt3ubgjbMQARmWxjWNG/view",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Certifications &amp; Courses</h2>
          <p className="text-muted-foreground">My learning journey</p>
        </div>

        {/* Certifications */}
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {certifications.map((cert) => (
            <Card key={cert.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">{cert.title}</CardTitle>
                  <Badge variant="default" className="text-xs shrink-0">
                    Certificate
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Courses */}
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Courses
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <Card key={course.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">{course.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    Course
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{course.platform}</p>
                <p className="text-xs text-muted-foreground">{course.date}</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View Course
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
