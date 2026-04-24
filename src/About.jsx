import React, { useState } from 'react';

function About() {
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #E9F4F5', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 10px rgba(108,191,191,0.1)' }}>
        <div className="container">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" style={{ height: '40px' }} />
            </a>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0 }}>
              <li><a href="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'var(--primary)', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1.1rem', fontWeight: 600 }}>About</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'Fredoka', fontSize: '1.1rem' }}>Services</a></li>
              <li>
                <a href="#" className="btn btn-teal" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 1. About Us Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)',
        padding: '5rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Paint splashes */}
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-30px', left: '15%', width: '200px', opacity: 0.5 }} />
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', bottom: '-20px', right: '15%', width: '180px', opacity: 0.3, transform: 'rotate(180deg)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'Fredoka',
            fontSize: '4.5rem',
            fontWeight: 700,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '4px',
          }}>About Us</h1>
        </div>
      </section>

      {/* 2. Your Laundry, Our Priority */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container two-col-section">
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Your Laundry, Our<br />Priority
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ipsum sit. Quisque venenatis magna eu tellus dictum, eu faucibus felis ullamcorper.</p>
            <p>Vestibulum eros neque, congue vel magna vel, tincidunt aliquet tellus. Nulla sit amet tellus sit amet arcu placerat posuere.</p>
          </div>
          <div className="image-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Background splash */}
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '320px', opacity: 0.4, zIndex: 0 }} />
            <img
              src="/reset/imgi_4_bearded-curious-cheerful-black-unshaven-man-carrie-2022-02-07-02-04-04-utc2.png"
              alt="Man with laundry"
              style={{ position: 'relative', zIndex: 1, maxWidth: '90%', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* 3. Laundry Solutions For A Busy Life */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_2_ele2.png" alt="star" style={{ position: 'absolute', top: '15%', left: '5%', width: '90px', opacity: 0.9 }} />
        <img src="/reset/imgi_16_10.png" alt="glove" style={{ position: 'absolute', bottom: '-10px', left: '-20px', width: '160px' }} />
        <img src="/reset/imgi_42_ele10-284x300.png" alt="dots" style={{ position: 'absolute', right: '8%', top: '20%', width: '140px', opacity: 0.35 }} />

        <div className="container text-center" style={{ position: 'relative', zIndex: 1, padding: '3rem 0' }}>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Laundry Solutions For<br />A Busy Life</h2>
          <p style={{ color: 'white', fontWeight: 400, maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            Integer turpis uma, blandit sed blandit id a, subvinar curo nunc. Praesent vitae pellentesque tellus. Vestibulum varius libero nisl, sit amet facilisis mi consequat ac. Etiam vitae massa ipsum.
          </p>
          <a href="#" className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '0.7rem 2rem' }}>Contact Us</a>
        </div>
      </section>

      {/* 4. No Fading, Only Cleaning */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container two-col-section">
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              No Fading, Only<br />Cleaning
            </h2>
            <p>Integer consectetur nunc arcu. Fusce in fermentum dolor. Sed at magna eget dolor tincidunt tincidunt in a est. Quisque egestas pellentesque adipiscing elit. Donec in quam id lacus dignissim varius eu sed ex. Nulla quis ante vitae neque elementum maximus a vitae diam.</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card" style={{ background: 'var(--bg-light)', borderRadius: '16px', padding: '2rem', textAlign: 'center', flex: 1 }}>
              <img src="/reset/imgi_11_7-rose_512.png" alt="Premium Perfume" style={{ width: '55px', marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', fontFamily: 'Fredoka', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Perfume</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>
            <div className="feature-card" style={{ background: 'var(--bg-light)', borderRadius: '16px', padding: '2rem', textAlign: 'center', flex: 1 }}>
              <img src="/reset/imgi_12_25-washing-powder_512.png" alt="Trusted Detergent" style={{ width: '55px', marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', fontFamily: 'Fredoka', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Trusted Detergent</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join Our Newsletter */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="container two-col-section" style={{ alignItems: 'flex-end', gap: '2rem' }}>
          {/* Left: Model with splash */}
          <div style={{ width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '10%', left: '0', width: '320px', opacity: 0.25, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img
              src="/reset/imgi_9_pleased-dark-skinned-cheerful-man-with-bristle-wea-2021-08-30-23-42-51-utc1.png"
              alt="Newsletter model"
              style={{ maxHeight: '420px', position: 'relative', zIndex: 1 }}
            />
          </div>
          {/* Right: Text + Form */}
          <div style={{ width: '50%', padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', color: 'white', marginBottom: '1rem' }}>Join Our<br />Newsletter</h2>
            <p style={{ color: 'white', fontWeight: 400, fontSize: '0.95rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac faucibus mi, et tempor eros. Donec in quam id lacus dignissim varius eu sed ex.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); setEmail(''); }}
              style={{ marginTop: '1.5rem' }}
            >
              <input
                type="email"
                placeholder="Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-orange">Subscribe Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer style={{ background: '#1E293B', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ paddingRight: '2rem' }}>
              <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" style={{ height: '36px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
              <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus mec ullamcorper mattis.</p>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Company</h4>
              <ul className="footer-links">
                {['Home', 'About', 'Service', 'Contact'].map(l => (
                  <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Further Links</h4>
              <ul className="footer-links">
                {['Term & Condition', 'News', 'Recruitment'].map(l => (
                  <li key={l}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Fredoka' }}>Get In Touch</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>📍</span> 2440 Oak Ridge Omaha, OA 45061
                </li>
                <li style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>📞</span> 207-8767-432
                </li>
                <li style={{ color: '#94A3B8', fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>✉️</span> support@site.com
                </li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>Copyright © 2026 Lavorama | Powered by Lavorama</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
