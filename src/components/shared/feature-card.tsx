import { cn } from "@/lib/utils";

interface FeatureCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Icon element to display */
  icon: React.ReactNode;
  /** Layout variant */
  variant?: "default" | "horizontal" | "compact";
  /** Custom className */
  className?: string;
}

/**
 * Reusable feature card with icon, title, and description
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  variant = "default",
  className,
}) => {
  if (variant === "horizontal") {
    return (
      <div
        className={cn(
          "bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <div className="bg-[#3b68ff] p-3 rounded-xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300",
          className
        )}
      >
        <div className="bg-[#3b68ff] p-3 rounded-full w-fit mb-4">{icon}</div>
        <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-start sm:items-center">
        <div className="bg-[#3b68ff] p-3 md:p-5 rounded-full flex-shrink-0">
          {icon}
        </div>
        <span className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
          {title}
        </span>
      </div>
      <p className="mt-4 md:mt-5 text-sm md:text-md text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
