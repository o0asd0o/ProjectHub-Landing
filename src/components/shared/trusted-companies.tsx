import Image from "next/image";
import { cn } from "@/lib/utils";
import { type Company } from "@/lib/constants";

interface TrustedCompaniesProps {
  /** Array of company objects with name and logo */
  companies: Company[];
  /** Optional title above the logos */
  title?: string;
  /** Size variant for logos */
  size?: "small" | "medium" | "large";
  /** Whether to show grayscale effect with hover color */
  grayscale?: boolean;
  /** Custom className */
  className?: string;
}

const sizeStyles = {
  small: "w-12 h-12 md:w-16 md:h-16",
  medium: "w-16 h-16 md:w-24 md:h-24",
  large: "w-20 h-20 md:w-28 md:h-28",
};

/**
 * Reusable component for displaying trusted company logos
 */
const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({
  companies,
  title,
  size = "medium",
  grayscale = true,
  className,
}) => {
  return (
    <div className={cn("text-center", className)}>
      {title && <p className="text-gray-500 text-sm mb-6">{title}</p>}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
        {companies.map((company) => (
          <div
            key={company.name}
            className={cn(
              "relative transition-all duration-300",
              sizeStyles[size],
              grayscale &&
                "grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={company.logo}
              alt={company.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;
