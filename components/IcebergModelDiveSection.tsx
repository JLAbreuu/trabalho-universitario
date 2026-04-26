"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Layers, Activity, Database, Brain } from 'lucide-react';

const icebergLayers = [
  {
    id: "events",
    icon: Activity,
    title: "EVENTOS",
    visibility: "(visíveis)",
    color: "#FF3B30",
    description: "O que acontece agora: Rios poluídos, racionamento e doenças de veiculação hídrica que sobrecarregam o SUS.",
  },
  {
    id: "patterns",
    icon: Layers,
    title: "PADRÕES",
    visibility: "",
    color: "#FF9500",
    description: "O que vem acontecendo: Investimentos baixos por décadas, obras inacabadas e manutenção reativa em vez de preventiva.",
  },
  {
    id: "structures",
    icon: Database,
    title: "ESTRUTURAS",
    visibility: "(submersas)",
    color: "#007AFF",
    description: "Como o sistema está organizado: Dilema de Nash entre municípios, federalismo fiscal desigual e marcos regulatórios instáveis.",
  },
  {
    id: "mental-models",
    icon: Brain,
    title: "MODELOS MENTAIS",
    visibility: "(raiz)",
    color: "#5856D6",
    description: "O que as pessoas acreditam: A percepção de que 'saneamento é obra debaixo da terra que não gera votos'.",
  }
];

export function IcebergModelDiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const depthLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="section" style={{ backgroundColor: 'var(--background-secondary)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Depth Indicator Line */}
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: '20%', 
          bottom: '20%', 
          width: '1px', 
          background: 'var(--border-glass)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <motion.div 
            style={{ 
              width: '3px', 
              background: 'var(--accent)', 
              height: depthLineHeight,
              borderRadius: '100px',
              boxShadow: '0 0 10px var(--accent)'
            }}
          />
          <span style={{ 
            writingMode: 'vertical-rl', 
            fontSize: '0.7rem', 
            letterSpacing: '0.2em', 
            color: 'var(--foreground-muted)',
            fontWeight: 700
          }}>
            PROFUNDIDADE
          </span>
          <ArrowDown size={12} color="var(--accent)" />
        </div>

        <div style={{ paddingLeft: '4rem' }}>
          {/* Header */}
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left', margin: '0 0 4rem 0' }}
          >
            <div className="pill" style={{ marginBottom: '1rem' }}>05 — MODELO ICEBERG</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              O que vemos é <span className="text-gradient">só a ponta</span>
            </h2>
          </motion.div>

          {/* The Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
            {icebergLayers.map((layer, index) => (
              <motion.div 
                key={layer.id}
                className="glass-card"
                style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  padding: '2rem',
                  alignItems: 'flex-start',
                  borderLeft: `4px solid ${layer.color}`
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <div style={{ 
                  padding: '1rem', 
                  borderRadius: '12px', 
                  backgroundColor: `${layer.color}15`,
                  color: layer.color
                }}>
                  <layer.icon size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {layer.title} <span style={{ opacity: 0.3, fontSize: '0.9rem' }}>{layer.visibility}</span>
                  </h3>
                  <p style={{ color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Insight Block */}
          <motion.div 
            className="glass-card"
            style={{ 
              marginTop: '4rem', 
              padding: '2.5rem', 
              textAlign: 'center', 
              maxWidth: '800px',
              border: '1px solid var(--accent)',
              backgroundColor: 'rgba(0, 113, 227, 0.05)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <p style={{ fontSize: '1.25rem', fontWeight: 500, fontStyle: 'italic' }}>
              "A pergunta certa não é <span style={{ color: 'var(--accent)', fontWeight: 700 }}>'por que não há dinheiro?'</span> — é 'por que os incentivos não alinham quem decide com quem paga o custo?'"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
