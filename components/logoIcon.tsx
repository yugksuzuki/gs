'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import logoIcon from "../public/logoIcon.svg";

export function LogoIcon() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    gsap.fromTo(
      imageElement,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    const handleMouseEnter = () => {
      gsap.to(imageElement, { scale: 1.1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(imageElement, { scale: 1, duration: 0.3 });
    };

    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageElement.removeEventListener("mouseenter", handleMouseEnter);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            ref={imageRef}
            src={logoIcon}
            alt="logoIcon"
            layout="responsive"
            width={300}
            height={40}
            className="object-contain -mt-20 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
