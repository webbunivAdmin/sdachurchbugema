"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/banner4.jpeg",
  "/banner5.jpeg",
  "/banner1.jpeg",
];

export function HeroCarousel() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative h-screen">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Church gathering ${index + 1}`}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Welcome to
                  <br />
                  <span className="text-highlight">Bugema University</span>
                  <br />
                  Seventh-day Adventist Church
                </h1>
                <p
                  className="text-xl text-white mb-8"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Building Faith, Strengthening Community, Preparing for His
                  Return.
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
