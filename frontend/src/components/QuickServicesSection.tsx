import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { title: 'Family Medicine', description: 'General consultations for all ages - Family & Paediatrics friendly' },
  { title: 'Health Screening', description: 'Blood tests, urine tests, ECG, and comprehensive health checks' },
  { title: 'Immunization', description: 'Vaccinations for children and adults, including travel vaccines' },
  { title: 'Men\'s Health', description: 'ED, low libido, fatigue treatment - confidential consultations' },
  { title: 'Sexual Health', description: 'STD testing and treatment in a safe, judgment-free environment' },
  { title: 'Mental Health', description: 'Mental wellness support and counseling services' }
];

const QuickServicesSection = memo(() => {
  return (
    <section className="quick-services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive medical services designed to meet all your healthcare needs.</p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
});

QuickServicesSection.displayName = 'QuickServicesSection';

export default QuickServicesSection;
