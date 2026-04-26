"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, Building2, Briefcase, Users, Leaf, ArrowUpRight } from 'lucide-react';

const stakeholders = [
  {
    id: "gov-federal",
    name: "Governo Federal",
    power: "Alto poder · Ação lenta",
    description: "Define diretrizes nacionais e libera grandes volumes de recursos via bancos públicos.",
    icon: <Scale className="card-icon-svg" />,
    color: "#3b82f6",
    accent: "gold"
  },
  {
    id: "ana",
    name: "ANA",
    power: "Poder normativo",
    description: "Agência Nacional de Águas: a nova 'xerife' do setor, padroniza normas e metas.",
    icon: <ShieldCheck className="card-icon-svg" />,
    color: "#10b981",
    accent: "green"
  },
  {
    id: "municipios",
    name: "Municípios",
    power: "Poder concedente",
    description: "Donos do serviço na prática. Decidem entre privatização ou manter estatais.",
    icon: <Building2 className="card-icon-svg" />,
    color: "#eab308",
    accent: "yellow"
  },
  {
    id: "privado",
    name: "Setor Privado",
    power: "Capital e Eficiência",
    description: "Busca retorno sobre investimento através de contratos de concessão a longo prazo.",
    icon: <Briefcase className="card-icon-svg" />,
    color: "#f97316",
    accent: "orange"
  },
  {
    id: "comunidades",
    name: "Comunidades",
    power: "Poder de demanda",
    description: "As maiores interessadas e as que mais sofrem com a falta do serviço básico.",
    icon: <Users className="card-icon-svg" />,
    color: "#64748b",
    accent: "gray"
  },
  {
    id: "esg",
    name: "Investidores ESG",
    power: "Financiamento Seletivo",
    description: "Exigem metas ambientais e sociais claras para aportar capital no setor.",
    icon: <Leaf className="card-icon-svg" />,
    color: "#22c55e",
    accent: "green"
  }
];

export function StakeholdersGridSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <span className="pill-text">STAKEHOLDERS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Quem tem o poder de <span className="text-gradient">mudar</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            O sistema de saneamento é movido por uma complexa rede de atores com interesses divergentes e capacidades complementares.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem'
        }}>
          {stakeholders.map((s, index) => (
            <motion.div
              key={s.id}
              className="glass-card"
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: `${s.color}15`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: s.color
                }}>
                  {s.icon}
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--foreground-muted)', opacity: 0.5 }} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{s.name}</h3>
                <div style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  color: s.color, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  marginBottom: '1rem'
                }}>
                  {s.power}
                </div>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--foreground-muted)', 
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}