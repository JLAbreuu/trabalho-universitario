"use client";

import { motion } from "framer-motion";
import { RefreshCcw, ArrowRight, Activity, Ban, Wallet, Construction } from 'lucide-react';

const loops = [
  {
    id: "01",
    title: "O Loop da Deterioração",
    cycle: ["Sem investimento", "Deterioração", "Sem receita", "Sem investimento"],
    description: "A falta de manutenção reduz a eficiência, o que diminui a arrecadação, impedindo novos aportes de capital.",
    color: "#10b981", // Verde
    icon: <Construction size={20} />
  },
  {
    id: "02",
    title: "O Loop Eleitoral",
    cycle: ["Obras invisíveis", "Baixo apelo", "Inércia política", "Obras invisíveis"],
    description: "Tubulações enterradas não são vistas pelo eleitor, incentivando gastos em projetos superficiais de curto prazo.",
    color: "#f97316", // Laranja
    icon: <Activity size={20} />
  },
  {
    id: "03",
    title: "O Loop da Desconfiança",
    cycle: ["Insegurança jurídica", "Risco alto", "Fuga de capital", "Insegurança jurídica"],
    description: "Contratos frágeis afastam investidores institucionais, mantendo o setor dependente de orçamentos públicos escassos.",
    color: "#3b82f6", // Azul
    icon: <Wallet size={20} />
  },
  {
    id: "04",
    title: "O Loop da Exclusão",
    cycle: ["Área informal", "Sem rede", "Custo social", "Área informal"],
    description: "Zonas irregulares não recebem rede oficial, forçando soluções paliativas que geram doenças e gastos em saúde.",
    color: "#eab308", // Dourado
    icon: <Ban size={20} />
  }
];

export function SystemicLoopsSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <RefreshCcw className="w-4 h-4" style={{ color: 'var(--accent)', marginRight: '8px' }} />
            <span className="pill-text">POR QUE PERSISTE — ARMADILHAS SISTÊMICAS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Quatro loops que se <span className="text-gradient">auto-reforçam</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            O déficit sanitário é mantido por ciclos viciosos onde a falta de incentivos políticos e econômicos trava o desenvolvimento.
          </p>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {loops.map((loop, index) => (
            <motion.div
              key={loop.id}
              className="glass-card"
              style={{ 
                display: 'flex',
                gap: '2.5rem',
                padding: '2.5rem',
                alignItems: 'center',
                '--hover-bg': `${loop.color}10`,
                '--hover-border': `${loop.color}40`
              } as React.CSSProperties}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.01, x: 5 }}
              whileTap={{ scale: 0.99 }}
            >
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                minWidth: '80px'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 800, 
                  color: loop.color,
                  opacity: 0.5,
                  lineHeight: 1
                }}>
                  {loop.id}
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{ color: loop.color, opacity: 0.3 }}
                >
                  <RefreshCcw size={32} />
                </motion.div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ margin: 0 }}>{loop.title}</h3>
                  <div style={{ 
                    padding: '10px', 
                    borderRadius: '12px', 
                    backgroundColor: `${loop.color}15`,
                    color: loop.color
                  }}>
                    {loop.icon}
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {loop.cycle.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600, 
                        color: 'var(--foreground)',
                        padding: '6px 12px',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: '20px'
                      }}>
                        {step}
                      </span>
                      {i < loop.cycle.length - 1 && (
                        <ArrowRight size={14} style={{ opacity: 0.3 }} />
                      )}
                    </div>
                  ))}
                </div>
                
                <p style={{ color: 'var(--foreground-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {loop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}