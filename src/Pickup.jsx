import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';

function Pickup() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', date: '', service: 'Wash & Fold', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  const steps = [
    { icon: '📅', title: 'Schedule Pickup', desc: 'Choose your preferred pickup date and time from the booking form below. We work 7 days a week.' },
    { icon: '🚚', title: 'We Collect', desc: 'Our friendly driver arrives at your door at the scheduled time and collects your laundry bags.' },
    { icon: '✨', title: 'We Clean', desc: 'Your clothes are professionally cleaned using premium eco-friendly detergents and equipment.' },
    { icon: '🏠', title: 'We Deliver', desc: 'Fresh, clean, and neatly folded or pressed clothes are delivered back to your door for free.' },
  ];

  const services = [
    { img: 'imgi_3_23-laundry-car_512.png', title: 'Wash & Fold', desc: 'Everyday laundry washed, dried & folded.', price: 'From $1.50/lb' },
    { img: 'imgi_6_21-dry-cleaning_512.png', title: 'Dry Cleaning', desc: 'Delicate fabrics handled with expert care.', price: 'From $5.99/item' },
    { img: 'imgi_4_5-iron_512.png', title: 'Ironing', desc: 'Crisp, wrinkle-free clothes every time.', price: 'From $3.00/item' },
    { img: 'imgi_5_30-basket-weight-scale_512.png', title: 'Bedding & Linens', desc: 'Deep clean for duvets, sheets & pillows.', price: 'From $12.00/item' },
  ];

  return (
    <>
      <Navbar active="Pickup Service" />

      {/* 1. Hero */}
      <section style={{ background: 'linear-gradient(180deg, #D6F0F4 0%, #EBF8FA 100%)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-20px', right: '20%', width: '220px', opacity: 0.4 }} />
        <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', bottom: '-10px', left: '10%', width: '180px', opacity: 0.3, transform: 'rotate(180deg)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', borderRadius: '50px', padding: '0.4rem 1.2rem', fontSize: '0.9rem', fontFamily: 'Fredoka', marginBottom: '1.5rem' }}>
                🚚 Free Pickup & Delivery
              </div>
              <h1 style={{ fontFamily: 'Fredoka', fontSize: '3.8rem', lineHeight: 1.1, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Pickup<br />Service<br />At Your Door
              </h1>
              <p style={{ fontSize: '1.1rem', maxWidth: '440px', marginBottom: '2rem' }}>
                Schedule a laundry pickup in seconds. We collect, clean, and deliver your clothes back fresh and folded — no effort needed from you.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#book" className="btn btn-orange">Book a Pickup</a>
                <a href="#how" className="btn btn-teal">How It Works</a>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative' }}>
              <img src="/reset/imgi_75_LAVORAMA-MAIN-MODEL-BR-1.png" alt="Laundry Model" style={{ maxWidth: '90%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section id="how" className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.5rem' }}>How It Works</h2>
          <p style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto 4rem' }}>Getting your laundry done has never been this simple. Just 4 easy steps!</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{ position: 'absolute', top: '40px', left: '60%', width: '80%', height: '2px', background: 'linear-gradient(to right, var(--primary), transparent)', zIndex: 0 }} />
                )}
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem', position: 'relative', zIndex: 1, border: '3px solid var(--primary)', boxShadow: '0 5px 20px rgba(108,191,191,0.25)' }}>
                  {step.icon}
                </div>
                <div style={{ background: 'var(--bg-light)', borderRadius: '16px', padding: '1.5rem 1rem', minHeight: '160px' }}>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{i + 1}. {step.title}</h3>
                  <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services We Pickup */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>Services We Pickup</h2>
          <p style={{ textAlign: 'center', maxWidth: '550px', margin: '-1rem auto 4rem' }}>We collect all types of laundry. Here's what we handle:</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card-inner">
                  <img src={`/reset/${s.img}`} alt={s.title} />
                  <h3 style={{ fontFamily: 'Fredoka' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{s.desc}</p>
                  <div style={{ background: 'var(--primary)', color: 'white', borderRadius: '50px', padding: '0.3rem 1rem', fontSize: '0.85rem', display: 'inline-block', fontFamily: 'Fredoka', marginTop: '0.5rem' }}>{s.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Our Pickup */}
      <section className="section bg-teal" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/reset/imgi_16_10.png" alt="glove" style={{ position: 'absolute', bottom: 0, left: '-20px', width: '160px' }} />
        <img src="/reset/imgi_21_11.png" alt="glove" style={{ position: 'absolute', top: '10%', right: '-10px', width: '140px', transform: 'rotate(-15deg)' }} />
        <img src="/reset/imgi_2_ele2.png" alt="star" style={{ position: 'absolute', top: '20%', left: '8%', width: '80px', opacity: 0.8 }} />
        <img src="/reset/imgi_42_ele10-284x300.png" alt="dots" style={{ position: 'absolute', bottom: '10%', right: '8%', width: '120px', opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '3rem 0' }}>
          <h2 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '3rem' }}>Why Choose Our Pickup?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '⚡', title: '24–48hr Turnaround', desc: 'Get your clothes back fresh within 24 to 48 hours. Express options also available.' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'We use only biodegradable detergents that are safe for your family and the environment.' },
              { icon: '🔒', title: 'Safe & Insured', desc: 'All garments are handled with care and fully insured during the cleaning process.' },
              { icon: '📍', title: 'Real-Time Tracking', desc: 'Track your laundry pickup and delivery status in real time through SMS updates.' },
              { icon: '💳', title: 'Easy Payment', desc: 'Pay online or on delivery. We accept all major cards and digital wallets.' },
              { icon: '⭐', title: '5-Star Rated', desc: 'Thousands of happy customers trust Lavorama for their laundry every week.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255,255,255,0.3)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Fredoka', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', fontWeight: 400, marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking Form */}
      <section id="book" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left: Image + Info */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', textAlign: 'left', fontSize: '2.5rem', marginBottom: '1rem' }}>Book Your<br />Pickup Now</h2>
              <p style={{ marginBottom: '2rem' }}>Fill out the form and we'll confirm your pickup within 30 minutes. It's that simple!</p>
              <div style={{ position: 'relative' }}>
                <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '200px', opacity: 0.3, zIndex: 0 }} />
                <img src="/reset/imgi_59_lavorama-cute-model-2.png" alt="Model" style={{ maxWidth: '85%', position: 'relative', zIndex: 1 }} />
              </div>
            </div>
            {/* Right: Form */}
            <div style={{ flex: 1.2, minWidth: '320px' }}>
              {submitted ? (
                <div style={{ background: 'var(--primary-light)', border: '2px solid var(--primary)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.8rem' }}>Pickup Booked!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your request and will confirm your pickup shortly via phone or email.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-teal" style={{ marginTop: '1rem' }}>Book Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'var(--bg-light)', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <h3 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '0.5rem' }}>Pickup Details</h3>
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
                    { label: 'Pickup Address', name: 'address', type: 'text', placeholder: 'Your full address' },
                    { label: 'Preferred Date', name: 'date', type: 'date', placeholder: '' },
                  ].map(field => (
                    <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1rem' }}>{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        style={{ padding: '0.9rem 1.2rem', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'Nunito', fontSize: '1rem', background: 'white', outline: 'none' }}
                      />
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1rem' }}>Service Type</label>
                    <select name="service" value={form.service} onChange={handleChange} style={{ padding: '0.9rem 1.2rem', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'Nunito', fontSize: '1rem', background: 'white', outline: 'none' }}>
                      <option>Wash & Fold</option>
                      <option>Dry Cleaning</option>
                      <option>Ironing Only</option>
                      <option>Bedding & Linens</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1rem' }}>Special Instructions (optional)</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any special care instructions..." style={{ padding: '0.9rem 1.2rem', border: '1.5px solid var(--border)', borderRadius: '12px', fontFamily: 'Nunito', fontSize: '1rem', background: 'white', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-orange" style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>🚚 Schedule My Pickup</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ fontFamily: 'Fredoka', color: 'var(--primary)' }}>What Our Customers Say</h2>
          <div className="testimonial-grid">
            {[
              { name: 'Kevin Smith', img: 'imgi_13_p1.jpg', review: 'The pickup was so easy — they arrived right on time and my clothes came back perfectly clean and folded. Highly recommend!' },
              { name: 'Jen Miller', img: 'imgi_14_p3.jpg', review: 'I love that I don\'t have to worry about laundry anymore. Lavorama is my go-to. The pickup service is incredibly convenient.' },
              { name: 'John Blanc', img: 'imgi_15_p7.jpg', review: 'Fast, reliable, and my whites have never looked brighter. The free delivery is a cherry on top!' },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <div className="testi-user">
                  <img src={`/reset/${t.img}`} alt={t.name} />
                  <h4>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Verified Customer</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}>{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter */}
      <section className="bg-teal" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="container two-col-section" style={{ alignItems: 'flex-end', gap: '2rem' }}>
          <div style={{ width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <img src="/reset/imgi_41_s2-300x291.png" alt="splash" style={{ position: 'absolute', top: '10%', left: 0, width: '300px', opacity: 0.2, filter: 'brightness(0) invert(1)', zIndex: 0 }} />
            <img src="/reset/imgi_24_lavorama-model-cute-.png" alt="Newsletter Model" style={{ maxHeight: '420px', position: 'relative', zIndex: 1 }} />
          </div>
          <div style={{ width: '50%', padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Get 20% Off<br />Your First Pickup!</h2>
            <p style={{ color: 'white', fontWeight: 400, fontSize: '0.95rem' }}>Subscribe to our newsletter and get an exclusive discount code for your first laundry pickup order.</p>
            <form className="newsletter-form" style={{ marginTop: '1.5rem' }} onSubmit={e => { e.preventDefault(); alert('Subscribed! Check your email for the discount code.'); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-orange">Get 20% Off</button>
            </form>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}

export default Pickup;
