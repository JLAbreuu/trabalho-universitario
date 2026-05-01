"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Info } from 'lucide-react';
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

export function NashEquilibriumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const riverRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.to(".river-flow-path", {
      strokeDashoffset: -20,
      repeat: -1,
      duration: 3,
      ease: "none"
    });
  }, []);

  return (
    <section ref={containerRef} className="section" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <span className="pill-text">04 — A ARMADILHA DOS INCENTIVOS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Equilíbrio de Nash no <span className="text-gradient">Saneamento</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            Quando a decisão racional individual leva ao desastre coletivo. Um dilema de cooperação que trava o progresso regional.
          </p>
        </motion.div>

        {/* Interactive Diagram Refined */}
        <div style={{ position: 'relative', padding: '4rem 0' }}>
          {/* River Background Refined */}
          <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', transform: 'translateY(-50%)', opacity: 0.3, zIndex: 0 }}>
            <svg ref={riverRef} width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
              <path 
                className="river-flow-path"
                d="M 0,60 Q 250,20 500,60 T 1000,60" 
                stroke="var(--accent)" 
                strokeWidth="40"
                strokeOpacity="0.1"
                strokeDasharray="15 15"
              />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem', fontSize: '0.8rem', color: 'var(--foreground-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span>Rio Abaixo (Jusante)</span>
              <span>Rio Acima (Montante)</span>
            </div>
          </div>

          <div style={{ 
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Município A - Rio Abaixo */}
            <LiquidGlassCard 
              accentColor="#ff3b30"
              interactive={true}
              style={{ 
                padding: '2.5rem',
              } as React.CSSProperties}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 600 }}>Município A (rio abaixo)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Decisão</div>
                  <div style={{ fontWeight: 600 }}>Investe em tratamento</div>
                </div>
                <div 
                  className="liquid-glass"
                  style={{ 
                    padding: '1rem', 
                    backgroundColor: 'rgba(255, 59, 48, 0.12)', 
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 59, 48, 0.2)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#ff3b30', marginBottom: '0.25rem' }}>Resultado</div>
                  <div style={{ fontWeight: 600, color: '#ff3b30' }}>Prejuízo sem contrapartida</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--foreground-muted)' }}>
                <Info size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#007AFF' }} />
                <span>O rio chega poluído por B independentemente de A investir.</span>
              </div>
            </LiquidGlassCard>

            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 800, 
              color: '#fff',
              opacity: 0.3
            }}>VS</div>

            {/* Município B - Rio Acima */}
            <LiquidGlassCard 
              accentColor="#34c759"
              interactive={true}
              style={{ 
                padding: '2.5rem',
              } as React.CSSProperties}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 600 }}>Município B (rio acima)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--foreground-muted)', marginBottom: '0.5rem' }}>Decisão</div>
                  <div style={{ fontWeight: 600 }}>Não investe — despeja esgoto</div>
                </div>
                <div 
                  className="liquid-glass"
                  style={{ 
                    padding: '1rem', 
                    backgroundColor: 'rgba(52, 199, 89, 0.12)', 
                    borderRadius: '12px',
                    border: '1px solid rgba(52, 199, 89, 0.2)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#34c759', marginBottom: '0.25rem' }}>Resultado</div>
                  <div style={{ fontWeight: 600, color: '#34c759' }}>Lucro privado, custo social</div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Conclusion Card Refined */}
        <LiquidGlassCard 
          accentColor="#FFCC00"
          interactive={true}
          style={{ 
            maxWidth: '800px', 
            margin: '2rem auto 0', 
            padding: '2rem',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div 
            className="liquid-glass-icon"
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              backgroundColor: 'rgba(255, 204, 0, 0.2)', 
              color: '#FFCC00',
              flexShrink: 0
            }}
          >
            <Lightbulb size={24} />
          </div>
          <div style={{ lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>O Equilíbrio de Nash:</strong> 
            Quando A percebe que B não vai investir, a decisão racional de A também é não investir. 
            O sistema trava em um estado de poluição mútua, mesmo que a cooperação fosse melhor para todos.
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}