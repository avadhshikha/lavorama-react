import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

function About() {
  const { lang } = useLang();
  const [email, setEmail] = useState('');

  const t = {
    fr: {
      title: "À propos de nous",
      priorityTitle: "Votre lessive,\nNotre priorité",
      priorityP1: "Lavorama a été fondé avec une idée simple : rendre la lessive sans effort pour les résidents de Genève. Situés à la rue des Pâquis, nous proposons des machines industrielles performantes dans un environnement propre et moderne.",
      priorityP2: "Que vous fassiez votre lessive vous-même ou utilisiez notre service de ramassage gratuit, nous garantissons des résultats impeccables à chaque fois.",
      solutionsTitle: "Des solutions pour\nune vie active",
      solutionsDesc: "Nous savons que votre temps est précieux. C'est pourquoi nous avons équipé notre laverie de machines rapides et de détergents professionnels, pour que vous passiez moins de temps à laver et plus de temps à profiter de Genève.",
      solutionsCta: "Nous contacter",
      cleaningTitle: "Pas de décoloration,\nJuste de la propreté",
      cleaningDesc: "Nos machines contrôlent précisément la température et l'essorage pour protéger vos vêtements. Les détergents écologiques inclus éliminent les taches tenaces tout en préservant les couleurs.",
      perfumeTitle: "Parfum Premium",
      perfumeDesc: "Vos vêtements sentent le frais et le propre pendant des semaines.",
      detergentTitle: "Détergent de confiance",
      detergentDesc: "Produits biodégradables certifiés, doux pour la peau et l'environnement.",
      newsletterTitle: "Rejoignez notre\nNewsletter",
      newsletterDesc: "Inscrivez-vous pour recevoir des offres exclusives et 20% de réduction sur votre première commande.",
      newsletterPlaceholder: "Votre e-mail ici",
      newsletterCta: "S'inscrire maintenant",
      newsletterSuccess: "Inscrit(e) avec succès !"
    },
    en: {
      title: "About Us",
      priorityTitle: "Your Laundry,\nOur Priority",
      priorityP1: "Lavorama was founded with a simple idea: making laundry effortless for Geneva residents. Located on Rue des Pâquis, we offer high-performance industrial machines in a clean, modern environment.",
      priorityP2: "Whether you do your own laundry or use our free pickup service, we guarantee flawless results every single time.",
      solutionsTitle: "Laundry Solutions For\nA Busy Life",
      solutionsDesc: "We know your time is valuable. That's why we equipped our laundromat with fast machines and professional detergents, so you spend less time washing and more time enjoying Geneva.",
      solutionsCta: "Contact Us",
      cleaningTitle: "No Fading,\nOnly Cleaning",
      cleaningDesc: "Our machines precisely control temperature and spin to protect your garments. The included eco-friendly detergents remove tough stains while preserving colors.",
      perfumeTitle: "Premium Perfume",
      perfumeDesc: "Your clothes smell fresh and clean for weeks.",
      detergentTitle: "Trusted Detergent",
      detergentDesc: "Certified biodegradable products, gentle on the skin and the environment.",
      newsletterTitle: "Join Our\nNewsletter",
      newsletterDesc: "Subscribe to receive exclusive offers and 20% off your first order.",
      newsletterPlaceholder: "Your Email Here",
      newsletterCta: "Subscribe Now",
      newsletterSuccess: "Successfully subscribed!"
    }
  };

  const c = t[lang];

  return (
    <>
      <Navbar active="/about" />

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
          }}>{c.title}</h1>
        </div>
      </section>

      {/* 2. Your Laundry, Our Priority */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container two-col-section">
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {c.priorityTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}<br/></React.Fragment>)}
            </h2>
            <p>{c.priorityP1}</p>
            <p>{c.priorityP2}</p>
          </div>
          <div className="image-wrapper" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '320px', opacity: 0.4, zIndex: 0 }} />
            <img
              src="/reset/model/lavorama-geneva-surprised-laundry-basket-studio-portrait.png"
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
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>
            {c.solutionsTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}<br/></React.Fragment>)}
          </h2>
          <p style={{ color: 'white', fontWeight: 400, maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            {c.solutionsDesc}
          </p>
          <a href="/contact" className="btn" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '0.7rem 2rem' }}>{c.solutionsCta}</a>
        </div>
      </section>

      {/* 4. No Fading, Only Cleaning */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container two-col-section">
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {c.cleaningTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}<br/></React.Fragment>)}
            </h2>
            <p>{c.cleaningDesc}</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card" style={{ background: 'var(--bg-light)', borderRadius: '16px', padding: '2rem', textAlign: 'center', flex: 1 }}>
              <img src="/reset/imgi_11_7-rose_512.png" alt="Premium Perfume" style={{ width: '55px', marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', fontFamily: 'Fredoka', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.perfumeTitle}</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{c.perfumeDesc}</p>
            </div>
            <div className="feature-card" style={{ background: 'var(--bg-light)', borderRadius: '16px', padding: '2rem', textAlign: 'center', flex: 1 }}>
              <img src="/reset/imgi_12_25-washing-powder_512.png" alt="Trusted Detergent" style={{ width: '55px', marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', fontFamily: 'Fredoka', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.detergentTitle}</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{c.detergentDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join Our Newsletter */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="container two-col-section" style={{ alignItems: 'flex-end', gap: '2rem' }}>
          <div style={{ width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '10%', left: '0', width: '320px', opacity: 0.25, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img
              src="/reset/model/lavorama-geneva-folded-linens-studio-portrait.png"
              alt="Newsletter model"
              style={{ maxHeight: '420px', position: 'relative', zIndex: 1 }}
            />
          </div>
          <div style={{ width: '50%', padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', color: 'white', marginBottom: '1rem' }}>
              {c.newsletterTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}<br/></React.Fragment>)}
            </h2>
            <p style={{ color: 'white', fontWeight: 400, fontSize: '0.95rem' }}>
              {c.newsletterDesc}
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => { e.preventDefault(); alert(c.newsletterSuccess); setEmail(''); }}
              style={{ marginTop: '1.5rem' }}
            >
              <input
                type="email"
                placeholder={c.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-orange">{c.newsletterCta}</button>
            </form>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default About;
