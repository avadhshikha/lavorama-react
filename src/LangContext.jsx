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
      padding: '3px', border: '1px solid #E2E8F0',
    }}>
      {[
        { code: 'fr', flag: '🇫🇷', label: 'FR' },
        { code: 'en', flag: '🇬🇧', label: 'EN' },
      ].map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={code === 'fr' ? 'Français' : 'English'}
          style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            padding: '5px 12px', borderRadius: '50px', border: 'none',
            background: lang === code ? 'var(--primary)' : 'transparent',
            color: lang === code ? 'white' : '#64748B',
            fontFamily: 'Fredoka', fontSize: '0.88rem', fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.22s ease',
            boxShadow: lang === code ? '0 2px 8px rgba(108,191,191,0.35)' : 'none',
          }}
        >
          <span style={{ fontSize: '1rem' }}>{flag}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
