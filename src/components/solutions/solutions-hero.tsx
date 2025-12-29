import { Button } from "@/components/ui/button";

const SolutionsHero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0 mb-12 md:mb-20">
      <div className="flex flex-col text-center max-w-4xl">
        <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
          SOLUTIONS
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Tailored Solutions for{" "}
          <span className="text-[#3b68ff]">Every Team</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Whether you&apos;re a startup, growing business, or enterprise
          organization, ProjectHub adapts to your unique workflow and helps your
          team thrive.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 z-10">
        <Button size="big" className="text-sm md:text-md px-8 py-3 md:px-10">
          Find Your Solution
        </Button>
        <Button
          size="big"
          variant="outline"
          className="text-sm md:text-md border-primary text-primary px-8 py-3 md:px-10"
        >
          Talk to Sales
        </Button>
      </div>

      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[400px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </section>
  );
};

export default SolutionsHero;
