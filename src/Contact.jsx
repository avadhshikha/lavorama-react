import React from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

function Contact() {
  const { lang } = useLang();

  const content = {
    fr: {
      badge: "Contactez-nous",
      title: "Contactez Lavorama",
      subtitle: "Venez quand vous le souhaitez pendant nos heures d’ouverture : Pâquis et Plainpalais sont ouverts 7 jours sur 7.",
      callBtn: "📞 Appelez-nous",
      whatsAppBtn: "💬 WhatsApp",
      cardLocationsTitle: "Nos 2 Laveries",
      cardLocationsDetail: "Rue des Pâquis 43, 1201 Genève\nRue Dancet 2, 1205 Genève — Maintenant ouvert",
      cardPhoneTitle: "Téléphone & WhatsApp",
      cardEmailTitle: "E-mail",
      cardHoursTitle: "Horaires d'ouverture",
      cardHoursDetail: "Tous les jours : 7h00 – 23h00",
      hoursHeading: "Horaires d'ouverture",
      selfServiceRow: "Libre-service (Lun – Dim)",
      hoursVal: "7h00 – 23h00",
      paquisTitle: "📍 Lavorama Pâquis",
      paquisAddress: "Rue des Pâquis 43, 1201 Genève, Suisse",
      plainpalaisTitle: "📍 Lavorama Plainpalais — Ouvert",
      plainpalaisAddress: "Rue Dancet 2, 1205 Genève — Maintenant ouvert",
      plainpalaisFeature: "✨ Notre machine grande capacité de 30 kg est disponible à Plainpalais.",
      mapHeading: "Deux laveries Lavorama ouvertes à Genève",
      openInMaps: "Ouvrir dans Google Maps",
      ctaHeading: "Prêt pour du linge impeccable à Genève ?",
      ctaDesc: "Nous sommes ouverts à Pâquis et à Plainpalais. Rendez-vous Rue des Pâquis 43 ou Rue Dancet 2 — ouvert tous les jours de 7h à 23h.",
    },
    en: {
      badge: "Get in touch",
      title: "Contact Us",
      subtitle: "Drop in whenever it suits you during opening hours. Our Pâquis and Plainpalais locations are open seven days a week.",
      callBtn: "📞 Call Us Now",
      whatsAppBtn: "💬 WhatsApp",
      cardLocationsTitle: "Our Locations",
      cardLocationsDetail: "Rue des Pâquis 43, 1201 Genève\nRue Dancet 2, 1205 Geneva — Now open",
      cardPhoneTitle: "Phone & WhatsApp",
      cardEmailTitle: "Email Us",
      cardHoursTitle: "Opening Hours",
      cardHoursDetail: "Every day: 7:00–23:00",
      hoursHeading: "Opening Hours",
      selfServiceRow: "Self-Service (Mon – Sun)",
      hoursVal: "7:00 – 23:00",
      paquisTitle: "📍 Lavorama Pâquis",
      paquisAddress: "Rue des Pâquis 43, 1201 Genève, Switzerland",
      plainpalaisTitle: "📍 Lavorama Plainpalais — Open",
      plainpalaisAddress: "Rue Dancet 2, 1205 Geneva — Now open",
      plainpalaisFeature: "✨ Our large-capacity 30 kg machine is available at Plainpalais.",
      mapHeading: "Two Lavorama Laundromats Now Open in Geneva",
      openInMaps: "Open in Maps",
      ctaHeading: "Ready for Cleaner Laundry in Geneva?",
      ctaDesc: "We are open in Pâquis and Plainpalais. Walk into Rue des Pâquis 43 or Rue Dancet 2 — open every day from 7 AM to 11 PM.",
    }
  };

  const c = content[lang] || content.fr;

  return (
    <>
      <Navbar active="/contact" />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '-20px', right: '18%', width: '200px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {c.badge}
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.2rem' }}>{c.title}</h1>
              <p style={{ maxWidth: '480px', marginBottom: '2rem', fontSize: '1.05rem' }}>{c.subtitle}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+41795654142" className="btn btn-orange">{c.callBtn}</a>
                <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">{c.whatsAppBtn}</a>
              </div>
            </div>
            <div className="hero-img">
              <img src="/reset/lavorama-geneva-phone-support-transparent-cutout.png" alt="Contact Lavorama Geneva" width="360" height="360" style={{ maxWidth: '90%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '📍', title: c.cardLocationsTitle, detail: c.cardLocationsDetail, bg: 'var(--primary)' },
              { icon: '📞', title: c.cardPhoneTitle, detail: '+41 79 565 41 42', bg: 'var(--secondary)' },
              { icon: '✉️', title: c.cardEmailTitle, detail: 'info@lavorama.ch', bg: 'var(--primary)' },
              { icon: '🕐', title: c.cardHoursTitle, detail: c.cardHoursDetail, bg: 'var(--secondary)' },
            ].map((card, i) => (
              <div key={i} style={{ background: card.bg, borderRadius: '20px', padding: '2rem', textAlign: 'center', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h2 style={{ fontFamily: 'Fredoka', color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{card.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 400, whiteSpace: 'pre-line', marginBottom: 0 }}>{card.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Hours + Map */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '2rem' }}>{c.hoursHeading}</h2>
              {[
                { label: c.selfServiceRow, hours: c.hoursVal, color: 'var(--primary)' }
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(108,191,191,0.1)', borderLeft: `4px solid ${row.color}` }}>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.05rem', color: row.color }}>{row.hours}</span>
                </div>
              ))}
              <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem', color: 'white' }}>
                <h3 style={{ fontFamily: 'Fredoka', color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{c.paquisTitle}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>{c.paquisAddress}</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>📞 +41 79 565 41 42</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: 0 }}>✉️ info@lavorama.ch</p>
              </div>
              <div style={{ background: 'var(--secondary)', borderRadius: '16px', padding: '1.5rem', marginTop: '1rem', color: 'white' }}>
                <h3 style={{ fontFamily: 'Fredoka', color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{c.plainpalaisTitle}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>{c.plainpalaisAddress}</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 0 }}>{c.plainpalaisFeature}</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem', marginBottom: '2rem' }}>{c.mapHeading}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Map 1: Pâquis */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(108,191,191,0.2)', background: 'var(--bg-light)', border: '2px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                  <iframe 
                    title="Carte Lavorama Pâquis"
                    src="https://maps.google.com/maps?q=Rue+des+Pâquis+43,+1201+Genève&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                  <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Rue des Pâquis 43, 1201 Genève</p>
                    <a href="https://maps.google.com/?q=Rue+des+Pâquis+43+1201+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>{c.openInMaps}</a>
                  </div>
                </div>

                {/* Map 2: Dancet */}
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(247,173,63,0.15)', background: '#FFFDF6', border: '2px solid #FFE0A0', display: 'flex', flexDirection: 'column' }}>
                  <iframe 
                    title="Carte Lavorama Plainpalais"
                    src="https://maps.google.com/maps?q=Rue+Dancet+2,+1205+Genève&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                  <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontFamily: 'Fredoka', color: 'var(--secondary)', fontSize: '1.2rem', margin: 0 }}>Rue Dancet 2, 1205 Genève</p>
                    <a href="https://maps.google.com/?q=Rue+Dancet+2+1205+Genève" target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>{c.openInMaps}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '8%', width: '80px', opacity: 0.8 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, padding: '2rem 0' }}>
          <h2 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '1rem' }}>{c.ctaHeading}</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, maxWidth: '550px', margin: '0 auto 2rem' }}>{c.ctaDesc}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:+41795654142" className="btn btn-white">{c.callBtn}</a>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Contact;
