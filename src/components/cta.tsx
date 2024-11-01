import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Cta: React.FC = () => {
  return (
    <div className="w-full bg-primary flex  items-center flex-col pb-16 text-white">
      <section className="w-full max-w-[1400px] flex items-center flex-col mt-10">
        <h1 className="text-center text-[46px] font-bold py-10 max-w-[700px] leading-[56px]">
          Ready to transform your projects? Get Started Today!
        </h1>

        <Button
          variant="outline"
          className="w-52 h-16 text-md font-semibold text-[#3b68ff] bg-white flex gap-2"
        >
          Get Started <MoveRight />
        </Button>
      </section>
    </div>
  );
};

export default Cta;
