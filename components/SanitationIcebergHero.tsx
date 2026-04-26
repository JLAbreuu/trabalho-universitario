"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export function SanitationIcebergHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const icebergRef = useRef<SVGSVGElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const icebergY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  useEffect(() => {
    // Animação de entrada da seção hero
    const tl = gsap.timeline();

    // Fade in do container de texto
    tl.fromTo(
      textContainerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      0
    );

    // Fade in do iceberg
    tl.fromTo(
      icebergRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
      0.2
    );

    // Animação do botão
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.6
    );

    // Animação de flutuação contínua do iceberg
    gsap.to(icebergRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Pulso sutil no botão
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animação de conexões/pontos de dados flutuando
    const connectionLines = document.querySelectorAll(".sanitation-connection-dot");
    connectionLines.forEach((dot, index) => {
      gsap.to(dot, {
        y: Math.random() * 30 - 15,
        x: Math.random() * 20 - 10,
        opacity: 0.6,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        delay: index * 0.3,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="section"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: 'flex', alignItems: 'center' }}
    >
      {/* Background elements */}
      <div className="aurora-bg" style={{ opacity: 0.4 }}></div>
      <div className="aurora-bg" style={{ 
        background: 'radial-gradient(circle at 80% 20%, rgba(0, 113, 227, 0.15) 0%, transparent 50%)',
        animationDelay: '-5s'
      }}></div>

      <div className="container">
        <div className="sanitation-content-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5
        }}>
          {/* Lado esquerdo - Texto */}
          <motion.div 
            ref={textContainerRef} 
            className="hero-text-content"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="pill" style={{ marginBottom: '2rem' }}>
              <span className="dot" style={{ backgroundColor: 'var(--accent)' }}></span>
              <span className="pill-text">MAPEAMENTO SISTÊMICO</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              A Teoria por trás do <span className="text-gradient">Déficit Sanitário</span>
            </h1>

            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--foreground-muted)', 
              maxWidth: '600px', 
              marginBottom: '2.5rem',
              lineHeight: 1.6
            }}>
              Exploramos as falhas de coordenação municipal e a fragmentação do setor, 
              analisando a influência do Novo Marco Legal e o papel da agenda ESG 
              na superação da crise.
            </p>

            <motion.button 
              ref={buttonRef} 
              className="pill"
              style={{ 
                padding: '12px 28px', 
                backgroundColor: 'var(--foreground)', 
                color: 'var(--background)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            >
              <span className="pill-text" style={{ fontWeight: 600 }}>Explorar o Sistema</span>
              <ArrowDown size={18} />
            </motion.button>
          </motion.div>

          {/* Lado direito - Iceberg Refined */}
          <motion.div 
            className="sanitation-iceberg-column" 
            style={{ y: icebergY, opacity: heroOpacity }}
          >
            <svg
              ref={icebergRef}
              viewBox="0 0 400 600"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              className="sanitation-iceberg-svg"
              style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))' }}
            >
              <defs>
                <linearGradient id="icebergGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                  <stop offset="30%" style={{ stopColor: "#f5f5f7", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "var(--accent)", stopOpacity: 0.2 }} />
                </linearGradient>
                <filter id="blur">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>

              {/* Surface Line */}
              <line x1="20" y1="200" x2="380" y2="200" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
              <text x="200" y="190" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="600" opacity="0.5" letterSpacing="1">VISÍVEL / OCULTO</text>

              {/* Iceberg Top */}
              <motion.path 
                d="M 200 50 L 320 200 L 80 200 Z" 
                fill="url(#icebergGrad)" 
                stroke="rgba(255,255,255,0.5)" 
                strokeWidth="2"
              />

              {/* Iceberg Bottom */}
              <motion.path 
                d="M 320 200 L 350 350 L 280 550 L 120 550 L 50 350 L 80 200 Z" 
                fill="rgba(255,255,255,0.03)" 
                stroke="var(--accent)" 
                strokeWidth="1" 
                strokeOpacity="0.2"
              />

              {/* Internal Structure Lines */}
              <g opacity="0.1" stroke="var(--accent)" strokeWidth="0.5" fill="none">
                <line x1="120" y1="200" x2="150" y2="550" />
                <line x1="280" y1="200" x2="250" y2="550" />
                <path d="M 80 250 Q 200 300 320 250" />
                <path d="M 60 350 Q 200 400 340 350" />
              </g>

              {/* Symptoms Labels (Above) */}
              <g style={{ cursor: 'default' }}>
                <rect x="50" y="100" width="80" height="24" rx="12" fill="var(--glass-bg)" style={{ backdropFilter: 'blur(10px)' }} />
                <text x="90" y="115" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontWeight="600">FALTA DE ÁGUA</text>
                
                <rect x="270" y="120" width="80" height="24" rx="12" fill="var(--glass-bg)" style={{ backdropFilter: 'blur(10px)' }} />
                <text x="310" y="135" textAnchor="middle" fill="var(--foreground)" fontSize="8" fontWeight="600">ESGOTO LOCAL</text>
              </g>

              {/* Roots Labels (Below) */}
              <g opacity="0.6">
                <text x="200" y="300" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontWeight="700">GESTÃO FISCAL</text>
                <text x="200" y="380" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontWeight="700">COORDENAÇÃO</text>
                <text x="200" y="460" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontWeight="700">INCENTIVOS</text>
              </g>
            </svg>
          </motion.div>

        </div>
      </div>

      {/* Floating data dots (Apple HIG accent) */}
      <div className="sanitation-connection-dot" style={{ left: "10%", top: "20%", backgroundColor: 'var(--accent)' }} />
      <div className="sanitation-connection-dot" style={{ left: "15%", top: "40%", backgroundColor: 'var(--accent)' }} />
      <div className="sanitation-connection-dot" style={{ right: "12%", top: "30%", backgroundColor: 'var(--accent)' }} />
      <div className="sanitation-connection-dot" style={{ right: "20%", top: "50%", backgroundColor: 'var(--accent)' }} />

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to top, var(--background), transparent)',
        pointerEvents: 'none',
        zIndex: 10
      }}></div>
    </section>
  );
}
