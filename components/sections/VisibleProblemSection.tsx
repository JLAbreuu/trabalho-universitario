"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Droplets, Building2, AlertTriangle, BarChart3, Leaf, Eye } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { BrazilMap, BRAZIL_REGIONS } from "@/components/map/BrazilMap";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

interface DataCard {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

const dataCards: DataCard[] = [
  { value: "100M+", label: "Pessoas sem acesso a água potável",     icon: <Droplets className="w-8 h-8" />,      color: "", iconColor: "#06b6d4" },
  { value: "33M+",  label: "Vivendo em áreas sem rede de esgoto",   icon: <Building2 className="w-8 h-8" />,     color: "", iconColor: "#1e40af" },
  { value: "40%",   label: "Da população exposta a riscos sanitários", icon: <AlertTriangle className="w-8 h-8" />, color: "", iconColor: "#e11d48" },
  { value: "R$15B", label: "Investimento necessário anualmente",     icon: <BarChart3 className="w-8 h-8" />,     color: "", iconColor: "#f59e0b" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div className="liquid-glass" style={{ 
        background: "var(--background-glass)", 
        border: `1px solid ${d.color}40`, 
        borderRadius: "16px", 
        padding: "12px 20px", 
        boxShadow: `0 10px 30px rgba(0,0,0,0.1), inset 0 0 0 0.5px rgba(255,255,255,0.2), 0 0 20px ${d.color}15`,
        backdropFilter: "blur(20px) saturate(180%)" 
      }}>
        <p style={{ color: d.color, fontWeight: 800, fontSize: "1.1rem", margin: 0, letterSpacing: "-0.02em" }}>{d.percentage}%</p>
        <p style={{ color: "var(--foreground-muted)", fontSize: "0.85rem", margin: "4px 0 0", fontWeight: 500 }}>{d.name}</p>
      </div>
    );
  }
  return null;
};

export function VisibleProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const activeData = BRAZIL_REGIONS.find((r) => r.id === activeRegion);

  useEffect(() => {
    const obj = { a: 0, b: 0, c: 0, d: 0 };
    gsap.to(obj, {
      a: 100, b: 33, c: 40, d: 15,
      duration: 2.5, ease: "expo.out",
      onUpdate() { setCounters({ a: Math.floor(obj.a), b: Math.floor(obj.b), c: Math.floor(obj.c), d: Math.floor(obj.d) }); },
    });
  }, []);

  const counterValues = [
    `${counters.a}M+`, `${counters.b}M+`, `${counters.c}%`, `R$${counters.d}B`,
  ];

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: "var(--background-secondary)" }}>
      <div className="container">

        {/* Header */}
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="pill" style={{ marginBottom: "1.5rem" }}>
            <Leaf className="w-4 h-4" style={{ color: "var(--accent)", marginRight: "8px" }} />
            <span className="pill-text">01 — O PROBLEMA VISÍVEL</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "1.5rem" }}>
            O Brasil tem <span className="text-gradient">duas faces</span>
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "var(--foreground-muted)" }}>
            A crise de saneamento não é uniforme. Está concentrada, é desigual e expõe as fraturas profundas da infraestrutura brasileira.
          </p>
        </motion.div>

        {/* Data Cards */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: "2.5rem", 
          padding: "1rem",
          margin: "-1rem",
          marginBottom: "4rem" 
        }}>
          {dataCards.map((card, i) => (
            <LiquidGlassCard
              key={i}
              accentColor={card.iconColor}
              interactive={true}
              style={{
                padding: "2.5rem", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
              }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ opacity: { delay: i * 0.1, duration: 0.6 } }}
            >
              {/* Liquid Glass Icon */}
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                color: card.iconColor,
                background: `radial-gradient(circle at 30% 30%, ${card.iconColor}25, ${card.iconColor}08 70%)`,
                border: `1px solid ${card.iconColor}20`,
                boxShadow: `inset 0 -1px 2px ${card.iconColor}15, 0 4px 16px ${card.iconColor}15`,
                backdropFilter: "blur(10px) saturate(140%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                {card.icon}
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--foreground)" }}>
                {counterValues[i]}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--foreground-muted)", fontWeight: 500, lineHeight: 1.4 }}>{card.label}</p>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Main Chart Card */}
        <LiquidGlassCard interactive={false} style={{ padding: "3rem" }} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>

          {/* Centered title block */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Cobertura de rede de esgoto por região</h3>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px", padding: "6px 18px",
            }}>
              <Eye style={{ width: "13px", height: "13px", color: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.82rem", color: "var(--foreground-muted)", letterSpacing: "0.01em" }}>
                Disparidades significativas de acesso aos serviços básicos (Censo 2022)
              </span>
            </div>
          </div>

          {/* Two-column: map + chart */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "start" }}>

            {/* LEFT — Brazil map + observation tab */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p style={{ fontSize: "0.75rem", color: "var(--foreground-muted)", textAlign: "center", marginBottom: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Passe o cursor sobre a região
              </p>

              <BrazilMap activeRegion={activeRegion} onRegionHover={setActiveRegion} />

              {/* Observation tab */}
              <div style={{
                marginTop: "1.25rem",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}>
                {/* Tab header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "10px 16px",
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: activeData?.color ?? "rgba(255,255,255,0.25)" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--foreground-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Observação
                  </span>
                  {activeData && (
                    <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: activeData.color, fontWeight: 700 }}>
                      {activeData.name} · {activeData.percentage}%
                    </span>
                  )}
                </div>

                {/* Tab body */}
                <div style={{ padding: "14px 16px", minHeight: "72px" }}>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeData?.id ?? "default"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      style={{ fontSize: "0.8rem", color: "var(--foreground-muted)", lineHeight: 1.6, margin: 0 }}
                    >
                      {activeData?.observation ?? "Selecione uma região no mapa para ver análise detalhada sobre o déficit sanitário e os desafios de cobertura."}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Legend */}
              <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
                {BRAZIL_REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRegion(activeRegion === r.id ? null : r.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      fontSize: "0.73rem", color: activeRegion === r.id ? r.color : "var(--foreground-muted)",
                      background: "none", border: "none", cursor: "pointer", padding: "2px 6px",
                      borderRadius: "6px", transition: "color 0.2s",
                    }}
                  >
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: r.color, flexShrink: 0 }} />
                    {r.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Recharts bar chart */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div style={{ width: "100%", height: "340px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={BRAZIL_REGIONS} layout="vertical" margin={{ top: 4, right: 24, left: 0, bottom: 4 }} barCategoryGap="28%">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                      type="number" domain={[0, 100]}
                      tickFormatter={(v) => `${v}%`}
                      tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                      axisLine={false} tickLine={false}
                    />
                    <YAxis
                      type="category" dataKey="name" width={96}
                      tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 600 }}
                      axisLine={false} tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    <Bar
                      dataKey="percentage"
                      radius={[0, 8, 8, 0]}
                      maxBarSize={24}
                      onMouseEnter={(data: any) => setActiveRegion(data.id)}
                      onMouseLeave={() => setActiveRegion(null)}
                    >
                      {BRAZIL_REGIONS.map((r) => (
                        <Cell
                          key={r.id}
                          fill={r.color}
                          fillOpacity={activeRegion === null || activeRegion === r.id ? 1 : 0.2}
                          style={{ transition: "fill-opacity 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "pointer" }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Stats below chart */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1.5rem" }}>
                {[
                  { label: "Diferença Sudeste × Norte", value: "64 p.p.", color: "#EAB308" },
                  { label: "Meta do Marco Legal 2033", value: "90%", color: "#9395D3" },
                  { label: "Regiões abaixo da meta", value: "4 de 5", color: "#FF4444" },
                  { label: "Média nacional estimada", value: "54%", color: "#FF8C42" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    style={{
                      background: `${stat.color}0D`,
                      border: `1px solid ${stat.color}20`,
                      borderRadius: "12px", padding: "12px 16px",
                    }}
                  >
                    <p style={{ fontSize: "1.3rem", fontWeight: 800, color: stat.color, margin: 0, letterSpacing: "-0.02em" }}>{stat.value}</p>
                    <p style={{ fontSize: "0.73rem", color: "var(--foreground-muted)", margin: "3px 0 0", lineHeight: 1.4 }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: "2.5rem", textAlign: "center", fontSize: "0.75rem", color: "var(--foreground-muted)", opacity: 0.5 }}>
            <strong>Fonte:</strong> Diagnóstico do Saneamento Básico (2023) • Trata Brasil
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
