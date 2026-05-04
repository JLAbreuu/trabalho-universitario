"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

export function NewLegalFrameworkSection() {
  const proposals = [
    { title: "Metas de Universalização", description: "99% de água potável e 90% de coleta/tratamento de esgoto até 2033." },
    { title: "Regionalização forçada", description: "Agrupamento de municípios para garantir viabilidade econômica." },
    { title: "Livre Concorrência", description: "Fim dos contratos de programa sem licitação (estatais)." }
  ];

  const risks = [
    { title: "Resistência Municipal", description: "Prefeitos relutam em perder autonomia sobre taxas e serviços." },
    { title: "Cherry Picking Privado", description: "Interesse apenas em áreas rentáveis, ignorando periferias e zonas rurais." },
    { title: "Capacidade de Regulação", description: "ANA precisa padronizar milhares de normas municipais e estaduais." }
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
            <span className="pill-text">06 — O NOVO MARCO LEGAL</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Lei 14.026/2020 — <span className="text-gradient">Oportunidade e Riscos</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            A lei representa o maior reordenamento do saneamento brasileiro em décadas. A implementação eficiente é o fator decisivo para o sucesso.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Opportunities Column */}
          <LiquidGlassCard
            accentColor="#34c759"
            interactive={true}
            style={{ 
              padding: '3rem',
            } as React.CSSProperties}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div 
                className="liquid-glass-icon"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(52, 199, 89, 0.2)', 
                  color: '#34c759'
                }}
              >
                <CheckCircle2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>O que a lei propõe</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {proposals.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.25rem' }}>
                  <ArrowRight size={20} style={{ color: '#34c759', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--foreground-muted)', lineHeight: 1.5 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </LiquidGlassCard>

          {/* Risks Column */}
          <LiquidGlassCard
            accentColor="#ff9500"
            interactive={true}
            style={{ 
              padding: '3rem',
            } as React.CSSProperties}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div 
                className="liquid-glass-icon"
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(255, 149, 0, 0.2)', 
                  color: '#ff9500'
                }}
              >
                <AlertTriangle size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Riscos e desafios</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {risks.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.25rem' }}>
                  <X size={20} style={{ color: '#ff9500', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--foreground-muted)', lineHeight: 1.5 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
}