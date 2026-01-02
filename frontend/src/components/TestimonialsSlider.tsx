import { memo, useState, useEffect } from 'react';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

// Placeholder reviews - Replace with actual Google Reviews API data
const REVIEWS: Review[] = [
  {
    author: "Sarah Johnson",
    rating: 5,
    text: "Dr. Denesh is exceptional! Very thorough and takes time to explain everything. The clinic is clean and the staff are friendly. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    author: "Ahmad Rahman",
    rating: 5,
    text: "Best clinic in Kota Damansara! Affordable prices and excellent service. The panel clinic system makes it so convenient for insurance claims.",
    date: "1 month ago"
  },
  {
    author: "Lisa Tan",
    rating: 5,
    text: "Very professional and caring doctor. He listens to all my concerns and provides clear explanations. Easy to book appointments via WhatsApp too!",
    date: "3 weeks ago"
  },
  {
    author: "Kumar Raj",
    rating: 5,
    text: "Excellent medical care at reasonable prices. Dr. Denesh is knowledgeable and friendly. The clinic is well-maintained and hygienic.",
    date: "1 week ago"
  },
  {
    author: "Michelle Wong",
    rating: 5,
    text: "Highly recommend this clinic! Very patient-centered approach. Dr. Denesh takes time to understand your health concerns and provides personalized care.",
    date: "2 months ago"
  }
];

interface TestimonialsSliderProps {
  reviews?: Review[];
}

const TestimonialsSlider = memo(({ reviews = REVIEWS }: TestimonialsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? "#fbbf24" : "#e5e7eb"}
        style={{ display: 'inline-block' }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  return (
    <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Real reviews from our valued patients</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google"
              style={{ height: '20px' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>5.0</span>
              <div>{renderStars(5)}</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Review Cards */}
          <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
            <div style={{ 
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  style={{ 
                    minWidth: '100%',
                    padding: '0 1rem'
                  }}
                >
                  <div style={{
                    background: 'white',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.25rem',
                          fontWeight: '600'
                        }}>
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', margin: 0 }}>
                            {review.author}
                          </h4>
                          <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div>{renderStars(review.rating)}</div>
                    </div>

                    {/* Review Text */}
                    <p style={{ 
                      fontSize: '1.05rem', 
                      lineHeight: '1.7', 
                      color: '#334155',
                      margin: 0,
                      flex: 1
                    }}>
                      "{review.text}"
                    </p>

                    {/* Google Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285f4">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Posted on Google</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0f172a">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s',
              zIndex: 10
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0f172a">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            marginTop: '2rem' 
          }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: currentIndex === index ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: currentIndex === index ? '#10b981' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                border: '2px solid #10b981',
                borderRadius: '8px',
                color: '#10b981',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#10b981';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#10b981';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Leave us a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsSlider.displayName = 'TestimonialsSlider';

export default TestimonialsSlider;
