import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

const faqs = [
  { q: 'What is the cheapest laundromat in Geneva?', a: 'Lavorama offers washes starting from CHF 6 for a 7 kg machine — with detergent always included. No hidden costs.' },
  { q: 'Is there a laundromat open on Sunday in Geneva?', a: 'Yes — Lavorama is open every day of the week including Sunday, from 7 AM to 11 PM.' },
  { q: 'Do I need to bring my own detergent to Lavorama?', a: 'No. Professional eco-certified detergent is automatically included in every wash at no extra cost.' },
  { q: 'Do I need coins for the machines at Lavorama Geneva?', a: 'No coins needed. All machines are operated and paid for via touchscreen. Simple and cashless.' },
  { q: 'Can I wash a duvet at Lavorama Geneva?', a: 'Absolutely. Our 20 kg industrial washers are designed for duvets, pillows, winter coats, and other bulky items that don\'t fit in a home machine.' },
  { q: 'Can I book a machine in advance at Lavorama Geneva?', a: 'Yes. You can book your machine slot online via our website or by contacting us on WhatsApp at +41 79 565 41 42.' },
  { q: 'Where is the laundromat in Pâquis Geneva?', a: 'Lavorama is located at Rue des Pâquis 43, 1201 Genève — right in the Pâquis neighbourhood.' },
];

function SelfService() {
  const [faqOpen, setFaqOpen] = useState(null);
  const machines = [
    { kg: '7 kg', price: 'CHF 6', label: 'per wash', color: 'var(--primary)', desc: 'Perfect for a regular weekly load of personal clothes. Fast, efficient, and professionally clean. Detergent included.' },
    { kg: '15 kg', price: 'CHF 12', label: 'per wash', color: 'var(--secondary)', popular: true, desc: 'Ideal for families, larger households, or mixed loads. Handles bed linen, towels, and bigger items with ease. Detergent included. Our most popular machine.' },
    { kg: '20 kg', price: 'CHF 16', label: 'per wash', color: 'var(--primary)', desc: 'The best machine for bulky items — duvets, pillows, winter coats, sleeping bags, sports bags, and curtains. Industrial results. Detergent included.' },
    { kg: 'Dryer', price: 'CHF 1.50', label: 'per 10 min', color: '#64748B', desc: 'Fast, efficient drying available immediately after your wash. Choose between gentle and intensive programs.' },
  ];
  const items = ['Everyday clothing — shirts, jeans, underwear, socks','Bed linen — sheets, pillowcases, duvet covers','Towels and bathrobes','Duvets and pillows (up to 20 kg)','Winter coats and down jackets','Sportswear and gym clothes','Curtains and household textiles','Rugs and blankets','Baby and children\'s clothing','Work uniforms'];
  const steps = [
    { icon: '🧺', title: 'Choose Your Machine', desc: 'Select the machine size that fits your load — 7 kg, 15 kg, or 20 kg. Book your slot online in advance or simply walk in.' },
    { icon: '👕', title: 'Load Your Laundry', desc: 'Place your clothes in the drum. No need to bring detergent — it\'s automatically dispensed at the perfect dose.' },
    { icon: '📱', title: 'Select Program on the Touchscreen', desc: 'Pick the right wash program — cotton, delicates, sportswear, quick wash, and more. Pay directly on screen.' },
    { icon: '☕', title: 'Relax While We Do the Work', desc: 'Grab the free Wi-Fi, use the lounge, or step out — your machine handles everything. Return when the cycle is done.' },
    { icon: '💨', title: 'Move to the Dryer (Optional)', desc: 'Transfer to one of our dryers for fast, complete drying at CHF 1.50 per 10 minutes.' },
  ];

  return (
    <>
      <Navbar active="Home" />

      {/* ── 1. HERO ── */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Self-service laundromat Geneva
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>
                Self-Service Laundromat in Geneva — Open Every Day, 7 AM to 11 PM
              </h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>Lavorama is Geneva's most modern self-service laundromat, located at Rue des Pâquis 43. Industrial washers from 7–20 kg, detergent always included, no coins needed. Open every day of the year.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-orange">Book a Machine Online</a>
                <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">💬 WhatsApp Us</a>
              </div>
            </div>
            <div className="hero-img" style={{ minWidth: '300px' }}>
              <img
                src="/reset/girl with bucket showing up 1 finger cutout.png"
                alt="Self-service laundromat Geneva"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MACHINES ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>Our Self-Service Washing Machines in Geneva</h2>
          <div className="pricing-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {machines.map((m, i) => (
              <div key={i} style={{ background: m.popular ? 'var(--primary-light)' : 'var(--bg-light)', borderRadius: '20px', padding: '2rem', border: m.popular ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative', transform: m.popular ? 'scale(1.03)' : 'none' }}>
                {m.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontFamily: 'Fredoka', whiteSpace: 'nowrap' }}>Most Popular</div>}
                <h3 style={{ fontFamily: 'Fredoka', color: m.color, fontSize: '1.4rem', marginBottom: '0.25rem' }}>{m.kg} Washer</h3>
                <div style={{ fontSize: '2.2rem', fontFamily: 'Fredoka', fontWeight: 700, marginBottom: '0.25rem' }}>{m.price}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{m.label}</p>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="section bg-light">
        <div className="container">
          <h2>How It Works — Step by Step</h2>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '65px', height: '65px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', margin: '0 auto 1rem', boxShadow: '0 4px 15px rgba(108,191,191,0.3)' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>Step {i + 1}</h3>
                <h4 style={{ fontFamily: 'Fredoka', color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.82rem', marginBottom: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY LAVORAMA ── */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" style={{ position: 'absolute', top: '20%', right: '6%', width: '80px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>Why Use Lavorama's Laundromat in Geneva</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            {['Open 7 days a week including Sundays and public holidays','No coins — pay by touchscreen, clean and easy','Eco-certified professional detergent always included — no extra cost','Industrial machines clean better than any home washer','Book your slot online — no waiting around','Free Wi-Fi and comfortable lounge while you wait','Machines for 7 kg, 15 kg, and 20 kg — something for every need','Central location in Pâquis — easy to reach from anywhere in Geneva'].map(f => (
              <div key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'white' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT YOU CAN WASH ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px', minWidth: '260px', position: 'relative', textAlign: 'center' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-10px', left: '-10px', width: '200px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/lavorama-geneva-pointing-washer-self-service-lifestyle.jpeg" alt="Wash laundry Geneva" style={{ maxWidth: '85%', position: 'relative', zIndex: 1, borderRadius: '12px' }} />
            </div>
            <div style={{ flex: '1 1 280px', minWidth: '260px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem' }}>What Can You Wash at Lavorama Geneva?</h2>
              <p style={{ marginBottom: '1.5rem' }}>Our industrial machines handle virtually any type of laundry — things your home washer simply cannot manage:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--primary)', flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LOCATION ── */}
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Lavorama Geneva — Location &amp; Hours</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[{ icon: '📍', title: 'Address', val: 'Rue des Pâquis 43\n1201 Genève, Switzerland' },{ icon: '🕐', title: 'Hours', val: 'Mon–Sun: 7:00–23:00\nEvery day of the year' },{ icon: '📞', title: 'Phone / WhatsApp', val: '+41 79 565 41 42' }].map(item => (
              <div key={item.icon} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem 2rem', boxShadow: '0 4px 15px rgba(108,191,191,0.1)', minWidth: '200px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.3rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, whiteSpace: 'pre-line', marginBottom: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>We're a short walk from Cornavin train station and easily accessible from Pâquis, Eaux-Vives, Plainpalais, Carouge, and the Geneva city centre by tram, foot, or bike.</p>
          <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+1201+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Get Directions on Google Maps</a>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2>Self-Service Laundromat Geneva — Frequently Asked Questions</h2>
          <div style={{ background: 'var(--bg-light)', borderRadius: '20px', padding: '2rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.05rem' }}>{faq.q}</span>
                  <span style={{ color: 'var(--secondary)', fontSize: '1.3rem', fontWeight: 700, flexShrink: 0 }}>{faqOpen === i ? '−' : '+'}</span>
                </div>
                {faqOpen === i && <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default SelfService;
