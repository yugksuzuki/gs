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
    <div className="relative w-full h-full">
      <div
        style={{ position: 'relative', width: '200%', height: '200%' }}
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
    </div>
  );
};

export function Hero3(): JSX.Element {
  return (
    <div className="absolute flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-screen-xl ">
        <div className="flex flex-col items-center -space-y-96 justify-center ml-56">
          <HeroImage src="/hero3.svg" alt="Hero 3" />
          <HeroImage src="/hero4.svg" alt="Hero 4" />
          <HeroImage src="/hero5.svg" alt="Hero 5" />
        </div>
      </div>
    </div>
  );
}
