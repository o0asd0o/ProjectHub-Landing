import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  Code2,
  TrendingUp,
  Briefcase,
  Megaphone,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";

const TEAM_SOLUTIONS = [
  {
    title: "Creative Teams",
    icon: <Palette className="text-[#3b68ff]" size={28} />,
    description:
      "Streamline creative workflows with visual project boards, asset management, and approval processes designed for designers and creatives.",
    features: ["Visual Kanban boards", "Asset library", "Review & approval"],
  },
  {
    title: "Engineering Teams",
    icon: <Code2 className="text-[#3b68ff]" size={28} />,
    description:
      "Agile-ready tools with sprint planning, bug tracking, and seamless integrations with GitHub, GitLab, and your favorite dev tools.",
    features: ["Sprint planning", "Bug tracking", "CI/CD integrations"],
  },
  {
    title: "Sales Teams",
    icon: <TrendingUp className="text-[#3b68ff]" size={28} />,
    description:
      "Track deals, manage pipelines, and close more sales with CRM integrations and automated follow-up workflows.",
    features: ["Pipeline management", "Deal tracking", "CRM sync"],
  },
  {
    title: "Operations Teams",
    icon: <Briefcase className="text-[#3b68ff]" size={28} />,
    description:
      "Optimize processes, manage resources, and ensure smooth day-to-day operations with powerful automation and reporting.",
    features: ["Process automation", "Resource planning", "Custom reports"],
  },
  {
    title: "Marketing Teams",
    icon: <Megaphone className="text-[#3b68ff]" size={28} />,
    description:
      "Plan campaigns, coordinate launches, and track performance all in one place with marketing-specific templates and tools.",
    features: ["Campaign planning", "Content calendar", "Analytics dashboard"],
  },
  {
    title: "Customer Success",
    icon: <HeadphonesIcon className="text-[#3b68ff]" size={28} />,
    description:
      "Deliver exceptional support with ticket management, SLA tracking, and customer health monitoring built right in.",
    features: ["Ticket management", "SLA tracking", "Customer insights"],
  },
];

const SolutionsByTeam: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Solutions by Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Every team works differently. That&apos;s why we&apos;ve built
            specialized features and templates for each department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TEAM_SOLUTIONS.map((solution) => (
            <Card
              key={solution.title}
              className="bg-white border-none hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{solution.icon}</div>
                <CardTitle className="text-lg md:text-xl font-bold group-hover:text-[#3b68ff] transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-500 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#3b68ff] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="inline-block mt-4 text-[#3b68ff] text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsByTeam;
