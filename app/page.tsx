"use client";

import { useEffect } from "react";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/sections/HeroSection";
import { SanitationIcebergHero } from "@/components/sections/SanitationIcebergHero";
import { LayeredJourneySection } from "@/components/sections/LayeredJourneySection";
import { VisibleProblemSection } from "@/components/sections/VisibleProblemSection";
import { StructuralInequalitySection } from "@/components/sections/StructuralInequalitySection";
import { SystemicLoopsSection } from "@/components/sections/SystemicLoopsSection";
import { NashEquilibriumSection } from "@/components/sections/NashEquilibriumSection";
import { IcebergModelDiveSection } from "@/components/sections/IcebergModelDiveSection";
import { NewLegalFrameworkSection } from "@/components/sections/NewLegalFrameworkSection";
import { StakeholdersGridSection } from "@/components/sections/StakeholdersGridSection";
import { EsgAgendaSection } from "@/components/sections/EsgAgendaSection";
import { ExternalitiesSection } from "@/components/sections/ExternalitiesSection";
import { ManifestoOutroSection } from "@/components/sections/ManifestoOutroSection";
import { AcademicFooterSection } from "@/components/sections/AcademicFooterSection";
import { AccessibilityControls } from "@/components/accessibility/AccessibilityControls";
import { SectionNavigator } from "@/components/navigation/SectionNavigator";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <main style={{ overflow: 'hidden' }}>
      <SectionNavigator />

      <div data-section="intro">
        <HeroSection />
      </div>

      <div data-section="jornada">
        <LayeredJourneySection />
      </div>

      <div data-section="iceberg">
        <SanitationIcebergHero />
      </div>

      <div data-section="problema-visivel" id="problema-visivel">
        <VisibleProblemSection />
      </div>

      <div data-section="desigualdade-estrutural" id="desigualdade-estrutural">
        <StructuralInequalitySection />
      </div>

      <div data-section="externalidades">
        <ExternalitiesSection />
      </div>

      <div data-section="como-o-sistema-funciona" id="como-o-sistema-funciona">
        <NashEquilibriumSection />
      </div>

      <div data-section="causas-raiz" id="causas-raiz">
        <IcebergModelDiveSection />
      </div>

      <div data-section="marco-legal">
        <NewLegalFrameworkSection />
      </div>

      <div data-section="stakeholders">
        <StakeholdersGridSection />
      </div>

      <div data-section="solucoes-sistemicas" id="solucoes-sistemicas">
        <EsgAgendaSection />
      </div>

      <div data-section="loops-sistemicos">
        <SystemicLoopsSection />
      </div>

      <div data-section="manifesto">
        <ManifestoOutroSection />
      </div>

      <div data-section="referencias">
        <AcademicFooterSection />
      </div>

      <AccessibilityControls />
    </main>
  );
}
