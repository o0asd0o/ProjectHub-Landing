import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { PARTNER_COMPANIES } from "@/lib/constants";

const Trustees: React.FC = () => {
  return (
    <div className="flex w-full bg-[#f9f9f9] items-center flex-col py-8 md:py-16">
      <section className="w-full max-w-[1400px] flex flex-col px-4 md:px-6 lg:px-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-center">
          Trusted by over 90% Fortune 100 companies
        </h1>
        <Marquee className="mt-8 md:mt-16" speed={50}>
          <div className="relative w-full flex gap-8 md:gap-12 pr-8 md:pr-12">
            {PARTNER_COMPANIES.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center justify-center gap-3 md:gap-4"
              >
                <div
                  className="h-8 md:h-12 relative"
                  style={{ width: Math.max(item.width * 0.6, 30) }}
                >
                  <Image
                    fill
                    alt={item.name}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    src={item.logo}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="font-bold text-lg md:text-xl lg:text-2xl text-gray-500 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Trustees;
