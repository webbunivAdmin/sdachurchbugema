"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden md:pr-16">
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
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:ml-10"
              data-aos="fade-up"
            >
              Know About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="relative md:px-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6">ABOUT OUR CHURCH</h3>
              <p className="text-gray-600 mb-8">

                Bugema University is deeply committed to fostering spiritual
                growth and community involvement through its church service
                programs. These services offer students and faculty members the
                opportunity to participate in meaningful worship experiences,
                Bible study groups, and outreach activities. The program
                emphasizes faith-based education, spiritual reflection, and
                service to others, creating a nurturing environment where
                individuals can grow spiritually and develop leadership skills
                for church ministry. By engaging in these services, participants
                not only strengthen their faith but also contribute positively
                to the surrounding community.
              </p>

              <h4 className="text-xl font-bold mb-4">GOVERNANCE</h4>
              <p className="text-gray-600">
                The Church{"'"}s internal governance is representative, with
                executive responsibility and authority assigned to its various
                entities and intuitions.
              </p>
            </div>

            <div
              className="bg-[#2F557F] text-white p-6 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4">Our Beliefs</h3>
              <p className="mb-6">
                Seventh-day Adventist beliefs are meant to permeate your whole
                life. Growing out of scriptures that paint a compelling portrait
                of God, you are invited to explore, experience and know the One
                who desires to make us whole.
              </p>

               <a
                 href="https://www.adventist.org/beliefs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    className="bg-white hover:bg-white/80 text-[#2F557F]"
                  >
                    READ MORE
                  </Button>
                </a>

              <Link href="/our-beliefs">
                
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-5 bg-white">
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

      {/* Mission Vision Method Section */}
      <section className="py-8 my-10 bg-[#2F557F] text-white">
        <div className="container mx-auto px-4 md:px-12">

          <div className="grid md:grid-cols-2 gap-8">

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 20L12 4M12 4L18 10M12 4L6 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                Make disciples of Jesus Christ who live as His loving witnesses
                and proclaim to all people the everlasting gospel of the Three
                Angels{"'"} Messages in preparation for His soon return
              </p>
              <p className="text-sm opacity-75">
                (Matt 28:18-20, Acts 1:8, Rev 14:6-12)
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                In harmony with Bible revelation, Seventh-day Adventists see as
                the climax of God{"'"}s plan the restoration of all His creation
                to full harmony with His perfect will and righteousness.
              </p>

              <p className="text-sm opacity-75">
                (Matt 28:18-20, Acts 1:8, Rev 14:6-12)
              </p>
            </div>

            
          </div>
        </div>
      </section>

      

    </main>
  );
}
