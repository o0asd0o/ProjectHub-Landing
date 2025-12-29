import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const LearnCta: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="bg-gradient-to-r from-[#3b68ff] to-[#5b7fff] rounded-3xl p-8 md:p-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="text-white w-12 h-12 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with New Content
          </h2>
          <p className="text-white/80 mb-8 text-sm md:text-base">
            Subscribe to our newsletter and get the latest tutorials, tips, and
            best practices delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-sm md:text-base outline-none"
            />
            <Button className="bg-white text-[#3b68ff] hover:bg-gray-100 rounded-full px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-white/60 text-xs mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnCta;
