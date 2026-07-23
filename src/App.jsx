import React, { useEffect, useState } from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import SelfService from './SelfService.jsx';
import Pricing from './Pricing.jsx';
import Terms from './Terms.jsx';
import Privacy from './Privacy.jsx';
import Faq from './Faq.jsx';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?hl=fr&q=Lavorama+Gen%C3%A8ve&ludocid=13242875098853718847#lrd=0x478c65d2701fd2c9:0xb7c824bd180abb3f,1,,,,';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps?cid=13242875098853718847';
const GOOGLE_REVIEWS = [
  {
    name: 'Will Kueh',
    initial: 'W',
    isLocalGuide: true,
    excerpt: 'Easy to use and there are few language selection. Reasonable price and convenient.',
  },
  {
    name: 'Jack Tyler',
    initial: 'J',
    excerpt: 'Great experience at Lavorama. The Manager who was there provided a lot of assistance with the washer and dryer. He suggested a dryer that worked really well. The place is very clean as well. He was really good with my children who were being very rambunctious. I enjoyed my experience. Also, very affordable.',
  },
  {
    name: 'Sa Ma',
    initial: 'S',
    excerpt: 'Très bonne laverie, machines propres et efficaces. Le linge ressort toujours nickel et la lessive est incluse, ce qui est vraiment pratique. Pour moi, c’est l’une des meilleures laveries du coin. Je recommande sans hésiter.',
  },
];

function App() {
  const { t } = useLang();
  const h = t.home;
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [reviewsInteracting, setReviewsInteracting] = useState(false);
  const currentPage = window.location.pathname;
  const activeReview = GOOGLE_REVIEWS[activeReviewIndex];
  const reviewSliderPaused = reviewsPaused || reviewsInteracting;

  useEffect(() => {
    if (reviewSliderPaused) return undefined;

    const timer = window.setTimeout(() => {
      setActiveReviewIndex((current) => (current + 1) % GOOGLE_REVIEWS.length);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, [activeReviewIndex, reviewSliderPaused]);

  const showPreviousReview = () => {
    setActiveReviewIndex((current) => (current - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  const showNextReview = () => {
    setActiveReviewIndex((current) => (current + 1) % GOOGLE_REVIEWS.length);
  };

  if (currentPage === '/about') return <About />;
  if (currentPage === '/contact') return <Contact />;
  if (currentPage === '/self-service-laundromat-geneva') return <SelfService />;
  if (currentPage === '/laundry-prices-geneva') return <Pricing />;
  if (currentPage === '/terms') return <Terms />;
  if (currentPage === '/privacy') return <Privacy />;
  if (currentPage === '/faq') return <Faq />;

  return (
    <>
      <Navbar active="/" />

      {/* ── 1. HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="text-wrapper" style={{ paddingBottom: '5rem', position: 'relative' }}>
            <img src="/reset/imgi_42_ele10-284x300.png" className="dots-pattern" alt="" style={{ width: '100px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.9rem', fontFamily: 'Fredoka' }}>
                {h.heroBadge1}
              </div>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.9rem', fontFamily: 'Fredoka' }}>
                {h.heroBadge2}
              </div>
            </div>
            <h1>{h.heroTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < 2 && <br />}</React.Fragment>)}</h1>
            <p style={{ maxWidth: '440px' }}>{h.heroP1}</p>
            <p style={{ fontSize: '0.95rem', maxWidth: '440px' }}>{h.heroP2}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="#pricing" className="btn btn-orange">{h.heroCta1}</a>
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
          <h2 style={{ marginBottom: '3rem' }}>{h.servicesTitle}</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '100%', height: '100%', background: 'var(--primary-light)', borderRadius: '24px', zIndex: 0 }}></div>
                <img src="/reset/lavorama-geneva-booking-desk-notes-lifestyle.jpeg" alt="Lavorama Geneva self-service" style={{ position: 'relative', zIndex: 1, borderRadius: '24px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#E2F7F7', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🏪</span> {h.servicesSubtitle}
              </div>
              <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                {h.selfServiceTitle.split('\n').map((l, i) => <React.Fragment key={i}>{l}{i === 0 && <br />}</React.Fragment>)}
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, color: '#555' }}>{h.selfServiceDesc}</p>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                {h.selfServiceFeatures.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--secondary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0 }}>✓</div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="btn btn-teal" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>{h.selfServiceCta}</a>
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
        </div>
      </section>

      {/* ── 5. GOOGLE REVIEWS ── */}
      <section className="section bg-light">
        <div className="container">
          <p className="section-eyebrow">{h.googleReviewsLabel}</p>
          <h2>{h.googleReviewsTitle}</h2>
          <p className="section-intro">{h.googleReviewsSubtitle}</p>

          <div className="google-reviews-panel">
            <div className="google-rating-summary">
              <div className="google-brand" aria-label="Google">
                <span className="google-g" aria-hidden="true">G</span>
                <span>Google</span>
              </div>
              <div className="google-rating-row">
                <strong>{h.googleRating}</strong>
                <span className="rating-stars" aria-label={h.googleRatingAria}>
                  <span aria-hidden="true">★★★★★</span>
                  <span className="rating-stars-fill" aria-hidden="true">★★★★★</span>
                </span>
              </div>
              <p className="google-review-count">{h.googleReviewCount}</p>
              <p className="google-review-note">{h.googleReviewNote}</p>
              <div className="google-review-actions">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal"
                >
                  {h.googleReviewsCta}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-maps-link"
                >
                  {h.googleMapsCta} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div
              className="google-review-slider"
              onMouseEnter={() => setReviewsInteracting(true)}
              onMouseLeave={() => setReviewsInteracting(false)}
              onFocusCapture={() => setReviewsInteracting(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setReviewsInteracting(false);
              }}
            >
              <article className="google-review-card" key={activeReview.name}>
                <div className="google-review-source">
                  <span className="google-g google-g-small" aria-hidden="true">G</span>
                  <span>{h.googleReviewSource}</span>
                </div>
                <div className="google-review-author">
                  <span className="reviewer-initial" aria-hidden="true">{activeReview.initial}</span>
                  <div>
                    <h3>{activeReview.name}</h3>
                    <span>{activeReview.isLocalGuide ? h.googleReviewerType : h.googleReviewerLabel}</span>
                  </div>
                </div>
                <div className="review-stars" aria-label={h.fiveStarRating}>★★★★★</div>
                <blockquote>“{activeReview.excerpt}”</blockquote>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-review-source-link"
                >
                  {h.googleReviewSourceLink} <span aria-hidden="true">↗</span>
                </a>
              </article>

              <div className="review-slider-footer">
                <div className="review-slider-controls" role="group" aria-label={h.googleReviewSliderLabel}>
                  <button type="button" onClick={showPreviousReview} aria-label={h.googleReviewPrevious}>‹</button>
                  <div className="review-slider-dots">
                    {GOOGLE_REVIEWS.map((review, index) => (
                      <button
                        type="button"
                        key={review.name}
                        className={index === activeReviewIndex ? 'is-active' : ''}
                        onClick={() => setActiveReviewIndex(index)}
                        aria-label={`${h.googleReviewShow} ${index + 1}`}
                        aria-current={index === activeReviewIndex ? 'true' : undefined}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={showNextReview} aria-label={h.googleReviewNext}>›</button>
                  <button
                    type="button"
                    className="review-slider-pause"
                    onClick={() => setReviewsPaused((paused) => !paused)}
                    aria-label={reviewsPaused ? h.googleReviewPlay : h.googleReviewPause}
                    aria-pressed={reviewsPaused}
                  >
                    <span aria-hidden="true">{reviewsPaused ? '▶' : 'Ⅱ'}</span>
                  </button>
                </div>
              </div>
            </div>
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
            <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-orange">{h.contactCta1}</a>
            <a href="/contact" className="btn btn-teal">{h.contactCta2}</a>
          </div>
        </div>
      </section>



      <PageFooter />
    </>
  );
}

export default App;
