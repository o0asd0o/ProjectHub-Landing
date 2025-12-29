import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { TrustedCompanies } from "@/components/shared";
import { TRUSTED_COMPANIES } from "@/lib/constants";

const PricingCta: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="bg-gradient-to-r from-[#3b68ff] to-[#5b7fff] rounded-3xl p-8 md:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Our team is here to help you find the perfect plan for your
                needs. Whether you need a custom quote or want to learn more
                about Enterprise features, we&apos;re just a click away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="bg-white text-[#3b68ff] hover:bg-gray-100 h-14 px-8 font-semibold"
              >
                <MessageSquare className="mr-2" size={20} />
                Chat with Sales
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 h-14 px-8 font-semibold border border-white/30"
              >
                <Phone className="mr-2" size={20} />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <TrustedCompanies
            companies={TRUSTED_COMPANIES.slice(0, 5)}
            title="Trusted by 10,000+ teams worldwide"
            size="small"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingCta;
