import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

function Pricing() {
  const { lang } = useLang();
  const [faqOpen, setFaqOpen] = useState(null);

  const t = {
    fr: {
      badge: "Tarifs clairs & transparents",
      heroTitle: "Tarifs Blanchisserie & Laverie à Genève",
      heroDesc: "Chez Lavorama Genève, nous croyons à la transparence totale des prix. Ce que vous voyez est ce que vous payez — sans supplément, sans frais cachés. Le détergent professionnel éco-certifié est inclus dans chaque lavage.",
      seePrices: "Voir les tarifs",
      sectionTitle: "Prix des Machines à Laver en Libre-Service — Genève",
      sectionSubtitle: "Clair, abordable, sans frais cachés. Détergent toujours inclus — pas de pièces nécessaires.",
      mostPopular: "Le plus populaire",
      machines: [
        { title: 'Petite machine', kg: 'jusqu\'à 7 kg', price: 'CHF 6', label: 'par lavage', features: ['Détergent professionnel inclus', 'Cycle guidé par écran tactile', 'Programmes multiples', 'Wi-Fi gratuit pendant l\'attente', 'Idéal pour le linge personnel hebdomadaire'], color: 'var(--primary)' },
        { title: 'Machine familiale', kg: 'jusqu\'à 15 kg', price: 'CHF 12', label: 'par lavage', popular: true, features: ['Détergent professionnel inclus', 'Idéal pour les familles à Genève', 'Couettes & draps acceptés', 'Cycle guidé par écran tactile', 'Wi-Fi gratuit'], color: 'var(--primary)' },
        { title: 'Grande machine', kg: 'jusqu\'à 20 kg', price: 'CHF 16', label: 'par lavage', features: ['Détergent professionnel inclus', 'Idéal pour oreillers, couettes, équipements sportifs', 'Résultats de lavage industriels', 'Cycle guidé par écran tactile', 'Wi-Fi gratuit'], color: 'var(--primary)' },
        { title: 'Machine XL (Plainpalais)', kg: 'jusqu\'à 30 kg', price: 'CHF 22', label: 'par lavage', features: ['Détergent professionnel inclus', 'Exclusivité Plainpalais (Rue Dancet 2)', 'Idéal pour très grandes couettes et volume', 'Résultats industriels puissants', 'Wi-Fi gratuit'], color: 'var(--secondary)' },
        { title: 'Sèche-linge', kg: 'par 10 minutes', price: 'CHF 1.50', label: 'par 10 min', features: ['Paiement par tranche de 10 min', 'Cycles doux & intensifs', 'Disponible juste après votre lavage', 'Rapide, efficace, fiable'], color: '#64748B' },
      ],
      includedTitle: "Ce qui est toujours inclus dans votre tarif",
      includedFeatures: [
        { icon: '🌿', title: 'Détergent éco-certifié', desc: 'Formule professionnelle biodégradable — dosée automatiquement à chaque lavage sans supplément.' },
        { icon: '📱', title: 'Guidage par écran tactile', desc: 'Écran tactile simple étape par étape. Aucune expérience ni pièce requise.' },
        { icon: '📶', title: 'Wi-Fi gratuit', desc: 'Wi-Fi haut débit et espace lounge confortable pendant votre visite.' },
        { icon: '📍', title: 'Deux emplacements ouverts', desc: 'Pâquis (Rue des Pâquis 43) et Plainpalais (Rue Dancet 2), ouverts 7j/7 de 7h à 23h.' },
        { icon: '🏠', title: 'Espace lounge', desc: 'Sièges confortables et distributeurs automatiques pendant que votre linge tourne.' },
        { icon: '🔒', title: 'Machines modernes & sûres', desc: 'Machines industrielles neuves et entretenues dans un cadre propre et sécurisé.' },
      ],
      valueTitle: "Lavorama est-elle la laverie la plus économique de Genève ?",
      valueDesc: "Avec des lavages à partir de CHF 6 seulement — détergent inclus — Lavorama offre un rapport qualité-prix imbattable à Genève. Avec nos machines industrielles de 7 kg à 30 kg, vous obtenez des résultats qu'aucune machine domestique ne peut égaler.",
      faqsTitle: "Tarifs Laverie Genève — Foire aux questions",
      faqs: [
        { q: 'Combien coûte une laverie automatique à Genève ?', a: 'Chez Lavorama, les prix débutent à CHF 6 pour un lavage de 7 kg, CHF 12 pour 15 kg, CHF 16 pour 20 kg, et CHF 22 pour notre machine 30 kg à Plainpalais. Le détergent est toujours inclus.' },
        { q: 'Le détergent est-il compris dans le prix chez Lavorama ?', a: 'Oui, toujours. Un détergent professionnel éco-certifié est automatiquement injecté sans aucun surcoût.' },
        { q: 'Combien coûte le sèche-linge chez Lavorama Genève ?', a: 'Le sèche-linge coûte CHF 1.50 par tranche de 10 minutes.' },
      ]
    },
    en: {
      badge: "Transparent pricing",
      heroTitle: "Laundry Prices in Geneva",
      heroDesc: "At Lavorama Geneva, we believe in total pricing transparency. What you see is what you pay — no surcharges, no surprise fees. Professional eco-certified detergent is included in every single wash.",
      seePrices: "See Prices",
      sectionTitle: "Self-Service Washing Machine Prices — Geneva",
      sectionSubtitle: "Clear, affordable, no hidden fees. Detergent is always included — no coins needed.",
      mostPopular: "Most Popular",
      machines: [
        { title: 'Washer Small', kg: 'up to 7 kg', price: 'CHF 6', label: 'per wash', features: ['Professional detergent included', 'Touchscreen-guided cycle', 'Multiple wash programs', 'Free Wi-Fi while you wait', 'Perfect for weekly personal laundry'], color: 'var(--primary)' },
        { title: 'Washer Medium', kg: 'up to 15 kg', price: 'CHF 12', label: 'per wash', popular: true, features: ['Professional detergent included', 'Ideal for families in Geneva', 'Handles duvets & bed linen', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'], color: 'var(--primary)' },
        { title: 'Washer Large', kg: 'up to 20 kg', price: 'CHF 16', label: 'per wash', features: ['Professional detergent included', 'Best for pillows, duvets, sports gear', 'Industrial-grade wash results', 'Touchscreen-guided cycle', 'Free Wi-Fi while you wait'], color: 'var(--primary)' },
        { title: 'Washer XL (Plainpalais)', kg: 'up to 30 kg', price: 'CHF 22', label: 'per wash', features: ['Professional detergent included', 'Exclusive at Plainpalais (Rue Dancet 2)', 'Best for extra large duvets and volume', 'Industrial-grade power', 'Free Wi-Fi while you wait'], color: 'var(--secondary)' },
        { title: 'Dryer', kg: 'per 10 minutes', price: 'CHF 1.50', label: 'per 10 min', features: ['Pay per 10-min increment', 'Gentle & intensive drying cycles', 'Available right after your wash', 'Fast, efficient, reliable'], color: '#64748B' },
      ],
      includedTitle: "What's Always Included in Your Price",
      includedFeatures: [
        { icon: '🌿', title: 'Eco-Certified Detergent', desc: 'Professional, biodegradable formula — automatically dispensed for every wash at no extra cost.' },
        { icon: '📱', title: 'Touchscreen Guidance', desc: 'Simple touchscreen guides you step by step. No experience or coins needed.' },
        { icon: '📶', title: 'Free Wi-Fi', desc: 'Free Wi-Fi and comfortable lounge area during your visit.' },
        { icon: '📍', title: 'Two Open Locations', desc: 'Pâquis (Rue des Pâquis 43) and Plainpalais (Rue Dancet 2), open 7 days a week, 7 AM to 11 PM.' },
        { icon: '🏠', title: 'Comfortable Lounge', desc: 'Comfortable seating and vending machines while you wait.' },
        { icon: '🔒', title: 'Safe, Secure Machines', desc: 'Modern, well-maintained industrial machines in a clean, safe environment.' },
      ],
      valueTitle: "Is Lavorama the Most Affordable Laundromat in Geneva?",
      valueDesc: "With washes starting at just CHF 6 — detergent included — Lavorama offers outstanding value for Geneva. With our industrial machines from 7 kg to 30 kg at Plainpalais, you get results no home washer can match.",
      faqsTitle: "Laundry Prices Geneva — FAQ",
      faqs: [
        { q: 'How much does it cost to use a laundromat in Geneva?', a: 'At Lavorama, prices start from CHF 6 for a 7 kg wash, CHF 12 for 15 kg, CHF 16 for 20 kg, and CHF 22 for our 30 kg machine at Plainpalais. Detergent is always included.' },
        { q: 'Is detergent included in the price at Lavorama?', a: 'Yes, always. Professional eco-certified detergent is automatically dispensed at no extra cost with every wash.' },
        { q: 'How much does a dryer cost at Lavorama Geneva?', a: 'The dryer costs CHF 1.50 per 10 minutes.' },
      ]
    }
  };

  const c = t[lang] || t.en;

  return (
    <>
      <Navbar active="/laundry-prices-geneva" />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {c.badge}
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>{c.heroTitle}</h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>{c.heroDesc}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#pricing-table" className="btn btn-orange">{c.seePrices}</a>
              </div>
            </div>
            <div className="hero-img">
              <img src="/reset/amazed happy in yellow tshirt cutout .png" alt="Laundry prices Geneva" width="360" height="400" style={{ maxWidth: '90%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SELF-SERVICE PRICING ── */}
      <section id="pricing-table" className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>{c.sectionTitle}</h2>
          <p style={{ textAlign: 'center', maxWidth: '580px', margin: '-1.5rem auto 3rem' }}>{c.sectionSubtitle}</p>
          <div className="pricing-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {c.machines.map((plan, i) => (
              <div key={i} style={{ background: plan.popular ? 'var(--primary-light)' : 'var(--bg-light)', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.12)', border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)', position: 'relative', transform: plan.popular ? 'scale(1.04)' : 'none' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontFamily: 'Fredoka', whiteSpace: 'nowrap' }}>{c.mostPopular}</div>}
                <h3 style={{ fontFamily: 'Fredoka', color: plan.color, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{plan.title}</h3>
                <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>{plan.kg}</p>
                <div style={{ fontSize: '2.4rem', fontFamily: 'Fredoka', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.price}</div>
                <p style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>{plan.label}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {plan.features.map(f => <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600 }}><span style={{ color: 'var(--primary)' }}>✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALWAYS INCLUDED ── */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '6%', width: '80px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>{c.includedTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {c.includedFeatures.map((f, i) => (
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
          <h2>{c.valueTitle}</h2>
          <p>{c.valueDesc}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2>{c.faqsTitle}</h2>
          <div style={{ background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
            {c.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < c.faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1rem', marginBottom: '1rem' }}>
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
