import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

function Contact() {
  return (

  return (
    <>
      <Navbar active="Contact" />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Get in touch
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>Contact Us</h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>Book a machine, or just ask a question. We're here to help, seven days a week.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+41795654142" className="btn btn-orange">📞 Call Us Now</a>
                <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">💬 WhatsApp</a>
              </div>
            </div>
            <div className="hero-img">
              <img src="/reset/lavorama-geneva-phone-support-transparent-cutout.png" alt="Contact Lavorama Geneva" style={{ maxWidth: '90%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '📍', title: 'Our Locations', detail: 'Rue des Pâquis 43, 1201 Genève\nRue Dancet 2, 1205 Genève', bg: 'var(--primary)' },
              { icon: '📞', title: 'Phone & WhatsApp', detail: '+41 79 565 41 42', bg: 'var(--secondary)' },
              { icon: '✉️', title: 'Email Us', detail: 'booking@lavorama.ch\ninfo@lavorama.ch', bg: 'var(--primary)' },
              { icon: '🕐', title: 'Opening Hours', detail: 'Every day: 7:00–23:00', bg: 'var(--secondary)' },
            ].map((card, i) => (
              <div key={i} style={{ background: card.bg, borderRadius: '20px', padding: '2rem', textAlign: 'center', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Fredoka', color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 400, whiteSpace: 'pre-line', marginBottom: 0 }}>{card.detail}</p>
              </div>
            ))}
          </div>

          {/* Booking CTA + Image */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '0.5rem' }}>Book a Machine in Geneva</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>To book a machine or ask a question, please message us directly on WhatsApp. We typically reply within minutes!</p>
              <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', padding: '1rem 2rem' }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span> Message us on WhatsApp
              </a>
            </div>
            <div style={{ flex: '0 1 300px', minWidth: '240px', position: 'relative' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '250px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/lavorama-geneva-booking-desk-notes-lifestyle.jpeg" alt="Book laundry machine Geneva" style={{ maxWidth: '90%', position: 'relative', zIndex: 1, borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Map */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '2rem' }}>Opening Hours</h2>
              {[
                { label: 'Self-Service (Mon – Sun)', hours: '7:00 – 23:00', color: 'var(--primary)' }
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(108,191,191,0.1)', borderLeft: `4px solid ${row.color}` }}>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem', color: row.color }}>{row.hours}</span>
                </div>
              ))}
              <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem', color: 'white' }}>
                <h4 style={{ fontFamily: 'Fredoka', color: 'white', marginBottom: '0.5rem' }}>📍 Lavorama Pâquis</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>Rue des Pâquis 43, 1201 Genève, Switzerland</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>📞 +41 79 565 41 42</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: 0 }}>✉️ booking@lavorama.ch</p>
              </div>
              <div style={{ background: 'var(--secondary)', borderRadius: '16px', padding: '1.5rem', marginTop: '1rem', color: 'white' }}>
                <h4 style={{ fontFamily: 'Fredoka', color: 'white', marginBottom: '0.5rem' }}>📍 Lavorama Dancet (New!)</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>Rue Dancet 2, 1205 Genève, Switzerland</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 0 }}>✨ Exclusive 30 kg washing machine — a first in Geneva!</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '2rem' }}>Find Us in Geneva</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Map 1: Pâquis */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(108,191,191,0.2)', background: 'var(--bg-light)', border: '2px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                  <iframe 
                    src="https://maps.google.com/maps?q=Rue+des+Pâquis+43,+1201+Genève&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                  <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Rue des Pâquis 43</p>
                    <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+1201+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>Open in Maps</a>
                  </div>
                </div>

                {/* Map 2: Dancet */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(247,173,63,0.15)', background: '#FFFDF6', border: '2px solid #FFE0A0', display: 'flex', flexDirection: 'column' }}>
                  <iframe 
                    src="https://maps.google.com/maps?q=Rue+Dancet+2,+1205+Genève&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                  <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontFamily: 'Fredoka', color: 'var(--secondary)', fontSize: '1.2rem', margin: 0 }}>Rue Dancet 2</p>
                    <a href="https://maps.google.com/?q=Rue+Dancet+2+1205+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>Open in Maps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" style={{ position: 'absolute', top: '20%', right: '8%', width: '80px', opacity: 0.8 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, padding: '2rem 0' }}>
          <h2 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '1rem' }}>Ready for Cleaner Laundry in Geneva?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, maxWidth: '550px', margin: '0 auto 2rem' }}>Walk into Rue des Pâquis 43 or our new location at Rue Dancet 2 — open every day from 7 AM to 11 PM.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:+41795654142" className="btn btn-white">📞 Call Us</a>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Contact;
