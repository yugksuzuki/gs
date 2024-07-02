'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import hero3 from '../public/hero3.svg';
import hero4 from '../public/hero4.svg';
import hero5 from '../public/hero5.svg';

interface HeroImageProps {
  src: StaticImageData;
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
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          objectFit="cover"
          width={3000}
          height={200}
          className="hero-image"
        />
      </div>
    </div>
  );
};

export function Hero3(): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <HeroImage src={hero3} alt="Hero 3" />
          <HeroImage src={hero4} alt="Hero 4" />
          <HeroImage src={hero5} alt="Hero 5" />
        </div>
      </div>
    </div>
  );
}
