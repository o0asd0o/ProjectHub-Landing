import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductHero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0">
      <div className="flex flex-col text-center max-w-4xl">
        <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
          PRODUCT OVERVIEW
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          One Platform,{" "}
          <span className="text-[#3b68ff]">Endless Possibilities</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Discover a comprehensive suite of tools designed to streamline your
          workflow, boost productivity, and help your team deliver exceptional
          results.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <Button size="big" className="text-sm md:text-md px-8 py-3 md:px-10">
          Start Free Trial
        </Button>
        <Button
          size="big"
          variant="outline"
          className="text-sm md:text-md border-primary text-primary px-8 py-3 md:px-10"
        >
          Watch Demo
        </Button>
      </div>

      <div className="overflow-hidden relative z-10 py-3 md:py-6 px-2 md:px-4 mt-8 md:mt-12 mb-8 md:mb-16 rounded-2xl md:rounded-3xl w-full max-w-[1100px] bg-white h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] shadow-[0px_0px_20px_9px_rgba(59,104,251,0.065)]">
        <Image
          src="/app-banner.png"
          alt="Product Dashboard"
          fill
          style={{ objectFit: "contain" }}
          className="p-2 md:p-4"
        />
      </div>

      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[500px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </section>
  );
};

export default ProductHero;
