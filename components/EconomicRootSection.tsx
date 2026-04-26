"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landmark, TrendingDown } from "lucide-react";
import dynamic from "next/dynamic";

const TiltedCard = dynamic(() => import("@appletosolutions/reactbits").then(mod => mod.TiltedCard), { ssr: false });

export function EconomicRootSection() {
  const section1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger na Seção 1
    gsap.fromTo(
      ".gsap-card",
      { y: 100, opacity: 0, rotateY: 15 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={section1Ref} className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <div className="pill gsap-card">
          <Landmark size={18} className="highlight" style={{ marginRight: "10px" }} />
          A Raiz Econômica
        </div>

        <h2 className="gsap-card" style={{ marginBottom: "4rem", maxWidth: "800px" }}>
          O Gargalo Fiscal e o <br /> <span className="text-gradient-dark">Monopólio Natural</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem" }}>
          <div className="gsap-card">
            <TiltedCard
              imageSrc="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800"
              altText="Ilusão do Mercado"
              captionText="A Falha de Mercado"
              containerHeight="300px"
              containerWidth="50%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              displayOverlayContent={true}
              overlayContent={
                <div style={{ padding: "2rem", background: "rgba(0,0,0,0.6)", color: "white", height: "100%", borderRadius: "15px" }}>
                  <TrendingDown size={32} color="var(--accent-light)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>O Monopólio</h3>
                  <p style={{ fontSize: "1rem", color: "#ccc" }}>
                    Instalar tubulações exige custos astronômicos. Sem regulação, a concessionária foca apenas em bairros ricos (cherry picking).
                  </p>
                </div>
              }
            />
          </div>

          <div className="gsap-card glass-card">
            <div style={{ background: "var(--foreground)", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <Landmark size={24} color="var(--background)" />
            </div>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.75rem" }}>O Dilema <br />Municipal</h3>
            <p>
              A grande maioria dos municípios carece de capacidade de arrecadação própria e depende da União. Em um cenário escasso, o saneamento (obra invisível) perde para ações com retorno eleitoral imediato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
