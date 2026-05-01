"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

gsap.registerPlugin(ScrollTrigger);

interface JourneyCard {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  accentColor: string;
  targetId: string;
}

const journeyCards: JourneyCard[] = [
  {
    id: 1,
    title: "O Problema Visível",
    subtitle: "Números, realidade e o que o Censo 2022 revela",
    color: "green",
    accentColor: "#22c55e",
    targetId: "problema-visivel"
  },
  {
    id: 2,
    title: "Desigualdade Estrutural",
    subtitle: "Como a fragmentação municipal agrava a crise",
    color: "blue",
    accentColor: "#3b82f6",
    targetId: "desigualdade-estrutural"
  },
  {
    id: 3,
    title: "Como o Sistema Funciona",
    subtitle: "Coordenação, incentivos e falhas de mercado",
    color: "red",
    accentColor: "#ef4444",
    targetId: "como-o-sistema-funciona"
  },
  {
    id: 4,
    title: "Causas Raiz",
    subtitle: "Modelos mentais e estruturas que perpetuam a crise",
    color: "amber",
    accentColor: "#f59e0b",
    targetId: "causas-raiz"
  },
  {
    id: 5,
    title: "Soluções Sistêmicas",
    subtitle: "ESG, novo marco legal e oportunidades de mercado",
    color: "purple",
    accentColor: "#a855f7",
    targetId: "solucoes-sistemicas"
  },
];

export function LayeredJourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            O que vamos <span className="text-gradient">cobrir hoje</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            Uma jornada por camadas — do sintoma à raiz. Entenda as engrenagens que movem (ou travam) o saneamento.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '4rem auto' }}>
          {/* Timeline Line Refined */}
          <div style={{ 
            position: 'absolute', 
            left: '20px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)', 
            opacity: 0.3 
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {journeyCards.map((card, index) => (
              <LiquidGlassCard
                key={card.id}
                onClick={() => scrollToSection(card.targetId)}
                accentColor={card.accentColor}
                interactive={true}
                className="spring-hover"
                style={{ 
                  marginLeft: '50px',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                } as React.CSSProperties}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Node indicator (Bolinha Lateral) - Alinhada com a linha do tempo */}
                <div style={{ 
                  position: 'absolute', 
                  left: '-36px', 
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: card.accentColor,
                  boxShadow: `0 0 15px ${card.accentColor}`,
                  zIndex: 2
                }} />

                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  color: card.accentColor,
                  opacity: 1,
                  textShadow: `0 0 12px ${card.accentColor}66`,
                  width: '50px',
                  fontFamily: 'Inter, sans-serif',
                  flexShrink: 0
                }}>
                  {String(card.id).padStart(2, '0')}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{card.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--foreground-muted)', margin: '0.25rem 0 0' }}>{card.subtitle}</p>
                </div>

                <ChevronDown size={20} style={{ transform: 'rotate(-90deg)', opacity: 0.8, color: card.accentColor }} />
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
