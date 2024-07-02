'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../public/icon.svg";

export function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full relative h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 bg-transparent">
      <div className="flex justify-between items-center h-full px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <div className="relative w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32">
          <span className="text-white font-time text-2xl">
            {currentTime}
          </span>
        </div>

        <div className="flex-grow"></div>

        <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
          <Image
            src={Icon}
            alt="icon"
            layout="responsive"
            width={66.66}
            height={11.35}
          />
        </div>
      </div>
    </header>
  );
}
