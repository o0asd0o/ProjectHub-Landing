"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      className="fixed bottom-4 md:bottom-6 h-12 md:h-10 w-12 md:w-10 right-4 md:right-6 p-2 rounded-full shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 z-40"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Go back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTop;
