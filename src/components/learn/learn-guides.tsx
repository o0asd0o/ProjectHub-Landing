import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const GUIDES = [
  {
    title: "The Complete Guide to Agile Project Management",
    description:
      "Learn how to implement agile methodologies in your team with ProjectHub's built-in tools and templates.",
    image: "/sales.jpg",
    readTime: "15 min read",
    category: "Methodology",
  },
  {
    title: "Mastering Task Automation with Butler",
    description:
      "Discover how to automate repetitive tasks and save hours every week with our powerful automation engine.",
    image: "/market.jpg",
    readTime: "10 min read",
    category: "Automation",
  },
  {
    title: "Building Effective Team Dashboards",
    description:
      "Create custom dashboards that give your team the visibility they need to stay on track.",
    image: "/research.jpg",
    readTime: "8 min read",
    category: "Analytics",
  },
];

const LearnGuides: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-14 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-2">
            Featured Guides
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            In-depth guides to help you master project management
          </p>
        </div>
        <Link
          href="#"
          className="text-[#3b68ff] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          View All Guides <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide) => (
          <Card
            key={guide.title}
            className="overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 md:h-52 overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#3b68ff] text-xs font-semibold px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-lg md:text-xl font-bold mb-3 leading-tight group-hover:text-[#3b68ff] transition-colors">
                {guide.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {guide.description}
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={14} className="mr-1" />
                {guide.readTime}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LearnGuides;
