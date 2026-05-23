"use client";

import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/HeroSection";
import { AccessibilityControls } from "@/components/accessibility/AccessibilityControls";
import { SectionNavigator } from "@/components/navigation/SectionNavigator";

const SectionLoader = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 40, height: 40, borderRadius: "50%", border: "3px solid #0071e3", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
  </div>
);

const SanitationIcebergHero = dynamic(
  () => import("@/components/sections/SanitationIcebergHero").then(m => ({ default: m.SanitationIcebergHero })),
  { ssr: false, loading: SectionLoader }
);
const LayeredJourneySection = dynamic(
  () => import("@/components/sections/LayeredJourneySection").then(m => ({ default: m.LayeredJourneySection })),
  { ssr: false, loading: SectionLoader }
);
const VisibleProblemSection = dynamic(
  () => import("@/components/sections/VisibleProblemSection").then(m => ({ default: m.VisibleProblemSection })),
  { ssr: false, loading: SectionLoader }
);
const StructuralInequalitySection = dynamic(
  () => import("@/components/sections/StructuralInequalitySection").then(m => ({ default: m.StructuralInequalitySection })),
  { ssr: false, loading: SectionLoader }
);
const ExternalitiesSection = dynamic(
  () => import("@/components/sections/ExternalitiesSection").then(m => ({ default: m.ExternalitiesSection })),
  { ssr: false, loading: SectionLoader }
);
const NashEquilibriumSection = dynamic(
  () => import("@/components/sections/NashEquilibriumSection").then(m => ({ default: m.NashEquilibriumSection })),
  { ssr: false, loading: SectionLoader }
);
const IcebergModelDiveSection = dynamic(
  () => import("@/components/sections/IcebergModelDiveSection").then(m => ({ default: m.IcebergModelDiveSection })),
  { ssr: false, loading: SectionLoader }
);
const NewLegalFrameworkSection = dynamic(
  () => import("@/components/sections/NewLegalFrameworkSection").then(m => ({ default: m.NewLegalFrameworkSection })),
  { ssr: false, loading: SectionLoader }
);
const StakeholdersGridSection = dynamic(
  () => import("@/components/sections/StakeholdersGridSection").then(m => ({ default: m.StakeholdersGridSection })),
  { ssr: false, loading: SectionLoader }
);
const EsgAgendaSection = dynamic(
  () => import("@/components/sections/EsgAgendaSection").then(m => ({ default: m.EsgAgendaSection })),
  { ssr: false, loading: SectionLoader }
);
const SystemicLoopsSection = dynamic(
  () => import("@/components/sections/SystemicLoopsSection").then(m => ({ default: m.SystemicLoopsSection })),
  { ssr: false, loading: SectionLoader }
);
const ManifestoOutroSection = dynamic(
  () => import("@/components/sections/ManifestoOutroSection").then(m => ({ default: m.ManifestoOutroSection })),
  { ssr: false, loading: SectionLoader }
);
const AcademicFooterSection = dynamic(
  () => import("@/components/sections/AcademicFooterSection").then(m => ({ default: m.AcademicFooterSection })),
  { ssr: false, loading: SectionLoader }
);

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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
