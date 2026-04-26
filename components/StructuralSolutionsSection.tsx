"use client";

import { motion, Variants } from "framer-motion";
import { Activity, Landmark, TrendingDown } from "lucide-react";

// Framer Motion Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export function StructuralSolutionsSection() {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "#0f172a", zIndex: -1 }}></div>
      <div className="container" style={{ color: "white" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="pill"
            style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Activity size={18} style={{ marginRight: "10px", color: "var(--accent-light)" }} />
            Soluções Estruturais
          </motion.div>

          <motion.h2 variants={fadeUp} style={{ marginBottom: "5rem", maxWidth: "800px", color: "white" }}>
            Governança, Tecnologia e o <br /> <span style={{ color: "var(--accent-light)" }}>Novo Marco Legal</span>
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}
            >
              <Activity size={32} style={{ marginBottom: "2rem", color: "var(--accent-light)" }} />
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", color: "white" }}>Agenda ESG</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>
                Sem governança robusta (o 'G'), avanços são insustentáveis. Exige-se transparência fiscal.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}
            >
              <Landmark size={32} style={{ marginBottom: "2rem", color: "var(--accent-light)" }} />
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", color: "white" }}>Lei 14.026</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>
                O Novo Marco busca estabelecer subsídios cruzados entre cidades através da regionalização.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}
            >
              <TrendingDown size={32} style={{ marginBottom: "2rem", color: "var(--accent-light)" }} />
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", color: "white" }}>Digitalização</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>
                O Brasil perde 40% da água. A inovação (IoT e sensores) é imperativa para a viabilidade.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
