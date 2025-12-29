import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const EnterpriseCta: React.FC = () => {
  return (
    <section className="w-full bg-[#141957] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Our enterprise team is ready to help you implement ProjectHub
              across your organization. Get a personalized demo and see how we
              can transform your workflows.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#3b68ff] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#3b68ff] transition-colors bg-white">
                  <option>Select company size</option>
                  <option>100-500 employees</option>
                  <option>500-1000 employees</option>
                  <option>1000-5000 employees</option>
                  <option>5000+ employees</option>
                </select>
              </div>
              <Button className="w-full h-12 text-sm md:text-base font-semibold mt-2">
                Request Demo
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <a
                href="tel:+1-800-555-0123"
                className="flex items-center gap-2 hover:text-[#3b68ff] transition-colors"
              >
                <Phone size={16} />
                +1-800-555-0123
              </a>
              <a
                href="mailto:enterprise@projecthub.com"
                className="flex items-center gap-2 hover:text-[#3b68ff] transition-colors"
              >
                <Mail size={16} />
                enterprise@projecthub.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCta;
