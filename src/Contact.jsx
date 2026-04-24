import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = {
    padding: '0.9rem 1.2rem',
    border: '1.5px solid var(--border)',
    borderRadius: '12px',
    fontFamily: 'Nunito',
    fontSize: '1rem',
    background: 'white',
    outline: 'none',
    width: '100%',
  };

  return (
    <>
      <Navbar active="Contact" />

      {/* 1. Hero */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-20px', left: '10%', width: '200px', opacity: 0.4 }} />
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', bottom: '-10px', right: '10%', width: '180px', opacity: 0.3, transform: 'rotate(180deg)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'Fredoka', fontSize: '4.5rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px' }}>Contact Us</h1>
          <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}>Have a question or need a custom quote? We're here to help — reach out anytime!</p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
            {[
              { icon: '📍', title: 'Our Location', detail: '123 Clean Street\nNew York, NY 10001', bg: 'var(--primary)' },
              { icon: '📞', title: 'Phone Number', detail: '+1 (555) 123-4567\nMon–Sun: 8am–8pm', bg: 'var(--secondary)' },
              { icon: '✉️', title: 'Email Address', detail: 'hello@lavorama.com\nReply within 1 hour', bg: 'var(--primary)' },
            ].map((card, i) => (
              <div key={i} style={{ background: card.bg, borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Fredoka', color: 'white', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 400, whiteSpace: 'pre-line', marginBottom: 0 }}>{card.detail}</p>
              </div>
            ))}
          </div>

          {/* 3. Contact Form + Image */}
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Form */}
            <div style={{ flex: 1.3, minWidth: '300px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
              <p style={{ marginBottom: '2rem' }}>Fill out the form below and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div style={{ background: 'var(--primary-light)', border: '2px solid var(--primary)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.8rem' }}>Message Sent!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your message and will reply to <strong>{form.email}</strong> shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-teal" style={{ marginTop: '1rem' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Full Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" style={inputStyle} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Subject</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us more about your needs..." required style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-orange" style={{ fontSize: '1.1rem', alignSelf: 'flex-start', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    ✉️ Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Model Image */}
            <div style={{ flex: 0.8, minWidth: '260px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '250px', opacity: 0.35, zIndex: 0 }} />
              <img src="/reset/imgi_66_LAVORAMA-CUTE-MODEL-3-1.png" alt="Contact Model" style={{ maxWidth: '90%', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Hours */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.5rem', marginBottom: '2rem' }}>Business Hours</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 8:00 PM', active: true },
                  { day: 'Saturday', hours: '9:00 AM – 6:00 PM', active: true },
                  { day: 'Sunday', hours: '10:00 AM – 4:00 PM', active: false },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', boxShadow: '0 2px 10px rgba(108,191,191,0.1)', borderLeft: `4px solid ${row.active ? 'var(--primary)' : 'var(--secondary)'}` }}>
                    <span style={{ fontFamily: 'Fredoka', fontSize: '1.1rem', color: 'var(--text-main)' }}>{row.day}</span>
                    <span style={{ fontFamily: 'Fredoka', fontSize: '1.1rem', color: row.active ? 'var(--primary)' : 'var(--secondary)' }}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.5rem', marginBottom: '2rem' }}>Follow Us</h2>
              <p style={{ marginBottom: '2rem' }}>Stay updated with our latest offers and laundry tips on social media!</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { label: '📘 Facebook', color: '#1877F2' },
                  { label: '📸 Instagram', color: '#E4405F' },
                  { label: '🐦 Twitter', color: '#1DA1F2' },
                  { label: '▶️ YouTube', color: '#FF0000' },
                ].map((s, i) => (
                  <a key={i} href="#" style={{ background: s.color, color: 'white', borderRadius: '50px', padding: '0.6rem 1.4rem', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1rem', transition: 'transform 0.2s', display: 'inline-block' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >{s.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Teal CTA Banner */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="glove" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="star" style={{ position: 'absolute', top: '20%', right: '8%', width: '80px', opacity: 0.8 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, padding: '2rem 0' }}>
          <h2 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '1rem' }}>Ready For Fresh, Clean Clothes?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, maxWidth: '550px', margin: '0 auto 2rem' }}>Schedule your first pickup today and experience the Lavorama difference. Free delivery, always.</p>
          <a href="/pickup" className="btn btn-orange" style={{ fontSize: '1.1rem' }}>🚚 Book a Pickup</a>
        </div>
      </section>

      {/* 6. Newsletter */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden', borderTop: '2px solid rgba(255,255,255,0.2)' }}>
        <div className="container two-col-section" style={{ alignItems: 'flex-end', gap: '2rem' }}>
          <div style={{ width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '10%', left: 0, width: '300px', opacity: 0.2, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img src="/reset/imgi_9_pleased-dark-skinned-cheerful-man-with-bristle-wea-2021-08-30-23-42-51-utc1.png" alt="Newsletter Model" style={{ maxHeight: '400px', position: 'relative', zIndex: 1 }} />
          </div>
          <div style={{ width: '50%', padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Join Our<br />Newsletter</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.95rem' }}>Get exclusive deals, laundry tips, and updates delivered straight to your inbox.</p>
            <form className="newsletter-form" style={{ marginTop: '1.5rem' }} onSubmit={e => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
              <input type="email" placeholder="Your Email Here" required />
              <button type="submit" className="btn btn-orange">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Contact;
