import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>,
      title: 'Consultation & Treatment',
      description: 'Comprehensive medical consultations for all ages with personalized treatment plans.',
      features: [
        'General check-ups (Family Medicine & Paediatrics)',
        'Acute and chronic illness management',
        'Preventive care and health advice',
        'Medical certificates and reports'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>,
      title: 'Health Screening',
      description: 'Comprehensive health screening packages for early detection and prevention of diseases.',
      features: [
        'Blood test and analysis',
        'Urine test',
        'ECG (Electrocardiogram)',
        'Pre-employment medical screening',
        'Health insurance medical tests'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>,
      title: 'Immunization & Vaccination',
      description: 'Complete vaccination services for children and adults to protect against diseases.',
      features: [
        'Childhood vaccination programs',
        'Adult immunizations',
        'Travel vaccines and consultations',
        'Flu vaccines',
        'COVID-19 vaccinations'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
      title: "Men's Health",
      description: 'Confidential consultations for men\'s health concerns in a comfortable environment.',
      features: [
        'Erectile Dysfunction (ED) treatment',
        'Low libido management',
        'Fatigue and energy issues',
        'Low self-esteem counseling',
        'Hormone health assessment'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: 'Sexual Health',
      description: 'Comprehensive sexual health services in a safe and judgment-free environment.',
      features: [
        'STD testing (confidential)',
        'STD treatment and management',
        'Sexual health counseling',
        'Preventive care education',
        'Partner notification support'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>,
      title: 'Mental Health',
      description: 'Mental wellness support and counseling for better emotional and psychological health.',
      features: [
        'Mental health consultations',
        'Stress and anxiety management',
        'Depression support',
        'Counseling services',
        'Referrals to specialists when needed'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>,
      title: 'Wound Care',
      description: 'Professional wound management and treatment to promote proper healing.',
      features: [
        'Wound cleaning and dressing',
        'Suturing for cuts and lacerations',
        'Burn treatment',
        'Abscess drainage',
        'Post-surgical wound care'
      ]
    },
    {
      icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>,
      title: 'Panel Clinic Services',
      description: 'We are proud to be a panel clinic for various insurance companies and corporations.',
      features: [
        'Corporate health packages',
        'Insurance panel services',
        'Pre-employment medicals',
        'Annual staff screenings',
        'Medical reports for insurance'
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive healthcare solutions for you and your family</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-detailed" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {services.map((service, index) => (
              <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: '1.6' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative', lineHeight: '1.5' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#10b981' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>Need Medical Assistance?</h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', marginBottom: '2rem' }}>Book an appointment with us today</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
