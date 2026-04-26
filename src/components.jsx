import React, { useState } from 'react';
import { useLang, LangSwitcher } from './LangContext.jsx';

function Navbar({ active }) {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home,        href: '/' },
    { label: t.nav.about,       href: '/about' },
    { label: t.nav.selfService, href: '/self-service-laundromat-geneva' },
    { label: t.nav.pricing,     href: '/laundry-prices-geneva' },
    { label: t.nav.contact,     href: '/contact' },
  ];

  return (
    <header>
      <div className="container">
        <nav className="nav-inner">
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Geneva Laundromat" style={{ height: '40px' }} />
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                {l.label === t.nav.contact ? (
                  <a href={l.href} className="btn btn-teal" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>{l.label}</a>
                ) : (
                  <a
                    href={l.href}
                    style={{
                      color: active === l.href ? 'var(--primary)' : 'var(--text-main)',
                      textDecoration: 'none',
                      fontFamily: 'Fredoka',
                      fontSize: '1.05rem',
                      fontWeight: active === l.href ? 700 : 500,
                    }}
                  >{l.label}</a>
                )}
              </li>
            ))}
            <li><LangSwitcher /></li>
          </ul>

          {/* Hamburger button */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: active === l.href ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === l.href ? 700 : 500 }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div style={{ paddingTop: '0.5rem' }}>
            <LangSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

function PageFooter() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/41795654142" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.2rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 9999,
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Contact us on WhatsApp"
      >
        💬
      </a>
      <footer style={{ background: '#1E293B', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ paddingRight: '1rem' }}>
            <img src="/reset/Lavorama white.png" alt="Lavorama Geneva" style={{ height: '36px', marginBottom: '1.5rem' }} />
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
                <li key={l.href}><a href={l.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>{f.contact}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: '📍', text: 'Rue des Pâquis 43\n1201 Genève, Suisse' },
                { icon: '📍', text: 'Rue Dancet 2\n1205 Genève, Suisse' },
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
    </>
  );
}

export { Navbar, PageFooter };
