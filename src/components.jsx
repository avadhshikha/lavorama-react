import React from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Self-Service', href: '/self-service-laundromat-geneva' },
  { label: 'Pickup', href: '/pickup' },
  { label: 'Pricing', href: '/laundry-prices-geneva' },
  { label: 'Contact', href: '/contact' },
];

function Navbar({ active }) {
  return (
    <header style={{ background: 'white', borderBottom: '1px solid #E9F4F5', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 10px rgba(108,191,191,0.1)' }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Geneva Laundromat" style={{ height: '40px' }} />
          </a>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, alignItems: 'center' }}>
            {navLinks.map(l => (
              <li key={l.label}>
                {l.label === 'Contact' ? (
                  <a href={l.href} className="btn btn-teal" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>{l.label}</a>
                ) : (
                  <a href={l.href} style={{ color: active === l.label ? 'var(--primary)' : 'var(--text-main)', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1.1rem', fontWeight: active === l.label ? 700 : 500 }}>{l.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer style={{ background: '#1E293B', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ paddingRight: '2rem' }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Geneva" style={{ height: '36px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7 }}>Geneva's modern self-service laundromat &amp; free laundry pickup service. Located at Rue des Pâquis 43, 1201 Genève.</p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <a key={i} href="#" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', textDecoration: 'none' }}>{icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>Services</h4>
            <ul className="footer-links">
              {[
                { label: 'Self-Service Laundromat', href: '/self-service-laundromat-geneva' },
                { label: 'Pickup & Delivery Geneva', href: '/pickup' },
                { label: 'Pricing Geneva', href: '/laundry-prices-geneva' },
                { label: 'About Lavorama Geneva', href: '/about' },
              ].map(l => (
                <li key={l.label}><a href={l.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>Information</h4>
            <ul className="footer-links">
              {['Terms & Conditions', 'Privacy Policy', 'Contact', 'FAQ'].map(l => (
                <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>Contact — NAP</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: '📍', text: 'Rue des Pâquis 43\n1201 Genève, Switzerland' },
                { icon: '📞', text: '+41 79 565 41 42' },
                { icon: '✉️', text: 'booking@lavorama.ch' },
                { icon: '🕐', text: 'Mon–Sun: 7:00 – 23:00' },
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
          <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>© 2025 Lavorama · Rue des Pâquis 43, 1201 Genève. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Terms & Conditions', 'Privacy Policy'].map(l => (
              <a key={l} href="#" style={{ color: '#64748B', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Navbar, PageFooter };
