"use client";

import { cloneElement } from "react";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Check, ShieldCheck, Users, TreePine, Gavel } from 'lucide-react';
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

export function EsgAgendaSection() {
  const pillars = [
    {
      letter: "E",
      title: "Environmental",
      items: ["Preservação de mananciais", "Recuperação de bacias hidrográficas", "Redução de perdas de água na rede", "Eficiência energética em bombas"],
      icon: <TreePine size={24} />,
      color: "#10b981"
    },
    {
      letter: "S",
      title: "Social",
      items: ["Universalização do acesso por CEP", "Tarifa social para famílias vulneráveis", "Saúde pública preventiva", "Dignidade e higiene menstrual"],
      icon: <Users size={24} />,
      color: "#0ea5e9"
    },
    {
      letter: "G",
      title: "Governance",
      items: ["Transparência fiscal e tarifária", "Segurança jurídica em contratos", "Separação entre operação e regulação", "Combate à inércia dos incentivos"],
      icon: <Gavel size={24} />,
      color: "#6366f1"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <Globe size={16} style={{ color: 'var(--accent)', marginRight: '8px' }} />
            <span className="pill-text">07 — AGENDA ESG & SAÍDA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Os três pilares que precisam <span className="text-gradient">avançar juntos</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            A universalização do saneamento depende de uma abordagem integrada que equilibre sustentabilidade, impacto social e rigor institucional.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem',
          padding: '1rem 0',
          marginBottom: '4rem'
        }}>
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <LiquidGlassCard
                accentColor={pillar.color}
                style={{ 
                  padding: '2.5rem',
                  position: 'relative',
                  height: '100%',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <div 
                    className="liquid-glass-icon"
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '14px', 
                      backgroundColor: `${pillar.color}20`, 
                      color: pillar.color,
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{pillar.title}</h3>
                  </div>

                  {/* Background Icon Watermark */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    opacity: 0.08,
                    transform: 'rotate(-10deg)',
                    color: pillar.color,
                    pointerEvents: 'none'
                  }}>
                    {cloneElement(pillar.icon as React.ReactElement, { size: 100 })}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {pillar.items.map((item, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.75rem',
                      fontSize: '0.9rem',
                      color: 'var(--foreground-muted)',
                      lineHeight: 1.4
                    }}>
                      <Check size={16} style={{ color: pillar.color, marginTop: '2px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Massive Foundation Block Refined */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <LiquidGlassCard
            accentColor="#0071e3"
            style={{ 
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            }}
          >
            <div style={{ 
              display: 'flex', 
              gap: '2.5rem',
              alignItems: 'center',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '24px', 
                backgroundColor: 'rgba(0, 113, 227, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Lightbulb size={40} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Sem o <span style={{ color: 'var(--accent)' }}>G (Governança)</span>, E e S não se sustentam.
                </h3>
                <p style={{ color: 'var(--foreground-muted)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                  A estabilidade regulatória e a clareza contratual são as fundações necessárias para atrair o capital verde
                  e as garantias de execução que transformam intenções em acesso real e dignidade para a população.
                </p>
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>
      </div>
    </section>
  );
}