"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, AlertTriangle, Briefcase } from "lucide-react";
import { LiquidGlassCard } from "../ui/LiquidGlassCard";

interface ContentCard {
  id: number;
  title: string;
  description: string;
  borderColor: string;
  icon: React.ReactNode;
  accentColor: string;
}

const contentCards: ContentCard[] = [
  {
    id: 1,
    title: "Segregação geográfica",
    description:
      "As comunidades com menor renda concentram-se em áreas periféricas com infraestrutura inadequada. Favelas, morros e distritões afastados do centro urbano historicamente recebem menos investimento em saneamento básico.",
    borderColor: "#b91c1c",
    icon: <MapPin className="w-6 h-6" />,
    accentColor: "#dc2626",
  },
  {
    id: 2,
    title: "Segregação racial",
    description:
      "A população negra representa 56% dos brasileiros em situação de pobreza extrema. A falta de acesso a água potável e saneamento é ainda mais crítica nessas populações, perpetuando ciclos de desigualdade e doença.",
    borderColor: "#b45309",
    icon: <AlertTriangle className="w-6 h-6" />,
    accentColor: "#d97706",
  },
  {
    id: 3,
    title: "Informalidade como pretexto",
    description:
      "Assentamentos informais servem como justificativa para a inação governamental. A falta de regularização fundiária é usada como argumento para negar investimentos em saneamento, deixando milhões sem acesso básico.",
    borderColor: "#1e40af",
    icon: <Briefcase className="w-6 h-6" />,
    accentColor: "#2563eb",
  },
  {
    id: 4,
    title: "Gênero e vulnerabilidade",
    description:
      "Mulheres e meninas enfrentam riscos desproporcionais quando há falta de saneamento. Ausência de banheiros adequados impede frequência escolar e aumenta vulnerabilidade a assédio e abuso.",
    borderColor: "#7c3aed",
    icon: <AlertTriangle className="w-6 h-6" />,
    accentColor: "#a855f7",
  },
];

export function StructuralInequalitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--background-secondary)', position: 'relative' }}>
      
      {/* Global Blur Overlay */}
      <AnimatePresence>
        {hoveredId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 40,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      <div className="container inequality-layout-grid">
        {/* Sticky Header Panel */}
        <div style={{ position: 'sticky', top: '15vh', zIndex: 10 }}>
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <span className="pill-text">02 — DESIGUALDADE ESTRUTURAL</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Um déficit que tem <span className="text-gradient">cor e endereço</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
            A crise sanitária no Brasil não é um acidente geográfico, mas o resultado de um modelo de urbanização segregador.
          </p>
        </div>

        {/* 2x2 Grid of Preview Cards */}
        <div className="inequality-cards-grid">
          {contentCards.map((card, index) => {
            const isHovered = hoveredId === card.id;
            return (
              <div key={card.id} style={{ position: 'relative', height: '180px' }}>
                <LiquidGlassCard
                  accentColor={card.accentColor}
                  isHovered={isHovered}
                  interactive={false}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(card.id)}
                  onBlur={() => setHoveredId(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setHoveredId(isHovered ? null : card.id);
                    }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -5 : 0,
                    zIndex: isHovered ? 50 : 1,
                  }}
                  transition={{ 
                    scale: { type: 'spring', stiffness: 350, damping: 25 },
                    y: { type: 'spring', stiffness: 350, damping: 25 },
                    opacity: { duration: 0.6, delay: index * 0.1 },
                    default: { duration: 0.3 }
                  }}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    minHeight: '100%',
                    padding: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    backgroundColor: `${card.accentColor}15`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: card.accentColor,
                    marginBottom: '1.25rem'
                  }}>
                    {card.icon}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    {card.title}
                  </h3>

                  {/* Expandable Description */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      height: isHovered ? 'auto' : 0,
                      marginTop: isHovered ? '1rem' : 0
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--foreground-muted)', 
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {card.description}
                    </p>
                  </motion.div>
                </LiquidGlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
