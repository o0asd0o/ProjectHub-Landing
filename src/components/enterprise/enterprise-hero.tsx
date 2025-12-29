import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const EnterpriseHero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0 mb-12 md:mb-20">
      <div className="flex flex-col text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="bg-[#3b68ff]/10 p-4 rounded-2xl">
            <Building2 className="text-[#3b68ff]" size={40} />
          </div>
        </div>
        <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
          ENTERPRISE
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Built for Scale,{" "}
          <span className="text-[#3b68ff]">Designed for Enterprise</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Empower your entire organization with enterprise-grade security,
          advanced administration, and unlimited scalability. ProjectHub grows
          with you.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 z-10">
        <Button size="big" className="text-sm md:text-md px-8 py-3 md:px-10">
          Contact Sales
        </Button>
        <Button
          size="big"
          variant="outline"
          className="text-sm md:text-md border-primary text-primary px-8 py-3 md:px-10"
        >
          Request a Demo
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-500 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            99.99%
          </span>
          <span>Uptime SLA</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            500K+
          </span>
          <span>Enterprise Users</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-gray-900">
            24/7
          </span>
          <span>Priority Support</span>
        </div>
      </div>

      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[400px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </section>
  );
};

export default EnterpriseHero;
