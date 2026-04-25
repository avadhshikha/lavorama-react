import React from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

export default function Terms() {
  const { lang } = useLang();
  
  return (
    <>
      <Navbar active="/terms" />
      <section className="section bg-light" style={{ padding: '8rem 0 4rem', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
          <h1 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '2rem' }}>
            {lang === 'fr' ? 'Conditions générales' : 'Terms & Conditions'}
          </h1>
          <p>
            {lang === 'fr' 
              ? 'Bienvenue sur Lavorama. Ces conditions générales définissent les règles d\'utilisation de nos services de laverie libre-service et de ramassage & livraison à Genève.'
              : 'Welcome to Lavorama. These terms and conditions outline the rules and regulations for the use of our self-service laundromat and pickup & delivery services in Geneva.'}
          </p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Fredoka', color: 'var(--secondary)' }}>
            {lang === 'fr' ? '1. Services' : '1. Services'}
          </h3>
          <p>
            {lang === 'fr'
              ? 'Nous fournissons des services de blanchisserie de haute qualité. Bien que nous prenions le plus grand soin de vos vêtements, nous ne pouvons être tenus responsables des dommages causés par une usure normale, des faiblesses inhérentes aux matériaux ou des articles laissés dans les poches.'
              : 'We provide high-quality laundry services. While we take the utmost care of your garments, we cannot be held responsible for damage resulting from normal wear and tear, inherent weaknesses in materials, or items left in pockets.'}
          </p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Fredoka', color: 'var(--secondary)' }}>
            {lang === 'fr' ? '2. Tarification et Paiement' : '2. Pricing and Payment'}
          </h3>
          <p>
            {lang === 'fr'
              ? 'Tous les prix sont en CHF. Le paiement des services de ramassage doit être effectué avant ou au moment de la livraison. Les services en libre-service doivent être payés au terminal sur place.'
              : 'All prices are in CHF. Payment for pickup services must be completed before or at the time of delivery. Self-service facilities must be paid at the on-site terminal.'}
          </p>
          <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#666' }}>
            {lang === 'fr' ? 'Dernière mise à jour : Octobre 2023' : 'Last updated: October 2023'}
          </p>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
