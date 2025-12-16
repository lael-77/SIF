import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DifferenceSection />
      <PillarsSection />
      <ImpactSection />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
