"use client";

import React from 'react';
import { ExternalLink, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const references = [
  {
    title: "OECD (2017). Water Governance in Brazil",
    category: "Governança & Políticas",
    description: "Análise profunda sobre a coordenação multinível no setor de água e saneamento.",
    isHovered: true, // Simulating the hover state from user request
  },
  {
    title: "IBGE. Censo Demográfico 2022",
    category: "Dados Populacionais",
    description: "Informações atualizadas sobre as condições de habitação e acesso a serviços básicos.",
  },
  {
    title: "SNIS. Diagnóstico do Saneamento 2023",
    category: "Infraestrutura",
    description: "O maior banco de dados sobre a prestação de serviços de saneamento no Brasil.",
  },
  {
    title: "WORLD BANK GROUP. The Water State of Brazil",
    category: "Economia & Sustentabilidade",
    description: "Relatórios sobre o impacto econômico e social do saneamento no desenvolvimento nacional.",
  },
  {
    title: "Novo Marco Legal (Lei 14.026/20)",
    category: "Legislação",
    description: "Texto oficial e diretrizes para a universalização do saneamento até 2033.",
  },
  {
    title: "WHO/UNICEF (2021). Progress on WASH",
    category: "Saúde Global",
    description: "Dados globais comparativos sobre higiene, água e esgoto.",
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Governança & Políticas": return "#5856D6"; // Indigo
    case "Dados Populacionais": return "#007AFF"; // Blue
    case "Infraestrutura": return "#FF9500"; // Orange
    case "Economia & Sustentabilidade": return "#34C759"; // Green
    case "Legislação": return "#FF3B30"; // Red
    case "Saúde Global": return "#AF52DE"; // Purple
    default: return "var(--accent)";
  }
};

export const AcademicFooterSection = () => {
  return (
    <footer className="footer-academic">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="footer-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-badge">
            <BookOpen size={14} style={{ marginRight: '8px', color: 'var(--accent)' }} />
            <span>APÊNDICE ACADÊMICO</span>
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Fontes & Referências</h2>
          <p>
            Base teórica e dados brutos utilizados na construção desta narrativa sistêmica.
          </p>
        </motion.div>

        {/* References Grid */}
        <div className="footer-grid">
          {references.map((ref, index) => {
            const color = getCategoryColor(ref.category);
            return (
              <motion.div 
                key={index}
                className="reference-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-dot" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
                <div className="card-content">
                  <span className="card-category" style={{ color: color }}>{ref.category}</span>
                  <h3 className="card-title-text">{ref.title}</h3>
                  <p className="card-description">{ref.description}</p>
                </div>
                <div style={{ marginLeft: 'auto', opacity: 0.4, color: color }}>
                  <ExternalLink size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Bottom Credits */}
        <div className="footer-bottom-info">
          <div className="credits-left">
            <p style={{ fontSize: '0.875rem' }}>© 2026 • Projeto Acadêmico Saneamento</p>
          </div>
          <div className="credits-right">
            <div className="credit-item">
              <GraduationCap size={16} />
              <span>Universidade Digital</span>
            </div>
            <div className="credit-item">
              <GithubIcon size={16} />
              <span>Código Aberto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AcademicFooterSection;
