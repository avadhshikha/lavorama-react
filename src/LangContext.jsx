import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './i18n.js';

const LangContext = createContext();

export function LangProvider({ children }) {
  // Default: French. Persist choice in localStorage.
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lavorama-lang') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('lavorama-lang', lang);
    // Update html lang attribute for accessibility & SEO
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* ── Language Switcher Component ── */
export function LangSwitcher() {
  const { lang, setLang } = useLang();
  const next = lang === 'fr'
    ? { code: 'en', label: 'EN', title: 'Switch to English' }
    : { code: 'fr', label: 'FR', title: 'Passer en Français' };

  return (
    <button
      onClick={() => setLang(next.code)}
      title={next.title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '6px 14px', borderRadius: '50px',
        border: '1px solid #E2E8F0',
        background: '#F1F5F9',
        color: '#334155',
        fontFamily: 'Fredoka', fontSize: '0.88rem', fontWeight: 600,
        cursor: 'pointer', transition: 'all 0.22s ease',
        minWidth: '48px'
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
    >
      {next.label}
    </button>
  );
}
