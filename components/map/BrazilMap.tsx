"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BrazilRegion {
  id: string;
  name: string;
  percentage: number;
  color: string;
  observation: string;
  states: string[];
}

export const BRAZIL_REGIONS: BrazilRegion[] = [
  {
    id: "norte",
    name: "Norte",
    percentage: 18,
    color: "#3D8E6A",
    observation: "Apenas 18% de cobertura — o maior déficit do país. Estados como Amazonas e Pará carecem de investimento histórico em infraestrutura sanitária.",
    states: ["AM", "PA", "AP", "RR", "RO", "AC", "TO"],
  },
  {
    id: "nordeste",
    name: "Nordeste",
    percentage: 38,
    color: "#FF4444",
    observation: "38% de cobertura. Desigualdade racial e fiscal profunda; populações negras e pardas são as mais afetadas pela ausência de esgoto tratado.",
    states: ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"],
  },
  {
    id: "centro-oeste",
    name: "Centro-Oeste",
    percentage: 58,
    color: "#FF8C42",
    observation: "58% de cobertura. Região em expansão econômica, mas com disparidades urbano-rurais severas. O agronegócio coexiste com déficit sanitário.",
    states: ["MT", "MS", "GO", "DF"],
  },
  {
    id: "sudeste",
    name: "Sudeste",
    percentage: 82,
    color: "#EAB308",
    observation: "82% de cobertura — o melhor índice. Concentra grande parte dos investimentos históricos, mas periferias de SP e RJ ainda sofrem exclusão sanitária.",
    states: ["MG", "SP", "RJ", "ES"],
  },
  {
    id: "sul",
    name: "Sul",
    percentage: 72,
    color: "#9395D3",
    observation: "72% de cobertura. Maior urbanização planejada e menor desigualdade regional, mas ainda distante da meta de 90% até 2033.",
    states: ["PR", "SC", "RS"],
  },
];

// Map state code -> region id
const stateToRegion: Record<string, string> = {};
BRAZIL_REGIONS.forEach((r) => r.states.forEach((s) => { stateToRegion[s] = r.id; }));

const regionById: Record<string, BrazilRegion> = {};
BRAZIL_REGIONS.forEach((r) => { regionById[r.id] = r; });

interface Props {
  activeRegion: string | null;
  onRegionHover: (id: string | null) => void;
}

export function BrazilMap({ activeRegion, onRegionHover }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; region: BrazilRegion } | null>(null);

  // Apply colors to SVG states
  const applyColors = useCallback((hoveredRegionId: string | null) => {
    const container = containerRef.current;
    if (!container) return;
    const svg = container.querySelector("svg");
    if (!svg) return;

    // Color all polygon/path elements with class "state" or with state IDs
    const elements = svg.querySelectorAll("polygon, path");
    elements.forEach((el) => {
      const id = el.getAttribute("id");
      const regionId = id ? stateToRegion[id] : null;
      const region = regionId ? regionById[regionId] : null;

      if (region) {
        (el as SVGElement).style.transition = "fill 0.35s cubic-bezier(0.16,1,0.3,1), fill-opacity 0.35s cubic-bezier(0.16,1,0.3,1), filter 0.35s cubic-bezier(0.16,1,0.3,1), stroke 0.35s ease";
        (el as SVGElement).style.cursor = "pointer";

        if (hoveredRegionId === null) {
          // Idle: map is neutral gray
          (el as SVGElement).style.fill = "rgba(255, 255, 255, 0.15)";
          (el as SVGElement).style.fillOpacity = "1";
          (el as SVGElement).style.stroke = "rgba(255,255,255,0.1)";
          (el as SVGElement).style.strokeWidth = "0.6";
          (el as SVGElement).style.filter = "none";
        } else if (hoveredRegionId === regionId) {
          // Active region: lights up with its specific color and glow
          (el as SVGElement).style.fill = region.color;
          (el as SVGElement).style.fillOpacity = "1";
          (el as SVGElement).style.stroke = region.color;
          (el as SVGElement).style.strokeWidth = "1.5";
          (el as SVGElement).style.filter = `drop-shadow(0 0 12px ${region.color}a0)`;
        } else {
          // Other regions: more transparent gray
          (el as SVGElement).style.fill = "rgba(255, 255, 255, 0.05)";
          (el as SVGElement).style.fillOpacity = "1";
          (el as SVGElement).style.stroke = "rgba(255,255,255,0.05)";
          (el as SVGElement).style.strokeWidth = "0.4";
          (el as SVGElement).style.filter = "none";
        }
      } else {
        // Non-identified elements (islands etc)
        (el as SVGElement).style.fill = "rgba(255,255,255,0.06)";
        (el as SVGElement).style.fillOpacity = hoveredRegionId ? "0.02" : "0.06";
        (el as SVGElement).style.stroke = "rgba(255,255,255,0.04)";
        (el as SVGElement).style.strokeWidth = "0.5";
        (el as SVGElement).style.transition = "fill-opacity 0.35s cubic-bezier(0.16,1,0.3,1)";
      }
    });
  }, []);

  // Load SVG
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    fetch("/brazil-states.svg")
      .then((r) => r.text())
      .then((text) => {
        // Extract just the SVG element
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const svg = doc.querySelector("svg");
        if (!svg) return;

        // Remove original styles
        const styleEl = svg.querySelector("style");
        if (styleEl) styleEl.remove();

        // Set viewBox and sizing
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.display = "block";

        container.innerHTML = "";
        container.appendChild(svg);

        // Add event listeners to identified states
        const elements = svg.querySelectorAll("[id]");
        elements.forEach((el) => {
          const id = el.getAttribute("id");
          const regionId = id ? stateToRegion[id] : null;
          if (!regionId) return;

          el.addEventListener("mouseenter", (e) => {
            onRegionHover(regionId);
            const rect = container.getBoundingClientRect();
            const ev = e as MouseEvent;
            setTooltip({
              x: ev.clientX - rect.left,
              y: ev.clientY - rect.top,
              region: regionById[regionId],
            });
          });

          el.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const ev = e as MouseEvent;
            setTooltip((prev) =>
              prev ? { ...prev, x: ev.clientX - rect.left, y: ev.clientY - rect.top } : null
            );
          });

          el.addEventListener("mouseleave", () => {
            onRegionHover(null);
            setTooltip(null);
          });
        });

        setSvgLoaded(true);
        applyColors(null);
      });
  }, [onRegionHover, applyColors]);

  // Re-apply colors when active region changes
  useEffect(() => {
    if (svgLoaded) applyColors(activeRegion);
  }, [activeRegion, svgLoaded, applyColors]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div ref={containerRef} style={{ width: "100%", aspectRatio: "353/368" }} />

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            key={tooltip.region.id}
            initial={{ opacity: 0, scale: 0.92, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
              background: "rgba(10,10,20,0.95)",
              border: `1px solid ${tooltip.region.color}40`,
              borderRadius: "12px",
              padding: "10px 16px",
              pointerEvents: "none",
              backdropFilter: "blur(16px)",
              zIndex: 10,
              marginTop: "-12px", // Espaço extra do cursor
            }}
          >
            <p style={{ color: tooltip.region.color, fontWeight: 700, fontSize: "1rem", margin: 0 }}>
              {tooltip.region.percentage}%
            </p>
            <p style={{ color: "#aaa", fontSize: "0.78rem", margin: "2px 0 0" }}>
              {tooltip.region.name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
