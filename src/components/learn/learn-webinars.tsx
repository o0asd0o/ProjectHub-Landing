import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

const WEBINARS = [
  {
    title: "Getting Started with ProjectHub: Live Onboarding Session",
    date: "January 15, 2025",
    time: "2:00 PM EST",
    attendees: 245,
    isLive: true,
  },
  {
    title: "Advanced Automation: Building Complex Workflows",
    date: "January 22, 2025",
    time: "1:00 PM EST",
    attendees: 189,
    isLive: false,
  },
  {
    title: "Q&A with Product Team: 2025 Roadmap Preview",
    date: "January 29, 2025",
    time: "3:00 PM EST",
    attendees: 312,
    isLive: false,
  },
];

const LearnWebinars: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Join our live sessions to learn from experts and get your questions
            answered in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WEBINARS.map((webinar, index) => (
            <Card
              key={webinar.title}
              className={`border-none ${
                index === 0
                  ? "bg-[#3b68ff] text-white"
                  : "bg-white hover:shadow-lg"
              } transition-shadow duration-300`}
            >
              <CardHeader className="pb-2">
                {webinar.isLive && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-sm font-semibold">Coming Soon</span>
                  </div>
                )}
                <h3
                  className={`text-lg md:text-xl font-bold leading-tight ${
                    index !== 0 && "text-gray-900"
                  }`}
                >
                  {webinar.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className={`flex flex-wrap gap-4 text-sm ${
                    index === 0 ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {webinar.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {webinar.attendees} registered
                  </div>
                </div>
                <Button
                  variant={index === 0 ? "secondary" : "outline"}
                  className={`w-full ${
                    index === 0
                      ? "bg-white text-[#3b68ff] hover:bg-gray-100"
                      : "border-[#3b68ff] text-[#3b68ff]"
                  }`}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnWebinars;
