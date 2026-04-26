"use client";

import { Users } from "lucide-react";

export function HumanSideSection() {
  return (
    <section className="section">
      <div className="container">
        <div data-aos="fade-up" className="pill">
          <Users size={18} className="highlight" style={{ marginRight: "10px" }} />
          O Lado Humano
        </div>

        <h2 data-aos="fade-up" style={{ marginBottom: "4rem", maxWidth: "800px" }}>
          Segregação Sanitária e as <br /> <span className="text-gradient-dark">Desigualdades Estruturais</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div data-aos="fade-right">
            <p style={{ marginBottom: "1.5rem", fontSize: "1.25rem" }}>
              O Censo 2022 confirmou que a ausência de coleta atinge de forma desproporcional as populações preta e parda, principalmente no Norte e Nordeste.
            </p>
            <p>
              Essa <strong>segregação sanitária</strong> é o reflexo de políticas que empurram os mais pobres para a informalidade territorial, onde a infraestrutura não chega.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="glass-card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "linear-gradient(145deg, var(--accent) 0%, #020617 100%)",
              color: "white",
              border: "none",
            }}
          >
            <div
              className="animate__animated animate__pulse animate__infinite animate__slow"
              style={{ fontSize: "4.5rem", fontWeight: 800, lineHeight: 1, marginBottom: "1.5rem", letterSpacing: "-0.05em" }}
            >
              R$ 1<span style={{ color: "var(--accent-light)" }}>Tri</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
              Custo de oportunidade da inércia. Estimativa de benefícios econômicos perdidos pela não-universalização nos próximos 20 anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
