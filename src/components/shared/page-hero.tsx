import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  /** Small uppercase label above the title */
  subtitle?: string;
  /** Main heading - can include JSX for highlighted spans */
  title: React.ReactNode;
  /** Description paragraph below the title */
  description?: string;
  /** Primary button configuration */
  primaryButton?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  /** Secondary button configuration */
  secondaryButton?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  /** Additional content below buttons (stats, search, etc.) */
  children?: React.ReactNode;
  /** Custom className for the section */
  className?: string;
  /** Whether to show the blur gradient background */
  showBlur?: boolean;
}

/**
 * Reusable hero section for page headers with consistent styling
 */
const PageHero: React.FC<PageHeroProps> = ({
  subtitle,
  title,
  description,
  primaryButton,
  secondaryButton,
  children,
  className,
  showBlur = true,
}) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0 mb-12 md:mb-20 relative",
        className
      )}
    >
      <div className="flex flex-col text-center max-w-4xl">
        {subtitle && (
          <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
            {subtitle}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {(primaryButton || secondaryButton) && (
        <div className="mt-6 flex flex-col sm:flex-row gap-4 z-10">
          {primaryButton && (
            <Button
              size="big"
              className="text-sm md:text-md px-8 py-3 md:px-10"
              onClick={primaryButton.onClick}
            >
              {primaryButton.label}
            </Button>
          )}
          {secondaryButton && (
            <Button
              size="big"
              variant="outline"
              className="text-sm md:text-md border-primary text-primary px-8 py-3 md:px-10"
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.label}
            </Button>
          )}
        </div>
      )}

      {children}

      {showBlur && (
        <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[400px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
      )}
    </section>
  );
};

export default PageHero;
