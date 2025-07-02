"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface EventDetailProps {
  params: { slug: string };
}

// This would typically come from an API or database
const getEventData = (slug: string) => {
  // Mock data - replace with actual data fetching
  return {
    title: slug.split("-").join(" "),
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Bugema University SDA Church",
    category: "HEALTHCARE",
    image: "/_MG_7809.JPG",
    content: `
      <p>Join us for this special event where we will be providing free medical and dental care to our community. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h2>Event Details</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>What to Bring</h2>
      <ul>
        <li>Valid ID</li>
        <li>Medical history records (if available)</li>
        <li>Current medication list</li>
      </ul>
    `,
  };
};

export default function EventDetail({ params }: EventDetailProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const event = getEventData(params.slug);

  return (
    <main className="min-h-screen overflow-hidden pr-16">
      <MainNav />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">{event.date}</span>
              <span className="text-sm text-[#2F557F]">{event.category}</span>
            </div>

            <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
              {event.title}
            </h1>

            <div className="relative h-[400px] w-full mb-8" data-aos="fade-up">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8" data-aos="fade-up">
              <div className="flex items-start gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#2F557F]" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#2F557F]" />
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: event.content }}
              data-aos="fade-up"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
