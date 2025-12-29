import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButton {
  label: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

interface CtaSectionProps {
  title: string;
  description?: string;
  primaryButton: CtaButton;
  secondaryButton?: CtaButton;
  className?: string;
}

/**
 * Reusable CTA section component
 * Used across Product, Solutions, Learn, Enterprise, and Pricing pages
 */
const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className,
}) => {
  return (
    <section className={cn("w-full bg-primary py-12 md:py-20", className)}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-6 max-w-[800px] mx-auto leading-tight">
          {title}
        </h2>

        {description && (
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="bg-white text-[#3b68ff] hover:bg-gray-100 h-12 md:h-14 px-8 text-sm md:text-md font-semibold"
          >
            {primaryButton.label} <MoveRight className="ml-2" size={20} />
          </Button>

          {secondaryButton && (
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 h-12 md:h-14 px-8 text-sm md:text-md font-semibold border border-white/30"
            >
              {secondaryButton.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
