import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const TRUTEES = [
  {
    name: "Ford",
    image: "ford.png",
    width: 85,
  },
  {
    name: "Shell",
    image: "shell.png",
    width: 50,
  },
  {
    name: "Apple",
    image: "apple.png",
    width: 40,
  },
  {
    name: "Volkswagon",
    image: "volkswagon.png",
    width: 40,
  },
  {
    name: "CNPC",
    image: "cnpc.png",
    width: 40,
  },
  {
    name: "Philips 66",
    image: "phillips66.png",
    width: 40,
  },
  {
    name: "Huawei",
    image: "huawei.png",
    width: 42,
  },
  {
    name: "Sinopec",
    image: "sinopec.png",
    width: 42,
  },
] as const;

const Trustees: React.FC = () => {
  return (
    <div className="flex w-full bg-[#f9f9f9] items-center flex-col py-16">
      <section className="w-full max-w-[1400px] flex flex-col">
        <h1 className="text-[36px] font-bold text-center">
          Trusted by over 90% Fortune 100 companies
        </h1>
        <Marquee className="mt-16">
          <div className="relative w-full flex gap-12">
            {TRUTEES.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center justify-center"
              >
                <div className="h-full relative" style={{ width: item.width }}>
                  <Image
                    fill
                    alt={item.name}
                    className="grayscale"
                    src={`/companies/${item.image}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="font-bold text-2xl text-gray-500">
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
