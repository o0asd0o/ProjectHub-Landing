import { CtaSection } from "@/components/shared";

const SolutionsCta: React.FC = () => {
  return (
    <CtaSection
      title="Not Sure Which Solution Fits Your Team?"
      description="Our team of experts is here to help you find the perfect solution for your unique needs. Schedule a free consultation today."
      primaryButton={{ label: "Schedule a Demo" }}
      secondaryButton={{ label: "Contact Sales" }}
    />
  );
};

export default SolutionsCta;
