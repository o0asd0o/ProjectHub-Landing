import Image from "next/image";
import { Button } from "@/components/ui/button";
import { INTEGRATION_PARTNERS } from "@/lib/constants";

const ProductIntegrations: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 leading-tight">
            Seamlessly Connect Your{" "}
            <span className="text-[#3b68ff]">Favorite Tools</span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            ProjectHub integrates with over 100+ tools you already use. Connect
            your tech stack in minutes and create a unified workflow that keeps
            your team productive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="big" className="text-sm md:text-md px-8">
              View All Integrations
            </Button>
            <Button
              size="big"
              variant="outline"
              className="text-sm md:text-md border-primary text-primary px-8"
            >
              Request Integration
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {INTEGRATION_PARTNERS.map((integration) => (
              <div
                key={integration.name}
                className="bg-white rounded-xl p-6 md:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square"
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntegrations;
