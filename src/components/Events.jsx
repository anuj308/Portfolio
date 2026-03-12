import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Hackathon Name",
    type: "Hackathon",
    date: "Month 2024",
    location: "City, Venue",
    description:
      "Brief description of the event and your participation or achievement.",
    photo: null, // Replace with actual path e.g. "/events/hackathon.jpg"
    emoji: "🏆",
  },
  {
    title: "Tech Conference / Workshop",
    type: "Conference",
    date: "Month 2024",
    location: "City, Venue",
    description: "What you learned or contributed at this event.",
    photo: null,
    emoji: "🎤",
  },
  {
    title: "Technical Symposium",
    type: "Symposium",
    date: "Month 2023",
    location: "College, City",
    description:
      "Participated in technical events and presented a project.",
    photo: null,
    emoji: "🎯",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Events</h2>
          <p className="text-muted-foreground">
            Hackathons, conferences &amp; more
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Photo or emoji placeholder */}
              <div className="h-48 bg-muted flex items-center justify-center text-5xl relative overflow-hidden">
                {event.photo ? (
                  <Image
                    src={event.photo}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span>{event.emoji}</span>
                )}
              </div>

              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm leading-tight">
                    {event.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {event.type}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 shrink-0" />
                  {event.date}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {event.location}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
