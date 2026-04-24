import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pickup Service', href: '/pickup' },
  { label: 'Contact', href: '/contact' },
];

function Navbar({ active }) {
  return (
    <header style={{ background: 'white', borderBottom: '1px solid #E9F4F5', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 10px rgba(108,191,191,0.1)' }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" style={{ height: '40px' }} />
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
            <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" style={{ height: '36px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>Premium laundry and dry cleaning services designed to make your life easier.</p>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Company</h4>
            <ul className="footer-links">
              {['Home', 'About', 'Pickup Service', 'Contact'].map(l => (
                <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Further Links</h4>
            <ul className="footer-links">
              {['Privacy Policy', 'Terms & Conditions', 'FAQ', 'Recruitment'].map(l => (
                <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Get In Touch</h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { icon: '📍', text: '123 Clean Street, NY 10001' },
                { icon: '📞', text: '+1 (555) 123-4567' },
                { icon: '✉️', text: 'hello@lavorama.com' },
              ].map(item => (
                <li key={item.icon} style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>Copyright © 2026 Lavorama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export { Navbar, PageFooter };
