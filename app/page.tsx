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
          <Image
            src="/WEELKLY SERMON BG.jpg"
            alt="Prayer background"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative container mx-auto">
            <div className="max-w-lg" data-aos="fade-up">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-white mb-4">
                A Word From God
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Weekly <span className="text-highlight">Sermons</span>
              </h2>
              <p className="text-white mb-6">
                We worship God by remembering the gospel through preaching,
                teaching, singing, praying and celebrating baptism and
                communion.
              </p>
              <Link href="/Sermons">
                <Button className="bg-[#2F557F] hover:bg-[#3a6699]">All Sermons</Button>   
              </Link>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-white">
          {/* ... existing content ... */}
        </section>
        
      </div>
    </main>
  );
}
