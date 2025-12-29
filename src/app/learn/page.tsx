import LearnHero from "@/components/learn/learn-hero";
import LearnResources from "@/components/learn/learn-resources";
import LearnGuides from "@/components/learn/learn-guides";
import LearnWebinars from "@/components/learn/learn-webinars";
import LearnCta from "@/components/learn/learn-cta";

export default function LearnPage() {
  return (
    <>
      <LearnHero />
      <LearnResources />
      <LearnGuides />
      <LearnWebinars />
      <LearnCta />
    </>
  );
}
