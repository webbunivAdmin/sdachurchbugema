"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookSquare } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

export default function SermonsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("documents");

  const sermons = [
    {
      title: "The Power of Faith",
      file: "/sermons/the-power-of-faith.pdf",
    },
    {
      title: "Walking with God",
      file: "/sermons/walking-with-god.pdf",
    },
    {
      title: "Walking with God",
      file: "/sermons/walking-with-god.pdf",
    },
  ];

  const videos = [
    {
      title: "Finding Strength in Prayer",
      image: "/sermons/prayer.jpg",
      date: "March 25, 2025",
      videoId: "5MBOnP2TEO4",
    },
    {
      title: "Overcoming Fear with Faith",
      image: "/sermons/faith.jpg",
      date: "March 20, 2025",
      videoId: "BgmmBcbuKJA",
    },
    {
      title: "Overcoming Fear with Faith",
      image: "/sermons/faith.jpg",
      date: "March 20, 2025",
      videoId: "BgmmBcbuKJA",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <MainNav />
      <h1 className="text-4xl font-bold text-center mb-6">Sermons</h1>
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
                SERMONS
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

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6, mt-4 ">
        <Button
          onClick={() => setActiveTab("documents")}
          className={
            activeTab === "documents" ? "#2F557F text-white" : "bg-gray-300"
          }
        >
          Documents
        </Button>
        <Button
          onClick={() => setActiveTab("videos")}
          className={
            activeTab === "videos" ? "#2F557F text-white" : "bg-gray-300"
          }
        >
          Videos
        </Button>
      </div>

      {/* Sermons List */}
      {activeTab === "documents" ? (
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-4">
          {sermons.map((sermon, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>
              <Link
                href={sermon.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Read Sermon
                </Button>
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              image={video.image}
              date={video.date}
              category={""}
            />
          ))}
        </section>
      )}
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
