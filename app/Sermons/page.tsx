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
              category={""} videoId={""}            />
          ))}
        </section>
      )}
      
    </main>
  );
}
