import React, { useState } from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

export default function Faq() {
  const { t } = useLang();
  const [faqOpen, setFaqOpen] = useState(null);
  const h = t.home; // We can reuse the FAQs that were previously on the home page

  return (
    <>
      <Navbar active="/faq" />
      <section className="section bg-light" style={{ padding: '8rem 0 4rem', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
            <h1 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              {h.faqTitle}
            </h1>
            
            {h.faqs && h.faqs.length > 0 ? (
              h.faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: i < h.faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                  <div onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Fredoka', color: 'var(--primary)', fontSize: '1.15rem' }}>{faq.q}</span>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>{faqOpen === i ? '−' : '+'}</span>
                  </div>
                  {faqOpen === i && <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: 1.6, color: '#4b5563' }}>{faq.a}</p>}
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#666' }}>No FAQs available at the moment.</p>
            )}
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
