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

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '2px',
      background: '#F1F5F9', borderRadius: '50px',
      padding: '4px', border: '1px solid #E2E8F0',
    }}>
      {[
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
      ].map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={code === 'fr' ? 'Passer en Français' : 'Switch to English'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '4px 12px', borderRadius: '50px', border: 'none',
            background: lang === code ? 'var(--primary)' : 'transparent',
            color: lang === code ? 'white' : '#64748B',
            fontFamily: 'Fredoka', fontSize: '0.85rem', fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.22s ease',
            boxShadow: lang === code ? '0 2px 8px rgba(108,191,191,0.35)' : 'none',
            minWidth: '40px'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
