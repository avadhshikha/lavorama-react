import React, { useState } from 'react';
import About from './About.jsx';
import Pickup from './Pickup.jsx';
import Contact from './Contact.jsx';
import { Navbar, PageFooter } from './components.jsx';

const pricingPlans = [
  { title: 'Washer Small', kg: 'up to 7 kg', price: 'CHF 6', unit: 'per wash', features: ['Professional detergent included', 'Touchscreen-guided cycle', 'Multiple wash programs', 'Free Wi-Fi while you wait', 'Perfect for weekly personal laundry'] },
  { title: 'Washer Medium', kg: 'up to 15 kg', price: 'CHF 12', unit: 'per wash', popular: true, features: ['Professional detergent included', 'Ideal for families in Geneva', 'Handles duvets & bed linen', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'] },
  { title: 'Washer Large', kg: 'up to 20 kg', price: 'CHF 16', unit: 'per wash', features: ['Professional detergent included', 'Best for pillows, duvets, sports gear', 'Industrial-grade wash results', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'] },
  { title: 'Dryer', kg: 'per 10 minutes', price: 'CHF 1.50', unit: 'per 10 min', features: ['Pay per 10-min increment', 'Gentle & intensive drying cycles', 'Available right after your wash', 'Fast, efficient, reliable'] },
];

const faqs = [
  { q: 'How much does a laundromat cost in Geneva?', a: 'At Lavorama, prices start from CHF 6 for a 7 kg wash, CHF 12 for 15 kg, and CHF 16 for 20 kg. Detergent is always included.' },
  { q: 'Is there a laundromat open on Sunday in Geneva?', a: 'Yes — Lavorama at Rue des Pâquis 43 is open every day including Sunday, from 7 AM to 11 PM.' },
  { q: 'Where is the nearest laundromat in Geneva?', a: 'Lavorama is centrally located at Rue des Pâquis 43, 1201 Genève — easily accessible from Pâquis, Eaux-Vives, Cornavin, and the city centre.' },
];

const testimonials = [
  { name: 'Lara Schmid', location: 'Geneva', img: 'imgi_13_p1.jpg', review: "I can't recommend Lavorama enough. The service is incredibly convenient and the quality of every wash is outstanding. As a Geneva local, this is now my go-to laundromat — I'll definitely be a regular." },
  { name: 'Sofia Zimmermann', location: 'Geneva', img: 'imgi_14_p3.jpg', review: "As a busy professional in Geneva, I have almost no time for laundry. Lavorama's machines are fast, the service is exceptional, and the prices are very reasonable. An excellent value for anyone in the city." },
  { name: 'Anna Müller', location: 'Geneva', img: 'imgi_15_p7.jpg', review: "The free pickup and delivery across Geneva has completely simplified my life. Affordable, always on time, and my clothes come back perfectly folded every single time. Highly recommended." },
];

function App() {
  const [faqOpen, setFaqOpen] = useState(null);
  const currentPage = window.location.pathname;

  if (currentPage === '/about') return <About />;
  if (currentPage === '/pickup') return <Pickup />;
  if (currentPage === '/contact') return <Contact />;

  return (
    <>
      <Navbar active="Home" />

      {/* ── 1. HERO ── */}
      <section className="hero">
        <div className="container flex-row" style={{ alignItems: 'flex-end' }}>
          <div className="text-wrapper" style={{ paddingBottom: '5rem', position: 'relative' }}>
            <img src="/reset/imgi_42_ele10-284x300.png" className="dots-pattern" alt="" style={{ width: '100px' }} />
            <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.9rem', fontFamily: 'Fredoka', marginBottom: '1.2rem' }}>
              📍 Rue des Pâquis 43, Geneva — Open 7 days
            </div>
            <h1>Geneva's Best<br />Self-Service<br />Laundromat</h1>
            <p style={{ maxWidth: '440px' }}>Lavorama is located at Rue des Pâquis, Geneva — offering industrial washers up to 20 kg and a free laundry pickup &amp; delivery service across Geneva, 7 days a week.</p>
            <p style={{ fontSize: '0.95rem', maxWidth: '440px' }}>Whether you live in Pâquis, Eaux-Vives, Plainpalais, or anywhere across Geneva, Lavorama makes laundry effortless. No coins, no stress — just clean clothes.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="#pricing" className="btn btn-orange">See Pricing</a>
              <a href="/pickup" className="btn btn-teal">Book Pickup</a>
            </div>
          </div>
          <div className="image-wrapper hero-img">
            <img src="/reset/imgi_75_LAVORAMA-MAIN-MODEL-BR-1.png" alt="Lavorama self-service laundromat Geneva" />
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ── */}
      <section className="section">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Laundry Services in Geneva</p>
          <h2>Two Ways to Get Laundry Done Right</h2>
          <p style={{ textAlign: 'center', maxWidth: '620px', margin: '-1.5rem auto 3rem' }}>Walk in and do it yourself, or let us handle everything from pickup to your front door. Either way, Lavorama fits your schedule.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Self-Service Card */}
            <div style={{ background: 'linear-gradient(160deg, #E2F7F7 0%, #F5FDFD 100%)', borderRadius: '20px', padding: '3rem', border: '1px solid var(--border)' }}>
              <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(108,191,191,0.2)' }}>🏪</div>
              <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '1rem' }}>Self-Service Laundromat<br />in Geneva — Pâquis</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>Walk into our modern laundromat at Rue des Pâquis 43, Geneva. Industrial washers from 8 kg to 20 kg handle everything — clothes, duvets, pillows — with eco-certified detergent included in every wash.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {['Industrial washers from 8 kg to 20 kg', 'Eco-certified detergent always included', 'Touchscreen-guided — no experience needed', 'Book your slot online to avoid waiting', 'Free Wi-Fi & comfortable lounge area', 'Open 7 days a week, 7 AM to 11 PM'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>
                ))}
              </ul>
              <a href="#pricing" className="btn btn-teal">Book a Machine at Lavorama Geneva</a>
            </div>
            {/* Pickup Card */}
            <div style={{ background: 'linear-gradient(160deg, #FFF8EC 0%, #FFFDF6 100%)', borderRadius: '20px', padding: '3rem', border: '1px solid #FFE0A0' }}>
              <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(247,173,63,0.2)' }}>🚚</div>
              <h3 style={{ fontFamily: 'Fredoka', color: 'var(--secondary)', fontSize: '1.6rem', marginBottom: '1rem' }}>Free Laundry Pickup &amp;<br />Delivery Service in Geneva</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>Too busy to visit? Schedule a pickup and we'll collect your laundry, wash and dry it with professional care, then deliver it back — neatly folded and ready to wear. Track your order in real time online.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {['Free pickup from any address in Geneva', 'Professionally washed, dried & folded', 'Track your order status online in real time', 'Expert care for all garment types', 'Flexible pickup scheduling — morning or afternoon', 'Available Monday – Saturday, 8 AM to 6 PM'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}><span style={{ color: 'var(--secondary)' }}>✓</span>{f}</li>
                ))}
              </ul>
              <a href="/pickup" className="btn btn-orange">Schedule Your Free Pickup in Geneva</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRICING ── */}
      <section id="pricing" className="section bg-light">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Laundry Prices in Geneva</p>
          <h2>Clear Pricing, No Hidden Costs — From CHF 6</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-1.5rem auto 3rem' }}>At Lavorama Geneva, detergent is always included in your wash. Pay easily by touchscreen — no coins, no cash needed. The most affordable laundromat in Pâquis.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {pricingPlans.map((plan, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.12)', border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative', transform: plan.popular ? 'scale(1.04)' : 'none' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontFamily: 'Fredoka', whiteSpace: 'nowrap' }}>Most Popular</div>}
                <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{plan.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{plan.kg}</p>
                <div style={{ fontSize: '2.4rem', fontFamily: 'Fredoka', color: 'var(--text-main)', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.price}</div>
                <p style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>{plan.unit}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {plan.features.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>)}
                </ul>
                <a href="/contact" className={`btn ${plan.popular ? 'btn-teal' : 'btn-secondary'}`} style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: '0.9rem' }}>Book Now</a>
              </div>
            ))}
          </div>

          {/* FAQ Block */}
          <div style={{ marginTop: '4rem', background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
            <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions — Lavorama Geneva</h3>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.1rem' }}>{faq.q}</span>
                  <span style={{ color: 'var(--secondary)', fontSize: '1.4rem', fontWeight: 700 }}>{faqOpen === i ? '−' : '+'}</span>
                </div>
                {faqOpen === i && <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY LAVORAMA ── */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '160px' }} />
        <img src="/reset/imgi_21_11.png" alt="" style={{ position: 'absolute', top: '10%', right: '-10px', width: '140px', transform: 'rotate(-15deg)' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" style={{ position: 'absolute', top: '20%', left: '6%', width: '80px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Why Geneva Chooses Lavorama</p>
          <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Built for People Who Value Their Time</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: 400 }}>From the Pâquis waterfront to Plainpalais, thousands of Geneva residents trust Lavorama for their laundry every week.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: '🌿', title: 'Eco-Certified Detergents', desc: 'Professional, biodegradable formulas — gentle on your clothes, kind to the planet.' },
              { icon: '⚡', title: 'Fast & Efficient', desc: 'Industrial machines deliver a full wash cycle quickly so you\'re in and out in no time.' },
              { icon: '📱', title: 'Book Online, Anytime', desc: 'Reserve a machine or schedule a pickup from your phone — no calls, no hassle.' },
              { icon: '📍', title: 'Track Your Order', desc: 'Real-time status updates on your pickup order — always know where your laundry is.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.25)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 400, marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              { title: 'Superior stain removal', desc: 'Industrial machines with professional detergents tackle tough stains that home washers can\'t.' },
              { title: 'Affordable for everyone', desc: 'Starting from CHF 6 per wash — clear pricing with nothing hidden, nothing added.' },
              { title: 'Longer-lasting clothes', desc: 'Precise temperature and spin control means your garments stay in better shape, longer.' },
              { title: 'Energy-efficient machines', desc: 'Modern low-consumption machines — our way of doing great laundry responsibly.' },
              { title: 'Central Geneva location', desc: 'Right at Rue des Pâquis 43 — easy to reach by foot, tram, or bike from anywhere in Geneva.' },
              { title: 'Special treatment options', desc: 'Delicates, sportswear, duvets — we have the right cycle for every type of laundry.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h4 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.1rem', marginBottom: '0.5rem' }}>✦ {f.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 400, marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="section bg-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Lavorama Geneva Reviews</p>
          <h2>What Geneva Customers Say About Lavorama</h2>
          <p style={{ textAlign: 'center', maxWidth: '540px', margin: '-1.5rem auto 3rem' }}>Real reviews from real people across Geneva — from Pâquis to Eaux-Vives.</p>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <div className="testi-user">
                  <img src={`/reset/${t.img}`} alt={t.name} />
                  <h4>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{t.location}</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}>"{t.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WASHING MACHINES ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="machines-grid">
            <img src="/reset/imgi_19_LAVORAMA-SLIDER1.png" alt="Lavorama Geneva washing machine" />
            <img src="/reset/imgi_20_LAVORAMA-SLIDER2.png" alt="Lavorama Geneva industrial washer" />
            <img src="/reset/imgi_18_LAVORAMA-SLIDER3.png" alt="Lavorama Geneva laundromat machine" />
          </div>
        </div>
      </section>

      {/* ── 7. CONTACT CTA ── */}
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Find Us in Geneva</p>
          <h2>Visit Lavorama — Geneva's Laundromat at Rue des Pâquis</h2>
          <p style={{ maxWidth: '620px', margin: '0 auto 2rem' }}>Come in anytime or book a pickup from your home. We serve customers from across Geneva including Pâquis, Cornavin, Eaux-Vives, Plainpalais, Carouge, Champel, and the city centre.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { icon: '📍', label: 'Address', val: 'Rue des Pâquis 43, 1201 Genève' },
              { icon: '📞', label: 'Phone / WhatsApp', val: '+41 79 565 41 42' },
              { icon: '✉️', label: 'Booking', val: 'booking@lavorama.ch' },
              { icon: '🕐', label: 'Open Every Day', val: '7:00 – 23:00' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem 2rem', boxShadow: '0 4px 15px rgba(108,191,191,0.12)', minWidth: '220px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.label}</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/contact" className="btn btn-orange">Book a Pickup or Machine</a>
            <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+Geneva" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Get Directions</a>
          </div>
        </div>
      </section>

      {/* ── 8. NEWSLETTER ── */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="container two-col-section" style={{ alignItems: 'flex-end' }}>
          <div style={{ width: '50%', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '10%', left: 0, width: '300px', opacity: 0.2, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img src="/reset/imgi_24_lavorama-model-cute-.png" alt="Lavorama laundry service Geneva" style={{ maxHeight: '420px', position: 'relative', zIndex: 1 }} />
          </div>
          <div style={{ width: '50%', padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.5rem', color: 'white', marginBottom: '0.75rem' }}>Get 20% Off<br />Your First Wash</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>Subscribe and receive an exclusive discount for your first machine booking or pickup in Geneva.</p>
            <form className="newsletter-form" style={{ marginTop: '1.5rem' }} onSubmit={e => { e.preventDefault(); alert('Subscribed! Check your email for your discount code.'); }}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-orange">Get 20% Off</button>
            </form>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default App;
