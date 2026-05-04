"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Type, 
  Minus, 
  Plus, 
  Wind, 
  X, 
  Accessibility as AccessibilityIcon,
  Presentation
} from "lucide-react";
import { useAccessibility } from "@/components/accessibility/AccessibilityProvider";

export function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontScale, setFontScale, 
    reducedMotion, setReducedMotion,
    highContrast, setHighContrast,
    boldText, setBoldText,
    presentationMode, setPresentationMode
  } = useAccessibility();

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            className="liquid-glass"
            style={{
              padding: '1.5rem',
              marginBottom: '1rem',
              width: '280px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AccessibilityIcon size={18} color="var(--accent)" />
                Acessibilidade
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="spring-hover"
                style={{ background: 'none', border: 'none', color: 'var(--foreground-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Font Scale */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground-muted)', textTransform: 'uppercase' }}>Tamanho do Texto</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>{Math.round(fontScale * 100)}%</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <motion.button 
                  onClick={() => setFontScale(Math.max(0.8, fontScale - 0.1))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="liquid-glass"
                  style={{ 
                    width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-glass)',
                    color: 'var(--foreground)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Minus size={16} />
                </motion.button>
                <div style={{ flex: 1, height: '6px', background: 'var(--background-secondary)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
                  <motion.div 
                    style={{ 
                      position: 'absolute', left: 0, top: 0, height: '100%', 
                      background: 'var(--accent)', borderRadius: '3px',
                      width: `${((fontScale - 0.8) / (1.5 - 0.8)) * 100}%`
                    }} 
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
                <motion.button 
                  onClick={() => setFontScale(Math.min(1.5, fontScale + 0.1))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="liquid-glass"
                  style={{ 
                    width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-glass)',
                    color: 'var(--foreground)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            </div>

            {/* Additional Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(128, 128, 128, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem', borderRadius: '12px', margin: '-0.5rem' }}
                onClick={() => setReducedMotion(!reducedMotion)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="liquid-glass" style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: reducedMotion ? 'rgba(0, 113, 227, 0.15)' : 'transparent',
                    color: reducedMotion ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Wind size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Reduzir Movimento</span>
                </div>
                <div 
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: reducedMotion ? 'var(--accent)' : 'rgba(128,128,128,0.2)',
                    border: 'none', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                    boxShadow: reducedMotion ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <motion.div 
                    animate={{ x: reducedMotion ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(128, 128, 128, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem', borderRadius: '12px', margin: '-0.5rem' }}
                onClick={() => setHighContrast(!highContrast)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="liquid-glass" style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: highContrast ? 'rgba(0, 113, 227, 0.15)' : 'transparent',
                    color: highContrast ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Settings size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Aumentar Contraste</span>
                </div>
                <div 
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: highContrast ? 'var(--accent)' : 'rgba(128,128,128,0.2)',
                    border: 'none', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                    boxShadow: highContrast ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <motion.div 
                    animate={{ x: highContrast ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(128, 128, 128, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem', borderRadius: '12px', margin: '-0.5rem' }}
                onClick={() => setBoldText(!boldText)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="liquid-glass" style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: boldText ? 'rgba(0, 113, 227, 0.15)' : 'transparent',
                    color: boldText ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Type size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Texto em Negrito</span>
                </div>
                <div 
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: boldText ? 'var(--accent)' : 'rgba(128,128,128,0.2)',
                    border: 'none', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                    boxShadow: boldText ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <motion.div 
                    animate={{ x: boldText ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(128, 128, 128, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '0.5rem', borderRadius: '12px', margin: '-0.5rem' }}
                onClick={() => setPresentationMode(!presentationMode)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="liquid-glass" style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: presentationMode ? 'rgba(0, 113, 227, 0.15)' : 'transparent',
                    color: presentationMode ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Presentation size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Modo Apresentação</span>
                </div>
                <div 
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: presentationMode ? 'var(--accent)' : 'rgba(128,128,128,0.2)',
                    border: 'none', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                    boxShadow: presentationMode ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <motion.div 
                    animate={{ x: presentationMode ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="spring-hover liquid-glass-icon"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '28px',
          border: 'none',
          color: 'var(--accent)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0
        }}
      >
        <AccessibilityIcon size={24} />
      </motion.button>
    </div>
  );
}
