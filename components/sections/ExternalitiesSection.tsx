"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Waves, BarChart3 } from "lucide-react";
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

gsap.registerPlugin(ScrollTrigger);

interface MarketFailureCard {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  accentColor: string;
  points: string[];
}

const marketFailures: MarketFailureCard[] = [
  {
    id: 1,
    title: "Monopólio Natural",
    icon: <Scale className="w-8 h-8" />,
    color: "#059669",
    accentColor: "#10b981",
    points: [
      "Redes de tubulação exigem investimento massivo",
      "Custo marginal baixo após instalação",
      "Difícil competição em mercado de saneamento",
      "Regulação fraca permite exploração de monopólio",
    ],
  },
  {
    id: 2,
    title: "Externalidades Negativas",
    icon: <Waves className="w-8 h-8" />,
    color: "#1e40af",
    accentColor: "#2563eb",
    points: [
      "Tragédia dos Comuns — recurso compartilhado",
      "Poluição de rios afeta comunidades inteiras",
      "Custos não internalizados pelas empresas",
      "Governo não cobra pelo dano ambiental",
    ],
  },
  {
    id: 3,
    title: "Assimetria de Informação",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "#7c3aed",
    accentColor: "#a855f7",
    points: [
      "Cidadão desconhece qualidade real da água",
      "Empresas conhecem verdadeira condição",
      "Falta transparência em relatórios públicos",
      "Mercado não consegue funcionar sem dados",
    ],
  },
];

export function ExternalitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <span className="pill-text">03 — COMO O SISTEMA FUNCIONA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Três falhas de mercado que <span className="text-gradient">se reforçam</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            O saneamento é um caso clássico onde o mercado sozinho não consegue entregar um resultado eficiente sem regulação forte.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container Refined */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          overflowX: 'auto', 
          paddingBottom: '4rem',
          paddingTop: '4rem',
          margin: '-3rem -2rem -1rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          cursor: 'grab'
        }} ref={scrollContainerRef}>
          {marketFailures.map((failure, index) => (
            <motion.div
              key={failure.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ minWidth: '350px', overflow: 'visible' }}
            >
              <LiquidGlassCard
                accentColor={failure.accentColor}
                style={{ 
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  height: '100%',
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  backgroundColor: `${failure.accentColor}15`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: failure.accentColor,
                  marginBottom: '1rem'
                }}>
                  {failure.icon}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                  {failure.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {failure.points.map((point, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      gap: '0.75rem', 
                      alignItems: 'flex-start',
                      fontSize: '0.95rem',
                      color: 'var(--foreground-muted)',
                      lineHeight: 1.4
                    }}>
                      <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        backgroundColor: failure.accentColor, 
                        marginTop: '7px',
                        flexShrink: 0
                      }} />
                      {point}
                    </div>
                  ))}
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
