import React, { useState } from 'react';

function App() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <>
      <header>
        <div className="container">
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" className="logo">
              <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" style={{ height: '40px' }} />
            </a>
            <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
              <li><a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container flex-row" style={{ alignItems: 'flex-end' }}>
          <div className="text-wrapper" style={{ paddingBottom: '5rem', position: 'relative' }}>
            <img src="/reset/imgi_42_ele10-284x300.png" className="dots-pattern" alt="dots" style={{ width: '100px' }} />
            <h1>WE DO<br />LAUNDRY<br />FOR YOU</h1>
            <p>We are dedicated to providing the best<br />dry cleaning experience.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="#" className="btn btn-orange">Our Services</a>
              <a href="#" className="btn btn-teal">Contact Us</a>
            </div>
          </div>
          <div className="image-wrapper hero-img">
            <img src="/reset/imgi_75_LAVORAMA-MAIN-MODEL-BR-1.png" alt="Happy Woman with Laundry" />
          </div>
        </div>
      </section>

      {/* 2. Our Services Section */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {[
              { img: "imgi_3_23-laundry-car_512.png", title: "Laundry Pickup" },
              { img: "imgi_12_25-washing-powder_512.png", title: "Wash And Fold" },
              { img: "imgi_5_30-basket-weight-scale_512.png", title: "Bath Cleaning" },
              { img: "imgi_6_21-dry-cleaning_512.png", title: "Dry Cleaning" }
            ].map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-card-inner">
                  <img src={`/reset/${service.img}`} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  <a href="#" className="read-more" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Read More &gt;&gt;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Getting Tired Section */}
      <section className="section bg-light">
        <div className="container two-col-section">
          <div className="image-wrapper" style={{ textAlign: 'center' }}>
            <img src="/reset/imgi_41_s2-300x291.png" style={{ position: 'absolute', top: '-10%', left: 0, width: '300px', zIndex: 0, opacity: 0.5 }} alt="Splash" />
            <img src="/reset/imgi_59_lavorama-cute-model-2.png" alt="Tired of Laundry" style={{ position: 'relative', zIndex: 1, maxWidth: '80%', margin: '0 auto' }} />
          </div>
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '3rem', lineHeight: 1.1 }}>Getting Tired With<br />Your Laundry?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="btn btn-orange" style={{ marginTop: '1.5rem' }}>Read More</a>
          </div>
        </div>
      </section>

      {/* 4. Solutions For A Busy Life */}
      <section className="section bg-teal">
        <div className="container text-center" style={{ position: 'relative', padding: '4rem 0' }}>
          <img src="/reset/imgi_2_ele2.png" className="float-elem" style={{ top: 0, left: '10%', width: '100px', opacity: 0.8 }} alt="Star shape" />
          <img src="/reset/imgi_16_10.png" className="float-elem" style={{ top: '40%', left: '-10%', width: '150px' }} alt="Yellow Glove Thumbs Up" />
          <img src="/reset/imgi_21_11.png" className="float-elem" style={{ top: '0%', right: '-10%', width: '150px', transform: 'rotate(-20deg)' }} alt="Yellow Glove Pointing" />
          <img src="/reset/imgi_42_ele10-284x300.png" className="float-elem" style={{ bottom: 0, right: '10%', width: '150px', opacity: 0.3 }} alt="Dots" />
          
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Laundry Solutions For<br />A Busy Life</h2>
          <p style={{ color: 'white', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: 400 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a href="#" className="btn btn-white">Contact Us</a>
        </div>
      </section>

      {/* 5. No Fading */}
      <section className="section">
        <div className="container two-col-section">
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left', fontSize: '2.8rem', lineHeight: 1.1 }}>No Fading, Only<br />Cleaning</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card bg-light">
              <img src="/reset/imgi_11_7-rose_512.png" alt="Premium Perfume" />
              <h4 style={{ color: 'var(--primary)' }}>Premium Perfume</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="feature-card bg-light">
              <img src="/reset/imgi_12_25-washing-powder_512.png" alt="Thicker Detergent" />
              <h4 style={{ color: 'var(--primary)' }}>Thicker Detergent</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section bg-light" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="testimonial-grid">
            {[
              { name: "Kevin Smith", img: "imgi_13_p1.jpg" },
              { name: "Jen Miller", img: "imgi_14_p3.jpg" },
              { name: "John Blanc", img: "imgi_15_p7.jpg" }
            ].map((user, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="stars">★★★★★</div>
                <div className="testi-user">
                  <img src={`/reset/${user.img}`} alt={user.name} />
                  <h4>{user.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Customer</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="section">
        <div className="container two-col-section reverse">
          <div className="image-wrapper" style={{ textAlign: 'center', position: 'relative' }}>
            <img src="/reset/imgi_41_s2-300x291.png" style={{ position: 'absolute', top: '20%', left: '10%', width: '350px', zIndex: 0, opacity: 0.5 }} alt="Splash" />
            <img src="/reset/imgi_66_LAVORAMA-CUTE-MODEL-3-1.png" alt="FAQ Pointing" style={{ position: 'relative', zIndex: 1, maxWidth: '90%', margin: '0 auto' }} />
          </div>
          <div className="text-wrapper">
            <h2 style={{ textAlign: 'left' }}>Frequently Asked<br />Question</h2>
            <div className="faq-list">
              {[
                "How To Keep My Whites So White And Bright?",
                "How To Keep My T-shirts Smelling Fresh?",
                "How To Keep My Color Clothes From Fading?"
              ].map((q, idx) => (
                <div key={idx} style={faqOpen === idx ? { background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow)', marginBottom: '1rem' } : {}}>
                  <div 
                    className={`faq-item ${faqOpen === idx ? 'active' : ''}`} 
                    style={faqOpen === idx ? { background: 'var(--secondary)' } : {}}
                    onClick={() => setFaqOpen(faqOpen === idx ? -1 : idx)}
                  >
                    <span>{q}</span>
                    <span>{faqOpen === idx ? '−' : '+'}</span>
                  </div>
                  {faqOpen === idx && (
                    <div style={{ padding: '1rem 2rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Washing Machines Slider */}
      <section className="section">
        <div className="container">
          <div className="machines-grid">
            <img src="/reset/imgi_19_LAVORAMA-SLIDER1.png" alt="Washing Machine 1" />
            <img src="/reset/imgi_20_LAVORAMA-SLIDER2.png" alt="Washing Machine 2" />
            <img src="/reset/imgi_18_LAVORAMA-SLIDER3.png" alt="Washing Machine 3" />
          </div>
        </div>
      </section>

      {/* 9. Newsletter Section */}
      <section className="section bg-teal" style={{ padding: 0, overflow: 'visible' }}>
        <div className="container two-col-section" style={{ alignItems: 'center' }}>
          <div className="image-wrapper" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
            <img src="/reset/imgi_41_s2-300x291.png" style={{ position: 'absolute', top: '10%', left: '0%', width: '300px', zIndex: 0, opacity: 0.2, filter: 'brightness(0) invert(1)' }} alt="Splash" />
            <img src="/reset/imgi_24_lavorama-model-cute-.png" alt="Newsletter Model" style={{ maxHeight: '400px', position: 'relative', zIndex: 1 }} />
          </div>
          <div className="text-wrapper" style={{ padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '2.5rem', color: 'white' }}>Join Our<br />Newsletter</h2>
            <p style={{ color: 'white', fontWeight: 400, fontSize: '0.9rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
              <input type="email" placeholder="Your Email Here" required />
              <button type="submit" className="btn btn-orange">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ paddingRight: '2rem' }}>
              <img src="/reset/imgi_67_lavorama-log-1-300x87.jpg" alt="Lavorama Logo" className="footer-logo" />
              <p style={{ fontSize: '0.85rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Further Links</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'transparent' }}>Contact Info</h4>
              <ul className="footer-contact footer-links">
                <li><span style={{ color: 'var(--primary)' }}>📍</span> <span style={{ fontSize: '0.9rem' }}>123 Clean Street, NY 10001</span></li>
                <li><span style={{ color: 'var(--primary)' }}>📞</span> <span style={{ fontSize: '0.9rem' }}>+1 (555) 123-4567</span></li>
                <li><span style={{ color: 'var(--primary)' }}>✉️</span> <span style={{ fontSize: '0.9rem' }}>hello@lavorama.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
