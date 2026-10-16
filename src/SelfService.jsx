import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

function SelfService() {
  const { lang } = useLang();
  const [faqOpen, setFaqOpen] = useState(null);

  const t = {
    fr: {
      badge: "Laverie libre-service Genève",
      heroTitle: "Laverie Libre-Service à Genève — Ouvert 7j/7, 7h à 23h",
      heroDesc: "Deux laveries Lavorama ouvertes à Genève : Rue des Pâquis 43 et Rue Dancet 2 (Plainpalais). Machines industrielles de 7 kg à 20 kg et notre machine grande capacité de 30 kg disponible à Plainpalais, détergent éco-certifié toujours inclus, sans pièces de monnaie. Ouvert tous les jours de l'année.",
      whatsAppUs: "💬 WhatsApp",
      machinesTitle: "Nos Machines à Laver en Libre-Service à Genève",
      machines: [
        { kg: '7 kg', price: 'CHF 6', label: 'par lavage', color: 'var(--primary)', desc: 'Idéal pour le linge personnel quotidien. Rapide, efficace et parfaitement propre. Détergent inclus.' },
        { kg: '15 kg', price: 'CHF 12', label: 'par lavage', color: 'var(--secondary)', popular: true, desc: 'Idéal pour les familles, les draps et les serviettes. Détergent professionnel inclus. Notre machine la plus populaire.' },
        { kg: '20 kg', price: 'CHF 16', label: 'par lavage', color: 'var(--primary)', desc: 'Parfait pour les couettes, oreillers, manteaux d\'hiver et équipements de sport. Résultats industriels. Détergent inclus.' },
        { kg: '30 kg', price: 'CHF 22', label: 'par lavage (Plainpalais)', color: 'var(--secondary)', desc: 'Machine grande capacité exclusive de 30 kg à Plainpalais — une première à Genève ! Parfait pour les très grandes couettes et le volume.' },
        { kg: 'Sèche-linge', price: 'CHF 1.50', label: 'par 10 min', color: '#64748B', desc: 'Séchage rapide et efficace disponible immédiatement après votre lavage. Programmes doux ou intensifs.' },
      ],
      howItWorksTitle: "Comment ça marche — Étape par étape",
      steps: [
        { icon: '🧺', title: 'Choisissez votre machine', desc: 'Sélectionnez la taille adaptée à votre linge : 7 kg, 15 kg, 20 kg ou 30 kg à Plainpalais. Venez pendant les heures d’ouverture et utilisez toute machine disponible.' },
        { icon: '👕', title: 'Chargez votre linge', desc: 'Déposez vos vêtements dans le tambour. Pas besoin d\'apporter de détergent : il est automatiquement dosé à chaque cycle.' },
        { icon: '📱', title: 'Sélectionnez votre programme', desc: 'Choisissez votre programme sur l\'écran tactile : coton, délicat, synthétique, etc. Paiement tactile simple et rapide.' },
        { icon: '☕', title: 'Détendez-vous', desc: 'Profitez du Wi-Fi gratuit et de l\'espace lounge confortable pendant que la machine effectue son cycle complet.' },
        { icon: '💨', title: 'Séchez votre linge', desc: 'Transférez votre linge vers nos sèche-linge professionnels à CHF 1.50 par 10 minutes.' },
      ],
      whyTitle: "Pourquoi choisir la laverie Lavorama à Genève",
      whyFeatures: [
        'Ouvert 7j/7 y compris dimanches et jours fériés',
        'Sans pièces — paiement tactile simple et moderne',
        'Détergent professionnel éco-certifié toujours inclus',
        'Deux laveries ouvertes à Pâquis et à Plainpalais',
        'Machine grande capacité de 30 kg à Plainpalais',
        'Wi-Fi gratuit et espace d\'attente confortable',
        'Machines de 7 kg, 15 kg, 20 kg et 30 kg',
        'Emplacements centraux facilement accessibles à Genève'
      ],
      whatTitle: "Que pouvez-vous laver chez Lavorama Genève ?",
      whatDesc: "Nos machines industrielles traitent tous vos textiles, y compris ceux qui ne rentrent pas dans une machine domestique :",
      items: [
        'Vêtements du quotidien — chemises, jeans, t-shirts',
        'Linge de lit — draps, housses de couette, taies',
        'Serviettes de bain et peignoirs',
        'Couettes et oreillers (jusqu\'à 30 kg)',
        'Doudounes et manteaux d\'hiver',
        'Vêtements de sport et tenues d\'entraînement',
        'Rideaux et textiles d\'ameublement',
        'Couvertures et plaids',
        'Vêtements pour bébés et enfants',
        'Uniformes et vêtements professionnels'
      ],
      locationHeading: "Lavorama Genève — Emplacements & Horaires",
      locationsCards: [
        { icon: '📍', title: 'Emplacements', val: 'Pâquis : Rue des Pâquis 43\nPlainpalais : Rue Dancet 2 — Ouvert' },
        { icon: '🕐', title: 'Horaires', val: 'Lun–Dim : 7h00–23h00\n7 jours sur 7' },
        { icon: '📞', title: 'Tél. / WhatsApp', val: '+41 79 565 41 42' }
      ],
      locationDesc: "À quelques minutes de la gare Cornavin pour Pâquis, et au cœur de Plainpalais. Facilement accessible à pied, en tram ou à vélo.",
      mapsBtn: "Voir sur Google Maps",
      faqsTitle: "Laverie Libre-Service Genève — Foire aux questions",
      faqs: [
        { q: 'Quel est le prix d\'une laverie automatique à Genève ?', a: 'Chez Lavorama, les prix débutent à CHF 6 pour une machine de 7 kg, avec détergent professionnel toujours inclus. Aucun frais caché.' },
        { q: 'Y a-t-il une laverie ouverte le dimanche à Genève ?', a: 'Oui — les deux laveries Lavorama (Pâquis et Plainpalais) sont ouvertes tous les jours y compris le dimanche, de 7h à 23h.' },
        { q: 'Faut-il apporter sa propre lessive chez Lavorama ?', a: 'Non. Un détergent professionnel éco-certifié est automatiquement inclus et injecté à chaque lavage sans supplément.' },
        { q: 'Faut-il des pièces de monnaie pour les machines ?', a: 'Aucune pièce nécessaire. Toutes les machines sont contrôlées et payées par écran tactile cashless.' },
        { q: 'Peut-on laver une grande couette chez Lavorama Genève ?', a: 'Absolument. Nos machines industrielles de 20 kg et notre machine grande capacité de 30 kg à Plainpalais sont spécialement conçues pour les couettes volumineuses, oreillers et manteaux.' },
        { q: 'Où se trouvent vos laveries à Genève ?', a: 'Deux laveries Lavorama sont ouvertes à Genève : Rue des Pâquis 43 (1201 Genève) et Rue Dancet 2 (1205 Genève — Plainpalais).' },
      ]
    },
    en: {
      badge: "Self-service laundromat Geneva",
      heroTitle: "Self-Service Laundromat in Geneva — Open Every Day, 7 AM to 11 PM",
      heroDesc: "Two Lavorama laundromats now open in Geneva: Rue des Pâquis 43 and Rue Dancet 2 (Plainpalais). Industrial washers from 7–20 kg and our large-capacity 30 kg machine at Plainpalais, detergent always included, no coins needed. Open every day of the year from 7 AM to 11 PM.",
      whatsAppUs: "💬 WhatsApp Us",
      machinesTitle: "Our Self-Service Washing Machines in Geneva",
      machines: [
        { kg: '7 kg', price: 'CHF 6', label: 'per wash', color: 'var(--primary)', desc: 'Perfect for a regular weekly load of personal clothes. Fast, efficient, and professionally clean. Detergent included.' },
        { kg: '15 kg', price: 'CHF 12', label: 'per wash', color: 'var(--secondary)', popular: true, desc: 'Ideal for families, larger households, or mixed loads. Handles bed linen, towels, and bigger items with ease. Detergent included. Our most popular machine.' },
        { kg: '20 kg', price: 'CHF 16', label: 'per wash', color: 'var(--primary)', desc: 'The best machine for bulky items — duvets, pillows, winter coats, sleeping bags, sports gear, and curtains. Industrial results. Detergent included.' },
        { kg: '30 kg', price: 'CHF 22', label: 'per wash (Plainpalais)', color: 'var(--secondary)', desc: 'Our exclusive large-capacity 30 kg machine is available at Plainpalais — a first in Geneva! Perfect for king-size duvets and heavy loads.' },
        { kg: 'Dryer', price: 'CHF 1.50', label: 'per 10 min', color: '#64748B', desc: 'Fast, efficient drying available immediately after your wash. Choose between gentle and intensive programs.' },
      ],
      howItWorksTitle: "How It Works — Step by Step",
      steps: [
        { icon: '🧺', title: 'Choose Your Machine', desc: 'Choose the size that fits your load — 7 kg, 15 kg, 20 kg, or 30 kg at Plainpalais. Come during opening hours and use any available machine.' },
        { icon: '👕', title: 'Load Your Laundry', desc: 'Place your clothes in the drum. No need to bring detergent — it\'s automatically dispensed at the perfect dose.' },
        { icon: '📱', title: 'Select Program on the Touchscreen', desc: 'Pick the right wash program — cotton, delicates, sportswear, quick wash, and more. Pay directly on screen.' },
        { icon: '☕', title: 'Relax While We Do the Work', desc: 'Grab the free Wi-Fi, use the lounge, or step out — your machine handles everything. Return when the cycle is done.' },
        { icon: '💨', title: 'Move to the Dryer', desc: 'Transfer to one of our dryers for fast, complete drying at CHF 1.50 per 10 minutes.' },
      ],
      whyTitle: "Why Use Lavorama's Laundromat in Geneva",
      whyFeatures: [
        'Open 7 days a week including Sundays and public holidays',
        'No coins — pay by touchscreen, clean and easy',
        'Eco-certified professional detergent always included — no extra cost',
        'Two laundromats now open in Pâquis and Plainpalais',
        'Large-capacity 30 kg machine available at Plainpalais',
        'Free Wi-Fi and comfortable lounge while you wait',
        'Machines for 7 kg, 15 kg, 20 kg, and 30 kg',
        'Central locations easy to reach from anywhere in Geneva'
      ],
      whatTitle: "What Can You Wash at Lavorama Geneva?",
      whatDesc: "Our industrial machines handle virtually any type of laundry — things your home washer simply cannot manage:",
      items: [
        'Everyday clothing — shirts, jeans, underwear, socks',
        'Bed linen — sheets, pillowcases, duvet covers',
        'Towels and bathrobes',
        'Duvets and pillows (up to 30 kg)',
        'Winter coats and down jackets',
        'Sportswear and gym clothes',
        'Curtains and household textiles',
        'Rugs and blankets',
        'Baby and children\'s clothing',
        'Work uniforms'
      ],
      locationHeading: "Lavorama Geneva — Locations & Hours",
      locationsCards: [
        { icon: '📍', title: 'Locations', val: 'Pâquis: Rue des Pâquis 43\nPlainpalais: Rue Dancet 2 — Now open' },
        { icon: '🕐', title: 'Hours', val: 'Mon–Sun: 7:00–23:00\nEvery day of the year' },
        { icon: '📞', title: 'Phone / WhatsApp', val: '+41 79 565 41 42' }
      ],
      locationDesc: "We're a short walk from Cornavin train station and easily accessible from Pâquis, Eaux-Vives, Plainpalais, Carouge, and the Geneva city centre by tram, foot, or bike.",
      mapsBtn: "Get Directions on Google Maps",
      faqsTitle: "Self-Service Laundromat Geneva — Frequently Asked Questions",
      faqs: [
        { q: 'What is the cheapest laundromat in Geneva?', a: 'Lavorama offers washes starting from CHF 6 for a 7 kg machine — with detergent always included. No hidden costs.' },
        { q: 'Is there a laundromat open on Sunday in Geneva?', a: 'Yes — Lavorama is open every day of the week including Sunday, from 7 AM to 11 PM.' },
        { q: 'Do I need to bring my own detergent to Lavorama?', a: 'No. Professional eco-certified detergent is automatically included in every wash at no extra cost.' },
        { q: 'Do I need coins for the machines at Lavorama Geneva?', a: 'No coins needed. All machines are operated and paid for via touchscreen. Simple and cashless.' },
        { q: 'Can I wash a duvet at Lavorama Geneva?', a: 'Absolutely. Our 20 kg industrial washers and 30 kg machine at Plainpalais are designed for duvets, pillows, winter coats, and other bulky items.' },
        { q: 'Where are the laundromats in Geneva?', a: 'Two Lavorama laundromats now open in Geneva: Rue des Pâquis 43 and Rue Dancet 2 (Plainpalais) — easily accessible from anywhere in Geneva.' },
      ]
    }
  };

  const c = t[lang] || t.en;

  return (
    <>
      <Navbar active="/self-service-laundromat-geneva" />

      {/* ── 1. HERO ── */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {c.badge}
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>
                {c.heroTitle}
              </h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>{c.heroDesc}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">{c.whatsAppUs}</a>
              </div>
            </div>
            <div className="hero-img" style={{ minWidth: '300px' }}>
              <img
                src="/reset/girl with folded items cutout.png"
                alt="Self-service laundromat Geneva"
                width="400"
                height="450"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MACHINES ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>{c.machinesTitle}</h2>
          <div className="pricing-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {c.machines.map((m, i) => (
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
          <h2>{c.howItWorksTitle}</h2>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {c.steps.map((s, i) => (
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
        <img src="/reset/imgi_16_10.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '6%', width: '80px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>{c.whyTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            {c.whyFeatures.map(f => (
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
              <img src="/reset/imgi_41_s2-300x291.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '-10px', left: '-10px', width: '200px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/lavorama-geneva-pointing-washer-self-service-lifestyle.jpeg" alt="Wash laundry Geneva" width="300" height="225" loading="lazy" style={{ maxWidth: '85%', height: 'auto', position: 'relative', zIndex: 1, borderRadius: '12px' }} />
            </div>
            <div style={{ flex: '1 1 280px', minWidth: '260px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem' }}>{c.whatTitle}</h2>
              <p style={{ marginBottom: '1.5rem' }}>{c.whatDesc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {c.items.map(item => (
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
          <h2>{c.locationHeading}</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {c.locationsCards.map(item => (
              <div key={item.icon} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem 2rem', boxShadow: '0 4px 15px rgba(108,191,191,0.1)', minWidth: '200px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, whiteSpace: 'pre-line', marginBottom: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>{c.locationDesc}</p>
          <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+1201+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-teal">{c.mapsBtn}</a>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2>{c.faqsTitle}</h2>
          <div style={{ background: 'var(--bg-light)', borderRadius: '20px', padding: '2rem' }}>
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

export default SelfService;
