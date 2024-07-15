// @ts-ignore
'use client'; // Marca o arquivo como um Client Component
import { useRef } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter de next/navigation
import { gsap } from "gsap";
import Image from "next/image";
import logoIcon from "../public/logoIcon.svg";

export function LogoIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/pag2');
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="relative w-full max-w-[150px] md:max-w-[100px] lg:max-w-[250px]">
        <div
          ref={containerRef}
          className="absolute inset-0 flex items-center justify-center object-contain -mt-20 cursor-pointer"
          onMouseEnter={() => gsap.to(containerRef.current, { scale: 1.1, duration: 0.3, ease: "power2.out" })}
          onMouseLeave={() => gsap.to(containerRef.current, { scale: 1, duration: 0.3, ease: "power2.out" })}
          onClick={handleClick}
        >
          <Image
            src={logoIcon}
            alt="logoIcon"
            layout="responsive"
            width={100}
            height={20}
          />
        </div>
      </div>
    </section>
  );
}
