import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Demo: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1400px] p-4 md:p-8 lg:p-16 gap-6 md:gap-8 lg:gap-10 items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
          Run your client work on the only platform that actually builds for it:
          projecthub.com
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto">
          <Button
            size="big"
            className="text-sm md:text-md w-full sm:w-auto px-8 py-3 md:px-10 md:py-4"
          >
            Try for free
          </Button>
          <Button
            size="big"
            variant="outline"
            className="text-sm md:text-md border-primary text-primary w-full sm:w-auto px-8 py-3 md:px-10 md:py-4"
          >
            Request a Demo
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-0 md:px-8 lg:px-20">
        <div className="overflow-hidden relative z-10 py-3 md:py-6 px-2 md:px-4 rounded-2xl w-full bg-white aspect-square shadow-lg">
          <Image
            src="/manage.jpg"
            alt="Demo Banner"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
