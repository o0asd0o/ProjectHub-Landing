import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 mt-16 max-w-[1400px]">
      <div className="flex flex-col text-[78px] font-bold leading-[80px]">
        <span>Give Your Managers the</span>
        <span className="text-[#3b68ff]">Tools They Need to Excel</span>
      </div>
      <p className="text-lg">
        The all-in-one solutin to transform management in your company
      </p>
      <div className="mt-10 flex gap-5 z-10">
        <Button size="big" className="text-md">
          Learn more
        </Button>
        <Button
          size="big"
          variant="outline"
          className="text-md border-primary text-primary"
        >
          Get started
        </Button>
      </div>
      <div className="overflow-hidden relative z-10 py-6 px-4 mt-12 mb-16 rounded-3xl w-full max-w-[1150px] bg-white h-[725px] shadow-[0px_0px_20px_9px_rgba(59,104,251,0.065)]">
        <Image
          src="/app-banner.png"
          alt="Banner"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="top-48 rounded-full absolute w-full h-[500px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-3xl " />
    </div>
  );
};

export default Hero;
