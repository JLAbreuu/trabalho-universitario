"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { MapPin, AlertTriangle, Briefcase } from "lucide-react";

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
      "Mulheres e meninas enfrentam riscos desproporcional quando há falta de saneamento. Ausência de banheiros adequados impede frequência escolar e aumenta vulnerabilidade a assédio e abuso.",
    borderColor: "#7c3aed",
    icon: <AlertTriangle className="w-6 h-6" />,
    accentColor: "#a855f7",
  },
];

export function StructuralInequalitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
        {/* Sticky Header Panel */}
        <div style={{ position: 'sticky', top: '15vh' }}>
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

        {/* Scrolling Cards Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {contentCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="glass-card"
              style={{ 
                padding: '3rem',
                borderLeft: `4px solid ${card.accentColor}`
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: `${card.accentColor}15`, // 15 is ~8% opacity in hex
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: card.accentColor,
                marginBottom: '1.5rem'
              }}>
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                {card.title}
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--foreground-muted)', 
                lineHeight: 1.6,
                margin: 0
              }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
