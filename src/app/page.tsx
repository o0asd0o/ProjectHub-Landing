import Cta from "@/components/cta";
import Demo from "@/components/demo";
import ExpandSales from "@/components/expand-sales";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Feedbacks from "@/components/feedbacks";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Trustees from "@/components/trustees";

// TODOs:
/**
 * 1. Navigation on desktop (make it sticky)
 * 2. Try for free login page (also for get started)
 * 3. Payment form (?)
 * 4. Request a demo form (scheduling)
 * 5. Mobile responsive designs
 * 6. Add back to top navigation on scroll down
 * 7. Add Fade in animations
 */
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <Hero />
      <Features />
      <Feedbacks />
      <Pricing />
      <Demo />
      <Trustees />
      <Faq />
      <ExpandSales />
      <Cta />
      <Footer />
    </div>
  );
}
