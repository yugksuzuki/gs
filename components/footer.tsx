'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import footer from "../public/footer.svg";

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerElement = footerRef.current;

    if (footerElement) {
      gsap.fromTo(
        footerElement,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );

      const handleMouseEnter = () => {
        gsap.to(footerElement, { scale: 1.1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(footerElement, { scale: 1, duration: 0.3 });
      };

      footerElement.addEventListener("mouseenter", handleMouseEnter);
      footerElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        footerElement.removeEventListener("mouseenter", handleMouseEnter);
        footerElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <footer className="mt-auto">
      <div className="w-[134px] mx-auto" ref={footerRef}>
        <Image
          src={footer}
          alt="footer"
          width={134}
          height={5}
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
}
