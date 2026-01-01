import { memo } from 'react';

interface PanelCarouselProps {
  panels: Array<{ src: string; alt: string }>;
}

const PanelCarousel = memo(({ panels }: PanelCarouselProps) => {
  // Duplicate panels for seamless loop
  const allPanels = [...panels, ...panels];

  return (
    <section style={{ padding: '3rem 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Our Panel Clinic Partners</h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>We accept multiple insurance panels for your convenience</p>
        
        <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            gap: '2rem',
            animation: 'scroll 30s linear infinite',
            width: 'fit-content'
          }}>
            {allPanels.map((panel, index) => (
              <div 
                key={`${panel.alt}-${index}`}
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
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-180px * 14 - 2rem * 14)); }
        }
      `}</style>
    </section>
  );
});

PanelCarousel.displayName = 'PanelCarousel';

export default PanelCarousel;
