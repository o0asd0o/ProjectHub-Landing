import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div
      id="product"
      className="w-full flex flex-col items-center gap-3 md:gap-5 mt-24 md:mt-40 lg:mt-52 max-w-[1400px] px-4 md:px-6 lg:px-0"
    >
      <div className="flex flex-col text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[80px]">
          <span className="block">Give Your Managers the</span>
          <span className="text-[#3b68ff] block">Tools They Need to Excel</span>
        </h1>
      </div>
      <p className="text-base md:text-lg text-center max-w-2xl">
        The all-in-one solution to transform management in your company
      </p>
      <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 z-10 w-full sm:w-auto">
        <Button
          size="big"
          className="text-sm md:text-md w-full sm:w-auto px-8 py-3 md:px-10 md:py-4"
        >
          Learn more
        </Button>
        <Button
          size="big"
          variant="outline"
          className="text-sm md:text-md border-primary text-primary w-full sm:w-auto px-8 py-3 md:px-10 md:py-4"
        >
          Get started
        </Button>
      </div>
      <div className="overflow-hidden relative z-10 py-3 md:py-6 px-2 md:px-4 mt-8 md:mt-12 mb-8 md:mb-16 rounded-2xl md:rounded-3xl w-full max-w-[1150px] bg-white h-[200px] sm:h-[300px] md:h-[450px] lg:h-[725px] shadow-[0px_0px_20px_9px_rgba(59,104,251,0.065)]">
        <Image
          src="/app-banner.png"
          alt="Banner"
          fill
          style={{ objectFit: "contain" }}
          className="p-2 md:p-4"
        />
      </div>
      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[500px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </div>
  );
};

export default Hero;
