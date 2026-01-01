import { Link } from 'react-router-dom';
import Statistics from '../components/Statistics';
import { useState, useEffect } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/Doctor_and_patient_680x_-_Syda_Productions.jpeg',
    '/images/dr_denesh.jpg',
    '/images/images.jpg',
    '/images/images2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: '50%', overflow: 'hidden', zIndex: 1}}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${slide}')`,
                backgroundPosition: slide.includes('dr_denesh') ? 'center -30%' : 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.35), rgba(16, 185, 129, 0.25))'
              }} />
            </div>
          ))}
        </div>
        <div style={{flex: '0 0 55%', padding: '4rem 0 4rem 8%', position: 'relative', zIndex: 4, display: 'flex', alignItems: 'center'}}>
          <div>
            <h1>Klinik True Health<br />Kota Damansara</h1>
            <p>Quality healthcare should be a right, not a privilege. Led by Dr. Denesh Revin, we provide personalized, affordable medical care to the Kota Damansara community.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/601126133870" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Us
              </a>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Panel Clinics Carousel */}
      <section style={{ padding: '3rem 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', overflow: 'hidden' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Our Panel Clinic Partners</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>We accept multiple insurance panels for your convenience</p>
          
          <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Carousel Container */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem',
              animation: 'scroll 30s linear infinite',
              width: 'fit-content'
            }}>
              {/* First set of logos */}
              {[
                { src: '/images/panels/aia logo.png', alt: 'AIA' },
                { src: '/images/panels/pm care.jpg', alt: 'PM Care' },
                { src: '/images/panels/medkad logo.jpg', alt: 'MEDKAD' },
                { src: '/images/panels/healthmetrics logo.png', alt: 'HealthMetrics' },
                { src: '/images/panels/g-flex logo.png', alt: 'G-Flex' },
                { src: '/images/panels/perkeso logo.png', alt: 'PERKESO' },
                { src: '/images/panels/peka b40 logo.png', alt: 'PeKa B40' },
                { src: '/images/panels/health_connect logo.png', alt: 'Health Connect' },
                { src: '/images/panels/red_alert logo.png', alt: 'Red Alert Online' },
                { src: '/images/panels/selcare.png', alt: 'SelCare' },
                { src: '/images/panels/miya.png', alt: 'MIYA' },
                { src: '/images/panels/wecare.png', alt: 'WeCare' },
                { src: '/images/panels/mednefits.png', alt: 'Mednefits' },
                { src: '/images/panels/iltizam-selangor-sihat.png', alt: 'Iltizam Selangor Sihat' }
              ].concat([
                { src: '/images/panels/aia logo.png', alt: 'AIA' },
                { src: '/images/panels/pm care.jpg', alt: 'PM Care' },
                { src: '/images/panels/medkad logo.jpg', alt: 'MEDKAD' },
                { src: '/images/panels/healthmetrics logo.png', alt: 'HealthMetrics' },
                { src: '/images/panels/g-flex logo.png', alt: 'G-Flex' },
                { src: '/images/panels/perkeso logo.png', alt: 'PERKESO' },
                { src: '/images/panels/peka b40 logo.png', alt: 'PeKa B40' },
                { src: '/images/panels/health_connect logo.png', alt: 'Health Connect' },
                { src: '/images/panels/red_alert logo.png', alt: 'Red Alert Online' },
                { src: '/images/panels/selcare.png', alt: 'SelCare' },
                { src: '/images/panels/miya.png', alt: 'MIYA' },
                { src: '/images/panels/wecare.png', alt: 'WeCare' },
                { src: '/images/panels/mednefits.png', alt: 'Mednefits' },
                { src: '/images/panels/iltizam-selangor-sihat.png', alt: 'Iltizam Selangor Sihat' }
              ]).map((panel, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '180px',
                    minHeight: '100px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={panel.src} 
                    alt={panel.alt}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '70px', 
                      objectFit: 'contain',
                      filter: 'grayscale(30%)',
                      transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)';
                      e.currentTarget.parentElement!.style.transform = 'translateY(-4px)';
                      e.currentTarget.parentElement!.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(30%)';
                      e.currentTarget.parentElement!.style.transform = 'translateY(0)';
                      e.currentTarget.parentElement!.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add CSS animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-180px * 14 - 2rem * 14));
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Klinik True Health?</h2>
          <p className="section-subtitle">Experience healthcare that puts you first with our patient-centered approach and commitment to excellence.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">
                <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>
              </div>
              <h3>Affordable Healthcare</h3>
              <p>Quality medical care at accessible prices for the entire community</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3>Experienced Doctor</h3>
              <p>Led by Dr. Denesh Revin, MD - committed to personalized patient care</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
              </div>
              <h3>Panel Clinic</h3>
              <p>We accept multiple insurance panels for your convenience</p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <svg width="48" height="48" fill="#10b981" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
              </div>
              <h3>Personalized Approach</h3>
              <p>Treatment plans tailored to your unique lifestyle and health goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="quick-services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive medical services designed to meet all your healthcare needs.</p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Family Medicine</h3>
              <p>General consultations for all ages - Family & Paediatrics friendly</p>
            </div>
            <div className="service-item">
              <h3>Health Screening</h3>
              <p>Blood tests, urine tests, ECG, and comprehensive health checks</p>
            </div>
            <div className="service-item">
              <h3>Immunization</h3>
              <p>Vaccinations for children and adults, including travel vaccines</p>
            </div>
            <div className="service-item">
              <h3>Men's Health</h3>
              <p>ED, low libido, fatigue treatment - confidential consultations</p>
            </div>
            <div className="service-item">
              <h3>Sexual Health</h3>
              <p>STD testing and treatment in a safe, judgment-free environment</p>
            </div>
            <div className="service-item">
              <h3>Mental Health</h3>
              <p>Mental wellness support and counseling services</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
