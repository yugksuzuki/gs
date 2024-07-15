import { useEffect } from 'react';
import gsap from 'gsap';

interface HeroImageProps {
  src: string; // Alterei para 'string' para simplificar, você pode ajustar conforme necessário
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  useEffect(() => {
    const images = document.querySelectorAll('.hero-image');

    const handleMouseEnter = (event: MouseEvent) => {
      gsap.to(event.currentTarget, { scale: 1.1, duration: 0.3 });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      gsap.to(event.currentTarget, { scale: 1, duration: 0.3 });
    };

    images.forEach((image) => {
      image.addEventListener('mouseenter', handleMouseEnter);
      image.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('mouseenter', handleMouseEnter);
        image.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="relative w-full h-full mb-4">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={src} alt={alt} className="hero-image" />
      </div>
    </div>
  );
};

export default HeroImage;
