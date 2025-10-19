import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";

const getTiers = (tier: "monthly" | "annual") => [
  {
    name: "Starter",
    price: "$0.00",
    description: "Essential features for profressionals",
    features: [
      "Up to 1,000 subscribers",
      "Basic email automation",
      "Drag-and-drop email builder",
      "Realtime-time analytics",
      "Standard support",
    ],
  },
  {
    name: "Premium",
    price: tier === "monthly" ? "$13.59" : "$119.59",
    description: "Advanced features for growing business",
    features: [
      "Up to 1,000 subscribers",
      "Advanced email automation",
      "A/B testing",
      "Dynamic content",
      "Priority Support",
    ],
  },
  {
    name: "Professional",
    price: tier === "monthly" ? "$30.49" : "$299.59",
    description: "Tailored solutions for profressionals",
    features: [
      "Custom subscriber limits",
      "Advanced segmentation",
      "Predictive analytics",
      "Dedicated account manager",
      "24/7 premium support",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] w-full justify-center flex">
      <section className="py-8 md:py-16 w-full max-w-[1400px]">
        <div className="container mx-auto px-4 md:px-6 lg:px-4">
          <div className="pb-6 md:pb-7 flex flex-col items-center">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
              Simple and Transparent Pricing
            </h1>
            <p className="max-w-[800px] text-center text-gray-500 text-sm md:text-base leading-relaxed">
              Discover the pricing options that fit your project management
              needs. We offer flexible plans designed to help you succeed,
              whether you&apos;re just starting or manage a large-scale
              operations
            </p>
          </div>
          <Tabs
            defaultValue="monthly"
            className="w-full flex flex-col items-center gap-4 md:gap-6"
          >
            <TabsList className="grid w-48 sm:w-60 grid-cols-2">
              <TabsTrigger value="monthly" className="text-sm md:text-lg">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="annually" className="text-sm md:text-lg">
                Annually
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {getTiers("monthly").map((tier, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "border-none bg-[#f0f0f0] rounded-2xl md:rounded-3xl p-6 md:p-10",
                      {
                        "bg-[#3b68ff] text-white": index === 1,
                      }
                    )}
                  >
                    <CardHeader
                      className={cn(
                        "border-b pb-6 md:pb-8 space-y-4 md:space-y-6",
                        {
                          "border-b-gray-300": index !== 1,
                          "border-b-gray-400": index === 1,
                        }
                      )}
                    >
                      <CardTitle className="text-base md:text-lg">
                        {tier.name}
                      </CardTitle>
                      <p className="ml-0 md:ml-2 text-2xl md:text-4xl font-bold">
                        {tier.price}
                      </p>
                      <CardDescription
                        className={cn("text-sm md:text-md", {
                          "text-gray-100": index === 1,
                        })}
                      >
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-3 md:mt-4">
                      <ul className="space-y-3 md:space-y-5 list-disc list-inside">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <span className="text-sm md:text-md">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6 md:pt-10">
                      <Button
                        className={cn(
                          "w-full h-12 md:h-16 text-sm md:text-md font-semibold",
                          {
                            "text-[#3b68ff] bg-white border-[#3b68ff]":
                              index === 1,
                          }
                        )}
                        variant="outline"
                      >
                        {index === 2 ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="annually" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {getTiers("annual").map((tier, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "border-none bg-[#f4f4f4] rounded-2xl md:rounded-3xl p-6 md:p-10",
                      {
                        "bg-[#3b68ff] text-white": index === 1,
                      }
                    )}
                  >
                    <CardHeader
                      className={cn(
                        "border-b pb-6 md:pb-8 space-y-4 md:space-y-6",
                        {
                          "border-b-gray-300": index !== 1,
                          "border-b-gray-400": index === 1,
                        }
                      )}
                    >
                      <CardTitle className="text-base md:text-lg">
                        {tier.name}
                      </CardTitle>
                      <p className="ml-0 md:ml-2 text-2xl md:text-4xl font-bold">
                        {tier.price}
                      </p>
                      <CardDescription
                        className={cn("text-sm md:text-md", {
                          "text-gray-100": index === 1,
                        })}
                      >
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-3 md:mt-4">
                      <ul className="space-y-3 md:space-y-5 list-disc list-inside">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <span className="text-sm md:text-md">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6 md:pt-10">
                      <Button
                        className={cn(
                          "w-full h-12 md:h-16 text-sm md:text-md font-semibold",
                          {
                            "text-[#3b68ff] bg-white": index === 1,
                          }
                        )}
                        variant="outline"
                      >
                        {index === 2 ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
