import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary" | "dark";
  padding?: "none" | "small" | "medium" | "large";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-[#f9f9f9]",
  primary: "bg-primary",
  dark: "bg-[#141957]",
};

const paddingStyles = {
  none: "",
  small: "py-8 md:py-12",
  medium: "py-12 md:py-20",
  large: "py-16 md:py-24",
};

/**
 * Reusable section wrapper with consistent max-width and padding
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  background = "white",
  padding = "medium",
}) => {
  return (
    <section
      className={cn(
        "w-full",
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
