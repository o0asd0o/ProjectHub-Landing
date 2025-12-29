import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#141957] flex items-center flex-col pb-6 text-[#b0b5de]">
      <section className="w-full max-w-[1400px] flex flex-col mt-6 md:mt-10 px-4 md:px-6 lg:px-0">
        <div className="border-b border-b-[#9da5c9] flex flex-col lg:flex-row mb-6 pb-8 md:pb-12 gap-8 lg:gap-5">
          {/* Logo and Description Section */}
          <div className="flex flex-col w-full lg:w-[20%] gap-4 md:gap-5">
            <div className="flex gap-2 md:gap-3 text-xl md:text-2xl font-bold">
              <div className="transform rotate-[135deg] flex flex-col gap-1">
                <div className="w-6 h-2 md:w-7 md:h-3 bg-[#3b68ff] rounded-t-lg rounded-br-lg" />
                <div className="w-6 h-2 md:w-7 md:h-3 bg-[#bad3ff] rounded-b-lg rounded-tl-lg" />
              </div>
              <span className="text-white">
                Project
                <span className="text-[#3b68ff]">Hub</span>
              </span>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Highlight money-back guarantees, free trials, or satisfaction
              guarantees
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.name];
                const isFilled = social.name !== "instagram";
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon
                      fill={isFilled ? "#141957" : undefined}
                      color={isFilled ? "" : "#141957"}
                      size={20}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-5 flex-1">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-3 md:gap-4">
                <div className="text-base md:text-lg lg:text-xl font-bold text-[#fafafa]">
                  {section.title}
                </div>
                <ul className="flex flex-col gap-2 md:gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm md:text-base hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-0 text-sm md:text-base">
          <div className="flex flex-col sm:flex-row gap-1">
            <span>Email:</span>
            <a
              href="mailto:support@projecthub.com"
              className="text-[#3b68ff] hover:text-white transition-colors"
            >
              support@projecthub.com
            </a>
          </div>
          <div className="flex gap-1 md:ml-auto">
            &copy; 2024. All Rights Reserved ProjectHub Inc.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
