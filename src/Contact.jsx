import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', date: '', time: '', address: '', service: 'Self-service machine booking' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = { padding: '0.9rem 1.2rem', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'Nunito', fontSize: '1rem', background: 'white', outline: 'none', width: '100%' };

  return (
    <>
      <Navbar active="Contact" />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', left: '10%', width: '200px', opacity: 0.4 }} />
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', bottom: '-10px', right: '10%', width: '180px', opacity: 0.3, transform: 'rotate(180deg)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get in touch</p>
          <h1 style={{ fontFamily: 'Fredoka', fontSize: '4rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px' }}>Contact Us</h1>
          <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '1.1rem' }}>Book a machine, schedule a pickup, or just ask a question. We're here to help, seven days a week.</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '📍', title: 'Our Address', detail: 'Rue des Pâquis 43\n1201 Genève, Switzerland', bg: 'var(--primary)' },
              { icon: '📞', title: 'Phone & WhatsApp', detail: '+41 79 565 41 42', bg: 'var(--secondary)' },
              { icon: '✉️', title: 'Email Us', detail: 'booking@lavorama.ch\ninfo@lavorama.ch', bg: 'var(--primary)' },
              { icon: '🕐', title: 'Opening Hours', detail: 'Self-service: 7:00–23:00\nPickup: Mon–Sat 8:00–18:00', bg: 'var(--secondary)' },
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

          {/* Form + Image */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '0.5rem' }}>Book a Pickup or Machine in Geneva</h2>
              <p style={{ marginBottom: '2rem' }}>Fill in your details and we'll confirm within a few hours. Available 7 days a week.</p>
              {submitted ? (
                <div style={{ background: 'var(--primary-light)', border: '2px solid var(--primary)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.8rem' }}>Request Received!</h3>
                  <p>Thank you, <strong>{form.firstName}</strong>! We'll confirm your booking at <strong>{form.email}</strong> shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-teal" style={{ marginTop: '1rem' }}>Send Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>First Name</label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Marie" required style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Last Name</label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Dupont" required style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+41 79 000 00 00" style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="marie@example.com" required style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Preferred Time</label>
                      <input type="time" name="time" value={form.time} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                      <option>Self-service machine booking</option>
                      <option>Laundry pickup &amp; delivery Geneva</option>
                      <option>General question</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Pickup Address in Geneva (if applicable)</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Your address in Geneva" style={inputStyle} />
                  </div>
                  <button type="submit" className="btn btn-orange" style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>
                    Request Pickup / Book a Machine in Geneva
                  </button>
                </form>
              )}
            </div>
            <div style={{ flex: '0 1 300px', minWidth: '240px', position: 'relative' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '250px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/lavorama-geneva-phone-support-transparent-cutout.png" alt="Contact Lavorama Geneva" style={{ maxWidth: '90%', position: 'relative', zIndex: 1 }} />
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
                { label: 'Self-Service (Mon – Sun)', hours: '7:00 – 23:00', color: 'var(--primary)' },
                { label: 'Pickup Service (Mon – Sat)', hours: '8:00 – 18:00', color: 'var(--secondary)' },
                { label: 'Sunday Pickup', hours: 'Closed', color: '#94A3B8' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(108,191,191,0.1)', borderLeft: `4px solid ${row.color}` }}>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem', color: row.color }}>{row.hours}</span>
                </div>
              ))}
              <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem', color: 'white' }}>
                <h4 style={{ fontFamily: 'Fredoka', color: 'white', marginBottom: '0.5rem' }}>📍 Lavorama — NAP</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>Rue des Pâquis 43, 1201 Genève, Switzerland</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>📞 +41 79 565 41 42</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: 0 }}>✉️ booking@lavorama.ch</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '2rem' }}>Find Us in Geneva</h2>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(108,191,191,0.2)', height: '340px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', border: '2px solid var(--border)' }}>
                <span style={{ fontSize: '3rem' }}>🗺️</span>
                <p style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Rue des Pâquis 43, Genève</p>
                <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+1201+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ fontSize: '0.95rem' }}>Open in Google Maps</a>
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
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, maxWidth: '550px', margin: '0 auto 2rem' }}>Schedule your first pickup today or walk into Rue des Pâquis 43 — open every day from 7 AM to 11 PM.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/pickup" className="btn btn-orange">🚚 Book a Pickup</a>
            <a href="tel:+41795654142" className="btn btn-white">📞 Call Us</a>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Contact;
