'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import logoIcon from "../public/logoIcon.svg";

export function LogoIcon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement) {
      const imageElement = containerElement.querySelector("img");

      if (imageElement) {
        const handleMouseEnter = () => {
          gsap.to(imageElement, { scale: 1.1, duration: 0.3, ease: "power2.out" });
          gsap.to(containerElement, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        };

        const handleMouseLeave = () => {
          gsap.to(imageElement, { scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(containerElement, { scale: 1, duration: 0.3, ease: "power2.out" });
        };

        containerElement.addEventListener("mouseenter", handleMouseEnter);
        containerElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          containerElement.removeEventListener("mouseenter", handleMouseEnter);
          containerElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, []);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
        <div
          ref={containerRef}
          className="absolute inset-0 flex items-center justify-center object-contain -mt-20 cursor-pointer"
          onMouseEnter={() => gsap.to(containerRef.current, { scale: 1.1, duration: 0.3, ease: "power2.out" })}
          onMouseLeave={() => gsap.to(containerRef.current, { scale: 1, duration: 0.3, ease: "power2.out" })}
        >
          <Image
            src={logoIcon}
            alt="logoIcon"
            layout="responsive"
            width={300}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
