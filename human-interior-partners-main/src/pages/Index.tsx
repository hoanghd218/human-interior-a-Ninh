import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransitionSection from "@/components/TransitionSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import OutcomeSection from "@/components/OutcomeSection";
import SocialProofSection from "@/components/SocialProofSection";
import ShowroomSection from "@/components/ShowroomSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";

import ScarcitySection from "@/components/ScarcitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <TransitionSection />
      <SolutionSection />
      <OfferSection />
      <ShowroomSection />
      <ScarcitySection />
      <OutcomeSection />
      <CTASection />
      <SocialProofSection />
      <FeaturedProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
