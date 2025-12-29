import ProductHero from "@/components/product/product-hero";
import ProductFeatures from "@/components/product/product-features";
import ProductIntegrations from "@/components/product/product-integrations";
import ProductCta from "@/components/product/product-cta";

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductFeatures />
      <ProductIntegrations />
      <ProductCta />
    </>
  );
}
