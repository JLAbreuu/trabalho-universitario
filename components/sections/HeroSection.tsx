"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Droplets, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@appletosolutions/reactbits").then(mod => mod.Aurora), { ssr: false });

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  // Parallax para Hero via Framer Motion
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // GSAP Timeline para entrada do Hero (Complementar)
    const tl = gsap.timeline();
    tl.fromTo(heroTextRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={heroRef} className="section" style={{ minHeight: '100vh', padding: '0 2rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
        <Aurora colorStops={["#3A29FF", "#26aa8e", "#43a02a"]} amplitude={1.2} />
      </div>

      <motion.div
        className="container"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div ref={heroTextRef} style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div className="pill" style={{ margin: '0 auto 2rem auto', background: 'transparent', backdropFilter: 'blur(150px)' }}>
            <Droplets size={18} className="highlight" style={{ marginRight: '10px' }} />
            <span>Análise Sistêmica e Estrutural</span>
          </div>

          <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
            A Crise <span className="text-gradient">Invisível</span> <br /> do Saneamento.
          </h1>

          <p style={{ margin: '0 auto', fontSize: '1.35rem', maxWidth: '800px', lineHeight: 1.6, color: '#ccc' }}>
            Uma exploração profunda do saneamento básico no Brasil sob a ótica da <strong>gestão fiscal municipal</strong>,
            falhas de mercado, Teoria dos Jogos e as <strong>desigualdades socioambientais</strong>.
          </p>

          <div
            className="animate__animated animate__bounce animate__infinite animate__slower"
            style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}
          >
            <ArrowDown size={32} color="#111" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
