"use client";

import React, { useState, useMemo } from 'react';
import { ExternalLink, BookOpen, GraduationCap, Filter, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiquidGlassCard } from '../ui/LiquidGlassCard';
import { references, getAllTags } from '@/lib/references';

export const AcademicFooterSection = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const tags = useMemo(() => getAllTags(), []);

  const filteredReferences = useMemo(() => {
    if (!activeTag) return references;
    return references.filter(ref => ref.tags.includes(activeTag));
  }, [activeTag]);

  // Handle click outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="footer-academic" style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="footer-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <div className="header-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
            <BookOpen size={16} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--foreground)' }}>HUB DE REFERÊNCIAS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Acervo Bibliográfico</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Explore a base de dados, literatura e legislação que fundamentam a nossa análise sistêmica sobre o Saneamento no Brasil.
          </p>
        </motion.div>

        {/* Dropdown Filter */}
        <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Filter size={16} style={{ color: 'var(--muted)' }}/>
            <span style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>Filtrar por tema:</span>
          </div>
          
          <div ref={dropdownRef} style={{ position: 'relative', width: '300px' }}>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: '100%',
                padding: '0.85rem 1.5rem',
                borderRadius: '18px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                color: activeTag ? 'var(--accent)' : 'var(--foreground)',
                fontSize: '0.95rem',
                fontWeight: 500,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '10px' }}>
                {activeTag || 'Todos os Temas'}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ display: 'flex' }}
              >
                <ChevronDown size={18} style={{ opacity: 0.5 }} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 8, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    maxHeight: '320px',
                    overflowY: 'auto',
                    backgroundColor: 'rgba(15, 15, 15, 0.85)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '0.75rem',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    zIndex: 101,
                  }}
                  className="custom-scrollbar"
                >
                  <motion.button
                    key="all"
                    onClick={() => { setActiveTag(null); setIsOpen(false); }}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      borderRadius: '12px',
                      backgroundColor: activeTag === null ? 'rgba(255,255,255,0.08)' : 'transparent',
                      border: 'none',
                      color: activeTag === null ? 'var(--accent)' : 'var(--foreground)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <span>Todos</span>
                    {activeTag === null && <Check size={16} />}
                  </motion.button>
                  
                  {tags.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => { setActiveTag(tag); setIsOpen(false); }}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        textAlign: 'left',
                        borderRadius: '12px',
                        backgroundColor: activeTag === tag ? 'rgba(255,255,255,0.08)' : 'transparent',
                        border: 'none',
                        color: activeTag === tag ? 'var(--accent)' : 'var(--foreground)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <span>{tag}</span>
                      {activeTag === tag && <Check size={16} />}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* References Grid with AnimatePresence */}
        <motion.div 
          className="footer-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem',
            padding: '1rem',
            margin: '-1rem',
            marginBottom: '4rem'
          }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredReferences.map((ref) => (
              <LiquidGlassCard 
                key={ref.id}
                accentColor={ref.color}
                interactive={true}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ 
                    color: ref.color, 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {ref.category}
                  </span>
                  <ExternalLink size={16} style={{ color: ref.color, opacity: 0.5 }} />
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.4, margin: 0 }}>
                  {ref.title}
                </h3>
                
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                  {ref.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {ref.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '4px', 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--muted)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </LiquidGlassCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Credits */}
        <div className="footer-bottom-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="credits-left">
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0 }}>© 2026 • Projeto Acadêmico Saneamento</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AcademicFooterSection;

