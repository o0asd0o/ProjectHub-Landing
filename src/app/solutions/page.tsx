import SolutionsHero from "@/components/solutions/solutions-hero";
import SolutionsByTeam from "@/components/solutions/solutions-by-team";
import SolutionsByIndustry from "@/components/solutions/solutions-by-industry";
import SolutionsCta from "@/components/solutions/solutions-cta";

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsByTeam />
      <SolutionsByIndustry />
      <SolutionsCta />
    </>
  );
}
