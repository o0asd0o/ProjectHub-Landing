import Image from "next/image";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  {
    title: "Technology",
    description:
      "Accelerate product development with agile workflows, sprint tracking, and seamless integration with your existing dev tools.",
    image: "/sales.jpg",
  },
  {
    title: "Financial Services",
    description:
      "Ensure compliance and security while managing complex projects across multiple teams and stakeholders.",
    image: "/market.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Streamline patient care coordination, research projects, and administrative workflows with HIPAA-compliant tools.",
    image: "/research.jpg",
  },
];

const SolutionsByIndustry: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
          Solutions by Industry
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Industry-specific solutions designed to meet unique regulatory
          requirements and operational needs.
        </p>
      </div>

      <div className="space-y-12 md:space-y-20">
        {INDUSTRIES.map((industry, index) => (
          <div
            key={industry.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-16`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {industry.description}
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary text-sm md:text-md"
              >
                Explore {industry.title} Solutions
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsByIndustry;
