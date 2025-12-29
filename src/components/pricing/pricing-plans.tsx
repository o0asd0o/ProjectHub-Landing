"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const PLANS = {
  monthly: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 3 projects",
        "Up to 5 team members",
        "Basic task management",
        "1 GB storage",
        "Community support",
        "Basic reporting",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Starter",
      price: "$12",
      period: "/user/month",
      description: "Ideal for growing teams and startups",
      features: [
        "Unlimited projects",
        "Up to 20 team members",
        "Advanced task management",
        "10 GB storage",
        "Email support",
        "Custom workflows",
        "Time tracking",
        "Gantt charts",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/user/month",
      description: "Best for scaling businesses",
      features: [
        "Everything in Starter",
        "Unlimited team members",
        "100 GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom fields",
        "Automation rules",
        "API access",
        "SSO integration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "On-premise deployment",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
  annual: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 3 projects",
        "Up to 5 team members",
        "Basic task management",
        "1 GB storage",
        "Community support",
        "Basic reporting",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Starter",
      price: "$9",
      period: "/user/month",
      description: "Ideal for growing teams and startups",
      features: [
        "Unlimited projects",
        "Up to 20 team members",
        "Advanced task management",
        "10 GB storage",
        "Email support",
        "Custom workflows",
        "Time tracking",
        "Gantt charts",
      ],
      cta: "Start Free Trial",
      popular: false,
      savings: "Save $36/year",
    },
    {
      name: "Professional",
      price: "$22",
      period: "/user/month",
      description: "Best for scaling businesses",
      features: [
        "Everything in Starter",
        "Unlimited team members",
        "100 GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom fields",
        "Automation rules",
        "API access",
        "SSO integration",
      ],
      cta: "Start Free Trial",
      popular: true,
      savings: "Save $84/year",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "On-premise deployment",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
};

const PricingPlans: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0 mb-12 md:mb-20">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <button
            onClick={() => setBilling("monthly")}
            className={cn(
              "px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all",
              billing === "monthly"
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={cn(
              "px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all",
              billing === "annual"
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS[billing].map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative border-2 transition-all duration-300",
              plan.popular
                ? "border-[#3b68ff] shadow-xl scale-105 z-10"
                : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#3b68ff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            {"savings" in plan && plan.savings && (
              <div className="absolute -top-4 right-4">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.savings}
                </span>
              </div>
            )}
            <CardHeader className="pt-8">
              <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <CardDescription className="mt-2 text-sm">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className="text-green-500 flex-shrink-0 mt-0.5"
                      size={16}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                className={cn(
                  "w-full h-12 font-semibold",
                  plan.popular
                    ? "bg-[#3b68ff] hover:bg-[#2a57ee] text-white"
                    : ""
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
