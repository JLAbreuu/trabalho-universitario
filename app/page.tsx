"use client";

import { useEffect } from "react";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { SanitationIcebergHero } from "@/components/SanitationIcebergHero";
import { LayeredJourneySection } from "@/components/LayeredJourneySection";
import { VisibleProblemSection } from "@/components/VisibleProblemSection";
import { StructuralInequalitySection } from "@/components/StructuralInequalitySection";
import { SystemicLoopsSection } from "@/components/SystemicLoopsSection";
import { NashEquilibriumSection } from "@/components/NashEquilibriumSection";
import { IcebergModelDiveSection } from "@/components/IcebergModelDiveSection";
import { NewLegalFrameworkSection } from "@/components/NewLegalFrameworkSection";
import { StakeholdersGridSection } from "@/components/StakeholdersGridSection";
import { EsgAgendaSection } from "@/components/EsgAgendaSection";
import { ExternalitiesSection } from "@/components/ExternalitiesSection";
import { ManifestoOutroSection } from "@/components/ManifestoOutroSection";
import { AcademicFooterSection } from "@/components/AcademicFooterSection";
import { AccessibilityControls } from "@/components/AccessibilityControls";

export default function Home() {
  useEffect(() => {
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
      <SanitationIcebergHero />
      <LayeredJourneySection />
      
      <div id="problema-visivel">
        <VisibleProblemSection />
      </div>
      
      <div id="desigualdade-estrutural">
        <StructuralInequalitySection />
      </div>
      
      <ExternalitiesSection />
      
      <div id="como-o-sistema-funciona">
        <NashEquilibriumSection />
      </div>
      
      <div id="causas-raiz">
        <IcebergModelDiveSection />
      </div>
      
      <NewLegalFrameworkSection />
      <StakeholdersGridSection />
      
      <div id="solucoes-sistemicas">
        <EsgAgendaSection />
      </div>
      
      <SystemicLoopsSection />
      <ManifestoOutroSection />
      <AcademicFooterSection />
      
      <AccessibilityControls />
    </main>
  );
}

