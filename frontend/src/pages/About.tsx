function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Klinik True Health</h1>
          <p>Redefining Healthcare Excellence in Kota Damansara</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#0f172a', fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Our Story</h2>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                Klinik True Health Kota Damansara was established with an unwavering commitment to democratize healthcare access. 
                Founded on the principle that quality medical care should transcend socio-economic barriers, we've cultivated 
                a practice that seamlessly blends clinical excellence with compassionate patient care.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#64748b' }}>
                Strategically located in the vibrant heart of Kota Damansara at I-Residence, our modern facility represents 
                more than a medical practice—it's a testament to our vision of healthcare transformation. We've meticulously 
                designed every aspect of our clinic to provide a welcoming, state-of-the-art environment where patients feel 
                valued, understood, and empowered in their health journey.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#64748b' }}>
                Our distinctive approach integrates evidence-based medicine with comprehensive patient education, enabling 
                individuals to become active participants in their wellness. We don't just treat symptoms—we partner with 
                our patients to achieve sustainable, long-term health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ backgroundColor: '#f8fafc', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700' }}>Our Mission</h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8' }}>
                To deliver exceptional, cost-effective medical solutions while maintaining uncompromising standards of care. 
                We are dedicated to providing comprehensive, accessible healthcare services that enhance community well-being, 
                ensuring every individual receives the quality care they deserve.
              </p>
            </div>
            <div style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
              <h3 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700' }}>Our Vision</h3>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8' }}>
                To establish ourselves as the most trusted and innovative healthcare institution in Kota Damansara, 
                setting benchmarks for patient-centered care, medical excellence, and affordable healthcare delivery. 
                We envision a future where quality healthcare is a universal right, not a privilege.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ backgroundColor: 'white', padding: '2.5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: '700', color: '#0f172a' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" fill="#10b981" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>Compassion</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#64748b' }}>We treat every patient with empathy, kindness, and respect.</p>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" fill="#10b981" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>Excellence</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#64748b' }}>We uphold the highest standards in medical care and service.</p>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" fill="#10b981" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>Integrity</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#64748b' }}>We maintain ethical standards and transparent communication.</p>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" fill="#10b981" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>Innovation</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#64748b' }}>We embrace modern medical technologies and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ backgroundColor: '#f8fafc', padding: '2.5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: '700', color: '#0f172a' }}>Meet Our Doctor</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
              <div style={{ flex: '0 0 280px' }}>
                <img 
                  src="https://static.wixstatic.com/media/16fbea_e5a6305563914a1ea1e09adc7bd1dbc2~mv2.jpg/v1/fill/w_376,h_420,al_c,lg_1,q_80,enc_avif,quality_auto/16fbea_e5a6305563914a1ea1e09adc7bd1dbc2~mv2.jpg" 
                  alt="Dr. Denesh Revin" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '4px'
                  }}
                />
              </div>
              <div style={{ flex: '1', minWidth: '350px' }}>
                <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: '700' }}>Dr. Denesh Revin, MD</h3>
                <p style={{ fontWeight: '600', color: '#10b981', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Lead Doctor & Co-Founder</p>
                <div style={{ fontSize: '1rem', lineHeight: '1.8', color: '#64748b' }}>
                  <p style={{ marginBottom: '1rem' }}>
                    Dr. Denesh Revin, the visionary founder of Klinik True Health Kota Damansara, 
                    exemplifies a commitment to transforming healthcare delivery through patient education 
                    and holistic understanding. His practice philosophy transcends conventional symptom management, 
                    focusing on empowering patients with knowledge and personalized care strategies.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    With an innovative, patient-centered approach, Dr. Revin emphasizes comprehensive wellness. 
                    He creates a therapeutic environment where patients feel safe, respected, and actively engaged 
                    in their health journey.
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    Dr. Revin's dedication stems from a commitment to healthcare equity—ensuring exceptional medical 
                    care remains accessible to all Malaysians, regardless of socio-economic background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Clinics Section */}
      <section style={{ backgroundColor: 'white', padding: '2.5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', fontWeight: '700', color: '#0f172a' }}>Panel Clinic Services</h2>
          <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.05rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Klinik True Health Kota Damansara is proud to be a panel clinic of the following insurance providers and healthcare programs
          </p>
          
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Panel Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* AIA */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                <img src="/images/panels/aia logo.png" alt="AIA" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* PM Care */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/pm care.jpg" alt="PM Care" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* MEDKAD */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/medkad logo.jpg" alt="MEDKAD" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* HealthMetrics */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/healthmetrics logo.png" alt="HealthMetrics" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* G-Flex */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/g-flex logo.png" alt="G-Flex" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* PERKESO */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/perkeso logo.png" alt="PERKESO" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* PeKa B40 */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/peka b40 logo.png" alt="PeKa B40" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* Health Connect */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/health_connect logo.png" alt="Health Connect" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* Red Alert Online */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/red_alert logo.png" alt="Red Alert Online" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* SelCare */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/selcare.png" alt="SelCare" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* MIYA */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/miya.png" alt="MIYA" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* WeCare */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/wecare.png" alt="WeCare" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* Mednefits */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/mednefits.png" alt="Mednefits" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
              
              {/* Iltizam Selangor Sihat */}
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/images/panels/iltizam-selangor-sihat.png" alt="Iltizam Selangor Sihat" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
            </div>
            
            {/* Call to Action */}
            <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#334155', fontWeight: '600' }}>
                Verify Your Panel Eligibility
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: '#64748b' }}>
                Contact us to confirm if your insurance or corporate panel is accepted
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.95rem', color: '#64748b' }}>
                <div>
                  WhatsApp: <a href="https://wa.me/601126133870" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '600' }}>+6011 2613 3870</a>
                </div>
                <div>
                  Phone: <a href="tel:+60376133870" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '600' }}>03-7613 3870</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
