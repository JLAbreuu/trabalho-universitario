"use client";

import { useEffect } from "react";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeroSection } from "@/components/HeroSection";
import { EconomicRootSection } from "@/components/EconomicRootSection";
import { ExternalitiesSection } from "@/components/ExternalitiesSection";
import { HumanSideSection } from "@/components/HumanSideSection";
import { StructuralSolutionsSection } from "@/components/StructuralSolutionsSection";

export default function Home() {
  useEffect(() => {
    // 1. Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // 2. Inicializar GSAP ScrollTrigger Globalmente
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <main style={{ overflow: 'hidden' }}>
      <HeroSection />
      <EconomicRootSection />
      <ExternalitiesSection />
      <HumanSideSection />
      <StructuralSolutionsSection />
    </main>
  );
}
