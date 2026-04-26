"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';

const solutions = [
  { id: "incentives", label: "Redesenhar incentivos", active: false },
  { id: "federalism", label: "Reformar federalismo fiscal", active: true },
  { id: "esg", label: "Padrões ESG reais", active: true },
  { id: "externalities", label: "Precificar externalidades", active: false },
  { id: "accountability", label: "Accountability radical", active: false },
  { id: "cooperation", label: "Cooperação entre entes", active: false }
];

export function ManifestoOutroSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--background-secondary)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Top Tag */}
        <motion.div 
          className="pill"
          style={{ alignSelf: 'center', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          INSIGHT FINAL
        </motion.div>

        {/* Main Title */}
        <motion.h2 
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: 800, 
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          Este não é um problema técnico.<br />
          <span className="text-gradient">É um problema político.</span>
        </motion.h2>

        {/* Lead Paragraph */}
        <motion.p 
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto 4rem', 
            fontSize: '1.25rem', 
            lineHeight: 1.6, 
            color: 'var(--foreground-muted)' 
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A tecnologia existe. O dinheiro poderia existir. O que falta é o sistema de incentivos, 
          instituições e accountability que torna o investimento racional — e a exclusão inaceitável.
        </motion.p>

        {/* Solutions Grid */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {solutions.map((s, idx) => (
            <motion.div
              key={s.id}
              className="glass-card"
              style={{ 
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: s.active ? '1px solid var(--accent)' : '1px solid var(--border-glass)',
                backgroundColor: s.active ? 'rgba(0, 113, 227, 0.08)' : 'var(--background-glass)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (idx * 0.05), type: "spring" }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 113, 227, 0.12)' }}
            >
              {s.active && <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />}
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 600,
                color: s.active ? 'var(--accent)' : 'var(--foreground-muted)'
              }}>
                {s.label}
              </span>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}