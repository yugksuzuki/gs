import gsap from 'gsap';

interface HeroImageProps {
  src: string; // Ajuste conforme necessário
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <div className="relative w-full h-full mb-4">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={src} alt={alt} className="hero-image" />
        <div
          className="absolute inset-0 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
    </div>
  );
};

export default HeroImage;
