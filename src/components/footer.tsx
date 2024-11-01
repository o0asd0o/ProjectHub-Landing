import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const LIST = [
  {
    title: "Product",
    items: [
      "Product tour",
      "Pricing",
      "Templates",
      "Apps & Integrations",
      "Task management",
      "Wrike Status",
      "Gant charts",
      "Security",
      "API",
    ],
  },
  {
    title: "Solutions",
    items: [
      "All Teams",
      "Marketing",
      "Creative",
      "Project Management",
      "Product Development",
      "Business Operations",
      "Professinal Services",
      "Students",
    ],
  },
  {
    title: "Resources",
    items: [
      "Help Center",
      "Community",
      "Webinars",
      "Interactive Training",
      "Support",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "ProjectHub",
      "Our Customers",
      "Blog",
      "Events",
      "Newsroom",
      "Partner Program",
      "User Conference",
      "Contact Us",
    ],
  },
  {
    title: "Platform",
    items: [
      "Platform Overview",
      "Integrations",
      "Extensions",
      "App Building",
      "AI",
      "Connected Data",
      "See More",
    ],
  },
];
const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#141957] flex  items-center flex-col pb-6 text-[#b0b5de]">
      <section className="w-full max-w-[1400px] flex flex-col mt-10">
        <div className="border-b border-b-[#9da5c9] flex mb-6 pb-12 gap-5">
          <div className="flex flex-col w-[20%] gap-5">
            <div className="flex gap-3 text-2xl font-bold">
              <div className="transform rotate-[135deg] flex flex-col gap-1">
                <div className="w-7 h-3 bg-[#3b68ff] rounded-t-lg rounded-br-lg" />
                <div className="w-7 h-3 bg-[#bad3ff] rounded-b-lg rounded-tl-lg" />
              </div>
              <span className="text-white">
                Project
                <span className="text-[#3b68ff]">Hub</span>
              </span>
            </div>
            <p>
              Highlight money-back guarntees, free trials, or satisfaction
              guarantees
            </p>
            <div className="flex gap-3">
              <div className="p-2 bg-white rounded-full">
                <Facebook fill="#141957" color="" />
              </div>

              <div className="p-2 bg-white rounded-full">
                <Twitter fill="#141957" color="" />
              </div>

              <div className="p-2 bg-white rounded-full">
                <Linkedin fill="#141957" color="" />
              </div>
              <div className="p-2 bg-white rounded-full">
                <Instagram color="#141957" />
              </div>
            </div>
          </div>
          {LIST.map((item) => {
            return (
              <div
                key={item.title}
                className="w-[16%] pl-8 flex flex-col gap-4"
              >
                <div className="text-xl font-bold text-[#fafafa]">
                  {item.title}
                </div>
                <ul className="flex flex-col gap-3">
                  {item.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex items-start w-full">
          <div className="flex gap-1">
            Email:
            <a href="mailto:support@projecthub.com">support@projecthub.com</a>
          </div>
          <div className="flex gap-1 ml-auto">
            &copy; 2024. All Rights Reserved ProjectHub Inc.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
