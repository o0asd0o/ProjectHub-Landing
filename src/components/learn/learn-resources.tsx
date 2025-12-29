import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Lightbulb,
  Award,
} from "lucide-react";
import Link from "next/link";

const RESOURCES = [
  {
    title: "Getting Started Guide",
    icon: <BookOpen className="text-[#3b68ff]" size={24} />,
    description:
      "New to ProjectHub? Start here with our comprehensive onboarding guide to get up and running in minutes.",
    link: "#",
    linkText: "Start Learning",
  },
  {
    title: "Video Tutorials",
    icon: <Video className="text-[#3b68ff]" size={24} />,
    description:
      "Watch step-by-step video tutorials covering everything from basic features to advanced workflows.",
    link: "#",
    linkText: "Watch Videos",
  },
  {
    title: "Documentation",
    icon: <FileText className="text-[#3b68ff]" size={24} />,
    description:
      "Deep dive into our comprehensive documentation for detailed information on every feature.",
    link: "#",
    linkText: "Read Docs",
  },
  {
    title: "Community Forum",
    icon: <Users className="text-[#3b68ff]" size={24} />,
    description:
      "Join thousands of ProjectHub users sharing tips, tricks, and best practices in our community.",
    link: "#",
    linkText: "Join Community",
  },
  {
    title: "Best Practices",
    icon: <Lightbulb className="text-[#3b68ff]" size={24} />,
    description:
      "Learn industry-proven strategies for project management success from our experts.",
    link: "#",
    linkText: "Explore Tips",
  },
  {
    title: "Certification",
    icon: <Award className="text-[#3b68ff]" size={24} />,
    description:
      "Become a certified ProjectHub expert and showcase your skills with our certification program.",
    link: "#",
    linkText: "Get Certified",
  },
];

const LearnResources: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Learning Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Everything you need to become a ProjectHub power user, all in one
            place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {RESOURCES.map((resource) => (
            <Card
              key={resource.title}
              className="bg-white border-none hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#3b68ff]/10 rounded-xl flex items-center justify-center mb-3">
                  {resource.icon}
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <Link
                  href={resource.link}
                  className="text-[#3b68ff] text-sm font-semibold hover:underline"
                >
                  {resource.linkText} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnResources;
