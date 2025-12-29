import { TrustedCompanies, SectionHeading } from "@/components/shared";
import { TRUSTED_COMPANIES } from "@/lib/constants";

const EnterpriseTrusted: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0 text-center">
        <SectionHeading
          title="Trusted by Industry Leaders"
          description="Join thousands of enterprise organizations already transforming their workflows with ProjectHub."
        />

        <TrustedCompanies
          companies={TRUSTED_COMPANIES}
          size="medium"
          className="mb-16"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 md:p-8">
            <p className="text-3xl md:text-4xl font-bold text-[#3b68ff] mb-2">
              50%
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Reduction in project delivery time
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <p className="text-3xl md:text-4xl font-bold text-[#3b68ff] mb-2">
              85%
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Improvement in team collaboration
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8">
            <p className="text-3xl md:text-4xl font-bold text-[#3b68ff] mb-2">
              3x
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Faster time to market
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTrusted;
