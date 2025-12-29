"use client";

import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureValue = boolean | string;

interface ComparisonFeature {
  name: string;
  free: FeatureValue;
  starter: FeatureValue;
  professional: FeatureValue;
  enterprise: FeatureValue;
}

interface FeatureCategory {
  category: string;
  features: ComparisonFeature[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    category: "Project Management",
    features: [
      {
        name: "Projects",
        free: "3",
        starter: "Unlimited",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Tasks per project",
        free: "100",
        starter: "Unlimited",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Kanban boards",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Gantt charts",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Timeline view",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Calendar view",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom fields",
        free: false,
        starter: "5",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Milestones",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Collaboration",
    features: [
      {
        name: "Team members",
        free: "5",
        starter: "20",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Guest users",
        free: false,
        starter: "5",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Comments & mentions",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "File attachments",
        free: "100 MB",
        starter: "1 GB",
        professional: "10 GB",
        enterprise: "Unlimited",
      },
      {
        name: "Real-time collaboration",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Team chat",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Video conferencing",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Automation & Workflows",
    features: [
      {
        name: "Basic automation",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom automation rules",
        free: false,
        starter: "10",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Workflow templates",
        free: "3",
        starter: "20",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Recurring tasks",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Dependencies",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Approval workflows",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Reporting & Analytics",
    features: [
      {
        name: "Basic reports",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom dashboards",
        free: false,
        starter: "3",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Advanced analytics",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Export to PDF/Excel",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Scheduled reports",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Resource management",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Workload view",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    features: [
      {
        name: "Slack integration",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Google Workspace",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Microsoft 365",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "API access",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Webhooks",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom integrations",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Zapier integration",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security & Administration",
    features: [
      {
        name: "Two-factor authentication",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "SSO (SAML 2.0)",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Admin console",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Audit logs",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Data encryption",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom permissions",
        free: false,
        starter: "Basic",
        professional: "Advanced",
        enterprise: "Custom",
      },
      {
        name: "IP allowlisting",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Data residency",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Community forum",
        free: true,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Email support",
        free: false,
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Priority support",
        free: false,
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Phone support",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Dedicated account manager",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Custom training",
        free: false,
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "SLA guarantee",
        free: false,
        starter: false,
        professional: "99.9%",
        enterprise: "99.99%",
      },
    ],
  },
];

const renderValue = (value: FeatureValue) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="text-green-500 mx-auto" size={20} />
    ) : (
      <Minus className="text-gray-300 mx-auto" size={20} />
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
};

const PricingComparison: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
            Compare All Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            See exactly what you get with each plan. Every feature is designed
            to help your team work smarter.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 w-[300px]">Features</th>
                <th className="text-center py-4 px-4 w-[150px]">
                  <div className="font-bold text-lg">Free</div>
                  <div className="text-gray-500 text-sm font-normal">$0</div>
                </th>
                <th className="text-center py-4 px-4 w-[150px]">
                  <div className="font-bold text-lg">Starter</div>
                  <div className="text-gray-500 text-sm font-normal">
                    $12/user/mo
                  </div>
                </th>
                <th className="text-center py-4 px-4 w-[150px] bg-[#3b68ff]/5 rounded-t-xl">
                  <div className="font-bold text-lg text-[#3b68ff]">
                    Professional
                  </div>
                  <div className="text-gray-500 text-sm font-normal">
                    $29/user/mo
                  </div>
                </th>
                <th className="text-center py-4 px-4 w-[150px]">
                  <div className="font-bold text-lg">Enterprise</div>
                  <div className="text-gray-500 text-sm font-normal">
                    Custom
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((category) => (
                <>
                  <tr key={category.category} className="bg-gray-100">
                    <td
                      colSpan={5}
                      className="py-3 px-4 font-bold text-gray-800"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={feature.name}
                      className={cn(
                        "border-b border-gray-100",
                        featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      )}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {feature.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderValue(feature.free)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderValue(feature.starter)}
                      </td>
                      <td className="py-3 px-4 text-center bg-[#3b68ff]/5">
                        {renderValue(feature.professional)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderValue(feature.enterprise)}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
