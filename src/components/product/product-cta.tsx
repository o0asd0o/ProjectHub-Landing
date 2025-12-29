import { CtaSection } from "@/components/shared";

const ProductCta: React.FC = () => {
  return (
    <CtaSection
      title="Ready to Transform How Your Team Works?"
      description="Join thousands of teams already using ProjectHub to deliver projects faster and more efficiently."
      primaryButton={{ label: "Start Your Free Trial" }}
    />
  );
};

export default ProductCta;
