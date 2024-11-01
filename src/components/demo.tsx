import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Demo: React.FC = () => {
  return (
    <section className="flex w-full max-w-[1400px] p-16 gap-10 items-center">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-[40px] font-semibold">
          Run your client work on the only platform that actually build for it:
          projecthub.com
        </h1>
        <div className="flex gap-5">
          <Button size="big" className="text-md">
            Try for free
          </Button>
          <Button
            size="big"
            variant="outline"
            className="text-md border-primary text-primary"
          >
            Request a Demo
          </Button>
        </div>
      </div>
      <div className="w-1/2 px-20">
        <div className="overflow-hidden relative z-10 py-6 px-4 rounded-2xl w-full  bg-white aspect-square">
          <Image
            src="/manage.jpg"
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
