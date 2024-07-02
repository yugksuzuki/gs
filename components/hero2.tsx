import Image from "next/image";
import heromain from "../public/heromain.svg";

export function Hero2() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh', overflow: 'hidden' }}>
          <Image
            src={heromain}
            alt="heromain"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
