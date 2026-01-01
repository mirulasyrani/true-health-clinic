import { memo } from 'react';
import type { ReactElement } from 'react';

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>,
    title: 'Affordable Healthcare',
    description: 'Quality medical care at accessible prices for the entire community'
  },
  {
    icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
    title: 'Experienced Doctor',
    description: 'Led by Dr. Denesh Revin, MD - committed to personalized patient care'
  },
  {
    icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>,
    title: 'Panel Clinic',
    description: 'We accept multiple insurance panels for your convenience'
  },
  {
    icon: <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>,
    title: 'Personalized Approach',
    description: 'Treatment plans tailored to your unique lifestyle and health goals'
  }
];

const FeaturesSection = memo(() => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Klinik True Health?</h2>
        <p className="section-subtitle">Experience healthcare that puts you first with our patient-centered approach and commitment to excellence.</p>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
