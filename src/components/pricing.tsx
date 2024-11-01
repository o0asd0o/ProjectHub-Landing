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
      <section className="py-16 w-full max-w-[1400px]">
        <div className="container mx-auto px-4">
          <div className="pb-7 flex flex-col items-center">
            <h1 className="text-center text-[46px] font-bold ">
              Simple and Transparent Pricing
            </h1>
            <p className="max-w-[800px] text-center text-gray-500">
              Discover the pricing options that fit your project management
              needs. We offer flexible plans designed to help you succeed,
              whether you&apos;re just starting or manage a large-scale
              operations
            </p>
          </div>
          <Tabs
            defaultValue="monthly"
            className="w-full flex flex-col items-center gap-6"
          >
            <TabsList className="grid w-60 grid-cols-2">
              <TabsTrigger value="monthly" className="text-lg">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="annually" className="text-lg">
                Annually
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getTiers("monthly").map((tier, index) => (
                  <Card
                    key={index}
                    className={cn("border-none bg-[#f0f0f0] rounded-3xl p-10", {
                      "bg-[#3b68ff] text-white": index === 1,
                    })}
                  >
                    <CardHeader
                      className={cn("border-b pb-8 space-y-6", {
                        "border-b-gray-300": index !== 1,
                      })}
                    >
                      <CardTitle className="text-lg">{tier.name}</CardTitle>
                      <p className="ml-2 text-4xl font-bold">{tier.price}</p>
                      <CardDescription
                        className={cn("text-md", {
                          "text-gray-100": index === 1,
                        })}
                      >
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <ul className="space-y-5 list-disc list-inside">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <span className="text-md">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-10">
                      <Button
                        className={cn("w-full h-16 text-md font-semibold", {
                          "text-[#3b68ff] bg-white border-[#3b68ff]":
                            index === 1,
                        })}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getTiers("annual").map((tier, index) => (
                  <Card
                    key={index}
                    className={cn("border-none bg-[#f4f4f4] rounded-3xl p-10", {
                      "bg-[#3b68ff] text-white": index === 1,
                    })}
                  >
                    <CardHeader
                      className={cn("border-b pb-8 space-y-6", {
                        "border-b-gray-300": index !== 1,
                      })}
                    >
                      <CardTitle className="text-lg">{tier.name}</CardTitle>
                      <p className="ml-2 text-4xl font-bold">{tier.price}</p>
                      <CardDescription
                        className={cn("text-md", {
                          "text-gray-100": index === 1,
                        })}
                      >
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <ul className="space-y-5 list-disc list-inside">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <span className="text-md">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-10">
                      <Button
                        className={cn("w-full h-16 text-md font-semibold", {
                          "text-[#3b68ff] bg-white": index === 1,
                        })}
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
