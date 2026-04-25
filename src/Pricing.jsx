import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

const faqs = [
  { q: 'How much does it cost to use a laundromat in Geneva?', a: 'At Lavorama, prices start from CHF 6 for a 7 kg wash, CHF 12 for 15 kg, and CHF 16 for 20 kg. Detergent is always included.' },
  { q: 'Is detergent included in the price at Lavorama?', a: 'Yes, always. Professional eco-certified detergent is automatically dispensed at no extra cost with every wash.' },
  { q: 'How much does a dryer cost at Lavorama Geneva?', a: 'The dryer costs CHF 1.50 per 10 minutes.' },
  { q: 'Is the laundry pickup service free in Geneva?', a: 'Pickup and delivery are free. You pay only for the washing and drying, quoted by weight.' },
];

function Pricing() {
  const [faqOpen, setFaqOpen] = useState(null);

  const machines = [
    { title: 'Washer Small', kg: '7 kg', price: 'CHF 6', label: 'per wash', features: ['Professional detergent included', 'Touchscreen-guided cycle', 'Multiple wash programs', 'Free Wi-Fi while you wait', 'Perfect for weekly personal laundry'], color: 'var(--primary)' },
    { title: 'Washer Medium', kg: '15 kg', price: 'CHF 12', label: 'per wash', popular: true, features: ['Professional detergent included', 'Ideal for families in Geneva', 'Handles duvets & bed linen', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'], color: 'var(--primary)' },
    { title: 'Washer Large', kg: '20 kg', price: 'CHF 16', label: 'per wash', features: ['Professional detergent included', 'Best for pillows, duvets, sports gear', 'Industrial-grade wash results', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'], color: 'var(--primary)' },
    { title: 'Dryer', kg: 'per 10 minutes', price: 'CHF 1.50', label: 'per 10 min', features: ['Pay per 10-min increment', 'Gentle & intensive drying cycles', 'Available right after your wash', 'Fast, efficient, reliable'], color: '#64748B' },
  ];

  return (
    <>
      <Navbar active="Home" />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Transparent pricing
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>Laundry Prices in Geneva</h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>At Lavorama Geneva, we believe in total pricing transparency. What you see is what you pay — no surcharges, no surprise fees. Professional detergent is included in every single wash.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#pricing" className="btn btn-orange">See Prices</a>
                <a href="/contact" className="btn btn-teal">Book Now</a>
              </div>
            </div>
            <div className="hero-img">
              <img src="/reset/amazed happy in yellow tshirt cutout .png" alt="Laundry prices Geneva" style={{ maxWidth: '90%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SELF-SERVICE PRICING ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>Self-Service Washing Machine Prices — Geneva</h2>
          <p style={{ textAlign: 'center', maxWidth: '580px', margin: '-1.5rem auto 3rem' }}>Clear, affordable, no hidden fees. Detergent is always included — no coins needed.</p>
          <div className="pricing-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {machines.map((plan, i) => (
              <div key={i} style={{ background: plan.popular ? 'var(--primary-light)' : 'var(--bg-light)', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.12)', border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative', transform: plan.popular ? 'scale(1.04)' : 'none' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontFamily: 'Fredoka', whiteSpace: 'nowrap' }}>Most Popular</div>}
                <h3 style={{ fontFamily: 'Fredoka', color: plan.color, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{plan.title}</h3>
                <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>{plan.kg}</p>
                <div style={{ fontSize: '2.4rem', fontFamily: 'Fredoka', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.price}</div>
                <p style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>{plan.label}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {plan.features.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>)}
                </ul>
                <a href="/contact" className={`btn ${plan.popular ? 'btn-teal' : ''}`} style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: '0.9rem', background: plan.popular ? '' : 'var(--primary)', color: 'white', borderRadius: '50px', padding: '0.7rem', textDecoration: 'none' }}>Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PICKUP PRICING ── */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px', minWidth: '260px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem' }}>Pickup &amp; Delivery Service Price</h2>
              <p>Our laundry pickup and delivery service across Geneva is priced based on the weight and volume of your laundry. Contact us for an exact quote — or request a pickup and we'll confirm your price before we collect.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                {[{ label: 'Free pickup', val: 'Included — always' },{ label: 'Free delivery', val: 'Included — always' },{ label: 'Washing & drying', val: 'Quoted by weight' },{ label: 'Folding', val: 'Always included' }].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', background: 'white', borderRadius: '12px', padding: '0.9rem 1.5rem', boxShadow: '0 2px 10px rgba(108,191,191,0.1)', borderLeft: '4px solid var(--primary)' }}>
                    <span style={{ fontFamily: 'Fredoka', fontSize: '1rem' }}>{r.label}</span>
                    <span style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1rem' }}>{r.val}</span>
                  </div>
                ))}
              </div>
              <a href="/pickup" className="btn btn-orange" style={{ marginTop: '2rem', display: 'inline-block' }}>Get a Free Pickup Quote</a>
            </div>
            <div style={{ flex: '1 1 260px', minWidth: '260px', position: 'relative', textAlign: 'center' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-10px', right: '-10px', width: '220px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/imgi_22_LAVORAMA-CUTE-MODEL-3-1-1024x792.png" alt="Laundry pickup delivery Geneva pricing" style={{ maxWidth: '80%', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ALWAYS INCLUDED ── */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" style={{ position: 'absolute', top: '20%', right: '6%', width: '80px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>What's Always Included in Your Price</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { icon: '🌿', title: 'Eco-Certified Detergent', desc: 'Professional, biodegradable formula — automatically dispensed for every wash at no extra cost.' },
              { icon: '📱', title: 'Touchscreen Guidance', desc: 'Simple touchscreen guides you step by step. No experience or coins needed.' },
              { icon: '📶', title: 'Free Wi-Fi', desc: 'Free Wi-Fi and comfortable lounge area during your visit.' },
              { icon: '💬', title: 'Staff on Site', desc: 'Friendly, helpful staff available if you need assistance.' },
              { icon: '🏠', title: 'Comfortable Lounge', desc: 'Comfortable seating and vending machines while you wait.' },
              { icon: '🔒', title: 'Safe, Secure Machines', desc: 'Modern, well-maintained machines in a clean, safe environment.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.25)', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 400, marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE COMPARISON ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2>Is Lavorama the Most Affordable Laundromat in Geneva?</h2>
          <p>With washes starting at just CHF 6 — detergent included — Lavorama offers outstanding value for Geneva. When you factor in the cost of detergent, electricity, and wear on a home machine, our prices are extremely competitive. And with our industrial machines, you get results no home washer can match.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/contact" className="btn btn-orange">Book a Machine Now</a>
            <a href="/pickup" className="btn btn-teal">Get Pickup Quote</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2>Laundry Prices Geneva — FAQ</h2>
          <div style={{ background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
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

export default Pricing;
