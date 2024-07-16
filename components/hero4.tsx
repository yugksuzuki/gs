'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image, { ImageProps } from 'next/image';

interface HeroImageProps {
  src: ImageProps['src'];
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(event.currentTarget, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(event.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <div
      style={{ position: 'relative', width: '150%', height: '150%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="contain"
        width={3000}
        height={900}
        className="hero-image"
      />
    </div>
  );
};

export function Hero4(): JSX.Element {
  return (
    <div className="absolute inset-0 flex items-center justify-center mb-40 mt-0">
      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <div className="flex flex-col items-center -space-y-56">
          <HeroImage src="/hero04.svg" alt="Hero 4" />
        </div>
      </div>
    </div>
  );
}
