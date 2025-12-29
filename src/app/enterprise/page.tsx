import EnterpriseHero from "@/components/enterprise/enterprise-hero";
import EnterpriseFeatures from "@/components/enterprise/enterprise-features";
import EnterpriseSecurity from "@/components/enterprise/enterprise-security";
import EnterpriseTrusted from "@/components/enterprise/enterprise-trusted";
import EnterpriseCta from "@/components/enterprise/enterprise-cta";

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseFeatures />
      <EnterpriseSecurity />
      <EnterpriseTrusted />
      <EnterpriseCta />
    </>
  );
}
