"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import VipBenefitsSection from "@/components/landing/VipBenefitsSection";
import MoodboardSection from "@/components/landing/MoodboardSection";
import ValuePropsSection from "@/components/landing/ValuePropsSection";
import TrustStatsSection from "@/components/landing/TrustStatsSection";
import FeaturedProjectsSection from "@/components/landing/FeaturedProjectsSection";
import JapfaCaseStudy from "@/components/landing/JapfaCaseStudy";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ConsultantSection from "@/components/landing/ConsultantSection";
import RegisterSection from "@/components/landing/RegisterSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import Footer from "@/components/landing/Footer";
import FloatingActions from "@/components/landing/FloatingActions";

export default function LandingPage() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const consultantSection = document.getElementById('consultant-section');

      let shouldHide = false;
      if (consultantSection) {
        const rect = consultantSection.getBoundingClientRect();
        shouldHide = rect.top < window.innerHeight;
      }

      if (scrollY > 300 && !shouldHide) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#F9F9F9] font-sans antialiased">
      <Navbar />
      <HeroSection />
      {/* <PainPointsSection /> */}
      <VipBenefitsSection />
      <MoodboardSection />
      <ValuePropsSection />
      <TrustStatsSection />
      <FeaturedProjectsSection />
      <JapfaCaseStudy />
      <TestimonialsSection />
      <ConsultantSection />
      <RegisterSection />
      <Footer />
      <FloatingActions showFloatingBar={showFloatingBar} />
    </main>
  );
}
