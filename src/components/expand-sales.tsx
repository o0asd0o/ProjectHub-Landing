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
    <div className="flex w-full bg-[#f9f9f9] items-center flex-col pb-8 md:pb-16">
      <section className="w-full max-w-[1400px] flex items-center flex-col px-4 md:px-6 lg:px-0">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold py-6 md:py-10 max-w-[700px] leading-tight">
          Expand your sales & marketing knowledge
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full">
          {EXPAND_KNOWLEDGE.map((item) => (
            <Card
              key={item.title}
              className="h-full p-0 overflow-hidden border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="h-48 md:h-60 relative p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardHeader>
              <CardTitle className="px-4 md:px-5 py-4 md:py-7 text-base md:text-lg leading-tight">
                {item.title}
              </CardTitle>
              <CardContent className="flex flex-col p-4 md:p-5 pt-0 text-sm md:text-md text-gray-500 pb-6 md:pb-8 leading-relaxed">
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
