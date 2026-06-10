"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinary";

export function RightSidebar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="md:fixed right-0 top-0 bottom-0 w-[100px] z-50 flex flex-col items-center pt-4 transition-all duration-500"
      style={{
        backgroundColor: scrollPercentage >= 50 ? "#FFFFFF" : "#2F557F", // Change color on scroll
      }}
    >
      <div className="relative w-full h-[150px] transition-all duration-500">
        {/* Change Logo on Scroll */}
        {scrollPercentage < 50 ? (
          <Image
            src={cloudinaryImage(
              "https://res.cloudinary.com/dgbrwewiy/image/upload/v1781099534/logo_acbnjh.png"
            )}
            alt="SDA Logo"
            layout="fill"
            objectFit="contain"
            className="transition-opacity duration-500 opacity-100"
          />
        ) : (
          <Image
            src={cloudinaryImage(
              "https://res.cloudinary.com/dgbrwewiy/image/upload/v1781099533/logo_2_gy1gxj.png"
            )}
            alt="SDA Logo"
            layout="fill"
            objectFit="contain"
            className="transition-opacity duration-500 opacity-100"
          />
        )}
      </div>
    </div>
  );
}
