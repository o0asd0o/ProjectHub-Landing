import PricingHero from "@/components/pricing/pricing-hero";
import PricingPlans from "@/components/pricing/pricing-plans";
import PricingComparison from "@/components/pricing/pricing-comparison";
import PricingFaq from "@/components/pricing/pricing-faq";
import PricingCta from "@/components/pricing/pricing-cta";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingFaq />
      <PricingCta />
    </>
  );
}
