"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Sun, 
  Moon, 
  Monitor, 
  Type, 
  Minus, 
  Plus, 
  Wind, 
  X, 
  Accessibility as AccessibilityIcon
} from "lucide-react";
import { useAccessibility } from "./AccessibilityProvider";

export function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    theme, setTheme, 
    fontScale, setFontScale, 
    reducedMotion, setReducedMotion,
    highContrast, setHighContrast,
    boldText, setBoldText
  } = useAccessibility();

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            className="glass-card"
            style={{
              padding: '1.5rem',
              marginBottom: '1rem',
              width: '280px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-lg)',
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

            {/* Theme Toggle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground-muted)', textTransform: 'uppercase' }}>Tema</span>
              <div style={{ 
                display: 'flex', 
                background: 'var(--background-secondary)', 
                padding: '4px', 
                borderRadius: '12px',
                gap: '4px'
              }}>
                {[
                  { id: 'light', icon: Sun, label: 'Claro' },
                  { id: 'system', icon: Monitor, label: 'Sistema' },
                  { id: 'dark', icon: Moon, label: 'Escuro' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id as any)}
                    className="spring-hover"
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 4px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      background: theme === t.id ? 'var(--background)' : 'transparent',
                      color: theme === t.id ? 'var(--accent)' : 'var(--foreground-muted)',
                      boxShadow: theme === t.id ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <t.icon size={16} />
                    <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Scale */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground-muted)', textTransform: 'uppercase' }}>Tamanho do Texto</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>{Math.round(fontScale * 100)}%</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={() => setFontScale(fontScale - 0.1)}
                  className="spring-hover"
                  style={{ 
                    width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-glass)',
                    background: 'var(--background-secondary)', color: 'var(--foreground)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Minus size={16} />
                </button>
                <div style={{ flex: 1, height: '4px', background: 'var(--background-secondary)', borderRadius: '2px', position: 'relative' }}>
                  <motion.div 
                    style={{ 
                      position: 'absolute', left: 0, top: 0, height: '100%', 
                      background: 'var(--accent)', borderRadius: '2px',
                      width: `${((fontScale - 0.8) / (1.5 - 0.8)) * 100}%`
                    }} 
                  />
                </div>
                <button 
                  onClick={() => setFontScale(fontScale + 0.1)}
                  className="spring-hover"
                  style={{ 
                    width: '36px', height: '36px', borderRadius: '10px', border: '1px solid var(--border-glass)',
                    background: 'var(--background-secondary)', color: 'var(--foreground)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Additional Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: reducedMotion ? 'rgba(0, 113, 227, 0.15)' : 'var(--background-secondary)',
                    color: reducedMotion ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Wind size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Reduzir Movimento</span>
                </div>
                <button 
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className="spring-hover"
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: reducedMotion ? 'var(--accent)' : 'rgba(0,0,0,0.1)',
                    border: 'none', cursor: 'pointer', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease'
                  }}
                >
                  <motion.div 
                    animate={{ x: reducedMotion ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: highContrast ? 'rgba(0, 113, 227, 0.15)' : 'var(--background-secondary)',
                    color: highContrast ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Settings size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Aumentar Contraste</span>
                </div>
                <button 
                  onClick={() => setHighContrast(!highContrast)}
                  className="spring-hover"
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: highContrast ? 'var(--accent)' : 'rgba(0,0,0,0.1)',
                    border: 'none', cursor: 'pointer', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease'
                  }}
                >
                  <motion.div 
                    animate={{ x: highContrast ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '8px', 
                    backgroundColor: boldText ? 'rgba(0, 113, 227, 0.15)' : 'var(--background-secondary)',
                    color: boldText ? 'var(--accent)' : 'var(--foreground-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Type size={16} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Texto em Negrito</span>
                </div>
                <button 
                  onClick={() => setBoldText(!boldText)}
                  className="spring-hover"
                  style={{ 
                    width: '44px', height: '24px', borderRadius: '12px', 
                    background: boldText ? 'var(--accent)' : 'rgba(0,0,0,0.1)',
                    border: 'none', cursor: 'pointer', position: 'relative',
                    padding: '2px', transition: 'background 0.3s ease'
                  }}
                >
                  <motion.div 
                    animate={{ x: boldText ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="spring-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '28px',
          background: 'var(--accent)',
          border: 'none',
          color: 'white',
          boxShadow: '0 8px 24px rgba(0, 113, 227, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AccessibilityIcon size={24} />
      </motion.button>
    </div>
  );
}
