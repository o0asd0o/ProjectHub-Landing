import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LearnHero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0 mb-12 md:mb-20">
      <div className="flex flex-col text-center max-w-4xl">
        <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
          LEARNING CENTER
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Master Project Management with{" "}
          <span className="text-[#3b68ff]">ProjectHub</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Access tutorials, guides, webinars, and best practices to help you and
          your team get the most out of ProjectHub.
        </p>
      </div>

      <div className="mt-6 w-full max-w-xl">
        <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          <div className="pl-5">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search for tutorials, guides, and more..."
            className="flex-1 px-4 py-4 text-sm md:text-base outline-none"
          />
          <Button className="m-2 rounded-full px-6">Search</Button>
        </div>
      </div>

      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[400px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </section>
  );
};

export default LearnHero;
