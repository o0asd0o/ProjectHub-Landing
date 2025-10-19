import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Cta: React.FC = () => {
  return (
    <div className="w-full bg-primary flex items-center flex-col pb-8 md:pb-16 text-white">
      <section className="w-full max-w-[1400px] flex items-center flex-col mt-6 md:mt-10 px-4 md:px-6 lg:px-0">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold py-6 md:py-10 max-w-[700px] leading-tight sm:leading-tight md:leading-tight lg:leading-[56px]">
          Ready to transform your projects? Get Started Today!
        </h1>

        <Button
          variant="outline"
          className="w-full sm:w-52 h-12 md:h-16 text-sm md:text-md font-semibold text-[#3b68ff] bg-white flex gap-2 max-w-xs"
        >
          Get Started <MoveRight size={20} />
        </Button>
      </section>
    </div>
  );
};

export default Cta;
