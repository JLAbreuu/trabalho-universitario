"use client";

import { Scale } from "lucide-react";

export function ExternalitiesSection() {
  return (
    <section className="section" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--muted)",
          transform: "skewY(-3deg)",
          zIndex: -1,
          transformOrigin: "top left",
        }}
      ></div>
      <div className="container" style={{ padding: "4rem 2rem" }}>
        <div data-aos="fade-right" className="pill">
          <Scale size={18} className="highlight" style={{ marginRight: "10px" }} />
          Externalidades
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: "3rem", maxWidth: "800px" }}>
          O Equilíbrio de Nash e a <br /> <span className="text-gradient">Tragédia dos Comuns</span>
        </h2>

        <div style={{ maxWidth: "800px" }}>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ marginBottom: "1.5rem", fontSize: "1.35rem", color: "var(--foreground)" }}
          >
            O saneamento é permeado por enormes externalidades negativas. O despejo de esgoto gera custos que não são pagos pelo poluidor local, mas por toda a sociedade.
          </p>
          <p data-aos="fade-up" data-aos-delay="300" style={{ marginBottom: "2.5rem" }}>
            Sob a ótica da <strong>Teoria dos Jogos</strong>, cria-se um impasse: se um município investe alto em tratamento, mas a cidade rio acima não o faz, o rio continua poluído. A decisão racional passa a ser o subinvestimento.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="glass-card"
            style={{ borderLeft: "4px solid var(--accent)" }}
          >
            <h4 style={{ marginBottom: "1rem", fontSize: "1.25rem", color: "var(--accent)" }}>O Resultado do Sistema</h4>
            <p style={{ color: "var(--foreground)", fontWeight: 500 }}>
              Convergência para um <strong>Equilíbrio de Nash ineficiente</strong>: ninguém coopera, todos economizam recursos fiscais, mas a longo prazo a saúde coletiva sofre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
