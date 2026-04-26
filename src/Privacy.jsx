import React from 'react';
import { Navbar, PageFooter } from './components.jsx';
import { useLang } from './LangContext.jsx';

export default function Privacy() {
  const { lang } = useLang();
  
  return (
    <>
      <Navbar active="/privacy" />
      <section className="section bg-light" style={{ padding: '8rem 0 4rem', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '800px', background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 4px 20px rgba(108,191,191,0.1)' }}>
          <h1 style={{ fontFamily: 'Fredoka', color: 'var(--primary)', marginBottom: '2rem' }}>
            {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          <p>
            {lang === 'fr' 
              ? 'Chez Lavorama, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.'
              : 'At Lavorama, we respect your privacy and are committed to protecting your personal data.'}
          </p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Fredoka', color: 'var(--secondary)' }}>
            {lang === 'fr' ? 'Collecte de données' : 'Data Collection'}
          </h3>
          <p>
            {lang === 'fr'
              ? 'Nous collectons uniquement les informations nécessaires pour fournir nos services (nom, numéro de téléphone, e-mail).'
              : 'We only collect the information necessary to provide our services (name, phone number, email).'}
          </p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Fredoka', color: 'var(--secondary)' }}>
            {lang === 'fr' ? 'Utilisation des données' : 'Data Usage'}
          </h3>
          <p>
            {lang === 'fr'
              ? 'Vos données ne sont utilisées que pour le traitement des commandes et le service client. Nous ne vendons ni ne partageons vos données avec des tiers à des fins de marketing.'
              : 'Your data is used solely for order processing and customer service. We do not sell or share your data with third parties for marketing purposes.'}
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
