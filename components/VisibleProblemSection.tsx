"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Droplets, Building2, AlertTriangle, BarChart3, Leaf } from "lucide-react";

interface DataCard {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

interface RegionData {
  region: string;
  percentage: number;
  color: string;
}

const dataCards: DataCard[] = [
  {
    value: "100M+",
    label: "Pessoas sem acesso a água potável",
    icon: <Droplets className="w-8 h-8" />,
    color: "from-cyan-50 to-cyan-100/50",
    iconColor: "#06b6d4",
  },
  {
    value: "33M+",
    label: "Vivendo em áreas sem rede de esgoto",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-blue-50 to-blue-100/50",
    iconColor: "#1e40af",
  },
  {
    value: "40%",
    label: "Da população exposta a riscos sanitários",
    icon: <AlertTriangle className="w-8 h-8" />,
    color: "from-rose-50 to-rose-100/50",
    iconColor: "#e11d48",
  },
  {
    value: "R$15B",
    label: "Investimento necessário anualmente",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-amber-50 to-amber-100/50",
    iconColor: "#f59e0b",
  },
];

const regionData: RegionData[] = [
  { region: "Sudeste", percentage: 82, color: "#EAB308" }, // Yellow
  { region: "Sul", percentage: 72, color: "#9395D3" },     // Purple/Lavender
  { region: "Centro-Oeste", percentage: 58, color: "#FF8C42" }, // Orange
  { region: "Nordeste", percentage: 38, color: "#FF0000" },    // Red
  { region: "Norte", percentage: 18, color: "#3D8E6A" },       // Green
];

export function VisibleProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<Record<string, number>>({
    "100M+": 0,
    "33M+": 0,
    "40%": 0,
    "15B": 0,
  });

  useEffect(() => {
    // Animar barras do gráfico
    if (graphRef.current) {
      const bars = graphRef.current.querySelectorAll(".chart-bar-fill");
      bars.forEach((bar, index) => {
        const targetWidth = (bar as HTMLElement).getAttribute("data-width") || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          { 
            width: targetWidth, 
            duration: 1.5, 
            delay: index * 0.1, 
            ease: "expo.out" 
          }
        );
      });
    }

    // Contador de números animado
    const counterObj = { val100: 0, val33: 0, val40: 0, val15: 0 };
    
    gsap.to(counterObj, {
      val100: 100,
      val33: 33,
      val40: 40,
      val15: 15,
      duration: 2.5,
      ease: "expo.out",
      onUpdate() {
        setCounters({
          "100M+": Math.floor(counterObj.val100),
          "33M+": Math.floor(counterObj.val33),
          "40%": Math.floor(counterObj.val40),
          "15B": Math.floor(counterObj.val15),
        });
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <motion.div 
          className="section-header" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="pill" style={{ marginBottom: '1.5rem' }}>
            <Leaf className="w-4 h-4" style={{ color: 'var(--accent)', marginRight: '8px' }} />
            <span className="pill-text">01 — O PROBLEMA VISÍVEL</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
            O Brasil tem <span className="text-gradient">duas faces</span>
          </h2>

          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
            A crise de saneamento não é uniforme. Está concentrada, é desigual e expõe as fraturas profundas da infraestrutura brasileira.
          </p>
        </motion.div>

        {/* Data Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2rem', 
          marginBottom: '4rem' 
        }}>
          {dataCards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{ 
                padding: '2.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                '--hover-bg': `${card.iconColor}10`,
                '--hover-border': `${card.iconColor}40`
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="liquid-glass-icon"
                style={{ 
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  color: card.iconColor,
                  marginBottom: '1rem',
                  backgroundColor: `${card.iconColor}20`,
                }}
              >
                {card.icon}
              </div>

              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                color: 'var(--foreground)'
              }}>
                {index === 0 && `${counters["100M+"]}M+`}
                {index === 1 && `${counters["33M+"]}M+`}
                {index === 2 && `${counters["40%"]}%`}
                {index === 3 && `R$${counters["15B"]}B`}
              </div>

              <p style={{ 
                fontSize: '0.9rem', 
                color: 'var(--foreground-muted)',
                fontWeight: 500,
                lineHeight: 1.4
              }}>
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div
          ref={graphRef}
          className="glass-card"
          style={{ padding: '3rem' }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Cobertura de rede de esgoto por região</h3>
            <p style={{ color: 'var(--foreground-muted)', fontSize: '0.9rem' }}>Disparidades significativas de acesso aos serviços básicos (Censo 2022)</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {regionData.map((region, index) => (
              <div key={index} style={{ width: '100%' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>
                  <span>{region.region}</span>
                  <span style={{ color: region.color }}>{region.percentage}%</span>
                </div>

                <div style={{ 
                  height: '8px', 
                  backgroundColor: 'rgba(0,0,0,0.05)', 
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div
                    className="chart-bar-fill"
                    data-width={`${region.percentage}%`}
                    style={{
                      backgroundColor: region.color,
                      height: '100%',
                      width: "0%",
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '3rem', 
            textAlign: 'center', 
            fontSize: '0.75rem', 
            color: 'var(--foreground-muted)',
            opacity: 0.6 
          }}>
            <strong>Fonte:</strong> Diagnóstico do Saneamento Básico (2023) • Trata Brasil
          </div>
        </motion.div>
      </div>
    </section>
  );
}
