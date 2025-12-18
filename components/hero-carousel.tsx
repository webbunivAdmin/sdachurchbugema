"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    src: "/CAMPMEETING.jpg",
    badge: "ON GOING",
    title: "Bugema A DISTRICT",
    subtitle: "CAMPMEETING",
    description: "I WILL GO MAKING DISCIPLES OF JESUS CHRIST",
    cta: "CLICK TO VIEW PROGRAM",
  },
  {
    src: "/_MG_2211.JPG",
    badge: "Experience",
    title: "Worship & Fellowship",
    subtitle: "United in Christ",
    description: "A family that prays together grows together.",
    cta: "Be Part of Us",
  },
  {
    src: "/_MG_2240.JPG",
    badge: "Discover",
    title: "Faith in Action",
    subtitle: "Serving with Love",
    description: "Living the gospel through service and compassion.",
    cta: "Get Involved",
  },
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
    <section className="relative min-h-screen pt-5 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={`Church gathering ${index + 1}`}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12">
              <div className="container mx-auto flex flex-col gap-2">
                <div
                  className="text-sm sm:text-lg lg:text-2xl font-bold bg-gray-400 p-2 text-white/90 mb-4 rounded-full w-fit px-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.badge}
                </div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F557F] mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.title}
                </div>
                <div
                  className="text-2xl sm:text-4xl lg:text-[50px] font-bold text-white/80 mb-10 max-w-[850px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </div>
                <p
                  className="text-[22px] text-white/80 mb-8 max-w-[700px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {slide.description}
                </p>
              </div>
              <div className="px-8 lg:px-10">
                <Button
                  className="bg-[#2F557F] hover:bg-[#2F557F] text-white text-lg rounded-full px-[50px] py-5"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a href="/Bugema A camp meeting programe.pdf" target="_blank"
              rel="noopener noreferrer">{slide.cta}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
