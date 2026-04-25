import React from 'react';
import { useLang, LangSwitcher } from './LangContext.jsx';

function Navbar({ active }) {
  const { t } = useLang();
  const navLinks = [
    { label: t.nav.home,        href: '/' },
    { label: t.nav.about,       href: '/about' },
    { label: t.nav.selfService, href: '/self-service-laundromat-geneva' },
    { label: t.nav.pickup,      href: '/pickup' },
    { label: t.nav.pricing,     href: '/laundry-prices-geneva' },
    { label: t.nav.contact,     href: '/contact' },
  ];

  return (
    <header style={{ background: 'white', borderBottom: '1px solid #E9F4F5', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 10px rgba(108,191,191,0.1)' }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', gap: '1rem' }}>
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Geneva Laundromat" style={{ height: '40px' }} />
          </a>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, alignItems: 'center', flexWrap: 'wrap' }}>
            {navLinks.map(l => (
              <li key={l.href}>
                {l.label === t.nav.contact ? (
                  <a href={l.href} className="btn btn-teal" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>{l.label}</a>
                ) : (
                  <a href={l.href} style={{ color: active === l.href ? 'var(--primary)' : 'var(--text-main)', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1.05rem', fontWeight: active === l.href ? 700 : 500 }}>{l.label}</a>
                )}
              </li>
            ))}
            <li><LangSwitcher /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function PageFooter() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ background: '#1E293B', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ paddingRight: '2rem' }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Geneva" style={{ height: '36px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.tagline}</p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <a key={i} href="#" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', textDecoration: 'none' }}>{icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>{f.services}</h4>
            <ul className="footer-links">
              {[
                { label: f.links.selfService, href: '/self-service-laundromat-geneva' },
                { label: f.links.pickup,      href: '/pickup' },
                { label: f.links.pricing,     href: '/laundry-prices-geneva' },
                { label: f.links.about,       href: '/about' },
              ].map(l => (
                <li key={l.href}><a href={l.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>{f.info}</h4>
            <ul className="footer-links">
              {f.infoLinks.map(l => (
                <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>{f.contact}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: '📍', text: 'Rue des Pâquis 43\n1201 Genève, Suisse' },
                { icon: '📞', text: '+41 79 565 41 42' },
                { icon: '✉️', text: 'booking@lavorama.ch' },
                { icon: '🕐', text: f.hours },
              ].map(item => (
                <li key={item.icon} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: '#94A3B8', fontSize: '0.875rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>{f.copyright}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[f.terms, f.privacy].map(l => (
              <a key={l} href="#" style={{ color: '#64748B', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Navbar, PageFooter };
