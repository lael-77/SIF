import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DifferenceSection />
      <PillarsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
