"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { NewsCard } from "@/components/news-card";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventsCard } from "@/components/events";
import { FaFacebookSquare } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

export default function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden md:pr-16">
      <MainNav />

      {/* Featured News */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/_MG_7809.JPG"
                alt="Southern California Conference Mobilizes"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/70 mb-6 md:ml-10"
                  data-aos="fade-up"
                >
                  News & Events
                </h1>
                <p
                  className="text-base md:text-xl lg:text-2xl text-white/70 mb-6 md:ml-10"
                  data-aos="fade-up"
                >
                  Explore all the latest news and events of our church
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 mb-10 flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center">
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">March 13, 2025</span>
              <span className="text-sm text-primary">CRISIS</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              North Buganda Conference Moves Quickly to Mobilize Outreach as
              Wildfires Descend
            </h1>
            <p className="text-gray-600 mb-6">
              The Southern California Conference has been serving as a central
              hub for providing aid to impacted communities.
            </p>
            <Link href="/news/north-buganda">
              <Button className="w-fit">Read More</Button>
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">January 29, 2025</span>
              <span className="text-sm text-primary">CRISIS</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Southern California Conference Moves Quickly to Mobilize Outreach
              as Wildfires Descend
            </h1>
            <p className="text-gray-600 mb-6">
              The Southern California Conference has been serving as a central
              hub for providing aid to impacted communities.
            </p>
            <Link href="/news/southern-california">
              <Button className="w-fit">Read More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-8 md:px-8 bg-[#2F557F]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Latest videos</h2>
            <Link
              href="/videos"
              className="text-white flex items-center gap-2 hover:text-gray-300"
            >
              Watch more videos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <VideoCard
              title="ANN Video Full Episode - January 24, 2025"
              image="/_MG_2211.JPG"
              date="January 24, 2025"
              category="ANN ENGLISH"
            />
            <VideoCard
              title="Exploring Church Discipline in the Adventist Church Manual | ANN In-Depth"
              image="/_MG_2240.JPG"
              date="January 27, 2025"
              category="ANN IN-DEPTH"
            />
            <VideoCard
              title="The Great Controversy Chapter 39: The Time of Trouble"
              image="/_MG_2211.JPG"
              date="January 24, 2025"
              category="NOTEWORTHY VIDEOS"
            />
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-10 md:px-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Healthcare</h3>
              <EventsCard
                title="Belém Adventist Hospital Celebrates Renewal of Qmentum Diamond Seal"
                image="/_MG_7809.JPG"
                date="January 29, 2025"
                category="HEALTHCARE"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Humanitarian</h3>
              <EventsCard
                title="Southern California Conference Moves Quickly to Mobilize Outreach."
                image="/ABOUT SDAC.JPG"
                date="January 29, 2025"
                category="CRISIS"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Mission</h3>
              <EventsCard
                title="Adventist Organizations Offers Free Medical and Dental Care in Philippine City"
                image="/_MG_7809.JPG"
                date="January 28, 2025"
                category="MISSION"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-10 md:px-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Belém Adventist Hospital Celebrates Renewal of Qmentum Diamond Seal"
              image="/ABOUT SDAC.JPG"
              date="January 29, 2025"
              category="HEALTHCARE"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
            <NewsCard
              title="ADRA Steps Up Relief Efforts Amid Severe Flooding in Brazil"
              image="/_MG_7809.JPG"
              date="January 28, 2025"
              category="HUMANITARIAN"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
            <NewsCard
              title="Loma Linda University Medical Center Empowers New Mothers"
              image="/ABOUT SDAC.JPG"
              date="January 27, 2025"
              category="HEALTHCARE"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up">
              <Image
                src="/logo.png"
                alt="Church Logo"
                width={200}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-400">
                SEVENTH-DAY ADVENTIST CHURCH <br /> BUGEMA UNIVERSITY
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-400">P.O Box 6529 </p>
              <p className="text-gray-400">kampala Uganda,</p>
              <p className="text-gray-400">32km Gayaza - Zirobwe Rd —</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-4">Say hello</h3>
              <p className="text-gray-400 underline mb-2">
                infosdacbugeamauniversity@bugemauniv.ac.ug
              </p>
              <p className="text-gray-400">+256 772 517374</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 mb-4 md:mb-0" data-aos="fade-up">
              <Link href="#" className="text-gray-400 hover:text-white">
                Our beliefs
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contacts
              </Link>
            </div>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebookSquare className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <PiTiktokLogoBold className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <p
            className="text-center text-gray-400 mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            © 2025. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
