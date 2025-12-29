import {
  LayoutDashboard,
  CalendarDays,
  BarChart3,
  Users2,
  Zap,
  Shield,
  MessageSquare,
  FileText,
} from "lucide-react";

const CORE_FEATURES = [
  {
    title: "Intuitive Dashboard",
    icon: <LayoutDashboard className="text-white" />,
    description:
      "Get a bird's-eye view of all your projects with our customizable dashboard. Track progress, deadlines, and team activity at a glance.",
  },
  {
    title: "Smart Scheduling",
    icon: <CalendarDays className="text-white" />,
    description:
      "Plan and schedule tasks with our intelligent calendar. Automatic conflict detection and resource allocation help you stay on track.",
  },
  {
    title: "Advanced Analytics",
    icon: <BarChart3 className="text-white" />,
    description:
      "Make data-driven decisions with comprehensive reports. Track KPIs, monitor trends, and identify bottlenecks before they impact delivery.",
  },
  {
    title: "Team Collaboration",
    icon: <Users2 className="text-white" />,
    description:
      "Work together seamlessly with real-time updates, comments, and file sharing. Keep everyone aligned regardless of location.",
  },
  {
    title: "Automation Engine",
    icon: <Zap className="text-white" />,
    description:
      "Automate repetitive tasks with our powerful workflow engine. Set triggers, conditions, and actions to save hours every week.",
  },
  {
    title: "Enterprise Security",
    icon: <Shield className="text-white" />,
    description:
      "Rest easy with bank-level encryption, SSO integration, and comprehensive audit logs. Your data is always protected.",
  },
  {
    title: "Built-in Messaging",
    icon: <MessageSquare className="text-white" />,
    description:
      "Communicate without leaving the platform. Threaded conversations, mentions, and notifications keep everyone in the loop.",
  },
  {
    title: "Document Management",
    icon: <FileText className="text-white" />,
    description:
      "Store, organize, and share files effortlessly. Version control and search make finding documents instant.",
  },
];

const ProductFeatures: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our comprehensive feature set empowers teams of all sizes to manage
            projects efficiently and deliver outstanding results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[#3b68ff] p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
