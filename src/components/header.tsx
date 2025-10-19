"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// TODO:
// 1. make links clickable (anchor)
// 2. insert go back to top button
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="max-w-[1400px] w-full fixed top-0 overflow-visible transition duration-300 backdrop-blur-md bg-white/25 z-50">
      <section
        className={cn(
          "flex items-center h-20 md:h-28 justify-between w-full transition-all duration-300 px-4 md:px-1",
          { "h-16 md:h-14": isScrolled }
        )}
      >
        <div
          className={cn(
            "flex gap-2 md:gap-3 text-lg md:text-2xl font-bold transition-all duration-300",
            {
              "text-base md:text-xl": isScrolled,
            }
          )}
        >
          <div className="transform rotate-[135deg] flex flex-col gap-1">
            <div className="w-5 h-2 md:w-7 md:h-3 bg-[#3b68ff] rounded-t-lg rounded-br-lg" />
            <div className="w-5 h-2 md:w-7 md:h-3 bg-[#bad3ff] rounded-b-lg rounded-tl-lg" />
          </div>
          <span>
            Project
            <span className="text-[#3b68ff]">Hub</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 text-md">
          <li>
            <Link href="#product" style={{ scrollBehavior: "smooth" }}>
              Product
            </Link>
          </li>
          <li>
            <Link scroll={false} href="#solutions">
              Solutions
            </Link>
          </li>
          <li>
            <Link scroll={false} href="#learn">
              Learn
            </Link>
          </li>
          <li>
            <Link scroll={false} href="#pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link scroll={false} href="#enterprise">
              Enterprise
            </Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <button
          className={cn(
            "hidden md:block px-6 md:px-10 py-3 md:py-4 bg-[#3b68ff] text-white rounded-full transition-all duration-300 text-sm md:text-base",
            {
              "px-4 md:px-6 py-2": isScrolled,
            }
          )}
        >
          Try for free
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-[#3b68ff] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </section>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="#product"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#3b68ff] py-2 text-lg font-medium transition-colors"
            >
              Product
            </Link>
            <Link
              href="#solutions"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#3b68ff] py-2 text-lg font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#learn"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#3b68ff] py-2 text-lg font-medium transition-colors"
            >
              Learn
            </Link>
            <Link
              href="#pricing"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#3b68ff] py-2 text-lg font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#enterprise"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-[#3b68ff] py-2 text-lg font-medium transition-colors"
            >
              Enterprise
            </Link>
            <button
              onClick={closeMobileMenu}
              className="mt-4 px-6 py-3 bg-[#3b68ff] text-white rounded-full text-lg font-medium w-full"
            >
              Try for free
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
