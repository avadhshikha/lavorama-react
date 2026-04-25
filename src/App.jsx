import React, { useState } from 'react';
import About from './About.jsx';
import Pickup from './Pickup.jsx';
import Contact from './Contact.jsx';
import SelfService from './SelfService.jsx';
import Pricing from './Pricing.jsx';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

function App() {
  const { t } = useLang();
  const h = t.home;
  const [faqOpen, setFaqOpen] = useState(null);
  const currentPage = window.location.pathname;

  if (currentPage === '/about') return <About />;
  if (currentPage === '/pickup') return <Pickup />;
  if (currentPage === '/contact') return <Contact />;
  if (currentPage === '/self-service-laundromat-geneva') return <SelfService />;
  if (currentPage === '/laundry-prices-geneva') return <Pricing />;

  return (
    <>
      <Navbar active="/" />

      {/* ── 1. HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="text-wrapper" style={{ paddingBottom: '5rem', position: 'relative' }}>
            <img src="/reset/imgi_42_ele10-284x300.png" className="dots-pattern" alt="" style={{ width: '100px' }} />
            <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.9rem', fontFamily: 'Fredoka', marginBottom: '1.2rem' }}>
              {h.heroBadge}
            </div>
            <h1>{h.heroTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < 2 && <br />}</React.Fragment>)}</h1>
            <p style={{ maxWidth: '440px' }}>{h.heroP1}</p>
            <p style={{ fontSize: '0.95rem', maxWidth: '440px' }}>{h.heroP2}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="#pricing" className="btn btn-orange">{h.heroCta1}</a>
              <a href="/pickup" className="btn btn-teal">{h.heroCta2}</a>
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
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{h.servicesLabel}</p>
          <h2>{h.servicesTitle}</h2>
          <p style={{ textAlign: 'center', maxWidth: '620px', margin: '-1.5rem auto 3rem' }}>{h.servicesSubtitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Self-Service */}
            <div style={{ background: 'linear-gradient(160deg,#E2F7F7 0%,#F5FDFD 100%)', borderRadius: '20px', padding: '2.5rem', border: '1px solid var(--border)' }}>
              <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(108,191,191,0.2)' }}>🏪</div>
              <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                {h.selfServiceTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}{i === 0 && <br />}</React.Fragment>)}
              </h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{h.selfServiceDesc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {h.selfServiceFeatures.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>)}
              </ul>
              <a href="#pricing" className="btn btn-teal">{h.selfServiceCta}</a>
            </div>
            {/* Pickup */}
            <div style={{ background: 'linear-gradient(160deg,#FFF8EC 0%,#FFFDF6 100%)', borderRadius: '20px', padding: '2.5rem', border: '1px solid #FFE0A0' }}>
              <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(247,173,63,0.2)' }}>🚚</div>
              <h3 style={{ fontFamily: 'Fredoka', color: 'var(--secondary)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                {h.pickupTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}{i === 0 && <br />}</React.Fragment>)}
              </h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{h.pickupDesc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {h.pickupFeatures.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}><span style={{ color: 'var(--secondary)' }}>✓</span>{f}</li>)}
              </ul>
              <a href="/pickup" className="btn btn-orange">{h.pickupCta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRICING ── */}
      <section id="pricing" className="section bg-light">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{h.pricingLabel}</p>
          <h2>{h.pricingTitle}</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-1.5rem auto 3rem' }}>{h.pricingSubtitle}</p>
          <div className="pricing-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', alignItems: 'start' }}>
            {h.pricingPlans.map((plan, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.12)', border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontFamily: 'Fredoka', whiteSpace: 'nowrap' }}>{h.mostPopular}</div>}
                <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{plan.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{plan.kg}</p>
                <div style={{ fontSize: '2.4rem', fontFamily: 'Fredoka', color: 'var(--text-main)', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.price}</div>
                <p style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>{plan.unit}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {plan.features.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>)}
                </ul>
                <a href="/contact" className={`btn ${plan.popular ? 'btn-teal' : 'btn-secondary'}`} style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: '0.9rem' }}>{h.bookNow}</a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ marginTop: '4rem', background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
            <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '2rem', textAlign: 'center' }}>{h.faqTitle}</h3>
            {h.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < h.faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.05rem' }}>{faq.q}</span>
                  <span style={{ color: 'var(--secondary)', fontSize: '1.4rem', fontWeight: 700, flexShrink: 0 }}>{faqOpen === i ? '−' : '+'}</span>
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
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{h.whyLabel}</p>
          <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>{h.whyTitle}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: 400 }}>{h.whySubtitle}</p>
          <div className="why-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {h.whyFeatures.map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.25)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 400, marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="why-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '1.5rem' }}>
            {h.whyBenefits.map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h4 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.1rem', marginBottom: '0.5rem' }}>✦ {f.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 400, marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="section bg-light">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{h.testimonialsLabel}</p>
          <h2>{h.testimonialsTitle}</h2>
          <p style={{ textAlign: 'center', maxWidth: '540px', margin: '-1.5rem auto 3rem' }}>{h.testimonialsSubtitle}</p>
          <div className="testimonial-grid">
            {h.testimonials.map((t, i) => (
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

      {/* ── 6. CONTACT CTA ── */}
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{h.contactLabel}</p>
          <h2>{h.contactTitle}</h2>
          <p style={{ maxWidth: '620px', margin: '0 auto 2rem' }}>{h.contactDesc}</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {h.contactInfo.map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem 2rem', boxShadow: '0 4px 15px rgba(108,191,191,0.12)', minWidth: '200px', flex: '1 1 200px', maxWidth: '300px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.label}</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-orange">{h.contactCta1}</a>
            <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+Geneva" target="_blank" rel="noopener noreferrer" className="btn btn-teal">{h.contactCta2}</a>
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER ── */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="container newsletter-section-inner" style={{ display: 'flex', alignItems: 'flex-end', gap: '3rem' }}>
          <div style={{ width: '50%', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexShrink: 0 }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '10%', left: 0, width: '300px', opacity: 0.2, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img src="/reset/girl with folded items cutout.png" alt="Lavorama laundry service Geneva" style={{ maxHeight: '420px', position: 'relative', zIndex: 1 }} />
          </div>
          <div style={{ flex: 1, padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.5rem', color: 'white', marginBottom: '0.75rem' }}>
              {h.newsletterTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}{i < 2 && <br />}</React.Fragment>)}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>{h.newsletterDesc}</p>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert(h.newsletterSuccess); }}>
              <input type="email" placeholder={h.newsletterPlaceholder} required />
              <button type="submit" className="btn btn-orange">{h.newsletterCta}</button>
            </form>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default App;
