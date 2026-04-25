import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

const faqs = [
  { q: 'Is laundry pickup and delivery free in Geneva?', a: 'Yes. Lavorama offers completely free pickup and delivery to and from any address in Geneva. There are no delivery charges added to your order.' },
  { q: 'How do I book a laundry pickup in Geneva?', a: 'You can book in three ways — fill in the form on this page, send us a WhatsApp message at +41 79 565 41 42, or email us at booking@lavorama.ch. We confirm all bookings within a few hours.' },
  { q: 'What areas in Geneva do you cover for laundry pickup?', a: 'We cover all Geneva neighbourhoods including Pâquis, Eaux-Vives, Plainpalais, Carouge, Champel, Cornavin, Jonction, Servette, Lancy, Onex, Vernier, Meyrin, and more.' },
  { q: 'What are your laundry pickup hours in Geneva?', a: 'Our pickup and delivery service operates Monday to Saturday, from 8:00 AM to 6:00 PM. Our self-service laundromat is open every day from 7 AM to 11 PM.' },
  { q: 'How long does the laundry pickup service take in Geneva?', a: 'We aim to collect and return your laundry within the same day or next day. Your confirmation will include the estimated return time.' },
  { q: 'Can you handle delicate items and special garments?', a: 'Absolutely. Mention any special instructions when you book — silk, wool, sportswear, duvets — and we\'ll apply the appropriate care program.' },
  { q: 'Is there a minimum order for laundry pickup in Geneva?', a: 'No minimum order. Whether it\'s one bag or several, we\'re happy to help.' },
];

const reasons = [
  { icon: '🚚', title: 'Free Pickup & Delivery Across Geneva', desc: 'No delivery charges, no hidden fees. We come to your address anywhere in Geneva and bring your laundry back — completely free.' },
  { icon: '🌿', title: 'Eco-Certified Professional Detergents', desc: 'High-quality, biodegradable professional detergents — better results for your clothes, safer for your skin, kinder to the environment.' },
  { icon: '✨', title: 'Superior Stain Removal', desc: 'Our industrial machines with professional detergents remove tough stains that home washers leave behind. Your clothes come back genuinely clean.' },
  { icon: '📞', title: 'Responsive Customer Support', desc: 'Have a question or need to change your pickup time? We are available 7 days a week by phone, email, or WhatsApp to assist you.' },
  { icon: '👗', title: 'Special Treatment Available', desc: 'Delicates, sportswear, silk, wool, duvets — tell us what you have and we\'ll apply the right care. No item is too tricky.' },
  { icon: '⏱️', title: 'Saves You Significant Time', desc: 'The average person spends 2–3 hours per week on laundry. Our pickup service gives that time back to you — every single week.' },
  { icon: '💳', title: 'Affordable — Transparent Pricing', desc: 'Our pickup service is priced fairly and clearly. No surprise charges. You know what you\'re paying before we collect.' },
  { icon: '⚡', title: 'Energy-Efficient Machines', desc: 'Modern, low-consumption industrial machines — better for the environment and better for your clothes.' },
];

function BookingForm({ heading, subtext, submitLabel }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const inputStyle = { padding: '0.85rem 1.1rem', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'Nunito', fontSize: '0.95rem', background: 'white', outline: 'none', width: '100%' };

  if (submitted) return (
    <div style={{ background: 'var(--primary-light)', border: '2px solid var(--primary)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
      <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem' }}>Pickup Booked!</h3>
      <p>Thank you, <strong>{form.name}</strong>! We'll confirm your Geneva pickup shortly at <strong>{form.email}</strong>.</p>
      <button onClick={() => setSubmitted(false)} className="btn btn-teal" style={{ marginTop: '1rem' }}>Book Another</button>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-light)', borderRadius: '20px', padding: '2.5rem' }}>
      <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '0.4rem' }}>{heading}</h3>
      <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{subtext}</p>
      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handle} placeholder="Marie Dupont" required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handle} placeholder="marie@example.com" required style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+41 79 000 00 00" style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Pickup Address in Geneva</label>
            <input type="text" name="address" value={form.address} onChange={handle} placeholder="Your Geneva address" required style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Preferred Pickup Date</label>
            <input type="date" name="date" value={form.date} onChange={handle} required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Preferred Pickup Time</label>
            <input type="time" name="time" value={form.time} onChange={handle} style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '0.95rem' }}>Special Instructions (optional)</label>
          <textarea name="notes" value={form.notes} onChange={handle} rows={3} placeholder="e.g. delicates, duvet, specific care instructions..." style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
        <button type="submit" className="btn btn-orange" style={{ fontSize: '1.05rem', marginTop: '0.5rem' }}>{submitLabel}</button>
        <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-main)', margin: 0 }}>
          Serving Geneva residents since 2023 · <a href="mailto:booking@lavorama.ch" style={{ color: 'var(--primary)' }}>booking@lavorama.ch</a> · +41 79 565 41 42
        </p>
      </form>
    </div>
  );
}

function Pickup() {
  const [faqOpen, setFaqOpen] = useState(null);
  const neighbourhoods = ['Pâquis', 'Eaux-Vives', 'Plainpalais', 'Carouge', 'Champel', 'Cornavin', 'Jonction', 'Grottes', 'Servette', 'Charmilles', 'Lancy', 'Onex', 'Vernier', 'Meyrin', 'Thônex', 'Chêne-Bougeries'];

  return (
    <>
      <Navbar active="Pickup Service" />

      {/* ── 1. HERO ── */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '20%', width: '220px', opacity: 0.35 }} />
        <div className="container">
          <div className="hero-grid">
            <div style={{ paddingBottom: '4rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', borderRadius: '50px', padding: '0.35rem 1.2rem', fontSize: '0.85rem', fontFamily: 'Fredoka', marginBottom: '1.2rem' }}>
                🚚 Free Pickup & Delivery — All of Geneva
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                Free Laundry Pickup &amp; Delivery Service in Geneva
              </h1>
              <p style={{ fontSize: '1.05rem', maxWidth: '480px', marginBottom: '1rem' }}>Too busy for laundry? Lavorama comes to you. We collect your clothes from anywhere in Geneva, wash and dry them with professional care, and deliver them back — freshly folded and ready to wear.</p>
              <p style={{ fontSize: '0.95rem', maxWidth: '480px', marginBottom: '2rem' }}>Whether you live in Pâquis, Eaux-Vives, Plainpalais, Carouge, Champel, or anywhere across Geneva, our pickup service fits around your schedule. Book online or message us on WhatsApp — we'll take care of everything else.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#book" className="btn btn-orange">Book Pickup Now</a>
                <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">💬 WhatsApp +41 79 565 41 42</a>
              </div>
            </div>
            <div className="hero-img">
              <img src="/reset/girl with scooter cutout.png" alt="Free laundry pickup delivery Geneva" style={{ maxWidth: '90%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TOP BOOKING FORM ── */}
      <section id="book" className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <BookingForm
            heading="Request Your Laundry Pickup in Geneva"
            subtext="Fill in your details below and we'll confirm your pickup within a few hours. Available Monday to Saturday, 8 AM – 6 PM across Geneva."
            submitLabel="🚚 Book My Pickup in Geneva"
          />
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="section bg-light">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Simple process</p>
          <h2>How Our Geneva Laundry Pickup Service Works — 4 Easy Steps</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-1.5rem auto 3rem' }}>From booking to delivery, we've made the whole process as simple as possible.</p>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: '📱', step: 1, title: 'Book Online or on WhatsApp', desc: 'Visit lavorama.ch or message us at +41 79 565 41 42. Select your pickup date, time, and address anywhere in Geneva. Takes less than 60 seconds.' },
              { icon: '✅', step: 2, title: 'Instant Confirmation Sent to You', desc: 'As soon as you submit your booking, you\'ll receive a confirmation with your scheduled pickup details. No uncertainty — you\'ll know exactly when we\'re coming.' },
              { icon: '👜', step: 3, title: 'Pack and Leave at Your Door', desc: 'On the day, place your laundry in a bag and leave it at your door. You can include specific care instructions — we\'ll follow them carefully.' },
              { icon: '🏠', step: 4, title: 'We Do Everything', desc: 'Our team collects your bag, professionally washes, dries, and folds everything. Once ready, we deliver it back to your door.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: 'var(--primary-light)', border: '3px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1.2rem', boxShadow: '0 5px 20px rgba(108,191,191,0.25)' }}>{s.icon}</div>
                <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(108,191,191,0.1)' }}>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{s.step}. {s.title}</h3>
                  <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '150px' }} />
        <img src="/reset/imgi_21_11.png" alt="" style={{ position: 'absolute', top: '10%', right: '-10px', width: '130px', transform: 'rotate(-15deg)' }} />
        <img src="/reset/imgi_2_ele2.png" alt="" style={{ position: 'absolute', top: '25%', left: '6%', width: '75px', opacity: 0.8 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Why Geneva trusts us</p>
          <h2 style={{ color: 'white' }}>The Best Laundry Pickup Service in Geneva — Here's Why</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '600px', margin: '-1rem auto 3rem', fontWeight: 400 }}>We serve hundreds of Geneva residents every week. Here's what makes our pickup service stand out.</p>
          <div className="why-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.25)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{r.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1rem', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 400, marginBottom: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BENEFITS LIST ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px', minWidth: '260px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.2rem' }}>What You Get With Every Lavorama Geneva Pickup</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
                {['Superior stain removal guaranteed','Affordable, transparent pricing — no hidden fees','Easy online booking and fast confirmation','Special treatment options for all garment types','Time saved — we handle everything for you','Maximum convenience — we come to your door','Longer-lasting clothes with professional care','Low-energy, eco-friendly washing machines'].map(b => (
                  <li key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem', flexShrink: 0 }}>✓</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 260px', minWidth: '260px', position: 'relative', textAlign: 'center' }}>
              <img src="/reset/imgi_41_s2-300x291.png" alt="" style={{ position: 'absolute', top: '-20px', right: '-10px', width: '250px', opacity: 0.3, zIndex: 0 }} />
              <img src="/reset/lavorama-geneva-doorstep-pickup-bag-lifestyle.jpeg" alt="Laundry pickup service Geneva" style={{ maxWidth: '80%', position: 'relative', zIndex: 1, borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COVERAGE ── */}
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Coverage & availability</p>
          <h2>Laundry Pickup Available Across Geneva — Monday to Saturday</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Our pickup and delivery service covers all of Geneva and its neighbourhoods. We currently serve:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {neighbourhoods.map(n => (
              <span key={n} style={{ background: 'var(--primary)', color: 'white', borderRadius: '50px', padding: '0.4rem 1rem', fontSize: '0.875rem', fontFamily: 'Fredoka' }}>{n}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
            {[
              { icon: '⏰', title: 'Pickup Hours', val: 'Mon–Sat, 8:00–18:00' },
              { icon: '📞', title: 'Phone / WhatsApp', val: '+41 79 565 41 42' },
              { icon: '✉️', title: 'Book by Email', val: 'booking@lavorama.ch' },
            ].map(item => (
              <div key={item.icon} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(108,191,191,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.3rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>What Geneva Customers Say About Our Pickup Service</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { name: 'Anna Müller', img: 'imgi_15_p7.jpg', role: 'Pickup & delivery customer, Geneva', review: '"The free pickup and delivery has completely changed my week. Everything comes back perfectly folded, always on time. I\'d never go back to doing it myself."' },
              { name: 'Sofia Zimmermann', img: 'imgi_14_p3.jpg', role: 'Regular pickup customer, Geneva', review: '"As a busy professional in Geneva, Lavorama\'s pickup service has been an absolute lifesaver. Exceptional quality, very reasonable prices, and they handle everything. Highly recommended."' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testi-user">
                  <img src={`/reset/${t.img}`} alt={t.name} />
                  <h4>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{t.role}</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}>{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontFamily: 'Fredoka', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Common questions</p>
          <h2>Laundry Pickup Geneva — Frequently Asked Questions</h2>
          <div style={{ background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1rem', marginBottom: '1rem' }}>
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

      {/* ── 9. BOTTOM BOOKING FORM ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <BookingForm
            heading="Ready? Book Your Laundry Pickup in Geneva Now"
            subtext="Leave the laundry to us. Fill in the form and we'll confirm your Geneva pickup within a few hours."
            submitLabel="✅ Confirm My Pickup Booking"
          />
        </div>
      </section>

      {/* ── 10. CLOSING SEO PARAGRAPH ── */}
      <section style={{ background: 'var(--bg-light)', padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-main)', fontWeight: 600 }}>
            Lavorama is Geneva's most trusted laundry pickup and delivery service — operating from our modern laundromat at{' '}
            <a href="/contact" style={{ color: 'var(--primary)' }}>Rue des Pâquis 43, 1201 Genève</a>. We serve the full Geneva region, Monday to Saturday. Book online, on WhatsApp, or by phone — and let us take laundry completely off your plate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a href="#book" className="btn btn-orange">Book Pickup Now</a>
            <a href="https://wa.me/41795654142" target="_blank" rel="noopener noreferrer" className="btn btn-teal">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Pickup;
