import {
  Users,
  Settings2,
  BarChart3,
  Lock,
  Globe,
  Headphones,
} from "lucide-react";

const ENTERPRISE_FEATURES = [
  {
    title: "Advanced User Management",
    icon: <Users className="text-white" size={24} />,
    description:
      "Manage thousands of users with ease. Create custom roles, set granular permissions, and organize teams with advanced group management.",
  },
  {
    title: "Admin Console",
    icon: <Settings2 className="text-white" size={24} />,
    description:
      "Centralized administration with powerful controls. Manage organization-wide settings, policies, and user provisioning from one dashboard.",
  },
  {
    title: "Enterprise Analytics",
    icon: <BarChart3 className="text-white" size={24} />,
    description:
      "Gain deep insights across your organization with custom reports, usage analytics, and executive dashboards for data-driven decisions.",
  },
  {
    title: "Advanced Security",
    icon: <Lock className="text-white" size={24} />,
    description:
      "Enterprise-grade security with SSO, SAML 2.0, two-factor authentication, and comprehensive audit logs for complete visibility.",
  },
  {
    title: "Global Deployment",
    icon: <Globe className="text-white" size={24} />,
    description:
      "Deploy globally with data residency options, multi-region support, and localization to meet your compliance requirements.",
  },
  {
    title: "Dedicated Support",
    icon: <Headphones className="text-white" size={24} />,
    description:
      "Get priority access to our support team with dedicated account managers, 24/7 support, and guaranteed response times.",
  },
];

const EnterpriseFeatures: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Purpose-built features for large organizations with complex
            requirements and high security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ENTERPRISE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#3b68ff] p-3 rounded-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
