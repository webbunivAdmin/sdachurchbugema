"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface NewsDetailProps {
  params: { slug: string };
}

// This would typically come from an API or database
const getNewsData = (slug: string) => {
  // Mock data - replace with actual data fetching
  return {
    title: slug.split("-").join(" "),
    date: "January 29, 2025",
    category: "CRISIS",
    image: "/_MG_7809.JPG",
    content: `
      <p>The Southern California Conference has been serving as a central hub for providing aid to impacted communities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <h2>Community Response</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    `,
  };
};

export default function NewsDetail({ params }: NewsDetailProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const news = getNewsData(params.slug);

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
            Back to News
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">{news.date}</span>
              <span className="text-sm text-[#2F557F]">{news.category}</span>
            </div>

            <h1
              className="text-4xl font-bold mb-8 capitalize"
              data-aos="fade-up"
            >
              {news.title}
            </h1>

            <div className="relative h-[400px] w-full mb-8" data-aos="fade-up">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content }}
              data-aos="fade-up"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
