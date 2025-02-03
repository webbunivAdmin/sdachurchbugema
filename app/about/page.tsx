"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden pr-16">
      <MainNav />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[400px] w-full">
          <Image
            src="/ABOUT SDAC.JPG"
            alt="Church background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-primary/10" /> {/* Overlay */}
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Know About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Our Journey and Heritage
          </h2>
          <div
            className="prose prose-lg max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-600 mb-6">
              The Uganda Union Mission of the Seventh-day Adventist Church has a
              deep-rooted legacy that dates back to 1906 when the first
              Adventist missionary, E.C. Enns, entered Uganda from South Nyanza,
              Kenya. Though Enns was the initial contact, it wasn{"'"}t until
              1927 that the Adventist mission officially took root in Uganda.
              Political and religious turbulence delayed its establishment, as
              Adventist missionaries entered a region already divided among
              Anglican, Catholic, and Muslim missionaries. Despite the
              adversity, the Adventist Church stood firm, eventually
              establishing a mission station at Nchwanga in 1927, marking a
              foundational moment in our history.
            </p>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4" data-aos="fade-up">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  Uganda has 5504 congregations. Organised churches are 1689
                  companies 2815. With 544,966 members by March 2024.
                </p>
              </div>

              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  It is recorded that the first Seventh-day Adventist to enter
                  Uganda was E. C. Enns, a German missionary working at Suji in
                  the Pare region of Tanzania (then Tanganyika) who entered the
                  country from South Nyanza, Kenya in 1906. However, work did
                  not begin in Uganda until more than 20 years later, in 1927.
                  This long delay was most likely due to the local prevailing
                  political and religious unrest in the region.
                </p>
              </div>

              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  Adventist missionaries entering Uganda found that it was
                  already zoned among Anglican Protestant missionaries, Catholic
                  missionaries, and Muslims. Accordingly, they were sent to
                  Nchwanga and were expected to fail because they were sent into
                  a disturbed area and the people of this area were naturally
                  suspicious of anything coming from Kampala and Buganda. By
                  providence, Adventists were able to establish a mission
                  station in Nchwanga in the year 1927.
                </p>
              </div>

              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  The Seventh-day Adventist Church was banned by President Idi
                  Amin Dada (1971–1979) between 1977 and 1979, some of its land
                  was confiscated, and the government took over some of its
                  schools, converting them into public schools, which had a
                  negative impact on the Church and its operations in Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
