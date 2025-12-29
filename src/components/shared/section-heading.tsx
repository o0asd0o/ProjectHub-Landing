import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Main heading text */
  title: string;
  /** Optional description below heading */
  description?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Custom className */
  className?: string;
}

/**
 * Reusable section heading with consistent typography
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-gray-600 text-sm md:text-base",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
