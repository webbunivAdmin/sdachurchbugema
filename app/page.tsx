"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MainNav } from "@/components/main-nav";
import { HeroCarousel } from "@/components/hero-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="md:pr-[100px]">
        
        <MainNav />
        <HeroCarousel />

        {/* Rest of the existing page content remains exactly the same */}
        {/* Mission Statement Section */}
        <section className="py-16 bg-white">
          {/* ... existing content ... */}
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          {/* ... existing content ... */}
        </section>

        {/* Weekly Sermons Section */}
        <section className="relative py-24">
          {/* ... existing content ... */}
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-white">
          {/* ... existing content ... */}
        </section>
        
      </div>
    </main>
  );
}
