import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const EXPAND_KNOWLEDGE = [
  {
    title: "Sales Techniques and Strategies",
    image: "/sales.jpg",
    description:
      "Discover proven sales techniques to build strong client relationships, overcome objections, and close deals, effectively. Whether you're a seasoned or not.",
  },
  {
    title: "Digital Marketing Essentials",
    image: "/market.jpg",
    description:
      "In the digital age, understanding digital marketing is crucial. Explore SEO, social media, email marketing, and more to enhance yur online presence and drive growth",
  },
  {
    title: "Market Research and Analysis",
    image: "/research.jpg",
    description:
      "Access market research resources to undestand your target market and industry trends. Learn to analyze consumer behavior and identify opportunities to stay ahead.",
  },
];

const ExpandSales: React.FC = () => {
  return (
    <div className="flex w-full bg-[#f9f9f9] items-center flex-col pb-16">
      <section className="w-full max-w-[1400px] flex items-center flex-col">
        <h1 className="text-center text-[46px] font-bold py-10 max-w-[700px]">
          Expand your sales & marketing knowledge
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {EXPAND_KNOWLEDGE.map((item) => (
            <Card
              key={item.title}
              className="h-full p-0 overflow-hidden border-gray-300"
            >
              <CardHeader className="h-60 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardHeader>
              <CardTitle className="px-5 py-7 text-lg">{item.title}</CardTitle>
              <CardContent className="flex flex-col p-5 pt-0 text-md text-gray-500 pb-8">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpandSales;
