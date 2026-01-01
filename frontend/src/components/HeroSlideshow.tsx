import { memo } from 'react';

interface HeroSlideshowProps {
  slides: string[];
  currentSlide: number;
}

const HeroSlideshow = memo(({ slides, currentSlide }: HeroSlideshowProps) => {
  return (
    <div style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: '50%', overflow: 'hidden', zIndex: 1}}>
      {slides.map((slide, index) => (
        <div
          key={slide}
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
  );
});

HeroSlideshow.displayName = 'HeroSlideshow';

export default HeroSlideshow;
